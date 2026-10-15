import { Mail, Linkedin, Github, Music, Youtube, GraduationCap, Fingerprint, LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
  color: string;
}

export const socialLinks: SocialLink[] = [
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
    icon: GraduationCap,
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=3O4wmkAAAAAJ",
    color: "hover:text-[#4285F4] hover:border-[#4285F4]",
  },
  {
    icon: Fingerprint,
    label: "ORCID",
    href: "https://orcid.org/0009-0001-0525-7046",
    color: "hover:text-[#A6CE39] hover:border-[#A6CE39]",
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

/** mailto: links open the mail client in place; everything else opens a new tab. */
export const linkTarget = (href: string) =>
  href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" };
