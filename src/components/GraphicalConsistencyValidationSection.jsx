import { motion } from 'framer-motion';

const BG = '#1C2B2B';
const INK = '#FFFFFF';
const MUTED = '#A6BCBC';
const SOFT = '#8FA8A8';
const ACCENT = '#3D7878';
const LINE = '#2A3F3F';

const STEPS = [
  {
    title: 'Probabilistic Hypothesis Modeling:',
    body:
      'Formulating falsifiable AI theses and defining multi-variate test metrics for iterative model design and initial training.',
  },
  {
    title: 'Hardened Core Engineering:',
    body:
      'Converting validated models into low-latency, resilient, and deterministic production infrastructure with guaranteed execution.',
  },
  {
    title: 'Centaur Interface Deployment:',
    body:
      'Creating seamless human-AI collaboration interfaces for expert oversight, human-in-the-loop control, and data-driven feedback.',
  },
  {
    title: 'Recursive Feedback and Validation Loop:',
    body:
      'Persistent adversarial stress-testing, real-world deployment, model performance and drift analysis, and recursive data feeding to validate the complete thesis cycle.',
  },
];

const graphPaperBg = {
  backgroundColor: BG,
  backgroundImage: 'none',
};

function DiagramMetric({ value, label, className }) {
  return (
    <div
      className={className}
      style={{
        borderTop: `1px solid ${LINE}`,
        paddingTop: '16px',
      }}
    >
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '26px',
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          color: INK,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '10px',
          fontWeight: 500,
          lineHeight: 1.5,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: SOFT,
          marginTop: '6px',
        }}
      >
        {label}
      </div>
    </div>
  );
}

function SystemDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 42% 28%, rgba(255,255,255,0.05), transparent 24%), radial-gradient(circle at 55% 58%, rgba(61,120,120,0.16), transparent 28%), radial-gradient(circle at 46% 78%, rgba(42,63,63,0.4), transparent 24%)',
          filter: 'blur(14px)',
          transform: 'scale(1.03)',
          opacity: 0.95,
        }}
      />

      <svg
        viewBox="0 0 720 820"
        role="img"
        aria-label="Layered validation architecture diagram"
        style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1 }}
      >
        <defs>
          <linearGradient id="topPlane" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#101919" />
            <stop offset="100%" stopColor="#152121" />
          </linearGradient>
          <linearGradient id="topSide" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0efe8" />
            <stop offset="100%" stopColor="#d6d3ca" />
          </linearGradient>
          <linearGradient id="tanPlane" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cfb19f" />
            <stop offset="100%" stopColor="#c29d8a" />
          </linearGradient>
          <linearGradient id="tanSide" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#efe8df" />
            <stop offset="100%" stopColor="#ddd3c7" />
          </linearGradient>
          <filter id="diagramGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0.15  0 1 0 0 0.20  0 0 1 0 0.20  0 0 0 0.42 0"
            />
          </filter>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <marker id="arrowHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2f2620" />
          </marker>
        </defs>

        <ellipse cx="360" cy="650" rx="245" ry="82" fill="rgba(0,0,0,0.22)" filter="url(#diagramGlow)" />

        <polygon points="104,184 402,22 664,152 361,317" fill="url(#topPlane)" stroke="#dfe2db" strokeWidth="2" />
        <polygon points="361,317 664,152 664,183 361,350" fill="url(#topSide)" stroke="#d6d3ca" strokeWidth="1.5" />
        <polygon points="104,184 361,317 361,350 104,213" fill="url(#topSide)" stroke="#d6d3ca" strokeWidth="1.5" />

        <polygon points="94,359 389,202 653,334 361,493" fill="url(#tanPlane)" stroke="#8f6d5d" strokeWidth="2" />
        <polygon points="361,493 653,334 653,363 361,523" fill="url(#tanSide)" stroke="#b19586" strokeWidth="1.5" />
        <polygon points="94,359 361,493 361,523 94,390" fill="url(#tanSide)" stroke="#b19586" strokeWidth="1.5" />

        <polygon points="96,549 392,390 652,520 360,680" fill="url(#tanPlane)" stroke="#8f6d5d" strokeWidth="2" />
        <polygon points="360,680 652,520 652,555 360,715" fill="url(#tanSide)" stroke="#b19586" strokeWidth="1.5" />
        <polygon points="96,549 360,680 360,715 96,583" fill="url(#tanSide)" stroke="#b19586" strokeWidth="1.5" />

        <g opacity="0.96">
          <rect x="215" y="58" width="118" height="18" rx="4" fill="#eceee8" stroke="#b7bbb2" strokeWidth="1" transform="rotate(-28 215 58)" />
          <rect x="355" y="50" width="98" height="16" rx="4" fill="#eceee8" stroke="#b7bbb2" strokeWidth="1" transform="rotate(-28 355 50)" />
          <rect x="500" y="114" width="32" height="170" rx="8" fill="#f6f7f3" stroke="#c7cbc2" strokeWidth="1.2" transform="rotate(-28 500 114)" />
          <rect x="170" y="166" width="106" height="92" rx="4" fill="#f6f7f3" stroke="#c7cbc2" strokeWidth="1.2" transform="rotate(-28 170 166)" />
          <rect x="312" y="114" width="106" height="92" rx="4" fill="#f6f7f3" stroke="#c7cbc2" strokeWidth="1.2" transform="rotate(-28 312 114)" />
          <rect x="236" y="246" width="106" height="92" rx="4" fill="#f6f7f3" stroke="#c7cbc2" strokeWidth="1.2" transform="rotate(-28 236 246)" />
          <rect x="405" y="194" width="88" height="48" rx="4" fill="#f2f3ee" stroke="#c7cbc2" strokeWidth="1" transform="rotate(-28 405 194)" />
          <rect x="470" y="170" width="42" height="32" rx="10" fill="#eceee8" stroke="#c7cbc2" strokeWidth="1" transform="rotate(-28 470 170)" />
          <rect x="454" y="254" width="52" height="30" rx="3" fill="#f3f5ef" stroke="#c7cbc2" strokeWidth="1" transform="rotate(-28 454 254)" />
          <rect x="336" y="274" width="176" height="24" rx="4" fill="#e7e9e1" stroke="#c7cbc2" strokeWidth="1" transform="rotate(-28 336 274)" />
          <rect x="318" y="320" width="194" height="88" rx="5" fill="#f5f6f1" stroke="#c7cbc2" strokeWidth="1.2" transform="rotate(-28 318 320)" />

          <path d="M177 184 l88 0 M177 204 l88 0 M177 224 l88 0" stroke="#adb2a8" strokeWidth="1" transform="rotate(-28 177 184)" />
          <path d="M319 132 l88 0 M319 152 l88 0 M319 172 l88 0" stroke="#adb2a8" strokeWidth="1" transform="rotate(-28 319 132)" />
          <path d="M323 334 l152 0 M323 352 l152 0 M323 370 l152 0" stroke="#b1b7ad" strokeWidth="1" transform="rotate(-28 323 334)" />
          <path d="M525 128 l0 138 M543 119 l0 136 M561 109 l0 136 M579 99 l0 136 M597 89 l0 136" stroke="#c5c9c0" strokeWidth="1.1" />
          <path d="M213 174 l75 70 M288 175 l-74 68" stroke="#b7bbb2" strokeWidth="1.3" transform="rotate(-28 213 174)" />
          <path d="M354 121 l75 70 M429 122 l-74 68" stroke="#b7bbb2" strokeWidth="1.3" transform="rotate(-28 354 121)" />
          <path d="M278 252 l75 70 M353 253 l-74 68" stroke="#b7bbb2" strokeWidth="1.3" transform="rotate(-28 278 252)" />
        </g>

        <g opacity="0.72">
          <rect x="170" y="410" width="120" height="48" rx="8" fill="#f0efe8" stroke="#8f6d5d" strokeWidth="1.8" transform="rotate(-28 170 410)" />
          <g transform="rotate(-28 170 410)">
            {Array.from({ length: 6 }).map((_, row) =>
              Array.from({ length: 10 }).map((__, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={182 + col * 10}
                  y={420 + row * 6}
                  width="7"
                  height="4"
                  rx="1"
                  fill="#d7d2c8"
                  stroke="#b6ac9f"
                  strokeWidth="0.4"
                />
              ))
            )}
          </g>

          <path d="M263 473 l58 29 M287 489 l58 29 M310 504 l58 29 M333 520 l58 29" stroke="#3f322b" strokeWidth="3" strokeLinecap="round" markerEnd="url(#arrowHead)" />
          <path d="M444 388 l142 71 M478 404 l142 71 M512 420 l142 71" stroke="#3f322b" strokeWidth="3" strokeLinecap="round" markerEnd="url(#arrowHead)" />

          <path d="M133 329 v-120" stroke="#2f2620" strokeWidth="4" strokeLinecap="round" markerEnd="url(#arrowHead)" />
          <path d="M133 490 v-118" stroke="#2f2620" strokeWidth="4" strokeLinecap="round" markerEnd="url(#arrowHead)" />
          <path d="M637 334 v-120" stroke="#2f2620" strokeWidth="4" strokeLinecap="round" markerEnd="url(#arrowHead)" />
          <path d="M637 490 v-116" stroke="#2f2620" strokeWidth="4" strokeLinecap="round" markerEnd="url(#arrowHead)" />
          <path d="M392 448 v95" stroke="#2f2620" strokeWidth="4" strokeLinecap="round" markerEnd="url(#arrowHead)" />
          <path d="M391 562 v112" stroke="#2f2620" strokeWidth="4" strokeLinecap="round" markerEnd="url(#arrowHead)" />

          <path d="M518 283 c16 -10 34 -9 47 6 c11 12 11 29 3 44 c-12 22 -37 31 -62 24 c4 -13 4 -29 12 -40 z" fill="#efe5da" stroke="#8f6d5d" strokeWidth="2" />
          <text x="533" y="315" fill="#5c4439" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" transform="rotate(-4 533 315)">¥</text>
          <circle cx="548" cy="336" r="14" fill="#72ef63" stroke="#447b3e" strokeWidth="3" filter="url(#softShadow)" />

          <circle cx="686" cy="262" r="14" fill="#72ef63" stroke="#447b3e" strokeWidth="3" filter="url(#softShadow)" />
          <circle cx="686" cy="310" r="14" fill="#f26a3a" stroke="#92411f" strokeWidth="3" filter="url(#softShadow)" />
          <circle cx="685" cy="468" r="14" fill="#72ef63" stroke="#447b3e" strokeWidth="3" filter="url(#softShadow)" />
        </g>

        <g opacity="0.42" stroke="#8f6d5d" strokeWidth="2" fill="none">
          <rect x="176" y="570" width="164" height="86" rx="4" transform="rotate(-28 176 570)" />
          <rect x="360" y="548" width="184" height="122" rx="4" transform="rotate(-28 360 548)" />
          <rect x="470" y="560" width="92" height="40" rx="4" transform="rotate(-28 470 560)" />
          <path d="M188 586 h148 M188 602 h148 M188 618 h148" transform="rotate(-28 188 586)" />
          <path d="M378 564 h148 M378 582 h148 M378 600 h148 M378 618 h148" transform="rotate(-28 378 564)" />
          <rect x="254" y="600" width="60" height="46" rx="3" transform="rotate(-28 254 600)" />
          <circle cx="520" cy="604" r="13" transform="rotate(-28 520 604)" />
        </g>

        <path d="M165 760 C255 835, 470 835, 596 734" fill="none" stroke="#8a8176" strokeWidth="4" strokeLinecap="round" />
        <path d="M160 760 l-20 -18 l8 32 z" fill="#3f322b" />
      </svg>
    </div>
  );
}

export default function GraphicalConsistencyValidationSection() {
  return (
    <section
      aria-label="Methodology — graphical consistency validation"
      className="relative z-10 w-full overflow-hidden"
      style={graphPaperBg}
    >
      <div
        className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-10"
        style={{
          paddingTop: 'clamp(64px, 8vw, 108px)',
          paddingBottom: 'clamp(72px, 9vw, 128px)',
        }}
      >
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
                fontSize: '11px',
                letterSpacing: '0.18em',
                color: ACCENT,
                textTransform: 'uppercase',
                margin: 0,
                marginBottom: '24px',
              }}
            >
              // THE EMPIRICAL VALIDATION PIPELINE: THESIS TO INFRASTRUCTURE
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(34px, 4.2vw, 60px)',
                lineHeight: 0.96,
                letterSpacing: '-0.03em',
                color: INK,
                margin: 0,
                maxWidth: '720px',
                textTransform: 'uppercase',
              }}
            >
              The Empiric Method: Graphical Consistency Validation.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(18px, 1.7vw, 21px)',
                lineHeight: 1.7,
                color: MUTED,
                margin: 0,
                marginTop: '26px',
                maxWidth: '620px',
                letterSpacing: '-0.01em',
              }}
            >
              A hypothesis-driven pipeline that turns probabilistic models into measurable consequence—then hardens what survives.
            </motion.p>

            <ol
              className="list-none"
              style={{
                margin: 0,
                marginTop: '38px',
                padding: 0,
                maxWidth: '720px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {STEPS.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.45, delay: 0.08 * i, ease: 'easeOut' }}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    paddingTop: '18px',
                    borderTop: `1px solid ${LINE}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: '12px',
                      color: ACCENT,
                      minWidth: '1.25em',
                      paddingTop: '3px',
                    }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: '14px',
                        lineHeight: 1.45,
                        color: '#E5F0F0',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {step.title}
                    </span>{' '}
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: 1.65,
                        color: MUTED,
                      }}
                    >
                      {step.body}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ol>

            <a
              href="#case-studies"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: 1.5,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: SOFT,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '40px',
              }}
            >
              Continue to Case Studies &amp; Research <span aria-hidden="true">→</span>
            </a>

            <div
              className="grid grid-cols-1 gap-6 sm:grid-cols-3"
              style={{ marginTop: '58px', maxWidth: '720px' }}
            >
              <DiagramMetric value="14" label="Active Research Threads" />
              <DiagramMetric value="06" label="Validated Execution Layers" />
              <DiagramMetric value="INF" label="Compounding Feedback Surface" />
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="mx-auto lg:mx-0"
              style={{ maxWidth: '620px', paddingTop: '24px' }}
            >
              <SystemDiagram />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

