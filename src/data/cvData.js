export const cvData = {
  personal: {
    name: "Hanif Arif",
    title: "Backend Engineer & Full-Stack Developer",
    location: "Mojokerto, Indonesia",
    email: "hnfarif18@gmail.com",
    phone: "+62 895338654344",
    github: "https://github.com/hnfarif",
    linkedin: "https://www.linkedin.com/in/hnfarif/",
    instagram: "https://www.instagram.com/hnfarif/",
    bio: "Backend Engineer with 3 years of experience delivering enterprise-scale financial systems and transaction platforms within banking and financial services environments. Skilled in designing scalable backend solutions, microservices, and system integrations using Java, Spring Boot, Spring Batch, webMethods, Oracle Database, Apache Kafka, Docker, and OpenShift. Also experienced in full-stack financial application development using React.js, NestJS, PostgreSQL, and CI/CD automation with GitLab and GitHub Actions.",
    stats: [
      { label: "Years of Experience", value: "3+" },
      { label: "Completed Projects", value: "8+" },
      { label: "Financial Systems Built", value: "5+" },
      { label: "Code Quality (SonarQube)", value: "A-Grade" },
    ],
  },
  education: {
    institution: "Dinamika University",
    degree: "Bachelor of Information Systems",
    location: "Surabaya, Indonesia",
    date: "Mar 2023",
    gpa: "3.83 / 4.0",
    details:
      "Specialized in Backend Engineering. Thesis on Outcome-Based Education (OBE) Application.",
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "JavaScript", "TypeScript", "PHP", "SQL"],
    },
    {
      category: "Backend Development",
      items: ["Spring Boot", "Spring Batch", "NestJS", "Laravel", "webMethods"],
    },
    {
      category: "Frontend Development",
      items: ["React.js", "Vaadin", "jQuery", "Tailwind CSS", "HTML5/CSS3"],
    },
    {
      category: "Infrastructure & DevOps",
      items: [
        "Docker",
        "OpenShift (OCP)",
        "Kubernetes (TKGI)",
        "GitLab CI/CD",
        "GitHub Actions",
      ],
    },
    {
      category: "Messaging & Integration",
      items: [
        "Apache Kafka",
        "Redis",
        "Event-Driven Architecture",
        "API Gateway",
      ],
    },
    {
      category: "Databases",
      items: [
        "Oracle Database",
        "PostgreSQL",
        "MySQL",
        "SQL Server",
        "MongoDB",
      ],
    },
  ],
  experience: [
    {
      role: "Backend Engineer",
      company: "PT Bank Negara Indonesia (Persero) Tbk",
      location: "Jakarta, Indonesia",
      duration: "Jul 2024 – Aug 2026",
      type: "Full-time",
      highlights: [
        "Designed and developed fit-for-purpose backend solutions to achieve sprint goals and deliver business value for wholesale transaction systems.",
        "Contributed to the development of scalable and resilient system architecture using Spring Boot, Spring Batch, React.js, Kafka (Confluent), Oracle Database, and webMethods integrations.",
        "Built, enhanced, and optimized CI/CD pipelines using GitLab to support automated build, testing, deployment, and delivery processes across development environments.",
        "Supported containerized application deployment using Docker, Kubernetes (TKGI), and OpenShift Container Platform (OCP).",
        "Established and maintained best practices for software testing, including unit testing, integration testing, and end-to-end validation to ensure application reliability and performance.",
        "Performed code quality assurance and peer review processes using SonarQube to enforce clean code principles, maintainability, and security standards.",
        "Worked collaboratively within cross-functional Agile Scrum teams, actively contributing to sprint planning, technical discussions, problem-solving sessions, and delivery support activities.",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "PT Pegadaian Galeri Dua Empat",
      location: "Jakarta, Indonesia",
      duration: "Jan 2024 – Apr 2024",
      type: "Full-time",
      highlights: [
        "Developed and maintained internal web-based applications to support end-to-end internal system for gold transaction and operational business processes.",
        "Designed and implemented application features using Java and Vaadin Framework, ensuring system reliability, usability, and maintainability.",
        "Collaborated closely with Business Analysts to analyze requirements, refine business workflows, and translate functional specifications into technical solutions.",
        "Coordinated with QA teams during testing cycles to identify issues, perform bug fixing, and ensure application quality prior to release.",
        "Produced and maintained technical documentation, including functional specifications, technical design references, and development implementation details.",
        "Supported application enhancement initiatives by improving system performance, optimizing business workflows, and ensuring data processing accuracy.",
      ],
    },
    {
      role: "Fullstack Developer (Bootcamp)",
      company: "Metrodata Academy",
      location: "Surabaya, Indonesia",
      duration: "Sep 2023 – Dec 2023",
      type: "Training",
      highlights: [
        "Completed intensive enterprise application development training using Spring Boot and modern web technologies.",
        "Delivered a Career Placement application as the final team project, implementing full-stack features.",
      ],
    },
    {
      role: "Fullstack Developer Intern",
      company: "Investree x Rakamin Academy",
      location: "Jakarta, Indonesia",
      duration: "May 2023 – Jun 2023",
      type: "Internship",
      highlights: [
        "Developed secure authentication and authorization features using Laravel framework.",
        "Applied code security practices, system optimization, and codebase refactoring to improve maintainability and performance.",
      ],
    },
  ],
  projects: [
    {
      title: "Managed File Transfer (MFT) Portal",
      company: "PT Bank Negara Indonesia (Persero) Tbk",
      duration: "Apr 2026 – Aug 2026",
      description:
        "Developed a secure and automated file transfer processing portal in a highly regulated financial environment.",
      details: [
        "Built a React.js-based portal for configuration and master data management, simplifying transaction file processing workflows.",
        "Developed generic backend APIs using webMethods Software AG to handle CRUD operations and portal integration processes.",
        "Integrated Oracle database for secure transaction data management and system reliability.",
        "Collaborated within a team of 6 developers to ensure stable delivery and maintainable system architecture.",
      ],
      tech: [
        "React.js",
        "webMethods",
        "Oracle DB",
        "REST APIs",
        "Tailwind CSS",
      ],
      metrics: "100% automated transfer, 6-dev team",
    },
    {
      title: "SNAP VA Payment & Refund",
      company: "PT Bank Negara Indonesia (Persero) Tbk",
      duration: "Jan 2026 – Aug 2026",
      description:
        "Developed robust backend services for Virtual Account (VA) payment and refund transaction processing using Spring Boot.",
      details: [
        "Implemented secure and reliable transaction validation, reconciliation, and refund handling workflows conforming to SNAP standards.",
        "Integrated services with internal core banking systems and external transaction platforms for real-time processing.",
        "Managed containerized deployments using Docker and OpenShift Container Platform (OCP).",
        "Supported CI/CD automation using GitLab pipelines to streamline development and deployment processes.",
      ],
      tech: ["Spring Boot", "Docker", "OpenShift", "GitLab CI/CD", "Kafka"],
      metrics: "Real-time payments, Bank-grade security",
    },
    {
      title: "Cost Control Management System",
      company: "PT Bintang Fajar Persada",
      duration: "Jun 2025 – Mar 2026",
      description:
        "Designed and developed an enterprise financial management application to streamline budgets, expenses, and asset allocations.",
      details: [
        "Developed financial submission modules: Cash Bank Requests, Cash Advance Requests, Expense Reports, Accounts Payable/Receivable, Customer Billing, and Cash Realizations.",
        "Built asset management and logistics modules to improve operational visibility and resource tracking.",
        "Managed relational data processing and persistence using PostgreSQL to ensure data integrity and query performance.",
        "Implemented automated build and deployment workflows using GitHub Actions CI/CD.",
      ],
      tech: [
        "NestJS",
        "React.js",
        "PostgreSQL",
        "GitHub Actions",
        "Tailwind CSS",
      ],
      metrics: "Budget tracking, Full A/P and A/R modules",
    },
    {
      title: "Loan Management System Middleware",
      company: "PT Bank Negara Indonesia (Persero) Tbk",
      duration: "Mar 2025 – Dec 2025",
      description:
        "Developed middleware services to orchestrate multiple core loan processing services into unified endpoints.",
      details: [
        "Simplified transaction workflows and improved system integration efficiency across wholesale lending processes.",
        "Implemented database logging for transaction traceability, monitoring, and operational auditing.",
        "Built and maintained service integrations using webMethods Software AG with Oracle and SQL Server databases.",
        "Collaborated with an 8-member engineering team to deliver scalable and reliable middleware solutions.",
      ],
      tech: [
        "webMethods",
        "Oracle DB",
        "SQL Server",
        "REST API",
        "Database Logging",
      ],
      metrics: "Orchestrated 10+ core APIs, 8-dev team",
    },
    {
      title: "SPAN Revamp (National Treasury System)",
      company: "PT Bank Negara Indonesia (Persero) Tbk",
      duration: "Jul 2024 – Feb 2025",
      description:
        "Revamped the Sistem Pembendaharaan dan Anggaran Negara (SPAN) microservices, managing critical state treasury transactions.",
      details: [
        "Designed and developed microservices using Spring Boot, Spring Batch, and webMethods for financial transaction processing.",
        "Built automated services to generate ACK and Bank Statement reports for Ministry of Finance transactions.",
        "Implemented event-driven communication using Apache Kafka to improve transaction processing scalability.",
        "Deployed containerized applications using Docker and OpenShift Container Platform (OCP) supported by GitLab.",
      ],
      tech: [
        "Spring Boot",
        "Spring Batch",
        "Apache Kafka",
        "webMethods",
        "OpenShift",
        "Docker",
      ],
      metrics: "Event-driven architecture, Ministry reports automation",
    },
    {
      title: "EMAS (Gold Transactions Portal)",
      company: "PT Pegadaian Galeri Dua Empat",
      duration: "Jan 2024 – Apr 2024",
      description:
        "Developed internal web-based application features to support end-to-end gold transaction operations.",
      details: [
        "Built modules for gold stock mutation, portfolio management, and transaction processing workflows.",
        "Ensured transaction integrity, operational efficiency, and data accuracy across critical business processes.",
        "Worked with Java and Vaadin Framework in Linux-based development environments.",
      ],
      tech: ["Java", "Vaadin Framework", "Linux", "MySQL", "Git"],
      metrics: "Secure gold stock mutations, 3-person core team",
    },
    {
      title: "Outcome Based Education (OBE) Application",
      company: "Dinamika University",
      duration: "Feb 2022 – Feb 2023",
      description:
        "Built a web-based portal to manage and measure Outcome-Based Education criteria at Dinamika University.",
      details: [
        "Defined specifications and planned the product structure to fulfill the OBE requirements.",
        "Designed and modeled the database schema and application flow.",
        "Built web-based applications using the Laravel framework.",
        "Tested the application using black-box testing and the System Usability Scale (SUS).",
      ],
      tech: [
        "Laravel",
        "PHP",
        "MySQL",
        "System Usability Scale",
        "Thesis Project",
      ],
      metrics: "Undergraduate Thesis, Intellectual Property Registered",
    },
  ],
};
