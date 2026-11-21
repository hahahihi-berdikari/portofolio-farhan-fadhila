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
