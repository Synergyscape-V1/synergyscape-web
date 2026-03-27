import MethodologyDiagram from '@/components/MethodologyDiagram';

const BG = '#f8f7f2';
const INK = '#1a1a1a';
const TERRA = '#a65e43';
const MUTED = '#6e6964';
const FOOTER_LINK = '#b8b0a4';

const NAV = ['Studio', 'Methodology', 'Portfolio', 'Research'];

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

export default function PostHeroSection() {
  return (
    <section
      aria-label="Methodology — empirical validation pipeline"
      className="relative w-full"
      style={graphPaperBg}
    >
      <div
        className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-10"
        style={{ paddingTop: 'clamp(40px, 5vw, 64px)', paddingBottom: 'clamp(56px, 8vw, 96px)' }}
      >
        {/* Light-mode bar (matches mockup; separate from fixed dark HeroNav) */}
        <header
          className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
          style={{ marginBottom: 'clamp(40px, 5vw, 56px)' }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: 'clamp(22px, 2.4vw, 28px)',
              color: INK,
              letterSpacing: '-0.02em',
            }}
          >
            Synergyscape
          </div>
          <nav aria-label="Section navigation">
            <ul
              className="flex flex-wrap items-center gap-x-7 gap-y-2"
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {NAV.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '11px',
                      letterSpacing: '0.18em',
                      color: INK,
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* Left column — copy from mockup */}
          <div className="min-w-0">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                fontSize: 'clamp(20px, 2.15vw, 26px)',
                lineHeight: 1.38,
                color: INK,
                margin: 0,
                maxWidth: '540px',
              }}
            >
              A closed-loop strategic architecture for the empirical validation of probabilistic
              decision-intelligence hypotheses into hardened, durable, and deterministic enterprise
              infrastructure.
            </p>

            <div
              className="flex flex-wrap items-center gap-6"
              style={{ marginTop: '28px' }}
            >
              <button
                type="button"
                aria-label="Explore the Methodology"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  background: TERRA,
                  border: 'none',
                  borderRadius: '2px',
                  padding: '14px 28px',
                  cursor: 'pointer',
                }}
              >
                Explore the Methodology
              </button>
              <a
                href="#"
                aria-label="View Portfolio"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: TERRA,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                View Portfolio
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div style={{ marginTop: 'clamp(56px, 7vw, 80px)' }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '10px',
                  letterSpacing: '0.22em',
                  color: TERRA,
                  textTransform: 'uppercase',
                  margin: 0,
                  marginBottom: '18px',
                }}
              >
                // THE EMPIRICAL VALIDATION PIPELINE: THESIS TO INFRASTRUCTURE
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: 'clamp(28px, 3.6vw, 44px)',
                  lineHeight: 1.12,
                  letterSpacing: '-0.03em',
                  color: INK,
                  margin: 0,
                  maxWidth: '560px',
                }}
              >
                The Empiric Method: Operationalizing Falsifiable AI Theses.
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: 1.55,
                  color: MUTED,
                  margin: 0,
                  marginTop: '16px',
                  maxWidth: '520px',
                }}
              >
                Employing a hypothesis-driven process to convert models into consequence.
              </p>

              <ol
                className="list-none"
                style={{
                  margin: 0,
                  marginTop: '32px',
                  padding: 0,
                  maxWidth: '560px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '22px',
                }}
              >
                {STEPS.map((step, i) => (
                  <li key={step.title} style={{ display: 'flex', gap: '14px' }}>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: '12px',
                        color: TERRA,
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
                  </li>
                ))}
              </ol>

              <a
                href="#"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '13px',
                  lineHeight: 1.5,
                  letterSpacing: '0.04em',
                  color: FOOTER_LINK,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '40px',
                }}
              >
                Continue to Case Studies & Research
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right column — built isometric diagram */}
          <div
            className="relative min-h-[360px] w-full lg:min-h-[860px]"
            style={{ alignSelf: 'stretch' }}
          >
            <MethodologyDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
