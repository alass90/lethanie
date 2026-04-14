import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  useEffect(() => {
    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 100)
          }
        })
      },
      { threshold: 0.1 }
    )
    reveals.forEach((r) => io.observe(r))

    return () => {
      reveals.forEach((r) => io.unobserve(r))
    }
  }, [])

  return (
    <main>
      {/* NAV */}
      <nav>
        <Link to="/" className="nav-logo">
          Lethanie
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="#research">Research</Link>
          </li>
          <li>
            <a href="https://talosrun.com" target="_blank" rel="noopener noreferrer">
              Talos
            </a>
          </li>
          <li>
            <Link to="/manifest">Manifest</Link>
          </li>
          <li>
            <Link to="#join">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-watermark">LETHANIE</div>
        <div className="hero-label">Agentic AI Research Company</div>
        <h1 className="hero-title">
          Intent
          <br />
          to <em>Action.</em>
        </h1>
        <div className="hero-bottom">
          <p className="hero-tagline">
            We are building in the middle of the most consequential transition in AI history. Not
            before it. Not after it. In the middle which is the hardest moment, and the most
            important.
          </p>
          <div className="hero-scroll">
            <div className="hero-scroll-line"></div>
            <span>Scroll</span>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* MANIFESTO */}
      <section className="manifesto" id="research">
        <div className="section-eyebrow">01 • Our Position</div>
        <div className="manifesto-layout reveal">
          <div className="manifesto-left">
            <h2>
              Why
              <br />
              we <em>exist.</em>
            </h2>
          </div>
          <div className="manifesto-right">
            <p>
              We believe autonomous AI agents represent the most consequential technical transition
              of this decade. Not because the capability question has been solved, for it largely has.
              But because the harder question, the one that truly determines whether this transition
              goes well, has barely been asked.
            </p>
            <p>
              <strong>
                How do you build agents that reliably do what they&apos;re supposed to do, at the
                scale the world now demands?
              </strong>
            </p>
            <p>
              If powerful agentic AI is being deployed anyway, and it is, at a pace that has
              outpaced every governance framework ever written for it, then the question isn&apos;t
              whether agents get built. The question is whether anyone does the foundational work to
              make them <em>trustworthy.</em> We believe most don&apos;t. We intend to.
            </p>
            <div className="manifesto-pull">
              &quot;The competition is no longer about models. It&apos;s about systems.&quot;
            </div>
            <Link to="/manifest" className="product-tag" style={{ marginTop: '32px', display: 'inline-block' }}>
              Read the full Manifest →
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* STATE OF THE FIELD */}
      <section className="state" id="state">
        <div className="section-eyebrow">02 • State of the Field, April 2026</div>
        <div className="state-grid reveal">
          <div className="state-card">
            <div className="state-card-status">
              <span className="dot dot-green"></span>
              <span
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  color: '#22c55e',
                }}
              >
                Solved
              </span>
            </div>
            <h3>Agents work in production</h3>
            <p>
              A generation of agents demonstrates that AI systems can write code, manage files,
              browse the web, and operate autonomously. The shift from language to action is
              reality, not a lab promise.
            </p>
          </div>

          <div className="state-card">
            <div className="state-card-status">
              <span className="dot dot-red"></span>
              <span
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  color: '#ef4444',
                }}
              >
                Unsolved
              </span>
            </div>
            <h3>True multi-agent coordination</h3>
            <p>
              Two papers from March 2026 prove mathematically that without genuinely new
              information, adding agents cannot outperform a single well-designed agent, and often
              does worse. The &quot;Communication-Reasoning Gap&quot; is real.
            </p>
          </div>

          <div className="state-card">
            <div className="state-card-status">
              <span className="dot dot-red"></span>
              <span
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  color: '#ef4444',
                }}
              >
                Unsolved
              </span>
            </div>
            <h3>Reliable agent evaluation</h3>
            <p>
              Solo.io launched an entire framework in March 2026 to address what they call &quot;the
              biggest unsolved problem in agentic AI.&quot; DARPA launched the MATHBAC program on
              April 7, 2026, six days ago.
            </p>
          </div>

          <div className="state-card">
            <div className="state-card-status">
              <span className="dot dot-amber"></span>
              <span
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  color: '#f59e0b',
                }}
              >
                New in 2026
              </span>
            </div>
            <h3>Agent washing</h3>
            <p>
              Refactored automations wearing the costume of autonomy. Gartner projects that over 40%
              of agentic AI projects will be cancelled by 2027. This is not a market problem.
              It&apos;s an intellectual integrity problem.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* PRODUCT */}
      <section className="product" id="product">
        <div className="section-eyebrow">03 • What We&apos;re Building</div>
        <div className="product-hero reveal">
          <div className="product-main">
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: 'var(--grey)',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                Flagship Product
              </div>
              <div className="product-name">TALOS</div>
            </div>
            <div>
              <p className="product-desc">
                A general-purpose autonomous AI agent designed to receive an intent and manage
                execution: research, analysis, code, deployment, coordination. Built over long horizons
                and with real reliability. Talos is also a research instrument: every production
                interaction generates scientific data on agent failure points.
              </p>
              <a
                href="https://talosrun.com"
                target="_blank"
                rel="noopener noreferrer"
                className="product-tag"
              >
                Try Talos →
              </a>
            </div>
          </div>

          <div className="product-research">
            <div
              style={{
                fontFamily: 'var(--font-dm-mono)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                color: 'var(--grey)',
                textTransform: 'uppercase',
              }}
            >
              Research Agenda
            </div>
            <div className="research-axes">
              <div className="research-axis">
                <span className="axis-num">01</span>
                <div className="axis-content">
                  <h4>Agent Evaluation</h4>
                  <p>
                    Rigorous methods to measure reliability, honesty, and controllability under
                    diverse conditions.
                  </p>
                </div>
              </div>
              <div className="research-axis">
                <span className="axis-num">02</span>
                <div className="axis-content">
                  <h4>Multi-Agent Coordination</h4>
                  <p>
                    Architectural approaches resistant to error propagation and false consensus.
                  </p>
                </div>
              </div>
              <div className="research-axis">
                <span className="axis-num">03</span>
                <div className="axis-content">
                  <h4>Alignment Under Autonomy</h4>
                  <p>
                    Maintaining agent alignment across novel environments and extended horizons.
                  </p>
                </div>
              </div>
              <div className="research-axis">
                <span className="axis-num">04</span>
                <div className="axis-content">
                  <h4>Interpretability for Action</h4>
                  <p>
                    Understanding why agents make their decisions, not just what they produce.
                  </p>
                </div>
              </div>
              <div className="research-axis">
                <span className="axis-num">05</span>
                <div className="axis-content">
                  <h4>Recovery from Failure</h4>
                  <p>Graceful failure, safe shutdown, and rollback for irreversible actions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* BELIEFS */}
      <section className="beliefs" id="beliefs">
        <div className="section-eyebrow">04 • What We Believe</div>
        <div className="beliefs-list reveal">
          <div className="belief-item">
            <div className="belief-label">Reliability</div>
            <p className="belief-text">
              The central problem of 2026 is not capabilities; it&apos;s{' '}
              <strong>reliability.</strong> Demos work. Prototypes are impressive. What doesn&apos;t
              work yet is making agents operate predictably in production, without catastrophic
              failure modes. Reliability isn&apos;t improvised. It&apos;s built scientifically.
            </p>
          </div>

          <div className="belief-item">
            <div className="belief-label">Multi-Agent</div>
            <p className="belief-text">
              The hypothesis that <strong>more agents equals more intelligence</strong> must be
              questioned. Without verified architectural choices, multi-agent systems can amplify
              errors rather than correct them, and produce apparent consensus rather than real
              synthesis. We build from this understanding, not in spite of it.
            </p>
          </div>

          <div className="belief-item">
            <div className="belief-label">Evaluation</div>
            <p className="belief-text">
              You cannot improve what you cannot measure. You cannot trust what you cannot evaluate.
              The absence of rigorous benchmarks means the entire field iterates on intuitions rather
              than evidence. We make evaluation a <strong>priority research axis,</strong> not a
              support function.
            </p>
          </div>

          <div className="belief-item">
            <div className="belief-label">Governance</div>
            <p className="belief-text">
              Only 30% of organizations today achieve satisfactory agentic governance. The
              competition in 2026 is no longer about models; it&apos;s about systems, about who can
              deploy agents with <strong>real accountability</strong> and auditable reasoning.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* JOIN */}
      <section className="join" id="join">
        <div className="join-left reveal">
          <h2>
            Build
            <br />
            <em>with</em>
            <br />
            us.
          </h2>
        </div>
        <div className="join-right reveal">
          <p>
            We seek people who are simultaneously impatient and rigorous. Impatient because the
            transition happens with or without them. Rigorous because none of the problems we work
            on yield to speed alone.
          </p>
          <p>
            We don&apos;t require a specific background. We require demonstrated depth: the ability
            to sit with a hard problem until it yields, to question consensus when evidence justifies
            it, and to document failures as rigorously as successes.
          </p>
          <div className="join-roles">
            <div className="join-role">AI Researcher</div>
            <div className="join-role">Agent Engineer</div>
            <div className="join-role">ML Engineer</div>
            <div className="join-role">Backend Engineer</div>
            <div className="join-role">Dev Frontend</div>
            <div className="join-role">Product Designer</div>
          </div>
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <a href="mailto:join@lethanie.com" className="join-cta">
              Join the team
            </a>
            <a href="mailto:hello@lethanie.com" className="join-cta" style={{ borderOpacity: 0.5, color: 'var(--grey)', borderColor: 'var(--dim)' }}>
              Contact
            </a>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* INTELLECTUAL HONESTY */}
      <section className="honesty">
        <div className="honesty-left reveal">
          Note on
          <br />
          Intellectual
          <br />
          Honesty
        </div>
        <div className="honesty-right reveal">
          <p>
            We write this in April 2026. The field evolves faster than any founding document can
            follow. Some of what we&apos;ve written here will be obsolete within months. Some of our
            convictions will prove incorrect. We commit to updating this document continuously, not
            annually. When our understanding changes, we will say so, and we will say why. This is
            not standard practice for a founding document. We believe it should be.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Lethanie</div>
        <div className="footer-copy">© 2026 Lethanie • Agentic AI Research Company</div>
      </footer>
    </main>
  )
}
