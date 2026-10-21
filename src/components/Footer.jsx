const Footer = () => {
  return (
    <footer style={{ padding: '3rem 0', backgroundColor: 'var(--surface-ivory)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700 }}>
        <span>© {new Date().getFullYear()} JAI SINGH BISHT. ALL RIGHTS RESERVED.</span>
        <a href="#hero" className="card-link text-accent">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
};

export default Footer;