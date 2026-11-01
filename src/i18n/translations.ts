export type Language = "en" | "id";

const en = {
  nav: {
    primary: "Primary",
    education: "Education",
    experience: "Experience",
    skills: "Skills",
    certifications: "Certifications",
    hireMe: "Hire me",
    downloadCv: "Download CV",
    toggleMenu: "Toggle menu",
    languageIndonesian: "Bahasa Indonesia",
    languageEnglish: "English",
  },
  hero: {
    badge: "Hire Me Please !",
    title: "Full-stack web developer.",
    subtitle:
      "I design and build fast, thoughtful web experiences - including campus systems used by 1,250 students and lecturers.",
    hireMe: "Hire me",
    downloadCv: "Download CV",
  },
  education: {
    eyebrow: "✨ Education",
    heading: "Strong foundations.",
    university: "State Islamic University Sultan Syarif Kasim Riau",
    degree: "Bachelor of Informatics Engineering",
  },
  skills: {
    eyebrow: "💎 Skills",
    heading: "The toolkit.",
    groups: {
      programming: {
        title: "Programming & Frameworks",
        description: "Core languages and frameworks I use to build fast, reliable web applications.",
      },
      data: {
        title: "Data",
        description: "Databases and query tools for designing, storing, and optimizing data.",
      },
      infrastructure: {
        title: "Infrastructure & Tools",
        description: "Tooling and practices for shipping, deploying, and running software in production.",
      },
      core: {
        title: "Core Competencies",
        description: "How I work - from system design decisions to leading technical teams.",
      },
      languages: {
        title: "Languages",
        description: "Languages I use to communicate, document, and collaborate.",
      },
    },
  },
  certifications: {
    eyebrow: "🎯 Certifications",
    heading: "Certified proof.",
    viewCertificate: "View certificate",
    viewTranscript: "View transcript",
  },
  experience: {
    eyebrow: "♨️ Experience",
    heading: "Power on full display.",
    viewJobDesk: "View job desk",
    myJobDesk: "My Job Desk",
    liveProduction: "Live production",
    close: "Close",
    experiment: "Experiment",
    withAi: "with AI assistant",
    jobTypes: {
      "Part-time": "Part-time",
      Internship: "Internship",
      "Personal Project": "Personal Project",
    } as Record<string, string>,
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Questions. Answered.",
    items: [
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
    ],
  },
  contact: {
    heading: "Let's build.",
    subtitle: "Have a project, a role, or just an idea? My inbox is always open.",
    copyEmail: "Copy email address",
  },
  footer: {
    ps: "P.S. This site practices what it preaches — semantic HTML, structured data, meta tags, sitemap, and a 100-point Lighthouse target.",
    runTest: "Run the test",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};

export type Translation = typeof en;

const id: Translation = {
  nav: {
    primary: "Utama",
    education: "Pendidikan",
    experience: "Pengalaman",
    skills: "Keahlian",
    certifications: "Sertifikasi",
    hireMe: "Pekerjakan Saya",
    downloadCv: "Unduh CV",
    toggleMenu: "Buka/Tutup Menu",
    languageIndonesian: "Bahasa Indonesia",
    languageEnglish: "English",
  },
  hero: {
    badge: "Yuk, Rekrut Saya!",
    title: "Pengembang web full-stack.",
    subtitle:
      "Saya merancang dan membangun pengalaman web yang cepat dan dirancang dengan matang — termasuk sistem kampus yang digunakan 1.250 mahasiswa dan dosen.",
    hireMe: "Pekerjakan Saya",
    downloadCv: "Unduh CV",
  },
  education: {
    eyebrow: "✨ Pendidikan",
    heading: "Fondasi yang kuat.",
    university: "Universitas Islam Negeri Sultan Syarif Kasim Riau",
    degree: "Sarjana Teknik Informatika",
  },
  skills: {
    eyebrow: "💎 Keahlian",
    heading: "Toolkit saya.",
    groups: {
      programming: {
        title: "Pemrograman & Framework",
        description: "Bahasa dan framework utama yang saya gunakan untuk membangun aplikasi web yang cepat dan andal.",
      },
      data: {
        title: "Data",
        description: "Basis data dan perangkat query untuk merancang, menyimpan, dan mengoptimalkan data.",
      },
      infrastructure: {
        title: "Infrastruktur & Tools",
        description: "Tools dan praktik untuk merilis, men-deploy, dan menjalankan perangkat lunak di production.",
      },
      core: {
        title: "Kompetensi Inti",
        description: "Cara saya bekerja — dari keputusan desain sistem hingga memimpin tim teknis.",
      },
      languages: {
        title: "Bahasa",
        description: "Bahasa yang saya gunakan untuk berkomunikasi, mendokumentasikan, dan berkolaborasi.",
      },
    },
  },
  certifications: {
    eyebrow: "🎯 Sertifikasi",
    heading: "Bukti sertifikasi.",
    viewCertificate: "Lihat sertifikat",
    viewTranscript: "Lihat transkrip",
  },
  experience: {
    eyebrow: "♨️ Pengalaman",
    heading: "Kemampuan penuh, dipamerkan.",
    viewJobDesk: "Lihat Job Desk",
    myJobDesk: "Job Desk Saya",
    liveProduction: "Situs Live",
    close: "Tutup",
    experiment: "Eksperimen",
    withAi: "dengan asisten AI",
    jobTypes: {
      "Part-time": "Paruh Waktu",
      Internship: "Magang",
      "Personal Project": "Proyek Pribadi",
    },
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Pertanyaan. Terjawab.",
    items: [
      {
        q: "Apakah Anda tersedia untuk pekerjaan freelance?",
        a: "Ya — saya sedang membuka booking proyek untuk Q3 2026. Ceritakan timeline Anda dan saya akan memberi tahu dalam 48 jam apakah kita cocok.",
      },
      {
        q: "Bagaimana timeline proyek biasanya?",
        a: "Kebanyakan situs marketing memakan waktu 2–3 minggu; aplikasi web penuh 4–6 minggu. Saya bekerja dalam milestone mingguan sehingga Anda selalu melihat progres, tanpa kejutan.",
      },
      {
        q: "Apakah Anda bekerja secara remote?",
        a: "Ya. Saya berbasis di Pekanbaru (WIB, UTC+7) dan bekerja async-first — update tertulis, rekaman walkthrough, dan jam overlap untuk panggilan dengan zona waktu mana pun.",
      },
      {
        q: "Seperti apa proses kerja Anda?",
        a: "Empat fase: Discover (tujuan, pengguna, kendala), Design (wireframe hingga hi-fi di Figma), Build (React + TypeScript, direview tiap minggu), dan Ship (dites, didokumentasikan, dimonitor).",
      },
      {
        q: "Bisakah Anda bekerja dengan design system kami yang sudah ada?",
        a: "Tentu. Saya bisa mengembangkan milik Anda, mengaudit kekurangannya, atau membangun dari nol — token, komponen, dan dokumentasi termasuk.",
      },
    ],
  },
  contact: {
    heading: "Mari membangun.",
    subtitle: "Punya proyek, peran, atau sekadar ide? Kotak masuk saya selalu terbuka.",
    copyEmail: "Salin alamat email",
  },
  footer: {
    ps: "P.S. Situs ini membuktikan omongannya sendiri — HTML semantik, structured data, meta tag, sitemap, dan target Lighthouse 100 poin.",
    runTest: "Jalankan tes",
    rights: "Seluruh hak cipta dilindungi.",
    backToTop: "Kembali ke atas",
  },
};

export const translations: Record<Language, Translation> = { en, id };
