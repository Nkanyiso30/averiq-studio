
import './App.css';

const services = [
  {
    number: '01',
    title: 'Shopify Development',
    description:
      'Professional, easy-to-use online stores designed to help businesses present and sell their products online.',
    tag: 'E-commerce',
  },
  {
    number: '02',
    title: 'Website Development',
    description:
      'Modern, responsive websites that communicate your brand clearly and give customers a better experience.',
    tag: 'Web solutions',
  },
  {
    number: '03',
    title: 'Digital Advertising',
    description:
      'Creative advertising visuals and campaign setup to help businesses reach the right audience.',
    tag: 'Marketing',
  },
];

const projects = [
  {
    type: 'E-commerce concept',
    name: 'Modern Shopify Store',
    description: 'A concept online store demonstrating clean product presentation and a simple shopping experience.',
    className: 'project-one',
    label: '01 / CONCEPT',
  },
  {
    type: 'Web experience concept',
    name: 'Business Website',
    description: 'A modern website concept focused on clear messaging, strong design and mobile responsiveness.',
    className: 'project-two',
    label: '02 / CONCEPT',
  },
  {
    type: 'Advertising concept',
    name: 'Campaign Creative',
    description: 'A sample creative direction showing how a business could present its offer to customers.',
    className: 'project-three',
    label: '03 / CONCEPT',
  },
];


const products = [
  {
    name: 'CareerCompass',
    description:
      'A career guidance platform helping students explore career paths and make informed decisions about their future.',
    category: 'Career guidance',
  },
  {
    name: 'ChoiceWise AI',
    description:
      'An AI-powered decision-support platform that helps people identify suspicious messages, potential scams and warning signs.',
    category: 'AI & digital safety',
  },
  {
    name: 'SafeGuard',
    description:
      'A mobile safety application focused on helping people stay safe and respond when emergencies happen.',
    category: 'Emergency safety',
  },
];

function BrandMark() {
  return (
    <div className="brand">
      <div className="brand-symbol">A</div>
      <span>AVERIQ<span className="brand-dot">.</span></span>
    </div>
  );
}

function App() {
  return (
    <main>
      <header className="navbar">
        <a className="brand-link" href="#home" aria-label="Averiq Studio home">
          <BrandMark />
        </a>

        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Our work</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let's talk <span>↗</span>
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            INDEPENDENT DIGITAL STUDIO
          </div>

          <h1>
            We turn bold
            <br />
            ideas into <span>digital</span>
            <br />
            experiences.
          </h1>

          <p className="hero-description">
            We create modern websites, online stores and digital experiences
            that help ambitious businesses move forward.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#contact">
              Start a project <span>↗</span>
            </a>
            <a className="button-secondary" href="#work">
              Explore our work <span>↓</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            BUILT WITH PURPOSE. DESIGNED FOR GROWTH.
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract digital design artwork">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-core">
            <div className="core-letter">A</div>
            <div className="core-caption">IDEAS INTO IMPACT</div>
          </div>
          <div className="floating-card card-top">
            <span className="mini-dot" /> DIGITAL THINKING
          </div>
          <div className="floating-card card-bottom">
            <span>✳</span> MADE TO MOVE FORWARD
          </div>
        </div>

        <div className="hero-bottom">
          <span>STRATEGY</span>
          <span>DESIGN</span>
          <span>DEVELOPMENT</span>
          <span>GROWTH</span>
        </div>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="section-label">01 / WHO WE ARE</div>
        <div>
          <h2>
            Good ideas deserve
            <br />
            <span>great execution.</span>
          </h2>
          <p>
            Averiq Studio is a digital studio focused on building useful,
            thoughtful and well-designed digital experiences. We bring
            technology and creativity together to help turn ideas into
            something people can actually use.
          </p>
        </div>
      </section>

      <section className="services section-wrap" id="services">
        <div className="section-heading">
          <div>
            <div className="section-label">02 / WHAT WE DO</div>
            <h2>Services built around<br />your next move.</h2>
          </div>
          <p>Practical digital solutions, designed around your business goals.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <span className="service-arrow">↗</span>
              </div>
              <div>
                <span className="service-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-heading">
          <div>
            <div className="section-label">03 / SELECTED WORK</div>
            <h2>Ideas brought<br />to the screen.</h2>
          </div>
          <p>Examples of the design and development quality we aim to deliver.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number || project.name}>
              <div className={`project-art ${project.className}`}>
                <span className="project-label">{project.label}</span>
                <div className="art-shape">
                  {project.className === 'project-one' && (
                    <div className="store-mock">
                      <span>OBJECTS / 01</span>
                      <strong>Less, but<br />better.</strong>
                      <i>Explore collection ↗</i>
                    </div>
                  )}
                  {project.className === 'project-two' && (
                    <div className="web-mock">
                      <span>YOUR NEXT CHAPTER</span>
                      <strong>Make your<br />mark.</strong>
                      <div className="mock-line" />
                    </div>
                  )}
                  {project.className === 'project-three' && (
                    <div className="ad-mock">
                      <span>THINK DIFFERENT.</span>
                      <strong>MAKE<br />IT MATTER.</strong>
                      <i>CREATIVE / 003</i>
                    </div>
                  )}
                </div>
              </div>
              <div className="project-info">
                <div>
                  <span>{project.type}</span>
                  <h3>{project.name}</h3>
                </div>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="portfolio-disclaimer">
          These are concept demonstrations, not commissioned client projects.
        </p>
      </section>

      <section className="products section-wrap" id="products">
        <div className="section-heading">
          <div>
            <div className="section-label">04 / OUR PRODUCTS</div>
            <h2>Our ideas.<br />Our digital products.</h2>
          </div>
          <p>Independent products with their own purpose, identity and experience.</p>
        </div>

        <div className="product-list">
          {products.map((product, index) => (
            <article className="product-row" key={product.name}>
              <span className="product-number">0{index + 1}</span>
              <div className="product-name">
                <span>{product.category}</span>
                <h3>{product.name}</h3>
              </div>
              <p>{product.description}</p>
              <span className="product-symbol">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="section-label">05 / LET'S BUILD SOMETHING</div>
        <h2>
          Have an idea?
          <br />
          <span>Let's make it real.</span>
        </h2>
        <p>
          Tell us what you're working on. We're interested in hearing about
          your business, your goals and the digital experience you want to create.
        </p>
        <span className="button-primary">
          Contact details coming soon <span>↗</span>
        </span>
        <div className="contact-foot">AVERIQ STUDIO · IDEAS INTO IMPACT.</div>
      </section>

      <footer className="footer">
        <BrandMark />
        <span>© {new Date().getFullYear()} Averiq Studio. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}

export default App;
