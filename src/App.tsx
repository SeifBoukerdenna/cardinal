import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Floating Contact Button */}
      <div className="floating-contact">
        <a href="tel:514-463-4117" className="floating-btn">
          <span className="phone-icon">📞</span>
          <span className="contact-text">Call Now</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="geometric-shapes">
          <div className="triangle triangle-1"></div>
          <div className="triangle triangle-2"></div>
          <div className="triangle triangle-3"></div>
          <div className="floating-dots"></div>
        </div>

        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <div className="logo">
            <div className="cardinal-icon">
              <div className="bird-swoosh"></div>
            </div>
            <div className="logo-text">
              <h1 className="company-name">CARDINAL</h1>
              <span className="placement">PLACEMENT SERVICES</span>
            </div>
          </div>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#why-us" className="nav-link">Why Choose Us</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="tel:514-463-4117" className="nav-cta">Get Quote</a>
          </nav>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </header>

        <div className="hero-content">
          <div className="hero-badge">
            <span>🏆 Trusted by 50+ Manufacturing Companies</span>
          </div>
          <h1 className="hero-title">
            Premier <span className="highlight">Workforce Solutions</span> for Manufacturing Excellence
          </h1>
          <p className="hero-subtitle">
            Connecting Quebec's leading manufacturers with skilled, reliable temporary workers.
            Over 8 years of proven results in manufacturing and recycling industries.
          </p>

          <div className="hero-cta">
            <a href="tel:514-463-4117" className="cta-primary">
              <span>📞</span>
              Call for Immediate Staffing
            </a>
            <a href="mailto:info@azcardinal.ca" className="cta-secondary">
              <span>📧</span>
              Request Quote
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Active Workers</span>
            </div>
            <div className="stat">
              <span className="stat-number">8+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Partner Companies</span>
            </div>
          </div>
        </div>
      </section>

      <main className="main-content">
        {/* Trust Indicators */}
        <section className="trust-section">
          <div className="container">
            <div className="trust-grid">
              <div className="trust-item">
                <div className="trust-icon">🛡️</div>
                <h3>Fully Insured & Bonded</h3>
                <p>Complete liability coverage for your peace of mind</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">✅</div>
                <h3>WSIB Compliant</h3>
                <p>All workers fully covered and compliant</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">🎯</div>
                <h3>Same-Day Placement</h3>
                <p>Emergency staffing solutions available 24/7</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">📋</div>
                <h3>Pre-Screened Workers</h3>
                <p>Background checks and skill verification</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">About Cardinal Placement</div>
              <h2 className="section-title">Your Trusted Staffing Partner in Quebec</h2>
              <p className="section-subtitle">
                Established in Laval, QC, we've been the go-to staffing solution for manufacturing
                and recycling companies across Quebec for over 8 years.
              </p>
            </div>
            <div className="about-content">
              <div className="about-text">
                <div className="highlight-box">
                  <h3>🎯 Our Mission</h3>
                  <p>
                    To bridge the gap between skilled workers and growing businesses, ensuring
                    your production never stops while maintaining the highest standards of safety and quality.
                  </p>
                </div>

                <div className="about-features">
                  <div className="feature">
                    <div className="feature-icon">⚡</div>
                    <div>
                      <h4>Rapid Response</h4>
                      <p>Workers deployed within 4 hours of your call</p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">🔍</div>
                    <div>
                      <h4>Quality Screening</h4>
                      <p>Thorough background and skill verification</p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">💼</div>
                    <div>
                      <h4>Industry Expertise</h4>
                      <p>Deep understanding of manufacturing needs</p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">📈</div>
                    <div>
                      <h4>Scalable Solutions</h4>
                      <p>From 1 worker to 50+ for large projects</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-visual">
                <div className="industry-highlight">
                  <h3>🏭 Industries We Serve</h3>
                  <div className="industry-list">
                    <div className="industry-item">
                      <span className="industry-icon">🏭</span>
                      <div>
                        <strong>Manufacturing</strong>
                        <p>Assembly, production lines, quality control</p>
                      </div>
                    </div>
                    <div className="industry-item">
                      <span className="industry-icon">♻️</span>
                      <div>
                        <strong>Recycling</strong>
                        <p>Sorting, processing, equipment operation</p>
                      </div>
                    </div>
                    <div className="industry-item">
                      <span className="industry-icon">📦</span>
                      <div>
                        <strong>Warehousing</strong>
                        <p>Picking, packing, inventory management</p>
                      </div>
                    </div>
                    <div className="industry-item">
                      <span className="industry-icon">🚛</span>
                      <div>
                        <strong>Distribution</strong>
                        <p>Loading, shipping, logistics support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Our Services</div>
              <h2 className="section-title">Comprehensive Staffing Solutions</h2>
              <p className="section-subtitle">
                From short-term coverage to long-term workforce solutions, we have you covered.
              </p>
            </div>
            <div className="services-grid">
              <div className="service-card featured">
                <div className="service-header">
                  <div className="service-icon">⚡</div>
                  <span className="service-badge">Most Popular</span>
                </div>
                <h3>Emergency Staffing</h3>
                <p>Same-day worker placement for urgent production needs. Available 24/7 for critical situations.</p>
                <div className="service-features">
                  <span>✓ 4-hour response time</span>
                  <span>✓ Pre-screened workers</span>
                  <span>✓ 24/7 availability</span>
                </div>
                <a href="tel:514-463-4117" className="service-cta">Call Now</a>
              </div>

              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">🏭</div>
                </div>
                <h3>Manufacturing Personnel</h3>
                <p>Skilled workers for production lines, assembly, quality control, and machine operation.</p>
                <div className="service-features">
                  <span>✓ Experienced operators</span>
                  <span>✓ Safety certified</span>
                  <span>✓ Flexible contracts</span>
                </div>
                <a href="mailto:info@azcardinal.ca" className="service-cta">Get Quote</a>
              </div>

              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">📈</div>
                </div>
                <h3>Seasonal Scaling</h3>
                <p>Expand your workforce during peak seasons with reliable temporary workers.</p>
                <div className="service-features">
                  <span>✓ Scalable solutions</span>
                  <span>✓ Long-term contracts</span>
                  <span>✓ Team coordination</span>
                </div>
                <a href="mailto:info@azcardinal.ca" className="service-cta">Learn More</a>
              </div>

              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">🎯</div>
                </div>
                <h3>Specialized Roles</h3>
                <p>Forklift operators, machine technicians, and other specialized manufacturing roles.</p>
                <div className="service-features">
                  <span>✓ Certified operators</span>
                  <span>✓ Skill verification</span>
                  <span>✓ Training support</span>
                </div>
                <a href="mailto:info@azcardinal.ca" className="service-cta">Discuss Needs</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="section why-us-section">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Why Cardinal Placement</div>
              <h2 className="section-title">The Difference That Matters</h2>
            </div>
            <div className="why-us-grid">
              <div className="why-us-item">
                <div className="metric">
                  <span className="metric-number">98%</span>
                  <span className="metric-label">Client Satisfaction</span>
                </div>
                <p>Our clients consistently rate our service as excellent</p>
              </div>
              <div className="why-us-item">
                <div className="metric">
                  <span className="metric-number">4hrs</span>
                  <span className="metric-label">Average Response</span>
                </div>
                <p>From your call to worker deployment</p>
              </div>
              <div className="why-us-item">
                <div className="metric">
                  <span className="metric-number">95%</span>
                  <span className="metric-label">Retention Rate</span>
                </div>
                <p>Workers complete their assignments successfully</p>
              </div>
              <div className="why-us-item">
                <div className="metric">
                  <span className="metric-number">24/7</span>
                  <span className="metric-label">Support Available</span>
                </div>
                <p>Round-the-clock support for emergencies</p>
              </div>
            </div>

            <div className="testimonial">
              <blockquote>
                "Cardinal Placement has been our go-to staffing partner for 3 years. Their quick response time and quality workers have helped us meet every production deadline."
              </blockquote>
              <cite>— Operations Manager, Leading Manufacturing Company</cite>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Get In Touch</div>
              <h2 className="section-title">Ready to Solve Your Staffing Challenges?</h2>
              <p className="section-subtitle">
                Contact us today for immediate staffing solutions or to discuss your long-term workforce needs.
              </p>
            </div>

            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-person">
                  <div className="person-avatar">AB</div>
                  <div className="person-details">
                    <h3>Adlen Boukerdenna</h3>
                    <p className="title">President & Commercial Director</p>
                    <p className="experience">8+ years in staffing solutions</p>
                  </div>
                </div>

                <div className="contact-methods">
                  <div className="contact-item priority">
                    <div className="contact-icon">📞</div>
                    <div className="contact-details">
                      <span className="contact-label">Emergency Staffing Hotline</span>
                      <a href="tel:514-463-4117" className="contact-value primary">514-463-4117</a>
                      <span className="availability">Available 24/7 for urgent needs</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div className="contact-details">
                      <span className="contact-label">Business Inquiries</span>
                      <a href="mailto:info@azcardinal.ca" className="contact-value">info@azcardinal.ca</a>
                      <span className="availability">Response within 2 hours</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div className="contact-details">
                      <span className="contact-label">Service Area</span>
                      <span className="contact-value">Greater Montreal & Laval Region</span>
                      <span className="availability">193 Boul Daniel Johnson, Laval, QC H7V 2E3</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">⏰</div>
                    <div className="contact-details">
                      <span className="contact-label">Business Hours</span>
                      <span className="contact-value">Mon-Fri: 6 AM - 8 PM</span>
                      <span className="availability">Emergency staffing available 24/7</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-cta">
                <div className="cta-card">
                  <h3>🚨 Need Workers Today?</h3>
                  <p>Call our emergency staffing hotline for same-day placement</p>
                  <a href="tel:514-463-4117" className="cta-button urgent">
                    <span>📞</span>
                    Call Emergency Line
                  </a>
                </div>

                <div className="cta-card">
                  <h3>📋 Plan Ahead</h3>
                  <p>Request a custom quote for your upcoming staffing needs</p>
                  <a href="mailto:info@azcardinal.ca" className="cta-button">
                    <span>📧</span>
                    Request Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-logo">
                <div className="cardinal-icon small">
                  <div className="bird-swoosh"></div>
                </div>
                <div>
                  <span className="footer-company">Cardinal Placement Services</span>
                  <span className="footer-tagline">Your Manufacturing Workforce Partner</span>
                </div>
              </div>

              <div className="footer-quick-contact">
                <h4>Quick Contact</h4>
                <a href="tel:514-463-4117" className="footer-phone">📞 514-463-4117</a>
                <a href="mailto:info@azcardinal.ca" className="footer-email">📧 info@azcardinal.ca</a>
              </div>

              <div className="footer-certifications">
                <h4>Certifications</h4>
                <div className="cert-badges">
                  <span className="cert-badge">🛡️ Fully Insured</span>
                  <span className="cert-badge">✅ WSIB Compliant</span>
                  <span className="cert-badge">🏆 8+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Cardinal Placement Services Inc. All rights reserved.</p>
              <p className="footer-disclaimer">Licensed staffing agency serving Quebec manufacturing and recycling industries.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;