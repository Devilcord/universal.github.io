import logoImg from "@/imports/Screenshot_2026-08-21_122546.png";

const DISCORD_INVITE = "https://discord.gg/bwrdvFEaCz";

const channels = [
  { emoji: "📢", name: "announcements", desc: "Stay updated on everything happening in the server" },
  { emoji: "💬", name: "general", desc: "Hang out, chat, and meet new people" },
  { emoji: "🎮", name: "gaming", desc: "Talk games, share clips, find teammates" },
  { emoji: "🎵", name: "music", desc: "Share playlists and discuss your favorite artists" },
  { emoji: "🖼️", name: "showcase", desc: "Post your art, projects, and creations" },
  { emoji: "🤝", name: "introductions", desc: "Say hi and introduce yourself to the community" },
];

const perks = [
  {
    icon: "✦",
    title: "Active Community",
    desc: "A welcoming space where real conversations happen every day.",
  },
  {
    icon: "🛡️",
    title: "Moderated & Safe",
    desc: "Strict rules keep the server a chill, drama-free zone.",
  },
  {
    icon: "🎉",
    title: "Events & Giveaways",
    desc: "Regular community events, game nights, and giveaways.",
  },
  {
    icon: "🌌",
    title: "Always Growing",
    desc: "New channels, bots, and features added based on what members want.",
  },
];

function StarField() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.6 + 0.2,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: `pulse-glow ${2 + s.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#050714", fontFamily: "'Outfit', sans-serif", color: "#e8e8ff" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
        style={{ background: "rgba(5,7,20,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(139,63,217,0.15)" }}>
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Server logo" className="w-9 h-9 rounded-xl object-cover" />
          <span style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.08em" }}>
            UNIVERSE
          </span>
        </div>
        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #8b3fd9, #6a2dbf)", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>
          <DiscordIcon />
          Join Server
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background layers */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(106,45,191,0.35) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(139,63,217,0.15) 0%, transparent 60%), #050714"
        }} />
        <StarField />
        {/* Horizon glow strip */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(139,63,217,0.6), transparent)" }} />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="float">
            <img
              src={logoImg}
              alt="Universe Discord server logo"
              className="w-28 h-28 md:w-36 md:h-36 rounded-3xl object-cover pulse-glow"
              style={{ border: "1px solid rgba(139,63,217,0.4)" }}
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
              style={{ background: "rgba(139,63,217,0.15)", border: "1px solid rgba(139,63,217,0.3)", color: "#b060ff" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" style={{ boxShadow: "0 0 6px #34d399" }} />
              Server is Live
            </div>

            <h1 className="glow-text" style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 10vw, 6rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              background: "linear-gradient(180deg, #ffffff 0%, #c090ff 60%, #8b3fd9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              UNIVERSE
            </h1>

            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "#9090b8", maxWidth: "480px", lineHeight: 1.6 }}>
              A community that reaches beyond the stars. Connect, create, and explore with people who share your vibe.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #8b3fd9 0%, #5a1fa8 100%)",
                color: "#fff",
                fontFamily: "'Outfit', sans-serif",
                boxShadow: "0 4px 32px rgba(139,63,217,0.5)",
              }}>
              <DiscordIcon size={20} />
              Join the Server
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-medium text-sm transition-all hover:scale-105"
              style={{
                border: "1px solid rgba(139,63,217,0.35)",
                color: "#c090ff",
                fontFamily: "'Outfit', sans-serif",
              }}>
              Explore ↓
            </a>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: "rgba(12,15,42,0.9)", borderTop: "1px solid rgba(139,63,217,0.15)", borderBottom: "1px solid rgba(139,63,217,0.15)" }}>
        <div className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-3 gap-6 text-center">
          {[
            { label: "Members", value: "1K+" },
            { label: "Channels", value: "20+" },
            { label: "Community", value: "∞" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 5vw, 2.5rem)", color: "#b060ff" }}>
                {s.value}
              </span>
              <span style={{ fontSize: "0.8rem", color: "#9090b8", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PERKS */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ color: "#8b3fd9", fontFamily: "'Exo 2', sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.8rem", fontWeight: 600 }}>
              Why join us
            </p>
            <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.5rem" }}>
              Built for the community
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="card-hover p-6 rounded-2xl glow-border" style={{ background: "rgba(12,15,42,0.7)", border: "1px solid rgba(139,63,217,0.2)" }}>
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: "#9090b8", fontSize: "0.9rem", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="py-24 px-6" style={{ background: "rgba(12,15,42,0.5)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ color: "#8b3fd9", fontFamily: "'Exo 2', sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.8rem", fontWeight: 600 }}>
              Explore
            </p>
            <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.5rem" }}>
              Find your space
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {channels.map((c) => (
              <div key={c.name} className="card-hover p-5 rounded-xl flex gap-4 items-start" style={{ background: "rgba(17,21,53,0.8)", border: "1px solid rgba(139,63,217,0.18)" }}>
                <span className="text-2xl mt-0.5">{c.emoji}</span>
                <div>
                  <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.3rem" }}>
                    # {c.name}
                  </div>
                  <p style={{ color: "#9090b8", fontSize: "0.8rem", lineHeight: 1.5 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 70% 100% at 50% 50%, rgba(106,45,191,0.4) 0%, transparent 70%)"
        }} />
        <StarField />
        <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
          <img src={logoImg} alt="Logo" className="w-20 h-20 rounded-2xl object-cover float" style={{ border: "1px solid rgba(139,63,217,0.4)", boxShadow: "0 0 32px rgba(139,63,217,0.4)" }} />
          <div>
            <h2 className="glow-text" style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 6vw, 3.5rem)", lineHeight: 1.1 }}>
              Ready to explore?
            </h2>
            <p style={{ color: "#9090b8", marginTop: "1rem", fontSize: "1.05rem" }}>
              The universe is waiting. Join our community and become part of something bigger.
            </p>
          </div>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-base transition-all hover:scale-105 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #8b3fd9 0%, #5a1fa8 100%)",
              color: "#fff",
              fontFamily: "'Outfit', sans-serif",
              boxShadow: "0 4px 48px rgba(139,63,217,0.6)",
              fontSize: "1.05rem",
            }}>
            <DiscordIcon size={22} />
            Join Discord — It's Free
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "rgba(5,7,20,0.95)", borderTop: "1px solid rgba(139,63,217,0.15)" }}>
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo" className="w-8 h-8 rounded-lg object-cover" />
            <span style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: "0.08em", fontSize: "0.95rem" }}>UNIVERSE</span>
          </div>
          <p style={{ color: "#9090b8", fontSize: "0.8rem" }}>
            © 2026 Universe Discord · Made with ✦ for the community
          </p>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{ border: "1px solid rgba(139,63,217,0.35)", color: "#c090ff" }}>
            <DiscordIcon size={16} />
            Join Us
          </a>
        </div>
      </footer>
    </div>
  );
}

function DiscordIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}
