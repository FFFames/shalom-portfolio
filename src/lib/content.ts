export type Project = {
  title: string;
  badge: string;
  description: string;
  features: string[];
  tech: { name: string; special?: boolean }[];
  github: string;
  demo?: string;
  credentials?: { label: string; text: string };
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  thesis?: { label: string; title: string; href: string };
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type PortfolioContent = {
  lang: "en" | "th";
  htmlLang: string;
  // nav
  nav: { about: string; projects: string; contact: string; resume: string };
  langLabel: string;
  langHref: string;
  // hero
  greeting: string;
  name: string;
  subtitle: string;
  viewProjects: string;
  getInTouch: string;
  downloadResume: string;
  // section titles
  aboutTitle: string;
  whoTitle: string;
  whoBody: string[];
  educationTitle: string;
  school: string;
  faculty: string;
  educationMeta: string;
  skillsTitle: string;
  skillGroups: SkillGroup[];
  experienceTitle: string;
  experienceOrg: string;
  experienceRole: string;
  experienceItems: string[];
  certificatesTitle: string;
  certificates: { label: string; href: string }[];
  projectsTitle: string;
  projectsSubtitle: string;
  projects: Project[];
  // contact
  contactTitle: string;
  contactText: string;
  email: string;
  location: string;
  // labels
  githubLabel: string;
  liveDemoLabel: string;
  demoAccessLabel: string;
  featuredLabel: string;
  footer: string;
};

const RESUME_EN = "https://storage.googleapis.com/interaction-media-bucket/2b6b3a46-4325-41d3-9beb-1adf9911a851/52151ae2-7752-59d3-9be1-f291eaa15878?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=vercel%40theta-eon-430220-u6.iam.gserviceaccount.com%2F20260629%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260629T060306Z&X-Goog-Expires=60&X-Goog-SignedHeaders=host&X-Goog-Signature=c1af5cfce50e80ac7496342da8710c34a31739bd8721c83eb0a9cae7288df5d022629da7dd0121f4b0c78644d4d564bfa125ebde318234a3bc230b1b45aa3c0965c090601077ef8bcc1ecf1b9416e337d28336cfed99ebced1b3422ec79616be2676e59660a2edf443c6fbfe1190c7d1b55ad986e538e4288c02767c78a3c808fe53938e96f47af5f3d30cff68c08ffbd150612926fda52c51a96c34ce93288b55cf517207473a7e87ac52ea583c9be465c9ead3c7e2378b06c29ad20418534ded2ac297a5cefbd59c5ba3cc1976a6913872e0c0e141655eb945e5f60fb8bd095ff74b1fa20b3e2b3194a4578001e51f0d1bef670f4684e4ddf3019191a6c9d7";
const PROFILE_IMG = "/assets/images/profile.png?v=11";
const EMAIL = "shalom.inchoi@gmail.com";

export const PROFILE_IMAGE = PROFILE_IMG;
export const RESUME_PATH = RESUME_EN;
export const CONTACT_EMAIL = EMAIL;
export const LINKEDIN = "https://www.linkedin.com/in/shalom-inchoi/";
export const GITHUB = "https://github.com/FFFames";

const certificateFiles = {
  alteryx: "/assets/certificates/alteryx-designer-core.pdf",
  gemini: "/assets/certificates/gemini-certification.pdf",
  toeic: "/assets/certificates/toeic-score.pdf",
};

const projectImages = {
  murderMystery: "/assets/projects/murder-mystery.png",
  worship: "/assets/projects/worship.png",
  toeic: "/assets/projects/toeic.png",
  jiggly: "/assets/projects/jiggly.png",
  ocr: "/assets/projects/ocr.png",
};

export const en: PortfolioContent = {
  lang: "en",
  htmlLang: "en",
  nav: { about: "About", projects: "Projects", contact: "Contact", resume: "Resume" },
  langLabel: "TH",
  langHref: "/th",
  greeting: "Hello, I'm",
  name: "Shalom Inchoi",
  subtitle:
    "Crafting intelligent solutions with OCR, machine learning, and full-stack development.",
  viewProjects: "View projects",
  getInTouch: "Get in touch",
  downloadResume: "Download resume",
  aboutTitle: "About",
  whoTitle: "Who I am",
  whoBody: [
    "ICT graduate from Mahidol University specializing in Database and Intelligent Systems. Experienced in OCR systems with Tesseract, computer vision using OpenCV and YOLO, and LLM integration for dynamic NPC dialogue.",
    "I design applied AI solutions for text extraction, object detection, and interactive environments.",
  ],
  educationTitle: "Education",
  school: "Mahidol University",
  faculty: "Faculty of ICT - Database and Intelligent Systems",
  educationMeta: "2022 - 2026 | GPA: 3.15",
  skillsTitle: "Skills",
  skillGroups: [
    {
      label: "Programming",
      items: ["Python", "JavaScript", "TypeScript", "React", "Next.js", "HTML/CSS"],
    },
    {
      label: "AI/ML",
      items: ["Tesseract", "Random Forest", "YOLO", "ChromaDB", "LangChain", "FastAPI", "Gemini"],
    },
    {
      label: "Data & Tools",
      items: ["PostgreSQL", "Supabase", "Alteryx", "Tableau", "PowerBI", "Groq"],
    },
  ],
  experienceTitle: "Experience",
  experienceOrg: "CDG Group (Nostra Logistic)",
  experienceRole: "Internship | 2026",
  experienceItems: [
    "Developed OCR API for weight tickets using PaddleOCR + Random Forest + Gemini 3.1 Flash-Lite.",
    "Automated mobile app regression testing using Katalon Studio.",
  ],
  certificatesTitle: "Certificates",
  certificates: [
    { label: "Alteryx Designer Core Certification", href: certificateFiles.alteryx },
    { label: "Gemini Certification for University Students", href: certificateFiles.gemini },
    { label: "TOEIC: 870 (Listening: 450, Reading: 420)", href: certificateFiles.toeic },
  ],
  projectsTitle: "Featured projects",
  projectsSubtitle:
    "Selected works across AI, full-stack development, and creative solutions.",
  projects: [
    {
      title: "Murder Mystery: AI-Powered Detective Game",
      badge: "Unity 6",
      featured: true,
      description:
        "An immersive detective game where players interrogate AI-driven NPCs and collect evidence to solve a murder case. Built as my senior project.",
      features: [
        "RAG-based NPC dialogue with consistent personas woven into the story",
        "Interactive evidence system to collect, inspect, and confront NPCs",
        "Fully playable and interrogatable in both English and Thai",
        "Structured 100-point case evaluation of suspect, motive, and method",
        "Truth-telling logic: NPCs lie or confess based on the evidence presented",
      ],
      tech: [
        { name: "Unity 6" },
        { name: "C#" },
        { name: "FastAPI" },
        { name: "Groq (Llama 3.1 8B)" },
        { name: "ChromaDB" },
        { name: "RAG" },
        { name: "Tailwind CSS" },
      ],
      github: "https://github.com/krtprml/SeniorProject",
      image: projectImages.murderMystery,
      imageAlt: "Murder Mystery detective game showing LLM-driven NPC dialogue",
      thesis: {
        label: "Read Thesis",
        title:
          "An Educational Game for Investigative Questioning at Crime Scenes with LLM-Driven NPCs (Mahidol University, 2025)",
        href: "/assets/thesis/murder-mystery-thesis.pdf",
      },
    },
    {
      title: "worship",
      badge: "Next.js 16",
      description:
        "Chord chart manager for worship teams with instant transposition, service planning, and presentation mode.",
      features: [
        "Song library with automatic chord detection",
        "Instant key transposition using Tonal",
        "Service playlists & presentation view",
        "Cloud sync via Supabase",
      ],
      tech: [
        { name: "Next.js" },
        { name: "Supabase" },
        { name: "Zustand" },
        { name: "Tailwind" },
        { name: "Tonal" },
        { name: "Claude Code", special: true },
      ],
      github: "https://github.com/FFFames/worship-team-app",
      demo: "https://worship-delta.vercel.app",
      image: projectImages.worship,
      imageAlt: "Worship song library interface",
    },
    {
      title: "toeic-study",
      badge: "Education",
      description:
        "Comprehensive TOEIC preparation platform with 3000+ vocabulary words and practice tests.",
      features: [
        "3000+ vocabulary flashcards with difficulty filtering",
        "Part 5, 6, 7 practice exercises",
        "Mock exam mode with real test conditions",
        "Built with Claude Code, tested with Playwright",
      ],
      tech: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "Claude Code", special: true },
      ],
      github: "https://github.com/FFFames/toeic-study",
      demo: "https://leafy-scone-d76e9a.netlify.app",
      image: projectImages.toeic,
      imageAlt: "TOEIC study platform interface",
    },
    {
      title: "ocr-bank2",
      badge: "Full-stack",
      description:
        "Full-stack web application for mobile bank receipt processing with template-based OCR, review interface, JWT authentication, and a RAG-powered chatbot.",
      features: [
        "Template-based OCR with zone extraction (Tesseract)",
        "Review interface with zone overlay visualization",
        "Transaction classification (income/expense)",
        "JWT authentication & admin panel",
        "RAG chatbot & analytics dashboard",
      ],
      tech: [
        { name: "React 18" },
        { name: "TypeScript" },
        { name: "FastAPI" },
        { name: "PostgreSQL" },
        { name: "Tesseract" },
        { name: "ChromaDB" },
        { name: "Gemini" },
        { name: "Groq" },
        { name: "Claude Code", special: true },
      ],
      github: "https://github.com/FFFames/ocr-bank2",
      demo: "https://fame-thai-slip.vercel.app/",
      credentials: { label: "Demo access", text: "test2@test.com / test123" },
      image: projectImages.ocr,
      imageAlt: "OCR bank receipt processing dashboard",
    },
    {
      title: "Jiggly Garden Dictionary",
      badge: "Language",
      description:
        "Bilingual English-Thai personal dictionary that combines dictionary lookup with active learning features like flashcards and quizzes.",
      features: [
        "Dictionary lookup with English definitions and Thai translations",
        "Custom categories for organizing vocabulary lists",
        "Interactive flashcards with spaced repetition-style learning",
        "Multiple choice quizzes to reinforce learning",
      ],
      tech: [
        { name: "Next.js 14+" },
        { name: "shadcn/ui" },
        { name: "Tailwind CSS" },
        { name: "Claude Code", special: true },
      ],
      github: "https://github.com/FFFames/Jiggly-Garden-Dictionary",
      demo: "https://jiggly-garden-dictionary.vercel.app/",
      image: projectImages.jiggly,
      imageAlt: "Jiggly Garden bilingual dictionary interface",
    },
  ],
  contactTitle: "Let's connect",
  contactText:
    "I'm interested in opportunities in AI/ML, full-stack development, and innovative tech projects.",
  email: EMAIL,
  location: "Lat Krabang, Bangkok",
  githubLabel: "GitHub",
  liveDemoLabel: "Live demo",
  demoAccessLabel: "Demo access",
  featuredLabel: "Senior Project",
  footer: "© 2026 Shalom Inchoi. Crafted with precision.",
};

export const th: PortfolioContent = {
  lang: "th",
  htmlLang: "th",
  nav: { about: "เกี่ยวกับผม", projects: "ผลงาน", contact: "ติดต่อ", resume: "เรซูเม่" },
  langLabel: "EN",
  langHref: "/",
  greeting: "สวัสดีครับ ผมชื่อ",
  name: "ชาโลม อินช้อย",
  subtitle:
    "ผู้เชี่ยวชาญด้านการพัฒนาโซลูชัน AI ครอบคลุมงาน OCR, Machine Learning และ Full Stack Development",
  viewProjects: "ดูผลงาน",
  getInTouch: "ติดต่อผม",
  downloadResume: "ดาวน์โหลดเรซูเม่",
  aboutTitle: "เกี่ยวกับผม",
  whoTitle: "ประวัติโดยย่อ",
  whoBody: [
    "บัณฑิตคณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยมหิดล สาขา Database and Intelligent Systems มีความเชี่ยวชาญด้านระบบ OCR ด้วย Tesseract, งาน Computer Vision ด้วย OpenCV และ YOLO รวมถึงการประยุกต์ใช้ LLM สำหรับระบบสนทนาแบบไดนามิก",
    "ออกแบบและพัฒนาโซลูชัน AI สำหรับการสกัดข้อความ การตรวจจับวัตถุ และการสร้างประสบการณ์แบบโต้ตอบ",
  ],
  educationTitle: "การศึกษา",
  school: "มหาวิทยาลัยมหิดล",
  faculty: "คณะเทคโนโลยีสารสนเทศและการสื่อสาร สาขา Database and Intelligent Systems",
  educationMeta: "2022 - 2026 | GPA: 3.15",
  skillsTitle: "ทักษะและความเชี่ยวชาญ",
  skillGroups: [
    {
      label: "ภาษาโปรแกรมและเฟรมเวิร์ก",
      items: ["Python", "JavaScript", "TypeScript", "React", "Next.js", "HTML/CSS"],
    },
    {
      label: "AI/ML",
      items: ["Tesseract", "Random Forest", "YOLO", "ChromaDB", "LangChain", "FastAPI", "Gemini"],
    },
    {
      label: "ข้อมูลและเครื่องมือ",
      items: ["PostgreSQL", "Supabase", "Alteryx", "Tableau", "PowerBI", "Groq"],
    },
  ],
  experienceTitle: "ประสบการณ์ทำงาน",
  experienceOrg: "กลุ่มบริษัท CDG (Nostra Logistic)",
  experienceRole: "นักศึกษาฝึกงาน | 2026",
  experienceItems: [
    "พัฒนา OCR API สำหรับใบชั่งน้ำหนักด้วย PaddleOCR ร่วมกับ Random Forest และ Gemini 3.1 Flash-Lite",
    "พัฒนาระบบทดสอบ Regression อัตโนมัติสำหรับแอปพลิเคชันมือถือด้วย Katalon Studio",
  ],
  certificatesTitle: "ใบรับรอง",
  certificates: [
    { label: "Alteryx Designer Core Certification", href: certificateFiles.alteryx },
    { label: "Gemini Certification for University Students", href: certificateFiles.gemini },
    { label: "TOEIC: 870 (Listening: 450, Reading: 420)", href: certificateFiles.toeic },
  ],
  projectsTitle: "ผลงานที่คัดสรร",
  projectsSubtitle: "ผลงานที่โดดเด่นครอบคลุมงานด้าน AI, Full Stack Development และการพัฒนาโซลูชันเชิงสร้างสรรค์",
  projects: [
    {
      title: "Murder Mystery: AI-Powered Detective Game",
      badge: "Unity 6",
      featured: true,
      description:
        "เกมสืบสวนสุดสมจริงที่ผู้เล่นสอบปากคำ NPC ซึ่งขับเคลื่อนด้วย AI และรวบรวมหลักฐานเพื่อไขคดีฆาตกรรม พัฒนาขึ้นเป็นโปรเจกต์จบการศึกษา",
      features: [
        "บทสนทนา NPC แบบ RAG ที่คงบุคลิกสอดคล้องและเชื่อมโยงกับเนื้อเรื่อง",
        "ระบบหลักฐานแบบโต้ตอบ สำหรับเก็บ ตรวจสอบ และใช้เผชิญหน้า NPC",
        "รองรับสองภาษาเต็มรูปแบบ เล่นและสอบปากคำได้ทั้งอังกฤษและไทย",
        "ระบบประเมินคดีแบบมีโครงสร้าง 100 คะแนน วัดผู้ต้องสงสัย แรงจูงใจ และวิธีการ",
        "ตรรกะการพูดความจริง: NPC จะโกหกหรือสารภาพตามหลักฐานที่ผู้เล่นใช้",
      ],
      tech: [
        { name: "Unity 6" },
        { name: "C#" },
        { name: "FastAPI" },
        { name: "Groq (Llama 3.1 8B)" },
        { name: "ChromaDB" },
        { name: "RAG" },
        { name: "Tailwind CSS" },
      ],
      github: "https://github.com/krtprml/SeniorProject",
      image: projectImages.murderMystery,
      imageAlt: "เกมสืบสวน Murder Mystery แสดงบทสนทนา NPC ที่ขับเคลื่อนด้วย LLM",
      thesis: {
        label: "อ่านวิทยานิพนธ์",
        title:
          "เกมเพื่อการศึกษาสำหรับการซักถามเชิงสืบสวน ณ สถานที่เกิดเหตุ ด้วย NPC ที่ขับเคลื่อนโดย LLM (มหาวิทยาลัยมหิดล, 2025)",
        href: "/assets/thesis/murder-mystery-thesis.pdf",
      },
    },
    {
      title: "worship",
      badge: "Next.js 16",
      description:
        "ระบบจัดการคอร์ดเพลงสำหรับทีมนมัสการ รองรับการเปลี่ยนคีย์แบบเรียลไทม์ การวางแผนลำดับเพลง และโหมดนำเสนอบนเวที",
      features: [
        "คลังเพลงพร้อมระบบตรวจจับคอร์ดอัตโนมัติ",
        "เปลี่ยนคีย์เพลงได้ทันทีด้วย Tonal",
        "จัดเพลย์ลิสต์สำหรับการนมัสการและมุมมองนำเสนอ",
        "ซิงก์ข้อมูลผ่านคลาวด์ด้วย Supabase",
      ],
      tech: [
        { name: "Next.js" },
        { name: "Supabase" },
        { name: "Zustand" },
        { name: "Tailwind" },
        { name: "Tonal" },
        { name: "Claude Code", special: true },
      ],
      github: "https://github.com/FFFames/worship-team-app",
      demo: "https://worship-delta.vercel.app",
      image: projectImages.worship,
      imageAlt: "หน้าจอคลังเพลงนมัสการ",
    },
    {
      title: "toeic-study",
      badge: "Education",
      description:
        "แพลตฟอร์มเตรียมสอบ TOEIC แบบครบวงจร พร้อมคลังคำศัพท์กว่า 3,000 คำและชุดแบบฝึกหัด",
      features: [
        "บัตรคำศัพท์กว่า 3,000 คำ พร้อมตัวกรองตามระดับความยาก",
        "แบบฝึกหัด Part 5, 6 และ 7",
        "โหมดจำลองการสอบเสมือนจริง",
        "พัฒนาด้วย Claude Code และทดสอบด้วย Playwright",
      ],
      tech: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "Claude Code", special: true },
      ],
      github: "https://github.com/FFFames/toeic-study",
      demo: "https://leafy-scone-d76e9a.netlify.app",
      image: projectImages.toeic,
      imageAlt: "หน้าจอแพลตฟอร์มเตรียมสอบ TOEIC",
    },
    {
      title: "ocr-bank2",
      badge: "Full-stack",
      description:
        "เว็บแอปพลิเคชัน Full Stack สำหรับประมวลผลสลิปธนาคารจากมือถือ ด้วยระบบ OCR แบบเทมเพลต หน้าตรวจทานข้อมูล ระบบยืนยันตัวตนด้วย JWT และแชตบอตที่ขับเคลื่อนด้วย RAG",
      features: [
        "ระบบ OCR แบบเทมเพลต สกัดข้อมูลตามโซนด้วย Tesseract",
        "หน้าตรวจทานพร้อมการแสดงภาพซ้อนทับโซนข้อมูล",
        "จำแนกประเภทธุรกรรมโดยอัตโนมัติ (รายรับ/รายจ่าย)",
        "ระบบยืนยันตัวตนด้วย JWT และแผงควบคุมสำหรับผู้ดูแลระบบ",
        "แชตบอต RAG และแดชบอร์ดวิเคราะห์ข้อมูล",
      ],
      tech: [
        { name: "React 18" },
        { name: "TypeScript" },
        { name: "FastAPI" },
        { name: "PostgreSQL" },
        { name: "Tesseract" },
        { name: "ChromaDB" },
        { name: "Gemini" },
        { name: "Groq" },
        { name: "Claude Code", special: true },
      ],
      github: "https://github.com/FFFames/ocr-bank2",
      demo: "https://fame-thai-slip.vercel.app/",
      credentials: { label: "ข้อมูลเข้าใช้งานตัวอย่าง", text: "test2@test.com / test123" },
      image: projectImages.ocr,
      imageAlt: "แดชบอร์ดประมวลผลใบเสร็จธนาคารด้วย OCR",
    },
    {
      title: "Jiggly Garden Dictionary",
      badge: "Language",
      description:
        "เว็บแอปพลิเคชันพจนานุกรมส่วนตัวสองภาษา อังกฤษ-ไทย ที่ผสานการค้นหาคำศัพท์เข้ากับฟีเจอร์การเรียนรู้เชิงรุก ทั้งบัตรคำและแบบทดสอบ",
      features: [
        "ค้นหาคำศัพท์พร้อมคำนิยามภาษาอังกฤษและคำแปลภาษาไทย",
        "สร้างหมวดหมู่ของตนเองเพื่อจัดระเบียบรายการคำศัพท์",
        "บัตรคำแบบโต้ตอบพร้อมการทบทวนแบบ Spaced Repetition",
        "แบบทดสอบปรนัยเพื่อตอกย้ำการเรียนรู้",
      ],
      tech: [
        { name: "Next.js 14+" },
        { name: "shadcn/ui" },
        { name: "Tailwind CSS" },
        { name: "Claude Code", special: true },
      ],
      github: "https://github.com/FFFames/Jiggly-Garden-Dictionary",
      demo: "https://jiggly-garden-dictionary.vercel.app/",
      image: projectImages.jiggly,
      imageAlt: "หน้าจอพจนานุกรมสองภาษา Jiggly Garden",
    },
  ],
  contactTitle: "มาร่วมงานกัน",
  contactText:
    "ผมเปิดรับโอกาสในงานด้าน AI/ML, Full Stack Development และโปรเจกต์ที่ขับเคลื่อนด้วยเทคโนโลยีใหม่ ๆ",
  email: EMAIL,
  location: "ลาดกระบัง, กรุงเทพฯ",
  githubLabel: "GitHub",
  liveDemoLabel: "ดูตัวอย่างจริง",
  demoAccessLabel: "ข้อมูลเข้าใช้งานตัวอย่าง",
  featuredLabel: "โปรเจกต์จบการศึกษา",
  footer: "© 2026 ชาโลม อินช้อย มุ่งมั่นสร้างสรรค์ผลงานด้วยคุณภาพและความแม่นยำ",
};
