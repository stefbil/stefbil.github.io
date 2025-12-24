import { Mail, Linkedin, Github, Music, Youtube } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:stefanosbiliousis@gmail.com",
    color: "hover:text-primary hover:border-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/stefanosbiliousis",
    color: "hover:text-[#0A66C2] hover:border-[#0A66C2]",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/stefbil",
    color: "hover:text-foreground hover:border-foreground",
  },
  {
    icon: Music,
    label: "Spotify",
    href: "https://open.spotify.com/artist/6BxtVo9reMQ2vff0l8HMGY",
    color: "hover:text-[#1DB954] hover:border-[#1DB954]",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/c/canonblade",
    color: "hover:text-[#FF0000] hover:border-[#FF0000]",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="section-title">
              Let's <span className="gradient-text">Connect</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new opportunities, collaborations, or just 
              having a conversation. In any case, just drop me a message.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <a
              href="mailto:stefanosbiliousis@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all duration-200 hover:scale-105 mb-12"
            >
              <Mail size={20} />
              stefanosbiliousis@gmail.com
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full border border-border bg-card transition-all duration-200 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
