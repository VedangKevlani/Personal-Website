// src/reactbits/AnimatedLines.jsx
export default function AnimatedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="line line1"></div>
      <div className="line line2"></div>
      <style jsx>{`
        .line {
          position: absolute;
          width: 200%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          opacity: 0.2;
          animation: wave 4s ease-in-out infinite;
        }
        @keyframes wave {
          0% { transform: translateX(-100%) skewX(-12deg); }
          50% { transform: translateX(0) skewX(0deg); }
          100% { transform: translateX(100%) skewX(12deg); }
        }
        .line1 { top: 30%; animation-duration: 6s; }
        .line2 { top: 70%; animation-duration: 10s; }
        @media (prefers-reduced-motion: reduce) {
          .line { animation: none; }
        }
      `}</style>
    </div>
  )
}
