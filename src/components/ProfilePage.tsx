import { useAuth } from "../hooks/useAuth";

function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="card profile-card">
        <h2>Welcome to your profile!</h2>
        <p className="text-muted">
          You&apos;re not logged in. Use the <strong>Login</strong> button in the header to view a
          registered user profile.
        </p>
      </div>
    );
  }

  return (
    <div className="profile-layout">
      <section className="card profile-card">
        <h2>Welcome to your profile!</h2>
        <div className="profile-header">
          <div className="profile-name">{user.name}</div>
          <div className="profile-tagline">Registered PopSNP user</div>
        </div>

        <div className="profile-meta-grid">
          <div>
            <div className="profile-label">Saved queries</div>
            <div className="profile-value">{user.savedQueries.length}</div>
          </div>
          <div>
            <div className="profile-label">Capabilities</div>
            <ul className="profile-capabilities">
              <li>Run queries</li>
              <li>View visualizations</li>
              <li>Save queries</li>
              <li>Export saved queries</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card profile-card">
        <h3>Saved Queries</h3>
        {user.savedQueries.length === 0 ? (
          <p className="text-muted">
            You don&apos;t have any saved queries yet. Go to the Explorer, run a search, and use{" "}
            <strong>Save Query</strong>.
          </p>
        ) : (
          <ul className="profile-query-list">
            {user.savedQueries.map((q, idx) => (
              <li key={idx} className="profile-query-item">
                <span className="profile-query-index">#{idx + 1}</span>
                <code className="profile-query-text">{q}</code>
              </li>
            ))}
          </ul>
        )}

        <button
          className="primary-button"
          type="button"
          style={{ marginTop: "0.75rem" }}
          onClick={() =>
            alert("Mock export: saved queries would be downloaded for reporting here.")
          }
        >
          Export Saved Queries
        </button>
      </section>
    </div>
  );
}

export default ProfilePage;
