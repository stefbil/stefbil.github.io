import { MapPin, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { socialLinks, linkTarget } from "@/data/socials";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pb-40">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      {/* Audio Waveform Decoration */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-primary/30 rounded-full"
            animate={{
              height: [20, 40 + Math.random() * 20, 20],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
            style={{ height: 20 }}
          />
        ))}
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-accent/30 rounded-full"
            animate={{
              height: [20, 40 + Math.random() * 20, 20],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
            style={{ height: 20 }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6">
            <MapPin size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground">Copenhagen, Denmark</span>
          </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6">
            <MapPin size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground">Thessaloniki, Greece</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="block text-foreground">Stefanos
            <span className="gradient-text"> Biliousis</span>
          </span>
          
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-primary font-medium">Audio DSP &amp; ML Engineer</span>
          <span className="mx-2">×</span>
          <span className="text-accent font-medium">Spatial Audio &amp; Perception</span>
        </motion.p>

        <motion.p
          className="text-base text-muted-foreground max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          MSc student in Sound and Music Computing at Aalborg University Copenhagen, writing my thesis in the AI department at
          Bang &amp; Olufsen. I build real-time audio systems for spatial rendering and adaptive processing, and test them with listening experiments.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

      </div>

      <motion.nav
        aria-label="Social links"
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 sm:gap-3"
        initial="hidden"
        animate="shown"
        variants={{ shown: { transition: { staggerChildren: 0.06, delayChildren: 0.6 } } }}
      >
        {socialLinks.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            {...linkTarget(social.href)}
            aria-label={social.label}
            title={social.label}
            variants={{ hidden: { opacity: 0, y: 16 }, shown: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.12 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className={`p-2.5 rounded-full border border-border bg-card/60 backdrop-blur text-muted-foreground transition-colors duration-200 ${social.color}`}
          >
            <social.icon size={18} />
          </motion.a>
        ))}
      </motion.nav>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
