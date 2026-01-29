import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <>
      <header className="app-header">
        <div className="header-inner">
          <Link to="/" className="header-logo">
            AP Slot Play
          </Link>
          <nav className="header-nav">
            <Link to="/">Machines</Link>
            <Link to="/machine/new">+ Add</Link>
            <Link to="/casinos">Casinos</Link>
          </nav>
        </div>
      </header>
      <main className="main-content">{children}</main>
    </>
  );
}
