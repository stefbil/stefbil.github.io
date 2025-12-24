import { motion } from "framer-motion";
import { Music, Headphones, Play, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const discography = [
  {
    title: "Latest Releases",
    tracks: [
      { name: "Dejavu", type: "Single", year: "2025" },
      { name: "Journey", type: "Single", year: "2022" },
      { name: "Rebirth", type: "Single", year: "2021" },
    ],
  },
  {
    title: "Featured Works",
    tracks: [
      { name: "Debug", type: "Single", year: "2017" },
      { name: "This Feeling", type: "Single", year: "2020" },
      { name: "Rising Sun", type: "Single", year: "2019" },
    ],
  },
];

const stats = [
  { label: "Monthly Listeners", value: "10K+", icon: Headphones },
  { label: "Tracks Released", value: "40+", icon: Music },
  { label: "Total Streams", value: "10M+", icon: Play },
];

const Canonblade = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <nav className="section-container flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Back to Portfolio</span>
          </Link>
          <a
            href="https://open.spotify.com/artist/6BxtVo9reMQ2vff0l8HMGY"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <span>Open in Spotify</span>
            <ExternalLink size={16} />
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="section-container relative z-10">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-mono mb-6">
                Electronic Music Producer
              </span>
              <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6">
                <span className="gradient-text">Canonblade</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Blending electronic soundscapes with cutting-edge audio engineering.
                Exploring the intersection of technology and music.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Spotify Embed */}
      <section className="py-16">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-3xl font-mono font-bold mb-8 text-center">
              <span className="gradient-text">Listen Now</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-3xl mx-auto">
              {/* Spotify Artist Embed - Replace with actual artist ID */}
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/artist/6BxtVo9reMQ2vff0l8HMGY?utm_source=generator&theme=0"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="shadow-2xl shadow-primary/10"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="section-container">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-background/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-mono font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Discography */}
      <section className="py-20">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-3xl font-mono font-bold mb-12 text-center">
              <span className="gradient-text">Discography</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {discography.map((section, sectionIndex) => (
              <ScrollReveal key={section.title} delay={sectionIndex * 0.2}>
                <div className="bg-card/50 rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-xl font-mono font-semibold mb-6 text-primary">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.tracks.map((track, trackIndex) => (
                      <motion.li
                        key={track.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: trackIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-primary/5 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Play size={16} className="text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">
                              {track.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {track.type}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground font-mono">
                          {track.year}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-primary/5 to-transparent">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-mono font-bold mb-6">
              Connect & Listen
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Follow Canonblade on your favorite streaming platforms to stay
              updated with new releases.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://open.spotify.com/artist/6BxtVo9reMQ2vff0l8HMGY"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#1DB954] text-white rounded-full font-medium hover:bg-[#1DB954]/90 transition-colors flex items-center gap-2"
              >
                <Music size={20} />
                Spotify
              </a>
              <a
                href="https://soundcloud.com/canonblade"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#FF5500] text-white rounded-full font-medium hover:bg-[#FF5500]/90 transition-colors flex items-center gap-2"
              >
                <Headphones size={20} />
                SoundCloud
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="section-container text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Canonblade. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Canonblade;
