import ProjectsGrid from "./components/ProjectsGrid";
import ContactForm from "./components/ContactForm";

const TAGS = ["TypeScript", "React", "Node.js", "Solidity", "Docker"];

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      {/* nav */}
      <header
        className="sticky top-0 z-10 bg-bg/90 backdrop-blur-sm border-b border-border opacity-0 animate-fade-in"
        style={{ animationDelay: "50ms", animationFillMode: "forwards" }}
      >
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink tracking-tight">Victor Owolabi</span>
          <nav className="flex items-center gap-6 text-sm text-muted">
            <a
              href="https://github.com/owolabi-victor"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-ink transition-colors"
            >
              GitHub
            </a>
            <a href="#contact" className="link-underline hover:text-ink transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6">
        {/* hero */}
        <section className="py-20 space-y-6 border-b border-border">
          <p
            className="text-xs uppercase tracking-widest text-muted font-medium opacity-0 animate-fade-up"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Software Engineer
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-ink tracking-tight leading-tight opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            Victor Owolabi
          </h1>
          <p
            className="text-base text-muted-hi leading-relaxed max-w-md opacity-0 animate-fade-up"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            I build web applications, developer tooling, and on-chain contracts.
            Comfortable across the stack — from React frontends to distributed backends
            to Solidity smart contracts.
          </p>
          <div
            className="flex items-center gap-2 flex-wrap opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted-hi border border-border rounded-full px-3 py-1
                  hover:border-border-hi hover:text-ink transition-colors duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* projects */}
        <section className="py-16 space-y-6 border-b border-border">
          <p
            className="text-xs uppercase tracking-widest text-muted font-medium opacity-0 animate-fade-up"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            Selected Work
          </p>
          <ProjectsGrid />
        </section>

        {/* contact */}
        <section id="contact" className="py-16 space-y-6">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-widest text-muted font-medium">Contact</p>
            <p className="text-sm text-muted-hi">
              Got a project in mind or just want to connect?
            </p>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-muted">
          <span>Victor Owolabi</span>
          <a
            href="https://github.com/owolabi-victor"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-ink transition-colors"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
