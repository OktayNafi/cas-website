'use client';

export default function BackgroundGradients() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Top right warm glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(184,115,51,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Center left cool glow */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Bottom right warm glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(184,115,51,0.04) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
    </div>
  );
}
