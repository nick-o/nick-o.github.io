import './App.css'

const clients = [
  'Parloa',
  'PPRO',
  'Vaillant Group',
  'Edeka',
  'Lulalend',
  'ASOS.com',
  "Sainsbury's",
  'Wonga',
  'Bunzl Europe',
  'LOVEFiLM (acq. Amazon)',
  'Rackspace',
]

function App() {
  return (
    <main>
      <header className="hero">
        <div className="hero-top">
          <img src="/me.jpg" alt="Nico Engelen" className="avatar" />
          <div className="hero-titles">
            <h1>Nico Engelen</h1>
            <p className="headline">
              Cloud Architect &amp; Senior DevOps Consultant
            </p>
          </div>
        </div>
        <p className="bio">
          15+ years on Azure and AWS, sitting between architecture and
          hands-on engineering. I take on senior cloud and platform
          engagements where the work is genuinely needed &mdash; not where a
          slide deck would suffice. Remote-first from Berlin; open to EU
          travel when it matters.
        </p>
        <nav className="contact">
          <a href="mailto:nico@engelen.io">nico@engelen.io</a>
          <a
            href="https://linkedin.com/in/nico-engelen"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/nick-o"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="/cv.docx" className="cta" download>
            Download CV
          </a>
        </nav>
      </header>

      <section className="clients">
        <h2>Selected clients</h2>
        <ul>
          {clients.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section className="availability">
        <h2>Availability</h2>
        <p>
          Currently engaged with Parloa via Equal Experts. Available for new
          client work from 1 July 2026.
        </p>
        <p>
          To discuss work, get in touch at{' '}
          <a href="mailto:nico@engelen.io">nico@engelen.io</a>.
        </p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Nico Engelen</p>
      </footer>
    </main>
  )
}

export default App
