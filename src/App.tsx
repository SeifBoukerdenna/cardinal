import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">Cardinal Placement</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section id="about" className="section">
          <h2>Who We Are</h2>
          <p>
            Based in Laval, QC, Cardinal Placement connects businesses in manufacturing and recycling
            with reliable, skilled temporary workers. With over 150 active employees, we deliver results
            that meet production demands.
          </p>
        </section>

        <section id="services" className="section">
          <h2>Our Services</h2>
          <ul>
            <li>Temporary labor for factories and warehouses</li>
            <li>On-demand workforce scaling</li>
            <li>Dedicated account management</li>
          </ul>
        </section>

        <section id="contact" className="section">
          <h2>Contact Us</h2>
          <p>Adlen Boukerdenna, President-Directeur Commercial</p>
          <p>📞 514-463-4117</p>
          <p>📧 info@azcardinal.ca</p>
          <p>📍 193 Boul Daniel Johnson, Laval, QC H7V 2E3</p>
        </section>
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Cardinal Placement. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
