export const resume = {
  text: "View Resume",
  href: "/Manali_Kaswa_Resume.pdf",
};

export const siteConfig = {
  name: "Manali Kaswa",
  title: "Manali Kaswa",
  description:
    "Product engineer who builds distributed, microservices-based enterprise systems from the ground up — turning messy requirements into architecture that ships. I am passionate about building products that are simple, flawless and wow.",
  social: {
    github: "https://github.com/manalikaswa",
    twitter: "https://x.com/manalikaswa",
    linkedin: "https://www.linkedin.com/in/manalikaswa/",
    medium: "https://medium.com/@manalii",
    goodreads: "https://www.goodreads.com/manalik",
    email: "mailto:manalikaswa@gmail.com",
  },
};

export const homeContent = {
  title: "Hello, I'm Manali",
  description:
    "Product engineer who builds distributed, microservices-based enterprise systems from the ground up — turning messy requirements into architecture that ships. I am passionate about building products that are simple, flawless and wow. \n When I'm not shipping systems, you'll find me reading, writing, drawing, hosting events or listening to music.",
  buttons: {
    about: {
      text: "View About",
      href: "/about/",
    },
    posts: {
      text: "Read Blog",
      href: "/posts/",
    },
    resume: {
      text: resume.text,
      href: resume.href,
    },
  },
  images: {
    light: "https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg",
    dark: "/assets/images/tech-background-dark.svg",
  },
};

export const aboutContent = {
  meta: {
    title: "About - Manali Kaswa",
    description:
      "Product engineer who builds distributed, microservices-based enterprise systems from the ground up — turning messy requirements into architecture that ships. I am passionate about building products that are simple, flawless and wow.",
  },
  title: "About Me",
  description:
    "I've spent the last few years deep in backend engineering — shipping features, driving releases, and owning customer requirements across DevOps, user identity, and FinOps. I'm now growing into software architecture and product management.\nOutside of work I'm an avid reader and I write about stuff on Medium.",
  skills: [
    "Go",
    "AWS",
    "User Identity (OAuth 2.0)",
    "Software Architecture",
    "FinOps",
    "Product Management",
    "DevOps",
    "OpenSearch",
    "Python",
    "Project Management",
    "Mentoring"
  ],
  image: {
    src: "/assets/images/about/photo.jpeg",
    alt: "Manali Kaswa",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "Dec 2025 – Present",
        position: "Senior Engineer",
        company: "Espressif Systems — IoT Cloud Platform",
        description:
          "Leading backend engineering for the IoT cloud platform from the ground up — owning foundational features, shaping product direction, and turning early customer needs into shipped design.",
        contributions: [
          {
            category: "Project Management",
            items: [
              "Spearheading release planning and driving the platform through its production releases.",
              "Sustaining a reliable weekly delivery cadence across the team.",
            ],
          },
          {
            category: "Product Management",
            items: [
              "Owning the customer experience — translating raw requirements into design and delivery.",
              "Mentored 2 interns to independently ship a user-system connector and a deployment manager.",
            ],
          },
        ],
        recognitions: [],
      },
      {
        period: "Feb 2023 – Dec 2025",
        position: "Cloud Backend Engineer",
        company: "Espressif Systems — ESP RainMaker",
        description:
          "Owned major backend features across identity, scale, and cost for the ESP RainMaker IoT cloud.",
        contributions: [
          {
            category: "Feature Development (Golang & Cloud Integrations)",
            items: [
              "Developed the OAuth2.0 based Identity server and client, implementing authorization code and ROPC grant flows.",
              "Led the design, entire backend development, and rollout of the product in the AWS China region, including app distribution on major stores and WeChat Sign-In integration.",
              "Optimized OTA status flow for millions of devices, achieving ~99% cost reduction.",
              "Designed an analytics dashboard leveraging OpenSearch.",
              "Developed scalable bulk device certificate registration using ECS.",
              "Concurrent processing using channels and semaphore.",
            ],
          },
          {
            category: "Scalability",
            items: [
              "Key contributor to the 4M-device stress test, leading cost analysis, observability dashboards, and performance investigations.",
            ],
          },
          {
            category: "Collaboration",
            items: [
              "Pioneered solutions for two business-critical, time-sensitive issues, resolving them under high-pressure conditions.",
              "Authored MQTT API documentation using AsyncAPI.",
            ],
          },
          {
            category: "FinOps",
            items: [
              "Delivered a comprehensive cost-analysis framework (feature/service/client-based), manually reviewing 250K+ lines of code pre-AI era.",
              "Proactively refactored backend workflows to optimize DB performance and reduce latency; actively involved in all optimization discussions.",
              "Mentored 3 interns on developing a FinOps calculator project.",
            ],
          },
        ],
        recognitions: ["ESP Maverick Quarterly Award", "Spot Award"],
      },
      {
        period: "May 2021 – Mar 2023",
        position: "Associate Engineer",
        company: "Espressif Systems — ESP RainMaker",
        description:
          "Shipped core Golang features, security & compliance work, and DevOps automation for the ESP RainMaker IoT cloud.",
        contributions: [
          {
            category: "Feature Development (Golang & Cloud Integrations)",
            items: [
              "JSON data processor.",
              "Groups based on dynamic filters.",
              "Async OTA support for firmware >5 MB.",
              "Clean product uninstallation.",
              "Alexa + Matter integration for local device communication.",
              "End-to-end user migration across backend, apps, dashboards, CLI, and integrations for 5+ enterprise customers.",
              "MQTT devices: MQTT-based file delivery.",
              "HTTP devices: mTLS-based APIs for devices and CA certificate management.",
            ],
          },
          {
            category: "Security & Compliance",
            items: [
              "SMS-based MFA.",
              "DB backup and restore.",
              "GDPR compliance by encrypting PI data with two-level caching and cost-optimized lazy migration.",
              "API logging with CSV exports to S3 for compliance.",
            ],
          },
          {
            category: "Documentation",
            items: [
              "Enhanced developer documentation with Swagger versioning and limits/quotas references.",
              "Wrote release notes for every release.",
            ],
          },
          {
            category: "Collaboration",
            items: [
              "KT to new joiners.",
              "Reviewed 90% of the code written.",
              "Speaker at ESP DevCon '22, presenting on event filtering mechanisms.",
            ],
          },
          {
            category: "DevOps",
            items: [
              "Automated end-to-end operations, previously manual, across 10+ CI/CD pipelines.",
              "Revamped company-wide AWS account management using SSO-based access over passwords, plus identity governance.",
            ],
          },
        ],
        recognitions: ["'Openness' Value Award"],
      },
      {
        period: "Dec 2019",
        position: "Winter Trainee",
        company: "Persistent Systems — Persistent Computing Institute",
        description:
          "A 10-day intensive on functional programming and computational analysis — recursive problem-solving in Gofer, program optimization with the SPAN tool and flow analysis, and coding a basic lexer.",
        recognitions: [],
      },
    ],
  },
  certifications: {
    title: "Certifications",
    items: [
      {
        name: "AWS Certified Developer – Associate",
        issuer: "Amazon Web Services",
        year: "2022",
      },
    ],
  },
};


export const talksContent = {
  meta: {
    title: "Talks - Manali Kaswa",
    description: "Talks and conference sessions I've given",
  },
  title: "Talks",
  description:
    "Talks and sessions I've given at conferences and summits. Grab a coffee and take a look.",
  talks: [
    {
      slug: "building-oauth-from-first-principles",
      title: "Building OAuth from First Principles",
      description: "IdentityShield Summit '25",
      videoId: "PySCNhFR1VI",
      summary:
        "A ground-up derivation of OAuth 2.0 and OpenID Connect: starting from the naive 'just share your password' approach and iteratively fixing each flaw — tokens, scopes, redirect URLs, client secrets, authorization codes, state, refresh tokens, ID tokens, and PKCE — until we arrive at the modern authorization-code-with-PKCE flow.",
      pdf: "/assets/talks/building-oauth-from-first-principles.pdf",
      slides: {
        basePath: "/assets/talks/building-oauth/slide",
        count: 30,
      },
    },
    {
      slug: "extending-esp-rainmaker",
      title: "Extending ESP RainMaker with Custom Features",
      description: "Espressif Developer Conference '22 — Day 2, Talk 5",
      videoId: "kieitPui4y4",
    },
  ],
};

export const academicsContent = {
  meta: {
    title: "Academics - Manali Kaswa",
    description:
      "Education, academic projects, certifications, and coursework.",
  },
  title: "Academics",
  description:
    "My academic foundation — my degree, the projects I built along the way, the certifications I've earned, and coursework that shaped how I think.",
  education: {
    title: "Education",
    items: [
      {
        period: "2017 – 2021",
        degree: "B.E. in Computer Engineering",
        institution: "International Institute of Information Technology, Pune",
        grade: "9.73 CGPA",
        description:
          "Built a foundation in data structures, algorithms, and systems — and shipped several hands-on projects spanning Cloud, ML, and full-stack Web.",
        recognitions: [
          "B.E. Topper",
          "Two-time University Rank Holder",
          "Award for Overall Academic Achievement",
          "NES Innovation Award — Most Commendable Project",
          "PCMC Smart City Hackathon Finalist (HealthConnect disease tracking)",
          "Top 6% — Infosys HackWithInfy",
          "LTI Infinity Code Challenge — Level 1 Coder",
        ],
        coursework: [
          "Data Structures & Algorithms",
          "Object-Oriented Programming",
          "Database Management Systems",
          "Computer Networks",
          "Operating Systems",
          "Web Technology",
          "Machine Learning",
          "Digital Electronics and Logic Design",
        ],
        activities: [
          "Academic Representative",
          "CESA Secretary",
          "CESA Strategic Planner",
          "PR Committee Member",
          "DHRUVA Annual Fest — Event Coordinator",
          "Department Magazine — Editor",
          "College Magazine — English Sub-editor",
        ],
      },
      {
        period: "2015 – 2017",
        degree: "Higher Secondary Certificate — Science (PCMB)",
        institution: "S.M. Choksey High School & Junior College",
        grade: "88.31%",
        description:
          "Science stream (Physics, Chemistry, Maths, Biology). Nurtured a passion for public speaking through talks at key events, and took part in cultural and culinary competitions.",
        recognitions: [
          "HSC Merit Student (Top 1%)",
          "All-India Essay Competition (UN & SRCM) — Honourable Mention",
        ],
      },
      {
        period: "2010 – 2015",
        degree: "Secondary School Certificate",
        institution: "Mount Carmel Convent High School, Pune",
        grade: "93.40%",
        description:
          "A well-rounded secondary education across academics, arts, sports.",
        recognitions: [
          "SSC Merit Student",
          "Top 3 Ranker Throughout Secondary School",
          "Science Olympiad — Silver Medal (×2)",
          "Maths Olympiad — Silver Medal",
          "MTSE & NTSE Scholarships (Consolation)",
        ],
        activities: [
          "RSP (Road Safety Patrol) Cadet",
          "Cultural plays, songs, dances, speeches & quizzes",
          "Taekwondo — Green Belt (Level 6)",
          "Govt. of Maharashtra Elementary & Intermediate Drawing grades",
        ],
      },
    ],
  },
  projects: {
    title: "Academic Projects",
    items: [
      {
        name: "COVID-19 WorkForce Cross-Platform App",
        period: "Sep 2020 – Jan 2021",
        description:
          "A sponsored, closed-source app assisting a municipal corporation across the full patient lifecycle — GPS ambulance/patient tracking, a visual map, hospital bed management, discharge reports, and a daily/weekly/monthly statistics dashboard for stakeholders from field workers to war rooms.",
      },
      {
        name: "Customer-Care Chatbot (IBM Cloud)",
        period: "Aug 2020",
        description:
          "An electronic-store app on IBM Cloud with login, registration, and a Watson Assistant chatbot answering store and product queries. Built with Watson Assistant, Discovery, and Node-RED. Associated with IIIT Pune.",
        href: "https://github.com/manalikaswa/NODE-Red-customer-care-chatbot",
      },
      {
        name: "Interns-On-Point",
        period: "Jun 2019 – Nov 2019",
        description:
          "A two-interface internship platform (XAMPP) for company admins and students — internship postings by technology, applications, code submission, performance ratings, and analytics for both sides. Associated with IIIT Pune.",
        href: "https://github.com/manalikaswa/Interns-On-Point",
      },
      {
        name: "Hospital Management System",
        period: "College coursework",
        description:
          "A console-based hospital management system in C++ built on a priority-queue data structure.",
        href: "https://github.com/manalikaswa/Hospital-Management-using-C-",
      },
      {
        name: "Airplane Seat Booking System",
        period: "College coursework",
        description:
          "A console-based airplane seat booking system built in C++.",
        href: "https://github.com/manalikaswa/Airplane-seat-booking-system-in-C-",
      },
    ],
  },
  certifications: {
    title: "Certifications",
    items: [
      {
        name: "GCP Fundamentals: Core Infrastructure",
        issuer: "Coursera",
        year: "2020",
      },
      {
        name: "AWS Fundamentals: Going Cloud-Native",
        issuer: "Coursera",
        year: "2020",
      },
      {
        name: "Elite Certification in C++",
        issuer: "NPTEL",
        year: "2018",
      },
      {
        name: "Android App Development",
        issuer: "Wisdom Sprouts IT Training Hub",
        year: "2019",
      },
    ],
  },
  publications: {
    title: "Publications",
    items: [
      {
        title: "A COVID-19 Tracker for Medical Front-Liners",
        venue:
          "Artificial Intelligence Applications for Health Care — Routledge (Taylor & Francis)",
        detail: "Book Chapter 13",
        date: "Apr 15, 2022",
        href: "https://www.routledge.com/Artificial-Intelligence-Applications-for-Health-Care/Ahirwal-Londhe-Kumar/p/book/9781032148465",
      },
    ],
  },
  coursework: {
    title: "Continued Learning",
    items: [
      {
        name: "Learning How to Learn",
        issuer: "McMaster University",
        year: "2020",
      },
      {
        name: "Design Thinking for Innovation",
        issuer: "UVA Darden School of Business",
        year: "2020",
      },
      {
        name: "Introduction to Psychology",
        issuer: "Yale University",
        year: "2020",
      },
      {
        name: "Project Management: Basic to Success",
        issuer: "White Space",
        year: "2020",
      },
      {
        name: "Formal Languages",
        issuer: "Persistent Systems",
        year: "2020",
      },
    ],
  },
};
