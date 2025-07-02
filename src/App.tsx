import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="geometric-shapes">
          <div className="triangle triangle-1"></div>
          <div className="triangle triangle-2"></div>
          <div className="triangle triangle-3"></div>
        </div>

        <header className="header">
          <div className="logo">
            <div className="cardinal-icon">
              <div className="bird-swoosh"></div>
            </div>
            <h1 className="company-name">CARDINAL<span className="placement">PLACEMENT</span></h1>
          </div>
          <nav className="nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </header>

        <div className="hero-content">
          <h1 className="hero-title">Reliable Workforce Solutions</h1>
          <p className="hero-subtitle">Connecting businesses in manufacturing and recycling with skilled temporary workers</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Active Employees</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>

      <main className="main-content">
        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Who We Are</h2>
              <div className="title-accent"></div>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p className="lead-text">
                  Based in Laval, QC, Cardinal Placement connects businesses in manufacturing and recycling
                  with reliable, skilled temporary workers.
                </p>
                <p>
                  With over 150 active employees, we deliver results that meet production demands.
                  Our dedicated team ensures your operations run smoothly with the right people,
                  at the right time.
                </p>
                <div className="about-features">
                  <div className="feature">
                    <div className="feature-icon">✓</div>
                    <span>Vetted Workers</span>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">✓</div>
                    <span>Quick Deployment</span>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">✓</div>
                    <span>Reliable Service</span>
                  </div>
                </div>
              </div>
              <div className="about-visual">
                <div className="industry-highlight">
                  <h3>Industries We Serve</h3>
                  <ul>
                    <li>Manufacturing</li>
                    <li>Recycling</li>
                    <li>Warehousing</li>
                    <li>Distribution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Services</h2>
              <div className="title-accent"></div>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🏭</div>
                <h3>Factory & Warehouse Labor</h3>
                <p>Skilled temporary workers for manufacturing and warehouse operations</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📈</div>
                <h3>On-Demand Scaling</h3>
                <p>Flexible workforce solutions that adapt to your production demands</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🤝</div>
                <h3>Account Management</h3>
                <p>Dedicated support to ensure seamless integration with your team</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Contact Us</h2>
              <div className="title-accent"></div>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-person">
                  <h3>Adlen Boukerdenna</h3>
                  <p className="title">President-Directeur Commercial</p>
                </div>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div>
                      <span className="contact-label">Phone</span>
                      <a href="tel:514-463-4117" className="contact-value">514-463-4117</a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div>
                      <span className="contact-label">Email</span>
                      <a href="mailto:info@azcardinal.ca" className="contact-value">info@azcardinal.ca</a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div>
                      <span className="contact-label">Address</span>
                      <span className="contact-value">193 Boul Daniel Johnson, Laval, QC H7V 2E3</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-cta">
                <h3>Ready to Get Started?</h3>
                <p>Contact us today to discuss your staffing needs</p>
                <a href="tel:514-463-4117" className="cta-button">Call Now</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="cardinal-icon small">
                <div className="bird-swoosh"></div>
              </div>
              <span>Cardinal Placement</span>
            </div>
            <p>&copy; {new Date().getFullYear()} Cardinal Placement. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;