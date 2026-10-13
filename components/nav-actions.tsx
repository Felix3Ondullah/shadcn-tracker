export function NavActions() {
  return (
    <div className="nav-actions">
      <span className="edited-label">Edited Oct 08</span>
      <button className="icon-button" aria-label="Favorite page">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
        </svg>
      </button>
      <button className="icon-button" aria-label="More page options">•••</button>
      <span className="topbar-divider" />
      <button className="share-button">Share</button>
      <button className="avatar avatar-purple avatar-small" aria-label="Jordan Davis">JD</button>
    </div>
  );
}
