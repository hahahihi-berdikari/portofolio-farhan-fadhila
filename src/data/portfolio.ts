

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  descriptionId?: string;
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
    descriptionId: "Merancang arsitektur dan mengembangkan platform internal manajemen kurikulum berbasis Outcome-Based Education (OBE) di PT Strata Digital Farabiel. Bertanggung jawab pada pengembangan full-stack platform tersebut, serta memberikan dukungan end-user kepada pengguna internal, termasuk pendampingan penggunaan dan penanganan kendala teknis. Bekerja secara hybrid dari Pekanbaru, Riau, dengan status paruh waktu.",
    url: "https://e-obe.com/",
  },
  {
    period: "Jan 2025 - Jun 2025",
    role: "Front End Engineer",
    type: "Internship",
    company: "Software Engineering Laboratory, Informatics Engineering, UIN Sultan Syarif Kasim Riau",
    description:
      "Served as the front-end developer for Dashboard TIF UIN SUSKA Riau, a campus administration system, built with React, Tailwind CSS, and shadcn/ui.",
    descriptionId: "Menjadi front-end untuk sistem administrasi kampus bernama Dashboard TIF UIN SUSKA Riau, menggunakan React JS, Tailwind CSS, dan library shadcn/ui.",
    url: "https://dashboard.tif.uin-suska.ac.id/#kontributor",
  },
  {
    period: "Jul 2025 - Apr 2026",
    role: "Backend Engineer",
    type: "Part-time",
    company: "PT Strata Digital Farabiel",
    description:
      "Backend Engineer and CI/CD pipeline owner at PT Strata Digital Farabiel for the PMB portal of STIE Mahardhika, Surabaya, an economics and business college, serving its Doctoral (S3) Program in Management Science admissions system. Tech stack: Node.js with Hono, PostgreSQL, Redis, Midtrans (payment gateway), Tailwind CSS, Docker, and GitHub Actions.",
    descriptionId: "Sebagai Backend Engineer dan CI/CD pipeline di PT Strata Digital Farabiel untuk portal PMB milik STIE Mahardhika, Surabaya, perguruan tinggi bidang ekonomi dan bisnis, sistem pendaftaran Program Doktor (S3) Ilmu Manajemen. Tech stack yang digunakan: Node JS dengan framework Hono JS, PostgreSQL, Redis, Midtrans (Payment Gateway), Tailwind CSS, Docker, GitHub Actions.",
    url: "https://pmbs3.stiemahardhika.ac.id/",
  },
  {
    period: "Oct 2025 - Dec 2025",
    role: "Front End Engineer",
    type: "Part-time",
    company: "Lembaga Cici Mandarin",
    description:
      "Part-time Frontend Engineer building the cicimandarin.com website. Cici Mandarin provides study, travel, and work services to China, including Mandarin learning and scholarship assistance. Developed the site's interface with Astro, focusing on a fast, responsive, and easy-to-use experience so visitors can easily understand the services offered.",
    descriptionId: "Sebagai Frontend Engineer paruh waktu dalam pembangunan website cicimandarin.com. Cici Mandarin bergerak di bidang layanan studi, travel, dan kerja ke China, termasuk pembelajaran bahasa Mandarin dan pendampingan beasiswa. Mengembangkan antarmuka website tersebut menggunakan framework JavaScript Astro, dengan fokus pada tampilan yang cepat, responsif, dan mudah digunakan, agar pengunjung mudah memahami layanan yang ditawarkan.",
    url: "https://cicimandarin.com/",
  },
];

/* ------------------------------------------------------------------ */
/* Ways to work together + FAQ                                         */
/* ------------------------------------------------------------------ */


