const VIEWBOX = { width: 760, height: 980 };

const COLORS = {
  bronzeOuter: '#7E4F23',
  bronzeInner: '#E9E4DB',
  coreTop: '#663321',
  coreLeft: '#532618',
  coreRight: '#7a4030',
  probabilisticTop: '#804D36',
  probabilisticLeft: '#6f412e',
  probabilisticRight: '#98614a',
  centaurTop: '#A88C74',
  centaurLeft: '#90755f',
  centaurRight: '#bea995',
  docsTop: '#FFFFFF',
  docsLeft: '#ece7df',
  docsRight: '#f7f4ef',
  copperLine: '#8f5f4d',
  ink: '#242120',
  softInk: '#5d5551',
  paper: '#faf8f4',
  grid: '#d9d1c7',
  node: '#7ecf62',
};

const STACK_CX = 470;
const BASE_CY = 850;

const LAYERS = {
  docs: { cx: STACK_CX, y: 252, w: 176, h: 74, d: 18, clipId: 'docs-top-clip' },
  centaur: { cx: STACK_CX, y: 382, w: 204, h: 88, d: 20, clipId: 'centaur-top-clip' },
  probabilistic: { cx: STACK_CX, y: 518, w: 232, h: 98, d: 24, clipId: 'prob-top-clip' },
  core: { cx: STACK_CX, y: 664, w: 250, h: 104, d: 28, clipId: 'core-top-clip' },
};

function topFacePoints({ cx, y, w, h }) {
  return [
    [cx, y],
    [cx + w / 2, y + h / 2],
    [cx, y + h],
    [cx - w / 2, y + h / 2],
  ];
}

function pointsToString(points) {
  return points.map(([x, y]) => `${x},${y}`).join(' ');
}

function IsoPlate({ layer, fills, stroke, strokeWidth = 1.8, opacity = 1, children }) {
  const top = topFacePoints(layer);
  const right = [
    top[1],
    top[2],
    [top[2][0], top[2][1] + layer.d],
    [top[1][0], top[1][1] + layer.d],
  ];
  const left = [
    top[3],
    top[2],
    [top[2][0], top[2][1] + layer.d],
    [top[3][0], top[3][1] + layer.d],
  ];

  return (
    <g opacity={opacity}>
      <defs>
        <clipPath id={layer.clipId}>
          <polygon points={pointsToString(top)} />
        </clipPath>
      </defs>
      <polygon points={pointsToString(left)} fill={fills.left} stroke={stroke} strokeWidth={strokeWidth} />
      <polygon points={pointsToString(right)} fill={fills.right} stroke={stroke} strokeWidth={strokeWidth} />
      <polygon points={pointsToString(top)} fill={fills.top} stroke={stroke} strokeWidth={strokeWidth} />
      {children ? <g clipPath={`url(#${layer.clipId})`}>{children}</g> : null}
    </g>
  );
}

function SvgLabel({ x, y, lines, rotate = 0, align = 'start', size = 10, weight = 500, color = COLORS.ink }) {
  const lineHeight = size * 1.25;
  const anchor = align === 'middle' ? 'middle' : align === 'end' ? 'end' : 'start';

  return (
    <text
      x={x}
      y={y}
      fill={color}
      fontFamily="'Inter', sans-serif"
      fontSize={size}
      fontWeight={weight}
      letterSpacing="0.08em"
      textAnchor={anchor}
      transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
    >
      {lines.map((line, index) => (
        <tspan key={line} x={x} dy={index === 0 ? 0 : lineHeight}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

function CubeGlyph({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} stroke={COLORS.softInk} fill="none" strokeWidth="1.1">
      <polygon points="0,12 12,5 24,12 12,19" />
      <polyline points="0,12 0,27 12,34 12,19" />
      <polyline points="24,12 24,27 12,34 12,19" />
    </g>
  );
}

function MetricCard({ x, y, width = 74, height = 44, rotate = 0 }) {
  return (
    <g transform={rotate ? `rotate(${rotate} ${x + width / 2} ${y + height / 2})` : undefined}>
      <rect x={x} y={y} width={width} height={height} rx="3" fill="#ffffff" stroke="#d7d0c7" />
      <rect x={x + 8} y={y + 8} width={width * 0.36} height="5" fill="#ddd6cd" />
      <rect x={x + 8} y={y + 19} width={width * 0.24} height="4" fill="#ece5dd" />
      <polyline
        points={`${x + 8},${y + height - 10} ${x + 21},${y + height - 18} ${x + 32},${y + height - 13} ${x + 44},${y + height - 24}`}
        fill="none"
        stroke={COLORS.copperLine}
        strokeWidth="1.8"
      />
      <rect x={x + width - 28} y={y + 10} width="5" height="18" fill="#d9c5b8" />
      <rect x={x + width - 20} y={y + 14} width="5" height="14" fill="#ba8976" />
      <rect x={x + width - 12} y={y + 8} width="5" height="20" fill="#dcc8bb" />
    </g>
  );
}

function Avatar({ x, y, r = 8 }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#f8f5ef" stroke="#927661" strokeWidth="1.2" />
      <circle cx={x} cy={y - 3} r={r * 0.36} fill="#b88e74" />
      <path d={`M ${x - r * 0.62} ${y + 5} Q ${x} ${y + 1} ${x + r * 0.62} ${y + 5}`} fill="#ceb39e" />
    </g>
  );
}

function SchemaIcon({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width="84" height="62" rx="3" fill="#fbf7f1" stroke="#bda58f" />
      <rect x="9" y="10" width="18" height="18" fill="none" stroke={COLORS.copperLine} />
      <line x1="36" y1="14" x2="69" y2="14" stroke="#b7aba0" />
      <line x1="36" y1="22" x2="64" y2="22" stroke="#d0c5ba" />
      <polyline points="12,45 24,37 33,41 44,28" fill="none" stroke={COLORS.copperLine} strokeWidth="1.8" />
      <line x1="50" y1="38" x2="72" y2="38" stroke="#d0c5ba" />
      <line x1="50" y1="46" x2="66" y2="46" stroke="#d0c5ba" />
    </g>
  );
}

export default function MethodologyDiagram() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[760px]"
      style={{ aspectRatio: '0.78 / 1' }}
    >
      <svg
        viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
        role="img"
        aria-label="Integration Mapping Visual for Synergyscape methodology"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="platformOuter" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5929" />
            <stop offset="100%" stopColor={COLORS.bronzeOuter} />
          </linearGradient>
          <linearGradient id="platformInner" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#f4efe7" />
            <stop offset="100%" stopColor={COLORS.bronzeInner} />
          </linearGradient>
          <linearGradient id="glassLayer" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#cdb5a0" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#9d846e" stopOpacity="0.94" />
          </linearGradient>
          <linearGradient id="probLayer" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#98624a" />
            <stop offset="100%" stopColor={COLORS.probabilisticTop} />
          </linearGradient>
          <linearGradient id="coreLayer" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#79422f" />
            <stop offset="100%" stopColor={COLORS.coreTop} />
          </linearGradient>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#8a7467" floodOpacity="0.2" />
          </filter>
          <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill={COLORS.copperLine} />
          </marker>
        </defs>

        <rect x="0" y="0" width={VIEWBOX.width} height={VIEWBOX.height} fill="transparent" />

        <g opacity="0.55" stroke={COLORS.grid} strokeWidth="1">
          {[116, 220, 324, 428, 532, 636, 740, 844].map((y) => (
            <line key={y} x1="0" y1={y} x2={VIEWBOX.width} y2={y} />
          ))}
        </g>

        <g filter="url(#softShadow)">
          <ellipse cx={STACK_CX} cy={BASE_CY} rx="218" ry="80" fill="url(#platformOuter)" />
          <ellipse cx={STACK_CX} cy={BASE_CY - 6} rx="214" ry="76" fill="none" stroke="#694021" strokeWidth="1.5" opacity="0.45" />
          <ellipse cx={STACK_CX} cy={BASE_CY} rx="178" ry="62" fill="url(#platformInner)" />
          <ellipse cx={STACK_CX} cy={BASE_CY} rx="148" ry="50" fill="#f6f1e9" stroke="#d2c8bc" strokeWidth="1.5" />
          <ellipse cx={STACK_CX} cy={BASE_CY} rx="118" ry="38" fill="#efe9e0" stroke="#d5cec3" strokeWidth="1.2" />
        </g>

        <path
          d="M626,828 A176,64 0 1 1 319,868"
          fill="none"
          stroke={COLORS.copperLine}
          strokeWidth="3"
          markerEnd="url(#arrowHead)"
        />
        <text
          x="470"
          y="933"
          textAnchor="middle"
          fill={COLORS.ink}
          fontFamily="'Inter', sans-serif"
          fontSize="11"
          fontWeight="500"
          letterSpacing="0.08em"
        >
          RECURSIVE SYSTEM FEEDBACK LOOP
        </text>

        <g stroke="#8f857d" strokeWidth="1.8">
          <line x1="470" y1="308" x2="470" y2="768" />
          <line x1="575" y1="360" x2="575" y2="790" />
          <line x1="366" y1="360" x2="366" y2="790" />
        </g>

        <g filter="url(#softShadow)">
          <IsoPlate
            layer={LAYERS.docs}
            stroke="#b8b0a6"
            fills={{ top: COLORS.docsTop, left: COLORS.docsLeft, right: COLORS.docsRight }}
          >
            <MetricCard x={416} y={270} width={74} height={46} />
            <MetricCard x={492} y={260} width={82} height={48} rotate={16} />
            <MetricCard x={446} y={290} width={62} height={38} rotate={-8} />
          </IsoPlate>

          <IsoPlate
            layer={LAYERS.centaur}
            stroke="#8c705b"
            fills={{ top: 'url(#glassLayer)', left: COLORS.centaurLeft, right: COLORS.centaurRight }}
            opacity={0.97}
          >
            <rect x="428" y="405" width="94" height="42" rx="4" fill="#f6f1ea" stroke="#b59a83" />
            <line x1="442" y1="417" x2="505" y2="417" stroke="#d0c0b2" />
            <line x1="442" y1="425" x2="490" y2="425" stroke="#e1d7cc" />
            <Avatar x="438" y="448" r="8" />
            <Avatar x="470" y="452" r="8" />
            <Avatar x="502" y="456" r="8" />
            <polyline points="525,434 545,424 563,433 583,420" fill="none" stroke={COLORS.copperLine} strokeWidth="2" />
            <rect x="536" y="442" width="34" height="22" rx="2" fill="#fffdfa" stroke="#c8b4a2" />
            <circle cx="548" cy="453" r="4" fill={COLORS.node} stroke="#708e57" />
            <line x1="556" y1="453" x2="565" y2="453" stroke="#baa696" />
          </IsoPlate>

          <IsoPlate
            layer={LAYERS.probabilistic}
            stroke={COLORS.copperLine}
            fills={{ top: 'url(#probLayer)', left: COLORS.probabilisticLeft, right: COLORS.probabilisticRight }}
            opacity={0.96}
          >
            <rect x="414" y="542" width="54" height="28" rx="2" fill="#f9f5ef" stroke="#b48c78" />
            <rect x="480" y="558" width="62" height="30" rx="2" fill="#faf6f1" stroke="#b48c78" />
            <rect x="450" y="600" width="56" height="26" rx="2" fill="#f9f5ef" stroke="#b48c78" />
            <polyline points="400,600 442,575 474,590 516,566 556,584" fill="none" stroke="#f4dfd2" strokeWidth="2.2" markerEnd="url(#arrowHead)" />
            <polyline points="410,618 444,633 476,614 510,635 545,620" fill="none" stroke="#ecd0c1" strokeWidth="1.8" />
            <polyline points="448,538 448,590 505,590" fill="none" stroke="#f0d9cb" strokeWidth="1.8" markerEnd="url(#arrowHead)" />
            <polyline points="528,570 528,612 492,612" fill="none" stroke="#f0d9cb" strokeWidth="1.8" markerEnd="url(#arrowHead)" />
            <circle cx="442" cy="576" r="3.5" fill={COLORS.node} />
            <circle cx="507" cy="589" r="3.5" fill={COLORS.node} />
            <circle cx="490" cy="612" r="3.5" fill={COLORS.node} />
          </IsoPlate>

          <IsoPlate
            layer={LAYERS.core}
            stroke={COLORS.copperLine}
            fills={{ top: 'url(#coreLayer)', left: COLORS.coreLeft, right: COLORS.coreRight }}
          >
            <g stroke="#c0937d" strokeWidth="1.1" opacity="0.95">
              <polyline points="390,700 430,720 430,760 470,780" fill="none" />
              <polyline points="430,694 470,714 510,694 550,714" fill="none" />
              <polyline points="470,780 512,758 554,780" fill="none" />
              <line x1="470" y1="668" x2="470" y2="796" />
              <line x1="430" y1="720" x2="470" y2="698" />
              <line x1="550" y1="714" x2="588" y2="732" />
              <line x1="512" y1="760" x2="512" y2="818" />
            </g>
            <g stroke="#e5c1ae" strokeWidth="1.4">
              <polyline points="404,754 448,734 490,756" fill="none" />
              <polyline points="494,742 534,762 572,740" fill="none" />
            </g>
          </IsoPlate>
        </g>

        <SchemaIcon x="92" y="715" />
        <CubeGlyph x={312} y={586} scale={1.1} />
        <CubeGlyph x={334} y={718} scale={1} />

        <path
          d="M176,746 C234,738 278,730 344,706"
          fill="none"
          stroke={COLORS.copperLine}
          strokeWidth="2.4"
          markerEnd="url(#arrowHead)"
        />
        <path
          d="M472,468 C454,500 448,518 454,560"
          fill="none"
          stroke="#8e6c58"
          strokeWidth="1.8"
          markerEnd="url(#arrowHead)"
        />
        <path
          d="M470,610 C468,640 468,664 470,698"
          fill="none"
          stroke="#8e6c58"
          strokeWidth="1.8"
          markerEnd="url(#arrowHead)"
        />

        <SvgLabel x={620} y={266} lines={['SYSTEM DOCUMENTATION', 'STACK']} size={10} />
        <SvgLabel x={620} y={405} lines={['CENTAUR INTERFACE:', 'OVERSIGHT & COLLABORATION']} size={10} />
        <SvgLabel x={118} y={610} lines={['PROBABILISTIC MODEL', 'DEVELOPMENT CYCLE']} size={10} />
        <SvgLabel x={112} y={760} lines={['DETERMINISTIC ENGINEERING', 'LAYER & HARDENING PROCESS']} size={10} />
        <SvgLabel x={118} y={706} lines={['ENGINEERING SCHEMA', 'SOURCE INPUT']} size={9} />
        <SvgLabel x={610} y={164} lines={['VALIDATED REPORTS', '& METRICS']} rotate={-26} size={9} />
        <SvgLabel x={600} y={548} lines={['PROBABILISTIC', 'MODEL FLOW']} rotate={-26} size={9} />
        <SvgLabel x={592} y={708} lines={['DETERMINISTIC', 'ENGINEERED CORE']} rotate={-26} size={9} />
      </svg>
    </div>
  );
}
