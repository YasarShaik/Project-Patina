export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--leather)' }}>
      <div className="text-center">
        <p style={{
          color: 'var(--smoke)',
          fontSize: '10px',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          marginBottom: '16px',
          fontFamily: 'DM Mono, monospace'
        }}>
          Price Intelligence
        </p>
        <h1 style={{
          color: 'var(--cream)',
          fontSize: '72px',
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: '300',
          lineHeight: '1',
          marginBottom: '16px'
        }}>
          Patina
        </h1>
        <p style={{
          color: 'var(--brass-light)',
          fontSize: '14px',
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          letterSpacing: '0.1em'
        }}>
          Time reveals value.
        </p>
      </div>
    </main>
  );
}
