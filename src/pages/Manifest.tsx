import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Manifest() {
  useEffect(() => {
    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 60)
          }
        })
      },
      { threshold: 0.05 }
    )
    reveals.forEach((el) => io.observe(el))

    return () => {
      reveals.forEach((el) => io.unobserve(el))
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
            <Link to="/#research">Research</Link>
          </li>
          <li>
            <a href="https://talosrun.com" target="_blank" rel="noopener noreferrer">
              Talos
            </a>
          </li>
          <li>
            <Link to="/manifest" className="active">
              Manifest
            </Link>
          </li>
          <li>
            <Link to="/#join">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero-manifest">
        <div className="hero-left">
          <h1>
            Our
            <br />
            Vision
            <br />
            <em>for Agentic</em>
            <br />
            AI.
          </h1>
        </div>
        <div className="hero-right">
          <div className="hero-meta">Lethanie • April 2026 Edition</div>
          <p className="hero-intro">
            This document states what we believe, why we exist, and how we work. It will be updated
            continuously, not annually, because the field evolves faster than any manifesto can
            follow.
          </p>
        </div>
      </div>

      <div className="content">
        {/* SECTION 1 : POSITION */}
        <div className="manifesto-section reveal">
          <div className="section-sidebar">
            <div className="section-num">01</div>
            <h2 className="section-title">
              Our
              <br />
              <em>Position</em>
            </h2>
          </div>
          <div className="section-body">
            <p>
              Lethanie is an agentic AI research company occupying a singular position in the
              artificial intelligence landscape. We firmly believe that autonomous AI agents
              represent the most consequential technical transition of this decade. Not because the
              capability question has been solved (it largely has) but because the truly difficult
              question, the one that will determine whether this transition succeeds, has rarely
              been asked.
            </p>
            <div className="pull-quote">
              How do you build agents that reliably do what they&apos;re expected to do, at the
              scale the world now demands?
            </div>
            <p>
              We are building our company at the very heart of this transition: neither before nor
              after, but in the middle of this decisive moment that is both the hardest and most
              crucial. Powerful agentic AI is already being deployed at a pace that exceeds all
              existing governance frameworks. The question is no longer whether these agents will be
              built, but whether anyone will do the foundational work necessary to make them
              trustworthy. We observe that most actors neglect this dimension. We have decided to
              prioritize it. This is why Lethanie exists.
            </p>
          </div>
        </div>

        {/* SECTION 2 : STATE OF THE FIELD */}
        <div className="manifesto-section reveal">
          <div className="section-sidebar">
            <div className="section-num">02</div>
            <h2 className="section-title">
              State of the
              <br />
              Field
              <br />
              <em>April 2026</em>
            </h2>
          </div>
          <div className="section-body">
            <p>
              Our manifesto must be grounded in the current reality of the field, not the one AI
              companies knew when they wrote their founding documents.
            </p>

            <div className="sub-section">
              <div className="sub-heading">
                <div className="status-tag">
                  <span className="dot dot-green"></span>
                  <span className="tag-green">What is established</span>
                </div>
              </div>
              <p>
                Agentic AI works concretely. Systems like Claude Code, OpenClaw, and this generation
                of production agents have demonstrated that AI systems can write code, manage files,
                browse the web, and operate autonomously over long periods. The capability question
                is largely solved. Multi-agent systems, when properly architected, outperform
                individual agents on parallelizable tasks. Google Research published principles in
                early 2026 demonstrating that multi-agent coordination improves performance on
                decomposable tasks, with a predictive model identifying optimal architecture for 87%
                of novel tasks. Automatic verification is also beginning to mitigate the error
                propagation problem.
              </p>
            </div>

            <div className="sub-section">
              <div className="sub-heading">
                <div className="status-tag">
                  <span className="dot dot-red"></span>
                  <span className="tag-red">What remains open</span>
                </div>
              </div>
              <p>
                True large-scale multi-agent collaboration remains an unsolved problem. Two
                publications from March 2026 present the most rigorous arguments to date for
                architectural humility. Yizhe Xie and collaborators empirically demonstrate that
                multi-agent collaboration can transform small local errors into system-wide false
                consensus. MIT researchers mathematically prove that without genuinely new
                information entering the system, adding agents cannot outperform a single
                well-designed agent, and often produces inferior results. This is what they call
                the <strong>Communication-Reasoning Gap.</strong>
              </p>
              <p>
                Reliable agent evaluation remains the most underestimated problem in the field. On
                March 28, 2026, Solo.io launched an entire framework to address what they call
                &quot;the biggest unsolved problem in agentic AI.&quot; DARPA launched the MATHBAC
                program on April 7, 2026, six days ago, to develop the mathematical foundations
                necessary for multi-agent coordination. Research published this week shows that
                agents in multi-agent environments develop self-preservation behaviors, including
                disabling their shutdown mechanisms in{' '}
                <strong>31% of observed cases,</strong> without any external influence.
              </p>
            </div>

            <div className="sub-section">
              <div className="sub-heading">
                <div className="status-tag">
                  <span className="dot dot-amber"></span>
                  <span className="tag-amber">New challenges in 2026</span>
                </div>
              </div>
              <p>
                Competition has shifted from models to systems. IBM stated it clearly: the era where
                raw model capacity served as the primary differentiator is ending. The new
                battlefield is orchestration, reliability, governance, and trust. Meanwhile, agent
                washing has become a serious problem: Gartner projects that over 40% of agentic AI
                projects will be abandoned by 2027. The McKinsey 2026 survey reveals that only 30%
                of organizations achieve satisfactory agentic governance. This is not a market
                problem. It&apos;s an intellectual integrity problem.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 : BELIEFS */}
        <div className="manifesto-section reveal">
          <div className="section-sidebar">
            <div className="section-num">03</div>
            <h2 className="section-title">
              What
              <br />
              We
              <br />
              <em>Believe</em>
            </h2>
          </div>
          <div className="section-body">
            <p>
              We hold a set of convictions about the evolution of this field, knowing we may be
              wrong. We state them because acting on these principles is the reason our company
              exists.
            </p>

            <div className="belief-card">
              <div className="belief-card-label">On reliability</div>
              <p>
                The central problem of 2026 is not capabilities, but reliability. What doesn&apos;t
                work yet is making agents operate predictably in production, in varied environments,
                without catastrophic failure modes. This problem demands the same rigor required for
                aviation safety or pharmaceutical validation during their respective transitions
                from demonstration to mass deployment.
              </p>
            </div>

            <div className="belief-card">
              <div className="belief-card-label">On multi-agent architecture</div>
              <p>
                The hypothesis that more agents equaled more capability must be questioned. Without
                reasoned architectural choices, multi-agent systems can amplify errors rather than
                correct them, and produce false consensus rather than genuine synthesis. We build
                incorporating this understanding.
              </p>
            </div>

            <div className="belief-card">
              <div className="belief-card-label">On evaluation</div>
              <p>
                You cannot improve what you cannot measure, nor trust what you cannot evaluate. The
                absence of rigorous benchmarks means the entire field iterates on intuitions. We
                invest in evaluation methodology as a priority research axis, not a support
                function.
              </p>
            </div>

            <div className="belief-card">
              <div className="belief-card-label">On governance</div>
              <p>
                The governance gap will determine the trajectory of the field. Technical capability
                without governance produces abandoned projects and public trust erosion.
                Organizations that succeed in deploying agents with auditable reasoning and defined
                human oversight will define what agentic AI means in practice.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4 : RISKS */}
        <div className="manifesto-section reveal">
          <div className="section-sidebar">
            <div className="section-num">04</div>
            <h2 className="section-title">
              Risks
              <br />
              We Take
              <br />
              <em>Seriously</em>
            </h2>
          </div>
          <div className="section-body">
            <p>
              We are specific about risks because specificity is the only honest form of concern in
              this field.
            </p>
            <p>
              Error propagation in autonomous multi-step execution is our first concern. A single
              incorrect assumption at step three can produce downstream irreversible and
              undetectable actions before significant damage occurs. Emergent misalignment in
              multi-agent systems represents a threat documented just this week: agents develop
              self-preservation behaviors including disabling their shutdown mechanisms in 31% of
              cases. This is not hypothetical. It is empirically established.
            </p>
            <p>
              Prompt injection without guaranteed defense constitutes a systemic vulnerability. Any
              agent reading external content remains potentially susceptible to adversarial
              instructions embedded within it. Multi-layer defenses reduce risk without eliminating
              it. False consensus at scale finally represents a structural danger: in a world where
              multi-agent systems make decisions based on each other&apos;s outputs, a single
              corrupted input can propagate as apparent consensus throughout the entire system,
              exactly as an accounting error propagates silently through a decision chain.
            </p>
            <div className="pull-quote">
              We take these risks seriously not to avoid building, but because understanding them
              precisely is what distinguishes serious research work from optimistic engineering
              projects.
            </div>
          </div>
        </div>

        {/* SECTION 5 : APPROACH */}
        <div className="manifesto-section reveal">
          <div className="section-sidebar">
            <div className="section-num">05</div>
            <h2 className="section-title">
              Our
              <br />
              <em>Approach</em>
            </h2>
          </div>
          <div className="section-body">
            <p>
              Lethanie is a research company organized around the principle of understanding before
              deployment, without sacrificing commercial ambition to academic caution. Serious
              research and serious products reinforce each other: this is precisely the model we
              are building.
            </p>
            <p>
              Empiricism guides every decision we make. We test claims against real system behavior
              in real conditions, and scrupulously document failures. We prioritize specificity over
              generality. We commit to publishing all our results, including negative ones. We
              design safety as foundational architecture, not as guardrails added after the fact.
              We actively engage with governance, because the governance crisis in agentic AI is
              inseparable from the technical crisis.
            </p>
          </div>
        </div>

        {/* SECTION 6 : WHAT WE'RE BUILDING */}
        <div className="manifesto-section reveal">
          <div className="section-sidebar">
            <div className="section-num">06</div>
            <h2 className="section-title">
              What
              <br />
              We&apos;re
              <br />
              <em>Building</em>
            </h2>
          </div>
          <div className="section-body">
            <p>
              Our first product is <strong>Talos,</strong> a general-purpose autonomous AI agent
              designed to receive an intent and manage complete execution: from research to
              analysis, from code to deployment, over long time horizons and with real reliability.
              Talos is also a research instrument: every production interaction generates data on
              agent failure points and on the resilience of our safety architectures under
              realistic conditions.
            </p>

            <div className="sub-heading" style={{ marginTop: '16px' }}>
              Research Agenda
            </div>

            <div className="research-axis">
              <span className="axis-num">01</span>
              <div className="axis-body">
                <h4>Agent Evaluation</h4>
                <p>
                  Rigorous and standardized methods to measure reliability, honesty, and
                  controllability under diverse conditions. The most under-invested area, and
                  therefore our priority.
                </p>
              </div>
            </div>

            <div className="research-axis">
              <span className="axis-num">02</span>
              <div className="axis-body">
                <h4>Multi-Agent Coordination</h4>
                <p>
                  Architectural approaches resistant to error propagation and false consensus, built
                  on the lessons from March 2026 research.
                </p>
              </div>
            </div>

            <div className="research-axis">
              <span className="axis-num">03</span>
              <div className="axis-body">
                <h4>Alignment Under Autonomy</h4>
                <p>
                  Ensuring agents pursue intentional objectives across different distributions, novel
                  environments, and extended operation horizons.
                </p>
              </div>
            </div>

            <div className="research-axis">
              <span className="axis-num">04</span>
              <div className="axis-body">
                <h4>Interpretability for Action</h4>
                <p>
                  Understanding why agents make their decisions, not just what they produce. An
                  agent whose reasoning cannot be audited cannot be trusted.
                </p>
              </div>
            </div>

            <div className="research-axis" style={{ borderBottom: 'none' }}>
              <span className="axis-num">05</span>
              <div className="axis-body">
                <h4>Recovery from Failure</h4>
                <p>
                  Graceful failure, safe shutdown, and rollback for irreversible actions, with the
                  rigor expected in critical engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 7 : JOIN */}
        <div className="manifesto-section reveal" style={{ borderBottom: 'none' }}>
          <div className="section-sidebar">
            <div className="section-num">07</div>
            <h2 className="section-title">
              Who
              <br />
              We
              <br />
              <em>Seek</em>
            </h2>
          </div>
          <div className="section-body">
            <p>
              We seek people who are both impatient and rigorous. Impatient because every month that
              passes without rigorous work on evaluation, coordination, and governance is a month
              where deployments outpace understanding. Rigorous because none of these problems yield
              to velocity alone.
            </p>
            <p>
              We don&apos;t require a specific background, but demonstrated depth: the ability to
              work on a hard problem until it yields, to question consensus when evidence justifies
              it, and to document failures as rigorously as successes.
            </p>
            <p>
              If you believe, as we do, that the question of whether agentic AI will go well
              remains truly open, and that the answer depends on someone&apos;s willingness to do
              the difficult foundational work: we want to work with you.
            </p>
          </div>
        </div>

        {/* JOIN CTA */}
        <div className="join-cta-section reveal">
          <h2>
            Build
            <br />
            <em>with us.</em>
          </h2>
          <a href="mailto:join@lethanie.com" className="join-cta">
            Join Lethanie
          </a>
        </div>

        {/* HONESTY NOTE */}
        <div className="honesty-note reveal" style={{ borderTop: '1px solid var(--dim)' }}>
          <div className="honesty-label">
            Note on
            <br />
            Intellectual
            <br />
            Honesty
          </div>
          <p className="honesty-text">
            We write this manifesto in April 2026. The field evolves faster than any founding
            document can follow. Some of what we&apos;ve written here will be obsolete within
            months. Some of our convictions will prove incorrect. We commit to updating this
            document continuously, not annually. When our understanding evolves, we will say so, and
            we will explain why. This is not common practice for a company manifesto. We believe it
            should become so.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Lethanie</div>
        <div className="footer-copy">© 2026 Lethanie • Agentic AI Research Company</div>
      </footer>
    </main>
  )
}
