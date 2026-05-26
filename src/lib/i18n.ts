export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      tech: "Tecnologías",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Junior Software Developer",
      description:
        "Desarrollador en formación con experiencia en soporte IT y rápida adaptación a entornos técnicos. Especializado en Java y bases de datos SQL/NoSQL. Apasionado por la IA y sus aplicaciones.",
      cta: "Ver proyectos",
      contact: "Contacto",
      available: "Disponible para trabajar",
    },
    about: {
      title: "Sobre mí",
      bio: "Soy un desarrollador full stack en formación con experiencia real en análisis de datos en Mapfre y soporte IT en consultoría. Me especializo en Java, Python y bases de datos, con un fuerte interés en inteligencia artificial y cloud computing. Busco aplicar mis conocimientos en desarrollo backend o cloud en entornos donde pueda seguir creciendo.",
      location: "Madrid, España",
      education: "CFGS Desarrollo de Aplicaciones Multiplataforma",
      school: "IES Luis Vives · 2024 - 2026",
      stats: {
        projects: "Proyecto",
        certs: "Certificaciones",
        tech: "Tecnologías",
        exp: "Experiencia",
      },
    },
    experience: {
      title: "Experiencia",
      roles: [
        {
          company: "Mapfre España",
          role: "Data Analyst Intern",
          period: "Mar 2026 - Actualidad",
          description:
            "Automatización de procesos con Python/Pandas, VBA y Power Automate. Análisis de datos en Excel y desarrollo de dashboards en Power BI.",
          tags: ["Python", "Pandas", "VBA", "Power BI", "Power Automate", "Excel"],
        },
        {
          company: "Nettaro Consulting S.L.",
          role: "IT Intern",
          period: "May - Jun 2025",
          description:
            "Soporte en la implementación del Esquema Nacional de Seguridad. Soporte técnico y participación en la gestión de redes.",
          tags: ["Seguridad", "Redes", "Soporte IT", "ENS"],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle: "Lo que he construido",
      challenges: "Retos",
      results: "Resultados",
      architecture: "Arquitectura",
      details: "Ver detalles",
      closeDetails: "Cerrar detalles",
      items: [
        {
          title: "IES Luis Vives App",
          description:
            "Aplicación multiplataforma para la gestión operativa del centro educativo: reservas de aulas, instalaciones deportivas, productos de cafetería, encuestas y tablón de noticias con autenticación Microsoft EntraID.",
          longDescription:
            "Sistema integral desarrollado como proyecto de fin de grado que digitaliza la gestión diaria del instituto. Incluye módulo de reservas con calendario interactivo, sistema de encuestas con analítica, gestión de cafetería con control de stock, e integración con IA mediante Gemini API para asistencia inteligente.",
          tags: [
            "Flutter",
            "Python",
            "FastAPI",
            "Firebase",
            "PostgreSQL",
            "EntraID",
            "Gemini API",
            "MS Graph",
          ],
          github: "https://github.com/gonnzaxx/RESERVIVES",
          challenges: [
            "Integración con Microsoft EntraID para autenticación SSO",
            "Arquitectura multiplataforma con Flutter",
            "API REST escalable con FastAPI",
            "Integración de Gemini API para funcionalidades IA",
          ],
          results: [
            "Aplicación funcional desplegada",
            "Autenticación SSO con Microsoft",
            "Sistema de reservas en tiempo real",
            "Asistente IA integrado",
          ],
        },
      ],
    },
    certifications: {
      title: "Certificaciones",
      items: [
        {
          name: "Microsoft AI-900",
          issuer: "Microsoft",
          year: "2026",
          description: "Azure AI Fundamentals",
        },
        {
          name: "IBM AI Fundamentals",
          issuer: "IBM",
          year: "2026",
          description: "Artificial Intelligence Fundamentals",
        },
      ],
    },
    tech: {
      title: "Stack Tecnológico",
      categories: {
        languages: "Lenguajes",
        databases: "Bases de Datos",
        frameworks: "Frameworks",
        cloud: "Cloud & Servicios",
        devops: "DevOps",
      },
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto? Hablemos.",
      cta: "Enviar email",
      download: "Descargar CV",
      or: "o encuéntrame en",
    },
    footer: {
      made: "Diseñado y desarrollado por",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      tech: "Tech",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Junior Software Developer",
      description:
        "Developer in training with experience in IT support and quick adaptation to technical environments. Specialized in Java and SQL/NoSQL databases. Passionate about AI and its applications.",
      cta: "View projects",
      contact: "Contact",
      available: "Available for work",
    },
    about: {
      title: "About me",
      bio: "I'm a full stack developer in training with real experience in data analysis at Mapfre and IT support in consulting. I specialize in Java, Python and databases, with a strong interest in artificial intelligence and cloud computing. I'm looking to apply my knowledge in backend or cloud development in environments where I can keep growing.",
      location: "Madrid, Spain",
      education: "HND in Multiplatform Application Development",
      school: "IES Luis Vives · 2024 - 2026",
      stats: {
        projects: "Project",
        certs: "Certifications",
        tech: "Technologies",
        exp: "Experience",
      },
    },
    experience: {
      title: "Experience",
      roles: [
        {
          company: "Mapfre España",
          role: "Data Analyst Intern",
          period: "Mar 2026 - Present",
          description:
            "Process automation with Python/Pandas, VBA and Power Automate. Data analysis in Excel and Power BI dashboard development.",
          tags: ["Python", "Pandas", "VBA", "Power BI", "Power Automate", "Excel"],
        },
        {
          company: "Nettaro Consulting S.L.",
          role: "IT Intern",
          period: "May - Jun 2025",
          description:
            "Support in the implementation of the National Security Scheme. Technical support and participation in network management.",
          tags: ["Security", "Networks", "IT Support", "NSS"],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "What I've built",
      challenges: "Challenges",
      results: "Results",
      architecture: "Architecture",
      details: "View details",
      closeDetails: "Close details",
      items: [
        {
          title: "IES Luis Vives App",
          description:
            "Multiplatform application for school operational management: classroom reservations, sports facilities, cafeteria products, surveys and news bulletin with Microsoft EntraID authentication.",
          longDescription:
            "Comprehensive system developed as a final degree project that digitizes the daily management of the school. Includes a reservation module with interactive calendar, survey system with analytics, cafeteria management with stock control, and AI integration through Gemini API for intelligent assistance.",
          tags: [
            "Flutter",
            "Python",
            "FastAPI",
            "Firebase",
            "PostgreSQL",
            "EntraID",
            "Gemini API",
            "MS Graph",
          ],
          github: "https://github.com/gonnzaxx/RESERVIVES",
          challenges: [
            "Integration with Microsoft EntraID for SSO authentication",
            "Cross-platform architecture with Flutter",
            "Scalable REST API with FastAPI",
            "Gemini API integration for AI features",
          ],
          results: [
            "Fully functional deployed application",
            "SSO authentication with Microsoft",
            "Real-time reservation system",
            "Integrated AI assistant",
          ],
        },
      ],
    },
    certifications: {
      title: "Certifications",
      items: [
        {
          name: "Microsoft AI-900",
          issuer: "Microsoft",
          year: "2026",
          description: "Azure AI Fundamentals",
        },
        {
          name: "IBM AI Fundamentals",
          issuer: "IBM",
          year: "2026",
          description: "Artificial Intelligence Fundamentals",
        },
      ],
    },
    tech: {
      title: "Tech Stack",
      categories: {
        languages: "Languages",
        databases: "Databases",
        frameworks: "Frameworks",
        cloud: "Cloud & Services",
        devops: "DevOps",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Got a project? Let's talk.",
      cta: "Send email",
      download: "Download CV",
      or: "or find me on",
    },
    footer: {
      made: "Designed & built by",
      rights: "All rights reserved.",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
