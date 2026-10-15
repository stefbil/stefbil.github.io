import { Mail } from "lucide-react";
import { socialLinks, linkTarget } from "@/data/socials";
import ScrollReveal from "./ScrollReveal";


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
            <div id="contact-socials" className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  {...linkTarget(social.href)}
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
