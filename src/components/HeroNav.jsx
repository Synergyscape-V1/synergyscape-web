import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import synergyScapeLogo from '@/assets/synergy-scape-logo-cropped.png';
import { CAREERS_HREF } from '@/constants/externalLinks';

const NAV_ITEMS = ['PRODUCTS', 'BLOGS', 'CONTACT US', 'CAREERS'];
const PRODUCTS_MENU_ITEMS = [
  { label: 'SKELDIR', href: 'https://www.skeldir.com' },
];
const MOBILE_BP = 900;

function useIsMobile() {
  const getIsMobileLike = () => {
    if (typeof window === 'undefined') return false;
    const width = window.innerWidth;
    const coarsePointer = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    return width < MOBILE_BP || coarsePointer;
  };
  const [mobile, setMobile] = useState(getIsMobileLike);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BP - 1}px)`);
    const pointerMq = window.matchMedia('(hover: none) and (pointer: coarse)');
    const handler = () => setMobile(getIsMobileLike());
    const onResize = () => setMobile(getIsMobileLike());

    // Cross-browser listener support (including older Safari variants)
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', handler);
    } else if (typeof mq.addListener === 'function') {
      mq.addListener(handler);
    }
    if (typeof pointerMq.addEventListener === 'function') {
      pointerMq.addEventListener('change', handler);
    } else if (typeof pointerMq.addListener === 'function') {
      pointerMq.addListener(handler);
    }
    window.addEventListener('resize', onResize, { passive: true });
    window.visualViewport?.addEventListener('resize', onResize, { passive: true });

    setMobile(getIsMobileLike());
    return () => {
      if (typeof mq.removeEventListener === 'function') {
        mq.removeEventListener('change', handler);
      } else if (typeof mq.removeListener === 'function') {
        mq.removeListener(handler);
      }
      if (typeof pointerMq.removeEventListener === 'function') {
        pointerMq.removeEventListener('change', handler);
      } else if (typeof pointerMq.removeListener === 'function') {
        pointerMq.removeListener(handler);
      }
      window.removeEventListener('resize', onResize);
      window.visualViewport?.removeEventListener('resize', onResize);
    };
  }, []);
  return mobile;
}

function HamburgerIcon({ open }) {
  const bar = {
    width: '20px',
    height: '1.5px',
    background: '#E7F0F0',
    transition: 'transform 0.25s ease, opacity 0.2s ease',
    transformOrigin: 'center',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '12px' }}>
      <span style={{ ...bar, transform: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' }} />
      <span style={{ ...bar, opacity: open ? 0 : 1 }} />
      <span style={{ ...bar, transform: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' }} />
    </div>
  );
}

function TrySkeldirButton({ isMobile = false, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href="https://www.skeldir.com"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0',
        minHeight: '44px',
        padding: isMobile ? '12px 14px' : '10px 14px',
        border: '1px solid #3D7878',
        background: hovered
          ? 'linear-gradient(135deg, #3D7878 0%, #2F6767 100%)'
          : 'linear-gradient(135deg, #356E6E 0%, #2A5E5E 100%)',
        clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',
        color: '#FFFFFF',
        textDecoration: 'none',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: '11px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        boxShadow: hovered
          ? '0 8px 24px rgba(41, 104, 104, 0.38), 0 0 0 1px rgba(143,168,168,0.15) inset'
          : '0 4px 16px rgba(20, 35, 35, 0.26), 0 0 0 1px rgba(143,168,168,0.08) inset',
      }}
      aria-label="Try Skeldir"
    >
      <motion.span
        aria-hidden="true"
        animate={{ x: ['-130%', '130%'] }}
        transition={{ duration: 1.8, ease: 'linear', repeat: Infinity, repeatDelay: 0.35 }}
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.26) 50%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>TRY SKELDIR</span>
    </motion.a>
  );
}

export default function HeroNav() {
  const isMobile = useIsMobile();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [lineHeights, setLineHeights] = useState({});
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const linkRefs = useRef({});
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    if (hoveredItem !== null) {
      const el = linkRefs.current[hoveredItem];
      if (el) {
        const rect = el.getBoundingClientRect();
        setLineHeights((prev) => ({ ...prev, [hoveredItem]: rect.top }));
      }
    }
  }, [hoveredItem]);

  useEffect(() => () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openDropdown = useCallback((item) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenMenu(item);
  }, []);

  const closeDropdownWithDelay = useCallback((delay = 220) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setOpenMenu(null), delay);
  }, []);

  const getHref = (item) => {
    if (item === 'CAREERS') return CAREERS_HREF;
    if (item === 'BLOGS') return 'https://skeldir.com/resources';
    if (item === 'CONTACT US') return 'https://skeldir.com/book-demo';
    return '#';
  };

  const handleNavClick = (e, item) => {
    if (item === 'PRODUCTS') {
      e.preventDefault();
      setOpenMenu((prev) => (prev === item ? null : item));
    }
    if (isMobile && item !== 'PRODUCTS') {
      setMobileOpen(false);
    }
  };

  const navLinkStyle = (item, isDrawer = false) => ({
    fontFamily: "'Inter', sans-serif",
    fontWeight: isDrawer ? 500 : 400,
    fontSize: isDrawer ? '13px' : '11px',
    letterSpacing: '0.2em',
    color: hoveredItem === item ? '#FFFFFF' : '#8FA8A8',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    display: 'block',
    padding: isDrawer ? '14px 0' : '2px 0',
    minHeight: isDrawer ? '44px' : undefined,
    lineHeight: isDrawer ? '44px' : undefined,
  });

  /* ── Desktop nav ── */
  const desktopNav = (
    <nav aria-label="Primary navigation" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <ul style={{ display: 'flex', alignItems: 'center', gap: '2.8ch', listStyle: 'none', margin: 0, padding: 0 }}>
        {NAV_ITEMS.map((item) => (
          <li
            key={item}
            style={{ position: 'relative' }}
            onMouseEnter={() => { if (item === 'PRODUCTS') openDropdown(item); }}
            onMouseLeave={() => { if (item === 'PRODUCTS') closeDropdownWithDelay(); }}
          >
            {hoveredItem === item && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: lineHeights[item] || 55, opacity: 1 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                style={{
                  position: 'fixed', top: 0, width: '1px', background: '#3D7878',
                  pointerEvents: 'none', zIndex: 51,
                  left: linkRefs.current[item]
                    ? linkRefs.current[item].getBoundingClientRect().left + linkRefs.current[item].offsetWidth / 2
                    : 0,
                }}
              />
            )}
            <a
              ref={(el) => { linkRefs.current[item] = el; }}
              href={getHref(item)}
              target={item === 'CAREERS' ? '_blank' : undefined}
              rel={item === 'CAREERS' ? 'noopener noreferrer' : undefined}
              onClick={(e) => handleNavClick(e, item)}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              onFocus={() => { if (item === 'PRODUCTS') openDropdown(item); }}
              onBlur={(e) => {
                if (item === 'PRODUCTS' && !e.currentTarget.parentElement?.contains(e.relatedTarget)) {
                  closeDropdownWithDelay(120);
                }
              }}
              style={navLinkStyle(item)}
              aria-label={item}
              aria-expanded={item === 'PRODUCTS' ? openMenu === item : undefined}
              aria-haspopup={item === 'PRODUCTS' ? 'menu' : undefined}
            >
              {item}
            </a>

            {item === 'PRODUCTS' && openMenu === item && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onMouseEnter={() => openDropdown(item)}
                onMouseLeave={() => closeDropdownWithDelay()}
                style={{
                  position: 'absolute', top: 'calc(100% + 14px)', left: '50%',
                  transform: 'translateX(-50%)', minWidth: '220px',
                  background: 'rgba(20, 32, 32, 0.97)', border: '1px solid #2F4E4E',
                  boxShadow: '0 14px 36px rgba(0,0,0,0.36)',
                  backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                  padding: '8px', zIndex: 80,
                }}
                role="menu"
                aria-label="Products submenu"
              >
                {PRODUCTS_MENU_ITEMS.map((mi) => (
                  <a
                    key={mi.label} href={mi.href} target="_blank" rel="noopener noreferrer"
                    role="menuitem" onClick={() => setOpenMenu(null)}
                    style={{
                      display: 'block', padding: '10px 12px',
                      fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '11px',
                      letterSpacing: '0.16em', color: '#E7F0F0', textTransform: 'uppercase',
                      textDecoration: 'none', border: '1px solid transparent',
                      transition: 'background-color 0.18s ease, border-color 0.18s ease',
                      background: 'transparent',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(61,120,120,0.18)'; e.currentTarget.style.borderColor = '#3D7878'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
                  >
                    {mi.label}
                  </a>
                ))}
              </motion.div>
            )}
          </li>
        ))}
      </ul>
      <TrySkeldirButton />
    </nav>
  );

  /* ── Mobile drawer — rendered via portal so position:fixed resolves
       against the viewport, not the transformed motion.header container ── */
  const drawerPortal = createPortal(
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          key="mobile-drawer"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{
            position: 'fixed', top: '55px', left: 0, right: 0, bottom: 0,
            background: 'rgba(20, 32, 32, 0.98)',
            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid #2A3F3F',
            boxShadow: '0 18px 38px rgba(0, 0, 0, 0.32)',
            zIndex: 9999, overflowY: 'auto', WebkitOverflowScrolling: 'touch',
          }}
        >
          <nav aria-label="Mobile navigation" style={{ padding: '24px 28px 48px' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {NAV_ITEMS.map((item, idx) => (
                <li key={item} style={{ borderBottom: '1px solid #2A3F3F' }}>
                  <motion.div
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * idx, duration: 0.3, ease: 'easeOut' }}
                  >
                    <a
                      href={getHref(item)}
                      target={item === 'CAREERS' ? '_blank' : undefined}
                      rel={item === 'CAREERS' ? 'noopener noreferrer' : undefined}
                      onClick={(e) => handleNavClick(e, item)}
                      style={navLinkStyle(item, true)}
                    >
                      {item}
                      {item === 'PRODUCTS' && (
                        <span style={{
                          display: 'inline-block', marginLeft: '8px', fontSize: '10px',
                          transform: openMenu === item ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}>
                          ▾
                        </span>
                      )}
                    </a>

                    {item === 'PRODUCTS' && openMenu === item && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: 'hidden', paddingLeft: '16px', paddingBottom: '8px' }}
                      >
                        {PRODUCTS_MENU_ITEMS.map((mi) => (
                          <a
                            key={mi.label} href={mi.href} target="_blank" rel="noopener noreferrer"
                            onClick={() => { setOpenMenu(null); setMobileOpen(false); }}
                            style={{
                              display: 'block', padding: '12px 0',
                              fontFamily: "'Inter', sans-serif", fontWeight: 500,
                              fontSize: '12px', letterSpacing: '0.16em', color: '#E7F0F0',
                              textTransform: 'uppercase', textDecoration: 'none',
                              minHeight: '44px', lineHeight: '20px',
                            }}
                          >
                            {mi.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '18px' }}>
              <TrySkeldirButton
                isMobile
                onClick={() => { setMobileOpen(false); setOpenMenu(null); }}
              />
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );

  const mobileNav = (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          minWidth: '44px', minHeight: '44px',
        }}
      >
        <HamburgerIcon open={mobileOpen} />
      </button>
      {drawerPortal}
    </>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        boxSizing: 'border-box', height: '55px', paddingBottom: '2px',
        background: 'rgba(28, 43, 43, 0.88)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid #2A3F3F',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingLeft: isMobile ? '16px' : '32px',
        paddingRight: isMobile ? '8px' : '32px',
      }}
    >
      <div style={{ height: '42px', userSelect: 'none', display: 'flex', alignItems: 'center' }}>
        <img
          src={synergyScapeLogo} alt="Synergy Scape" width="119" height="42"
          style={{
            width: 'auto', height: isMobile ? '34px' : '42px',
            objectFit: 'contain', display: 'block', transform: 'translateY(3px)',
          }}
          loading="eager" decoding="async"
        />
      </div>
      {isMobile ? mobileNav : desktopNav}
    </motion.header>
  );
}
