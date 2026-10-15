import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { socialLinks, linkTarget } from "@/data/socials";

/**
 * Vertical strip of social links pinned to the left edge.
 * It slides in once the About section reaches the middle of the screen and
 * slides back out when the Contact section's own links scroll into view,
 * so the links are always on screen but never shown twice.
 * Only shown on xl screens, where there is room beside the content column.
 */
const SocialRail = () => {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const about = document.getElementById("about");
      const contactLinks = document.getElementById("contact-socials");
      if (!about) return;
      const vh = window.innerHeight;
      const pastHero = about.getBoundingClientRect().top < vh * 0.6;
      const contactInView = contactLinks ? contactLinks.getBoundingClientRect().top < vh - 40 : false;
      setVisible(pastHero && !contactInView);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const offset = reduceMotion ? 0 : -48;

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="social-rail"
          aria-label="Social links"
          className="hidden xl:flex fixed left-6 bottom-0 z-40 flex-col items-center gap-3"
          initial="hidden"
          animate="shown"
          exit="hidden"
          variants={{
            hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
            shown: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
          }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              {...linkTarget(social.href)}
              aria-label={social.label}
              title={social.label}
              whileHover={{ scale: 1.12 }}
              variants={{
                hidden: { opacity: 0, x: offset },
                shown: { opacity: 1, x: 0 },
              }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className={`p-2.5 rounded-full border border-border bg-card/80 backdrop-blur text-muted-foreground transition-colors duration-200 ${social.color}`}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
          <motion.span
            aria-hidden="true"
            className="mt-1 w-px h-24 bg-border origin-bottom"
            variants={{
              hidden: { scaleY: 0, opacity: 0 },
              shown: { scaleY: 1, opacity: 1 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default SocialRail;
