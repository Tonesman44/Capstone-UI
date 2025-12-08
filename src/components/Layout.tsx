import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import logo from "../assets/snplogo.png";
import { useAuth } from "../hooks/useAuth";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { user, login, logout } = useAuth();

  return (
    <div className="app-shell">
      <header className="app-header">
        <Link
          to="/"
          className="app-logo"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img src={logo} alt="SNP Insights logo" className="app-logo-img" />
          <div className="app-logo-text">
            <span className="app-logo-title">SNP Insights</span>
            <span className="app-logo-subtitle">
              PopSNP – Population-Based SNP Analysis
            </span>
          </div>
        </Link>

        <div className="app-header-right">
          {user ? (
            <>
              <Link to="/profile">
                <button className="outline-button" type="button">
                  Profile
                </button>
              </Link>
              <button className="ghost-button" type="button" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <button className="primary-button" type="button" onClick={login}>
              Login
            </button>
          )}
        </div>
      </header>

      <main className="app-main">{children}</main>
    </div>
  );
}

export default Layout;
