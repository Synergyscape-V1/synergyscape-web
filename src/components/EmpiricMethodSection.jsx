import { motion } from 'framer-motion';

const BG = '#F8F7F2';
const INK = '#1A1A1A';
const MUTED = '#6E6964';
const ACCENT = '#A65E43';

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
  backgroundImage: `repeating-linear-gradient(
    0deg,
    transparent,
    transparent 23px,
    rgba(26, 26, 26, 0.06) 23px,
    rgba(26, 26, 26, 0.06) 24px
  )`,
};

const diagramBg = {
  ...graphPaperBg,
  borderRadius: '10px',
  overflow: 'hidden',
  paddingBottom: '20px',
};

export default function EmpiricMethodSection() {
  return (
    <section
      aria-label="The Empiric Method — graphical consistency validation"
      className="relative w-full"
      style={graphPaperBg}
    >
      <div
        className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-10"
        style={{ paddingTop: 'clamp(48px, 6vw, 80px)', paddingBottom: 'clamp(64px, 8vw, 110px)' }}
      >
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '10px',
                letterSpacing: '0.22em',
                color: ACCENT,
                textTransform: 'uppercase',
                margin: 0,
                marginBottom: '18px',
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
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: 'clamp(30px, 3.8vw, 52px)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: INK,
                margin: 0,
                maxWidth: '680px',
              }}
            >
              The Empiric Method: Operationalizing Falsifiable AI Theses.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 'clamp(18px, 1.7vw, 22px)',
                lineHeight: 1.5,
                color: MUTED,
                margin: 0,
                marginTop: '14px',
                maxWidth: '640px',
              }}
            >
              Employing a hypothesis-driven process to convert models into consequence.
            </motion.p>

            <ol
              className="list-none"
              style={{
                margin: 0,
                marginTop: '34px',
                padding: 0,
                maxWidth: '720px',
                display: 'flex',
                flexDirection: 'column',
                gap: '22px',
              }}
            >
              {STEPS.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.45, delay: 0.08 * i, ease: 'easeOut' }}
                  style={{ display: 'flex', gap: '14px' }}
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
                    {i + 1}.
                  </span>
                  <div>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: '14px',
                        lineHeight: 1.45,
                        color: INK,
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
                fontWeight: 400,
                fontSize: '13px',
                lineHeight: 1.5,
                letterSpacing: '0.04em',
                color: '#B8B0A4',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '42px',
              }}
            >
              Continue to Case Studies &amp; Research <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="mx-auto lg:mx-0"
              style={{
                maxWidth: '560px',
                paddingTop: '8px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  ...diagramBg,
                }}
              >
                <img
                  src="/images/kimi-diagram.png"
                  alt="Empiric Method layered diagram"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    filter: 'drop-shadow(0 18px 28px rgba(0,0,0,0.12))',
                  }}
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

