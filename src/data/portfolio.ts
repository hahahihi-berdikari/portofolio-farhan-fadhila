

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  current?: boolean;
  type?: string;
  url?: string;
}

/* ------------------------------------------------------------------ */
/* Dummy profile data — replace with your real information             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Farhan Fadhila",
  role: "Frontend Developer & UI Engineer",
  location: "Pekanbaru, Indonesia",
  email: "farhanfd.112003@gmail.com",
  headline: "I design and build fast, thoughtful interfaces for the web.",
  github: "https://github.com/FARHANFADHILA",
  instagram: "https://instagram.com/frhan_fdh",
};

export const experience: ExperienceItem[] = [
  {
    period: "Sep 2025 - Mar 2026",
    role: "Fullstack Engineer",
    type: "Part-time",
    company: "PT Strata Digital Farabiel",
    description:
      "Designed the architecture and developed an internal Outcome-Based Education (OBE) curriculum management platform at PT Strata Digital Farabiel. Responsible for the platform's full-stack development as well as end-user support for internal users, including usage guidance and technical troubleshooting. Worked hybrid from Pekanbaru, Riau, on a part-time basis.",
    url: "https://e-obe.com/",
  },
  {
    period: "Jan 2025 - Jun 2025",
    role: "Front End Engineer",
    type: "Internship",
    company: "Software Engineering Laboratory, Informatics Engineering, UIN Sultan Syarif Kasim Riau",
    description:
      "Served as the front-end developer for Dashboard TIF UIN SUSKA Riau, a campus administration system, built with React, Tailwind CSS, and shadcn/ui.",
    url: "https://dashboard.tif.uin-suska.ac.id/#kontributor",
  },
  {
    period: "Jul 2025 - Apr 2026",
    role: "Backend Engineer",
    type: "Part-time",
    company: "PT Strata Digital Farabiel",
    description:
      "Backend Engineer and CI/CD pipeline owner at PT Strata Digital Farabiel for the PMB portal of STIE Mahardhika, Surabaya, an economics and business college, serving its Doctoral (S3) Program in Management Science admissions system. Tech stack: Node.js with Hono, PostgreSQL, Redis, Midtrans (payment gateway), Tailwind CSS, Docker, and GitHub Actions.",
    url: "https://pmbs3.stiemahardhika.ac.id/",
  },
  {
    period: "Oct 2025 - Dec 2025",
    role: "Front End Engineer",
    type: "Part-time",
    company: "Lembaga Cici Mandarin",
    description:
      "Part-time Frontend Engineer building the cicimandarin.com website. Cici Mandarin provides study, travel, and work services to China, including Mandarin learning and scholarship assistance. Developed the site's interface with Astro, focusing on a fast, responsive, and easy-to-use experience so visitors can easily understand the services offered.",
    url: "https://cicimandarin.com/",
  },
];

/* ------------------------------------------------------------------ */
/* Ways to work together + FAQ                                         */
/* ------------------------------------------------------------------ */

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Are you available for freelance work?",
    a: "Yes — I'm currently booking projects for Q3 2026. Tell me about your timeline and I'll let you know within 48 hours whether we're a fit.",
  },
  {
    q: "What's your typical project timeline?",
    a: "Most marketing sites take 2–3 weeks; full web apps take 4–6. I work in weekly milestones so you always see progress, never surprises.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes. I'm based in Pekanbaru (WIB, UTC+7) and work async-first — written updates, recorded walkthroughs, and overlap hours for calls with any timezone.",
  },
  {
    q: "What does your process look like?",
    a: "Four phases: Discover (goals, users, constraints), Design (wireframes to hi-fi in Figma), Build (React + TypeScript, reviewed weekly), and Ship (tested, documented, monitored).",
  },
  {
    q: "Can you work with our existing design system?",
    a: "Absolutely. I can extend yours, audit it for gaps, or build one from scratch — tokens, components, and docs included.",
  },
];
