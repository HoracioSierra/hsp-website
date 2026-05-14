import React from 'react';

function App() {
  return (
    <div className="app-shell">
      <main className="hero-section">
        <section className="hero-copy">
          <h1>horacio sierra perez</h1>
          <p className="eyebrow">developer · student · builder</p>

          <div className="hero-grid">
            <div className="hero-left">
              <div className="panel">
                <p className="label">about me</p>
                <p>computer science @ ucf.</p>
                <p>
                  currently building something
                  <span className="loading-dots">
                    <span>•</span>
                    <span>•</span>
                    <span>•</span>
                  </span>
                </p>
              </div>

              <div className="panel">
                <p className="label">contact me</p>
                <p>yourname@example.com</p>
                <div className="links-row">
                  <a href="https://github.com/" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="panel">
                <p className="label">tech stack</p>
                <p>python, c, java, javascript/typescript</p>
                <p>react, node.js, express, mongodb</p>
                <p>git, github, postman, digitalocean</p>
              </div>

              <div className="panel">
                <p className="label">about this site</p>
                <p>built with react, vite, and css</p>
              </div>
            </div>

            <div className="hero-right">
              <div className="profile-card">
                <div className="profile-image" />
                <p className="profile-caption">profile image placeholder</p>
                <a className="resume-button" href="/resume.pdf" target="_blank" rel="noreferrer">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
