import { useState, useEffect } from 'react';
import './App.css';

// Translations object
const translations = {
  fr: {
    // Header
    about: "À propos",
    services: "Services",
    whyUs: "Pourquoi nous",
    contact: "Contact",
    getQuote: "Obtenir un devis",
    callNow: "Appelez maintenant",

    // Hero Section
    heroTrusted: "🏆 Plus de 8 entreprises manufacturières nous font confiance",
    heroTitle: "Solutions de main-d'œuvre",
    heroHighlight: "Premier",
    heroSubtitle: "d'excellence manufacturière",
    heroDescription: "Nous connectons les principaux fabricants du Québec avec des travailleurs temporaires qualifiés et fiables. Plus de 3 ans de résultats éprouvés dans les industries manufacturières et de recyclage.",
    heroCtaPrimary: "Appelez pour du personnel immédiat",
    heroCtaSecondary: "Demander un devis",
    trustedBy: "Ils nous font confiance",

    // Hero Stats
    activeWorkers: "Travailleurs actifs",
    yearsExperience: "Années d'expérience",
    support: "Soutien",
    partnerCompanies: "Entreprises partenaires",

    // Trust Section
    trustInsured: "Entièrement assuré",
    trustInsuredDesc: "Couverture de responsabilité complète pour votre tranquillité d'esprit",
    trustWSIB: "Conforme CNESST",
    trustWSIBDesc: "Tous les travailleurs entièrement couverts et conformes",
    trustSameDay: "Placement le jour même",
    trustSameDayDesc: "Solutions de personnel d'urgence disponibles 24h/7j",
    trustScreened: "Travailleurs pré-sélectionnés",
    trustScreenedDesc: "Vérification des antécédents et droits de travailler sur le territoire",
    trustTransport: "Transport assuré",
    trustTransportDesc: "Nous assurons le transport des employés vers votre site",

    // About Section
    aboutBadge: "À propos de Cardinal Placement",
    aboutTitle: "Votre partenaire de dotation de confiance au Québec",
    aboutSubtitle: "Établie à Laval, QC, nous sommes la solution de dotation de référence pour les entreprises manufacturières et de recyclage à travers le Québec depuis 2022.",
    missionTitle: "🎯 Notre mission",
    missionDesc: "Faire le pont entre les travailleurs qualifiés et les entreprises en croissance, en veillant à ce que votre production ne s'arrête jamais tout en maintenant les plus hauts standards de sécurité et de qualité.",

    // About Features
    rapidResponse: "Réponse rapide",
    rapidResponseDesc: "Travailleurs déployés dans les 4 heures de votre appel",
    qualityScreening: "Sélection de qualité",
    qualityScreeningDesc: "Vérification approfondie des antécédents et validation des compétences",
    industryExpertise: "Expertise industrielle",
    industryExpertiseDesc: "Compréhension approfondie des besoins manufacturiers",
    scalableSolutions: "Solutions évolutives",
    scalableSolutionsDesc: "De 1 travailleur à 50+ pour de grands projets",

    // Industries
    industriesTitle: "🏭 Industries que nous servons",
    manufacturing: "Fabrication",
    manufacturingDesc: "Assemblage, lignes de production, contrôle qualité",
    recycling: "Recyclage",
    recyclingDesc: "Tri, traitement, opération d'équipement",
    warehousing: "Entreposage",
    warehousingDesc: "Cueillette, emballage, gestion d'inventaire",
    distribution: "Distribution",
    distributionDesc: "Chargement, expédition, soutien logistique",
    agroFood: "Agro-alimentaire",
    agroFoodDesc: "Production alimentaire, transformation, emballage",

    // Services Section
    servicesBadge: "Nos services",
    servicesTitle: "Solutions de dotation complètes",
    servicesSubtitle: "De la couverture à court terme aux solutions de main-d'œuvre à long terme, nous avons ce qu'il vous faut. Ouverts à n'importe quelle durée de contrat.",

    mostPopular: "Plus populaire",
    emergencyStaffing: "Personnel d'urgence",
    emergencyStaffingDesc: "Placement de travailleurs le jour même pour les besoins de production urgents. Disponible 24h/7j pour les situations critiques.",
    responseTime4h: "✓ Temps de réponse 4 heures",
    prescreenedWorkers: "✓ Travailleurs pré-sélectionnés",
    availability247: "✓ Disponibilité 24h/7j",

    manufacturingPersonnel: "Personnel manufacturier",
    manufacturingPersonnelDesc: "Travailleurs qualifiés pour les lignes de production, l'assemblage, le contrôle qualité et l'opération de machines.",
    experiencedOperators: "✓ Opérateurs expérimentés",
    safetyCertified: "✓ Certifiés sécurité",
    flexibleContracts: "✓ Contrats flexibles",

    seasonalScaling: "Mise à l'échelle saisonnière",
    seasonalScalingDesc: "Élargissez votre main-d'œuvre pendant les périodes de pointe avec des travailleurs temporaires fiables.",
    scalableSols: "✓ Solutions évolutives",
    longTermContracts: "✓ Contrats à long terme",
    teamCoordination: "✓ Coordination d'équipe",

    specializedRoles: "Rôles spécialisés",
    specializedRolesDesc: "Opérateurs de chariot élévateur, électro-mécaniciens, techniciens de machines et autres rôles manufacturiers spécialisés.",
    certifiedOperators: "✓ Opérateurs certifiés",
    skillVerification: "✓ Vérification des compétences",
    trainingSupport: "✓ Soutien de formation",

    learnMore: "En savoir plus",
    discussNeeds: "Discuter des besoins",

    // Why Us Section
    whyUsBadge: "Pourquoi Cardinal Placement",
    whyUsTitle: "La différence qui compte",
    clientSatisfaction: "Satisfaction client",
    clientSatisfactionDesc: "Nos clients évaluent constamment notre service comme excellent",
    averageResponse: "Réponse moyenne",
    averageResponseDesc: "De votre appel au déploiement du travailleur",
    retentionRate: "Taux de rétention",
    retentionRateDesc: "Les travailleurs terminent leurs affectations avec succès",
    supportAvailable: "Soutien disponible",
    supportAvailableDesc: "Soutien 24h/7j pour les urgences",

    // Contact Section
    contactBadge: "Entrer en contact",
    contactTitle: "Prêt à résoudre vos défis de dotation?",
    contactSubtitle: "Contactez-nous aujourd'hui pour des solutions de dotation immédiates ou pour discuter de vos besoins de main-d'œuvre à long terme.",

    president: "Président et directeur commercial",
    experience8Years: "3+ années en solutions de dotation",

    emergencyHotline: "Ligne d'urgence pour le personnel",
    emergencyAvailable: "Disponible 24h/7j pour besoins urgents",
    businessInquiries: "Demandes commerciales",
    responseWithin2h: "Réponse dans les 2 heures",
    serviceArea: "Zone de service",
    serviceAreaDesc: "Région du Grand Montréal et Laval",
    officeAddress: "Adresse du bureau",
    officeAddressValue: "5200 Boulevard des Laurentides, Laval, QC, H7K 2J8",
    businessHours: "Heures d'affaires",
    businessHoursDesc: "Lun-Ven: 6h - 20h",
    emergencyStaffingAvailable: "Personnel d'urgence disponible 24h/7j",

    needWorkersToday: "🚨 Besoin de travailleurs aujourd'hui?",
    needWorkersTodayDesc: "Appelez notre ligne d'urgence pour un placement le jour même",
    callEmergencyLine: "Appeler la ligne d'urgence",
    planAhead: "📋 Planifiez à l'avance",
    planAheadDesc: "Demandez un devis personnalisé pour vos futurs besoins en personnel",
    requestQuote: "Demander un devis",

    // Footer
    footerTagline: "Votre partenaire de main-d'œuvre manufacturière",
    quickContact: "Contact rapide",
    certifications: "Certifications",
    fullyInsured: "🛡️ Entièrement assuré",
    wsibCompliant: "✅ Conforme CNESST",
    experienceYears: "🏆 3+ années d'expérience",
    footerRights: "Cardinal Placement Services Inc. Tous droits réservés.",
    footerDisclaimer: "Agence de dotation licenciée desservant les industries manufacturières et de recyclage du Québec."
  },
  en: {
    // Header
    about: "About",
    services: "Services",
    whyUs: "Why Choose Us",
    contact: "Contact",
    getQuote: "Get Quote",
    callNow: "Call Now",

    // Hero Section
    heroTrusted: "🏆 Trusted by 8+ Manufacturing Companies",
    heroTitle: "Workforce Solutions",
    heroHighlight: "Premier",
    heroSubtitle: "for Manufacturing Excellence",
    heroDescription: "Connecting Quebec's leading manufacturers with skilled, reliable temporary workers. Over 3 years of proven results in manufacturing and recycling industries.",
    heroCtaPrimary: "Call for Immediate Staffing",
    heroCtaSecondary: "Request Quote",
    trustedBy: "Trusted By",

    // Hero Stats
    activeWorkers: "Active Workers",
    yearsExperience: "Years Experience",
    support: "Support",
    partnerCompanies: "Partner Companies",

    // Trust Section
    trustInsured: "Fully Insured & Bonded",
    trustInsuredDesc: "Complete liability coverage for your peace of mind",
    trustWSIB: "WSIB Compliant",
    trustWSIBDesc: "All workers fully covered and compliant",
    trustSameDay: "Same-Day Placement",
    trustSameDayDesc: "Emergency staffing solutions available 24/7",
    trustScreened: "Pre-Screened Workers",
    trustScreenedDesc: "Background checks and work authorization verification",
    trustTransport: "Transportation Provided",
    trustTransportDesc: "We ensure employee transportation to your site",

    // About Section
    aboutBadge: "About Cardinal Placement",
    aboutTitle: "Your Trusted Staffing Partner in Quebec",
    aboutSubtitle: "Established in Laval, QC, we've been the go-to staffing solution for manufacturing and recycling companies across Quebec since 2022.",
    missionTitle: "🎯 Our Mission",
    missionDesc: "To bridge the gap between skilled workers and growing businesses, ensuring your production never stops while maintaining the highest standards of safety and quality.",

    // About Features
    rapidResponse: "Rapid Response",
    rapidResponseDesc: "Workers deployed within 4 hours of your call",
    qualityScreening: "Quality Screening",
    qualityScreeningDesc: "Thorough background and skill verification",
    industryExpertise: "Industry Expertise",
    industryExpertiseDesc: "Deep understanding of manufacturing needs",
    scalableSolutions: "Scalable Solutions",
    scalableSolutionsDesc: "From 1 worker to 50+ for large projects",

    // Industries
    industriesTitle: "🏭 Industries We Serve",
    manufacturing: "Manufacturing",
    manufacturingDesc: "Assembly, production lines, quality control",
    recycling: "Recycling",
    recyclingDesc: "Sorting, processing, equipment operation",
    warehousing: "Warehousing",
    warehousingDesc: "Picking, packing, inventory management",
    distribution: "Distribution",
    distributionDesc: "Loading, shipping, logistics support",
    agroFood: "Agri-Food",
    agroFoodDesc: "Food production, processing, packaging",

    // Services Section
    servicesBadge: "Our Services",
    servicesTitle: "Comprehensive Staffing Solutions",
    servicesSubtitle: "From short-term coverage to long-term workforce solutions, we have you covered. Open to any contract duration.",

    mostPopular: "Most Popular",
    emergencyStaffing: "Emergency Staffing",
    emergencyStaffingDesc: "Same-day worker placement for urgent production needs. Available 24/7 for critical situations.",
    responseTime4h: "✓ 4-hour response time",
    prescreenedWorkers: "✓ Pre-screened workers",
    availability247: "✓ 24/7 availability",

    manufacturingPersonnel: "Manufacturing Personnel",
    manufacturingPersonnelDesc: "Skilled workers for production lines, assembly, quality control, and machine operation.",
    experiencedOperators: "✓ Experienced operators",
    safetyCertified: "✓ Safety certified",
    flexibleContracts: "✓ Flexible contracts",

    seasonalScaling: "Seasonal Scaling",
    seasonalScalingDesc: "Expand your workforce during peak seasons with reliable temporary workers.",
    scalableSols: "✓ Scalable solutions",
    longTermContracts: "✓ Long-term contracts",
    teamCoordination: "✓ Team coordination",

    specializedRoles: "Specialized Roles",
    specializedRolesDesc: "Forklift operators, electromechanics, machine technicians, and other specialized manufacturing roles.",
    certifiedOperators: "✓ Certified operators",
    skillVerification: "✓ Skill verification",
    trainingSupport: "✓ Training support",

    learnMore: "Learn More",
    discussNeeds: "Discuss Needs",

    // Why Us Section
    whyUsBadge: "Why Cardinal Placement",
    whyUsTitle: "The Difference That Matters",
    clientSatisfaction: "Client Satisfaction",
    clientSatisfactionDesc: "Our clients consistently rate our service as excellent",
    averageResponse: "Average Response",
    averageResponseDesc: "From your call to worker deployment",
    retentionRate: "Retention Rate",
    retentionRateDesc: "Workers complete their assignments successfully",
    supportAvailable: "Support Available",
    supportAvailableDesc: "Round-the-clock support for emergencies",

    // Contact Section
    contactBadge: "Get In Touch",
    contactTitle: "Ready to Solve Your Staffing Challenges?",
    contactSubtitle: "Contact us today for immediate staffing solutions or to discuss your long-term workforce needs.",

    president: "President & Commercial Director",
    experience8Years: "3+ years in staffing solutions",

    emergencyHotline: "Emergency Staffing Hotline",
    emergencyAvailable: "Available 24/7 for urgent needs",
    businessInquiries: "Business Inquiries",
    responseWithin2h: "Response within 2 hours",
    serviceArea: "Service Area",
    serviceAreaDesc: "Greater Montreal & Laval Region",
    officeAddress: "Office Address",
    officeAddressValue: "5200 Boulevard des Laurentides, Laval, QC, H7K 2J8",
    businessHours: "Business Hours",
    businessHoursDesc: "Mon-Fri: 6 AM - 8 PM",
    emergencyStaffingAvailable: "Emergency staffing available 24/7",

    needWorkersToday: "🚨 Need Workers Today?",
    needWorkersTodayDesc: "Call our emergency staffing hotline for same-day placement",
    callEmergencyLine: "Call Emergency Line",
    planAhead: "📋 Plan Ahead",
    planAheadDesc: "Request a custom quote for your upcoming staffing needs",
    requestQuote: "Request Quote",

    // Footer
    footerTagline: "Your Manufacturing Workforce Partner",
    quickContact: "Quick Contact",
    certifications: "Certifications",
    fullyInsured: "🛡️ Fully Insured",
    wsibCompliant: "✅ WSIB Compliant",
    experienceYears: "🏆 3+ Years Experience",
    footerRights: "Cardinal Placement Services Inc. All rights reserved.",
    footerDisclaimer: "Licensed staffing agency serving Quebec manufacturing and recycling industries."
  }
};

// Client logos data
const clients = [
  { name: "GFL MATREC", id: 1 },
  { name: "ENVIRON CONNEXION", id: 2 },
  { name: "VIZU SOLUTION", id: 3 },
  { name: "Gaudreau Environnement Inc", id: 4 },
  { name: "WEST MANAGEMENT", id: 5 },
  { name: "ALUMINIUM PROVOST", id: 6 },
  { name: "Millet Plastic", id: 7 },
  { name: "E360", id: 8 }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('fr'); // Default to French

  const t = translations[language as keyof typeof translations];

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
          <span className="contact-text">{t.callNow}</span>
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

          <div className="header-right">
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
              <a href="#about" className="nav-link">{t.about}</a>
              <a href="#services" className="nav-link">{t.services}</a>
              <a href="#why-us" className="nav-link">{t.whyUs}</a>
              <a href="#contact" className="nav-link">{t.contact}</a>
              <a href="tel:514-463-4117" className="nav-cta">{t.getQuote}</a>
            </nav>

            <div className="language-switcher">
              <button
                className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
                onClick={() => setLanguage('fr')}
              >
                FR
              </button>
              <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>

            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>

        <div className="hero-content">
          <div className="hero-badge">
            <span>{t.heroTrusted}</span>
          </div>
          <h1 className="hero-title">
            {t.heroHighlight} <span className="highlight">{t.heroTitle}</span> {t.heroSubtitle}
          </h1>
          <p className="hero-subtitle">
            {t.heroDescription}
          </p>

          <div className="hero-cta">
            <a href="tel:514-463-4117" className="cta-primary">
              <span>📞</span>
              {t.heroCtaPrimary}
            </a>
            <a href="mailto:info@azcardinal.ca" className="cta-secondary">
              <span>📧</span>
              {t.heroCtaSecondary}
            </a>
          </div>

          {/* Client Carousel */}
          <div className="clients-section">
            <h3 className="clients-title">{t.trustedBy}</h3>
            <div className="clients-carousel">
              <div className="clients-track">
                {[...clients, ...clients].map((client, index) => (
                  <div key={`${client.id}-${index}`} className="client-card">
                    <div className="client-logo">
                      {client.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">{t.activeWorkers}</span>
            </div>
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">{t.yearsExperience}</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">{t.support}</span>
            </div>
            <div className="stat">
              <span className="stat-number">8+</span>
              <span className="stat-label">{t.partnerCompanies}</span>
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
                <h3>{t.trustInsured}</h3>
                <p>{t.trustInsuredDesc}</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">✅</div>
                <h3>{t.trustWSIB}</h3>
                <p>{t.trustWSIBDesc}</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">🎯</div>
                <h3>{t.trustSameDay}</h3>
                <p>{t.trustSameDayDesc}</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">📋</div>
                <h3>{t.trustScreened}</h3>
                <p>{t.trustScreenedDesc}</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">🚗</div>
                <h3>{t.trustTransport}</h3>
                <p>{t.trustTransportDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">{t.aboutBadge}</div>
              <h2 className="section-title">{t.aboutTitle}</h2>
              <p className="section-subtitle">
                {t.aboutSubtitle}
              </p>
            </div>
            <div className="about-content">
              <div className="about-text">
                <div className="highlight-box">
                  <h3>{t.missionTitle}</h3>
                  <p>
                    {t.missionDesc}
                  </p>
                </div>

                <div className="about-features">
                  <div className="feature">
                    <div className="feature-icon">⚡</div>
                    <div>
                      <h4>{t.rapidResponse}</h4>
                      <p>{t.rapidResponseDesc}</p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">🔍</div>
                    <div>
                      <h4>{t.qualityScreening}</h4>
                      <p>{t.qualityScreeningDesc}</p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">💼</div>
                    <div>
                      <h4>{t.industryExpertise}</h4>
                      <p>{t.industryExpertiseDesc}</p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">📈</div>
                    <div>
                      <h4>{t.scalableSolutions}</h4>
                      <p>{t.scalableSolutionsDesc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-visual">
                <div className="industry-highlight">
                  <h3>{t.industriesTitle}</h3>
                  <div className="industry-list">
                    <div className="industry-item">
                      <span className="industry-icon">🏭</span>
                      <div>
                        <strong>{t.manufacturing}</strong>
                        <p>{t.manufacturingDesc}</p>
                      </div>
                    </div>
                    <div className="industry-item">
                      <span className="industry-icon">♻️</span>
                      <div>
                        <strong>{t.recycling}</strong>
                        <p>{t.recyclingDesc}</p>
                      </div>
                    </div>
                    <div className="industry-item">
                      <span className="industry-icon">📦</span>
                      <div>
                        <strong>{t.warehousing}</strong>
                        <p>{t.warehousingDesc}</p>
                      </div>
                    </div>
                    <div className="industry-item">
                      <span className="industry-icon">🚛</span>
                      <div>
                        <strong>{t.distribution}</strong>
                        <p>{t.distributionDesc}</p>
                      </div>
                    </div>
                    <div className="industry-item">
                      <span className="industry-icon">🌾</span>
                      <div>
                        <strong>{t.agroFood}</strong>
                        <p>{t.agroFoodDesc}</p>
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
              <div className="section-badge">{t.servicesBadge}</div>
              <h2 className="section-title">{t.servicesTitle}</h2>
              <p className="section-subtitle">
                {t.servicesSubtitle}
              </p>
            </div>
            <div className="services-grid">
              <div className="service-card featured">
                <div className="service-header">
                  <div className="service-icon">⚡</div>
                  <span className="service-badge">{t.mostPopular}</span>
                </div>
                <h3>{t.emergencyStaffing}</h3>
                <p>{t.emergencyStaffingDesc}</p>
                <div className="service-features">
                  <span>{t.responseTime4h}</span>
                  <span>{t.prescreenedWorkers}</span>
                  <span>{t.availability247}</span>
                </div>
                <a href="tel:514-463-4117" className="service-cta">{t.callNow}</a>
              </div>

              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">🏭</div>
                </div>
                <h3>{t.manufacturingPersonnel}</h3>
                <p>{t.manufacturingPersonnelDesc}</p>
                <div className="service-features">
                  <span>{t.experiencedOperators}</span>
                  <span>{t.safetyCertified}</span>
                  <span>{t.flexibleContracts}</span>
                </div>
                <a href="mailto:info@azcardinal.ca" className="service-cta">{t.getQuote}</a>
              </div>

              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">📈</div>
                </div>
                <h3>{t.seasonalScaling}</h3>
                <p>{t.seasonalScalingDesc}</p>
                <div className="service-features">
                  <span>{t.scalableSols}</span>
                  <span>{t.longTermContracts}</span>
                  <span>{t.teamCoordination}</span>
                </div>
                <a href="mailto:info@azcardinal.ca" className="service-cta">{t.learnMore}</a>
              </div>

              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">🎯</div>
                </div>
                <h3>{t.specializedRoles}</h3>
                <p>{t.specializedRolesDesc}</p>
                <div className="service-features">
                  <span>{t.certifiedOperators}</span>
                  <span>{t.skillVerification}</span>
                  <span>{t.trainingSupport}</span>
                </div>
                <a href="mailto:info@azcardinal.ca" className="service-cta">{t.discussNeeds}</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="section why-us-section">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">{t.whyUsBadge}</div>
              <h2 className="section-title">{t.whyUsTitle}</h2>
            </div>
            <div className="why-us-grid">
              <div className="why-us-item">
                <div className="metric">
                  <span className="metric-number">98%</span>
                  <span className="metric-label">{t.clientSatisfaction}</span>
                </div>
                <p>{t.clientSatisfactionDesc}</p>
              </div>
              <div className="why-us-item">
                <div className="metric">
                  <span className="metric-number">4hrs</span>
                  <span className="metric-label">{t.averageResponse}</span>
                </div>
                <p>{t.averageResponseDesc}</p>
              </div>
              <div className="why-us-item">
                <div className="metric">
                  <span className="metric-number">95%</span>
                  <span className="metric-label">{t.retentionRate}</span>
                </div>
                <p>{t.retentionRateDesc}</p>
              </div>
              <div className="why-us-item">
                <div className="metric">
                  <span className="metric-number">24/7</span>
                  <span className="metric-label">{t.supportAvailable}</span>
                </div>
                <p>{t.supportAvailableDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">{t.contactBadge}</div>
              <h2 className="section-title">{t.contactTitle}</h2>
              <p className="section-subtitle">
                {t.contactSubtitle}
              </p>
            </div>

            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-person">
                  <div className="person-avatar">AB</div>
                  <div className="person-details">
                    <h3>Adlen Boukerdenna</h3>
                    <p className="title">{t.president}</p>
                    <p className="experience">{t.experience8Years}</p>
                  </div>
                </div>

                <div className="contact-methods">
                  <div className="contact-item priority">
                    <div className="contact-icon">📞</div>
                    <div className="contact-details">
                      <span className="contact-label">{t.emergencyHotline}</span>
                      <a href="tel:514-463-4117" className="contact-value primary">514-463-4117</a>
                      <span className="availability">{t.emergencyAvailable}</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div className="contact-details">
                      <span className="contact-label">{t.businessInquiries}</span>
                      <a href="mailto:info@azcardinal.ca" className="contact-value">info@azcardinal.ca</a>
                      <span className="availability">{t.responseWithin2h}</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div className="contact-details">
                      <span className="contact-label">{t.officeAddress}</span>
                      <span className="contact-value">{t.officeAddressValue}</span>
                      <span className="availability">{t.serviceAreaDesc}</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">⏰</div>
                    <div className="contact-details">
                      <span className="contact-label">{t.businessHours}</span>
                      <span className="contact-value">{t.businessHoursDesc}</span>
                      <span className="availability">{t.emergencyStaffingAvailable}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-cta">
                <div className="cta-card">
                  <h3>{t.needWorkersToday}</h3>
                  <p>{t.needWorkersTodayDesc}</p>
                  <a href="tel:514-463-4117" className="cta-button urgent">
                    <span>📞</span>
                    {t.callEmergencyLine}
                  </a>
                </div>

                <div className="cta-card">
                  <h3>{t.planAhead}</h3>
                  <p>{t.planAheadDesc}</p>
                  <a href="mailto:info@azcardinal.ca" className="cta-button">
                    <span>📧</span>
                    {t.requestQuote}
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
                  <span className="footer-tagline">{t.footerTagline}</span>
                </div>
              </div>

              <div className="footer-quick-contact">
                <h4>{t.quickContact}</h4>
                <a href="tel:514-463-4117" className="footer-phone">📞 514-463-4117</a>
                <a href="mailto:info@azcardinal.ca" className="footer-email">📧 info@azcardinal.ca</a>
              </div>

              <div className="footer-certifications">
                <h4>{t.certifications}</h4>
                <div className="cert-badges">
                  <span className="cert-badge">{t.fullyInsured}</span>
                  <span className="cert-badge">{t.wsibCompliant}</span>
                  <span className="cert-badge">{t.experienceYears}</span>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} {t.footerRights}</p>
              <p className="footer-disclaimer">{t.footerDisclaimer}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
