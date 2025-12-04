import { useNavigate } from "react-router-dom";

const teamMembers = [
  "Yashi Patel",
  "Mariam Khan",
  "Aidan Kearney",
  "Nandita Reddy",
  "Sunkey Ly",
  "Ali Vali",
  "Johnny Tan",
  "Lauren Webster",
  "Antonio Fabrizio",
  "Marcus Sides",
];

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-grid">
      <section>
        <h1 className="landing-title">
          Visualize <span className="highlight">population-based SNP</span> patterns in seconds.
        </h1>
        <p className="landing-subtitle">
          PopSNP is a web-based visualization tool designed for researchers, faculty, and students to explore
          mock SNP data for your IST capstone.
        </p>

        <div className="landing-meta">
          <span className="badge">IST Capstone</span>
          <span className="badge">Client: Rob Kulathinal</span>
          <span className="badge">Group 2 – SNP Insights</span>
        </div>

        <button className="primary-button" onClick={() => navigate("/explore")}>
          Launch PopSNP Explorer →
        </button>
      </section>

      <aside className="landing-card">
        <div className="landing-card-title">Product at a glance</div>

        <div className="landing-card-grid">
          <div>
            <div className="landing-card-label">Project Title</div>
            <div className="landing-card-value">PopSNP – Population-Based SNP Analysis</div>
          </div>
          <div>
            <div className="landing-card-label">Product Type</div>
            <div className="landing-card-value">Web-based SNP visualization and teaching tool</div>
          </div>
        </div>

        <div className="landing-team">
          <strong>Team: SNP Insights</strong>
          <br />
          {teamMembers.join(" • ")}
        </div>
      </aside>
    </div>
  );
}

export default LandingPage;
