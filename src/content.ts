export type Lang = 'en' | 'fr'
export type Theme = 'light' | 'dark'

export const links = {
  linkedin: 'https://www.linkedin.com/in/mariam-ben-abdallah-aimvp/',
  github: 'https://github.com/HackedMariam',
  email: 'mailto:mariambenabdallaht@gmail.com',
  emailAddress: 'mariambenabdallaht@gmail.com',
} as const

export const cv = {
  en: '/cv/cv-mariam-ben-abdallah-en.pdf',
  fr: '/cv/cv-mariam-ben-abdallah-fr.pdf',
} as const

export const profile = {
  name: 'Mariam Ben Abdallah',
  monogram: 'MBA',
  firstName: 'Mariam',
  lastName: 'Ben Abdallah',
  coords: ['36.8° N', '10.1° E'],
} as const

export interface EducationItem {
  node: string
  date: string
  title: string
  org: string
  text: string
}

export interface ExperienceItem {
  date: string
  title: string
  org: string
  project?: string
  points: string[]
  skills: string[]
}

export interface ProjectItem {
  number: string
  type: string
  title: string
  text: string
  tags: string[]
  inProgress?: boolean
}

export interface FeaturedProject {
  number: string
  type: string
  title: string
  text: string
  roadmapLabel: string
  roadmap: string[]
  imageAlt: string
}

export interface Copy {
  skipToContent: string
  languageSwitch: string
  themeLabel: string
  menuLabel: string
  nav: {
    journey: string
    projects: string
    toolkit: string
    contact: string
  }
  hero: {
    status: string
    kicker: string
    role: string
    field: string
    location: string
    bio: string
    cvPrimary: string
    cvHint: string
    cvOtherHint: string
    linkedin: string
    github: string
    email: string
  }
  journey: {
    kicker: string
    title: string
    intro: string
    experienceTitle: string
    education: EducationItem[]
    experience: ExperienceItem[]
  }
  projects: {
    kicker: string
    title: string
    intro: string
    progressBadge: string
    featured: FeaturedProject
    items: ProjectItem[]
  }
  toolkit: {
    kicker: string
    title: string
    text: string
    accent: string
    skills: string[]
  }
  contact: {
    kicker: string
    title: string
    text: string
    email: string
    cv: string
  }
  footer: {
    note: string
    rights: string
  }
}

export const copy: Record<Lang, Copy> = {
  en: {
    skipToContent: 'Skip to content',
    languageSwitch: 'Language',
    themeLabel: 'Toggle dark mode',
    menuLabel: 'Toggle navigation',
    nav: {
      journey: 'Journey',
      projects: 'Projects',
      toolkit: 'Toolkit',
      contact: 'Contact',
    },
    hero: {
      status: 'Open to work · Jan 2027',
      kicker: 'Data Science Engineering Student',
      role: 'Data Science Engineering Student',
      field: 'AI · Computer Vision · Deep Learning',
      location: 'Tunis, Tunisia',
      bio: 'Fifth-year data science engineering student specialising in computer vision and deep learning, with hands-on experience in autoencoders, predictive modelling and applied AI research.',
      cvPrimary: 'Download my CV',
      cvHint: 'Curriculum vitae',
      cvOtherHint: 'Other version',
      linkedin: 'LinkedIn profile',
      github: 'GitHub profile',
      email: 'Send an email to Mariam Ben Abdallah',
    },
    journey: {
      kicker: 'My journey',
      title: 'Three years of software, three years of data science',
      intro:
        'I started with three years of software engineering at the Faculty of Sciences of Tunis, then joined ESPRIT to spend three years specialising in data science, computer vision and deep learning.',
      experienceTitle: 'Experience',
      education: [
        {
          node: '02',
          date: '2024 — Present',
          title: 'Engineering Degree in Computer Science',
          org: 'ESPRIT',
          text: 'Three years specialising in data science: machine learning, deep learning, computer vision, NLP, LLMs and MLOps.',
        },
        {
          node: '01',
          date: '2021 — 2024',
          title: 'Bachelor in Software Engineering',
          org: 'Faculty of Sciences of Tunis (FST)',
          text: 'Three foundational years covering algorithms, software architecture, databases and networking — the base that made applied AI possible.',
        },
      ],
      experience: [
        {
          date: 'Jul 2026 — Aug 2026',
          title: 'Mobile App Developer Intern',
          org: 'Tanit Consulting AB',
          project: 'FrostLink — React Native, Expo, TypeScript, Firebase, Hugging Face',
          points: [
            'Integrated Hugging Face XLM-RoBERTa for NLP-based content moderation across chats.',
            'Contributed to the Firebase/Firestore backend and reinforced parts of the database security.',
          ],
          skills: [
            'React Native',
            'Expo',
            'TypeScript',
            'Firebase',
            'Firestore',
            'Hugging Face',
            'XLM-RoBERTa',
            'NLP',
          ],
        },
        {
          date: 'Jul 2025 — Sep 2025',
          title: 'AI Intern',
          org: 'Ooredoo (DTI) — Lac 2',
          points: [
            'Benchmarked conversational AI solutions for customer service.',
            'Conducted data collection workshops and dataset preparation.',
          ],
          skills: ['Conversational AI', 'Benchmarking', 'Dataset preparation', 'Workshops'],
        },
        {
          date: 'Feb 2024 — Jun 2024',
          title: 'AI Researcher',
          org: 'Faculty of Sciences of Tunis',
          points: [
            'Research in deep learning with a focus on denoising autoencoders for image reconstruction with missing pixels.',
            'Analyzed results, improved reconstruction performance, and wrote a 70-page research report.',
          ],
          skills: ['Deep Learning', 'Denoising Autoencoders', 'Image Reconstruction', 'Research'],
        },
      ],
    },
    projects: {
      kicker: 'Selected work',
      title: 'Projects I have built',
      intro:
        'Applied AI projects spanning agricultural risk, network monitoring, materials science, healthcare and intelligent support.',
      progressBadge: 'In progress — final results coming soon',
      featured: {
        number: '01',
        type: 'Featured project',
        title: 'AgriRisk',
        text: 'An AI-powered platform for agricultural climate and water risks in the Tunisian context. It combines climate data, water-resource indicators and AI-based analysis to help investors and other stakeholders better understand the risks affecting different agricultural regions. The goal is to support better decisions before climate and water risks turn into major business challenges.',
        roadmapLabel: 'Roadmap',
        roadmap: [
          'IoT-based farming data',
          'Real-time monitoring',
          'Advanced agricultural insights',
          'Explainable AI (XAI)',
        ],
        imageAlt: 'AgriRisk platform dashboard interface',
      },
      items: [
        {
          number: '02',
          type: 'Network monitoring',
          title: 'QoSBuddy',
          text: 'Anomaly detection on cellular network KPIs using LSTM and denoising autoencoders, with a Mistral LLM generating natural-language reports and a React dashboard for real-time QoS visualisation.',
          tags: ['LSTM', 'Autoencoders', 'Mistral LLM', 'React'],
        },
        {
          number: '03',
          type: 'Materials science',
          title: 'Concrete Strength Optimization',
          text: 'XGBoost regression for compressive strength prediction from mix parameters, plus a contextual-bandit RL agent and offline Q-learning to balance cost against performance.',
          tags: ['XGBoost', 'Reinforcement Learning', 'Contextual Bandit', 'Q-Learning'],
        },
        {
          number: '04',
          type: 'Health tech',
          title: 'Diacure',
          text: 'A diabetes management app with an NLP recommendation engine that matches articles to each user’s health profile, plus a cross-platform FlutterFlow app with an integrated AI chat assistant.',
          tags: ['NLP', 'Recommenders', 'FlutterFlow', 'AI chat'],
        },
        {
          number: '05',
          type: 'Agentic AI',
          title: 'Solvey',
          text: 'An AI-powered IT support assistant that diagnoses technical issues through RAG, multimodal analysis and collaborative AI agents. It turns historical support tickets, technical documentation and issue screenshots into actionable troubleshooting guidance, validates resolutions from user feedback, and explores alternative fixes when needed. Trained on a Stack Overflow dataset of 100 bug reports and 154 error screenshots.',
          tags: ['RAG', 'Multimodal AI', 'Agentic workflow', 'Deep Learning'],
          inProgress: true,
        },
        {
          number: '06',
          type: 'AI wardrobe',
          title: 'DressMe',
          text: 'A personalised wardrobe ecosystem built on four pillars: computer vision that detects, segments and classifies garments to extract attributes; a recommendation engine that ranks items into outfits, packing lists and purchase decisions; contextual data such as weather, destination, occasion, season, luggage constraints and budget; and conversational AI agents that explain their reasoning.',
          tags: ['Computer Vision', 'Recommenders', 'Contextual data', 'AI agents'],
          inProgress: true,
        },
      ],
    },
    toolkit: {
      kicker: 'Toolkit',
      title: 'Skills and tools',
      text: 'A toolkit built across AI research, data engineering and full-stack development.',
      accent: 'Python',
      skills: [
        'Python',
        'TensorFlow',
        'PyTorch',
        'Keras',
        'Scikit-learn',
        'XGBoost',
        'NLP',
        'LLMs',
        'Computer Vision',
        'MLOps',
        'Pandas',
        'NumPy',
        'FastAPI',
        'React Native',
        'Docker',
        'Git',
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Let’s build something with AI',
      text: 'I am looking for a PFE / AI & Data Science opportunity starting January 2027. Reach out by email, or find me on LinkedIn and GitHub.',
      email: 'Send me an email',
      cv: 'Download my CV',
    },
    footer: {
      note: 'Data Science Engineering Student · AI, Computer Vision & Deep Learning · Tunis, Tunisia',
      rights: '© 2026 Mariam Ben Abdallah',
    },
  },
  fr: {
    skipToContent: 'Aller au contenu',
    languageSwitch: 'Langue',
    themeLabel: 'Activer le mode sombre',
    menuLabel: 'Ouvrir la navigation',
    nav: {
      journey: 'Parcours',
      projects: 'Projets',
      toolkit: 'Stack',
      contact: 'Contact',
    },
    hero: {
      status: 'Disponible · Janv. 2027',
      kicker: 'Étudiante en Data Science',
      role: 'Étudiante en ingénierie Data Science',
      field: 'IA · Vision par ordinateur · Deep Learning',
      location: 'Tunis, Tunisie',
      bio: "Étudiante en 5e année d'ingénierie Data Science, spécialisée en vision par ordinateur et deep learning, avec une expérience pratique des autoencodeurs, de la modélisation prédictive et de la recherche appliquée en IA.",
      cvPrimary: 'Télécharger mon CV',
      cvHint: 'Curriculum vitae',
      cvOtherHint: 'Autre version',
      linkedin: 'Profil LinkedIn',
      github: 'Profil GitHub',
      email: 'Envoyer un e-mail à Mariam Ben Abdallah',
    },
    journey: {
      kicker: 'Mon parcours',
      title: 'Trois ans de logiciel, trois ans de data science',
      intro:
        "J'ai commencé par trois années de génie logiciel à la Faculté des Sciences de Tunis, avant de rejoindre ESPRIT pour me spécialiser trois ans en data science, vision par ordinateur et deep learning.",
      experienceTitle: 'Expériences',
      education: [
        {
          node: '02',
          date: "2024 — Aujourd'hui",
          title: 'Diplôme d’ingénieur en informatique',
          org: 'ESPRIT',
          text: 'Trois années de spécialisation en data science : machine learning, deep learning, vision par ordinateur, NLP, LLMs et MLOps.',
        },
        {
          node: '01',
          date: '2021 — 2024',
          title: 'Licence en génie logiciel',
          org: 'Faculté des Sciences de Tunis (FST)',
          text: "Trois années fondatrices : algorithmes, architecture logicielle, bases de données et réseaux — la base qui a rendu l'IA appliquée possible.",
        },
      ],
      experience: [
        {
          date: 'Juil. 2026 — Août 2026',
          title: 'Stagiaire développeuse mobile',
          org: 'Tanit Consulting AB',
          project: 'FrostLink — React Native, Expo, TypeScript, Firebase, Hugging Face',
          points: [
            'Intégration de XLM-RoBERTa (Hugging Face) pour la modération de contenu par NLP dans les chats.',
            'Contribution au backend Firebase/Firestore et renforcement de la sécurité de la base de données.',
          ],
          skills: [
            'React Native',
            'Expo',
            'TypeScript',
            'Firebase',
            'Firestore',
            'Hugging Face',
            'XLM-RoBERTa',
            'NLP',
          ],
        },
        {
          date: 'Juil. 2025 — Sept. 2025',
          title: 'Stagiaire IA',
          org: 'Ooredoo (DTI) — Lac 2',
          points: [
            "Benchmark de solutions d'IA conversationnelle pour le service client.",
            'Animation d’ateliers de collecte de données et préparation de jeux de données.',
          ],
          skills: ['IA conversationnelle', 'Benchmark', 'Préparation de données', 'Ateliers'],
        },
        {
          date: 'Fév. 2024 — Juin 2024',
          title: 'Chercheuse en IA',
          org: 'Faculté des Sciences de Tunis',
          points: [
            "Recherche en deep learning sur les autoencodeurs débruiteurs pour la reconstruction d'images à pixels manquants.",
            'Analyse des résultats, amélioration des performances de reconstruction et rédaction d’un rapport de recherche de 70 pages.',
          ],
          skills: ['Deep Learning', 'Autoencodeurs débruiteurs', 'Reconstruction d’images', 'Recherche'],
        },
      ],
    },
    projects: {
      kicker: 'Projets sélectionnés',
      title: "Les projets que j'ai construits",
      intro:
        "Des projets d'IA appliquée : risques agricoles, supervision réseau, science des matériaux, santé et support intelligent.",
      progressBadge: 'En cours — résultats finaux bientôt disponibles',
      featured: {
        number: '01',
        type: 'Projet phare',
        title: 'AgriRisk',
        text: "Une plateforme propulsée par l'IA dédiée aux risques climatiques et hydriques agricoles dans le contexte tunisien. Elle combine données climatiques, indicateurs de ressources en eau et analyse par IA pour aider les investisseurs et les parties prenantes à mieux comprendre les risques qui touchent les différentes régions agricoles. L'objectif : soutenir de meilleures décisions avant que ces risques ne deviennent des enjeux majeurs.",
        roadmapLabel: 'Feuille de route',
        roadmap: [
          'Données agricoles IoT',
          'Suivi en temps réel',
          'Analyses agricoles avancées',
          'IA explicable (XAI)',
        ],
        imageAlt: "Interface du tableau de bord AgriRisk",
      },
      items: [
        {
          number: '02',
          type: 'Supervision réseau',
          title: 'QoSBuddy',
          text: "Détection d'anomalies sur les KPI des réseaux mobiles via LSTM et autoencodeurs débruiteurs, avec le LLM Mistral pour générer des rapports en langage naturel et un tableau de bord React pour visualiser la QoS en temps réel.",
          tags: ['LSTM', 'Autoencodeurs', 'LLM Mistral', 'React'],
        },
        {
          number: '03',
          type: 'Science des matériaux',
          title: 'Concrete Strength Optimization',
          text: "Régression XGBoost pour prédire la résistance à la compression à partir des paramètres du mélange, complétée par un agent RL (contextual bandit) et du Q-learning hors ligne pour arbitrer coût et performance.",
          tags: ['XGBoost', 'Apprentissage par renforcement', 'Contextual Bandit', 'Q-Learning'],
        },
        {
          number: '04',
          type: 'Santé',
          title: 'Diacure',
          text: "Une application de gestion du diabète avec un moteur de recommandation NLP qui associe les articles au profil de santé de chaque utilisateur, et une application cross-platform FlutterFlow avec assistant IA intégré.",
          tags: ['NLP', 'Recommandation', 'FlutterFlow', 'Assistant IA'],
        },
        {
          number: '05',
          type: 'IA agentique',
          title: 'Solvey',
          text: "Un assistant de support informatique propulsé par l'IA qui diagnostique les problèmes techniques via RAG, analyse multimodale et agents IA collaboratifs. Il transforme les tickets historiques, la documentation technique et les captures d'écran en recommandations actionnables, valide les résolutions à partir des retours utilisateurs et explore des alternatives si nécessaire. Entraîné sur un jeu de données Stack Overflow : 100 rapports de bugs et 154 captures d'écran d'erreurs.",
          tags: ['RAG', 'IA multimodale', 'Workflow agentique', 'Deep Learning'],
          inProgress: true,
        },
        {
          number: '06',
          type: 'IA mode',
          title: 'DressMe',
          text: "Un écosystème de garde-robe personnalisé bâti sur quatre piliers : la vision par ordinateur pour détecter, segmenter et classer les vêtements et en extraire les attributs ; un moteur de recommandation qui compose tenues, valises et achats ; des données contextuelles (météo, destination, occasion, saison, contraintes de bagages, budget) ; et des agents IA conversationnels qui expliquent leur raisonnement.",
          tags: ['Vision par ordinateur', 'Recommandation', 'Données contextuelles', 'Agents IA'],
          inProgress: true,
        },
      ],
    },
    toolkit: {
      kicker: 'Stack',
      title: 'Compétences et outils',
      text: "Une boîte à outils forgée entre recherche en IA, ingénierie de la donnée et développement full-stack.",
      accent: 'Python',
      skills: [
        'Python',
        'TensorFlow',
        'PyTorch',
        'Keras',
        'Scikit-learn',
        'XGBoost',
        'NLP',
        'LLMs',
        'Vision par ordinateur',
        'MLOps',
        'Pandas',
        'NumPy',
        'FastAPI',
        'React Native',
        'Docker',
        'Git',
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Construisons quelque chose avec l’IA',
      text: "Je recherche un stage PFE / une opportunité en IA & Data Science à partir de janvier 2027. Écrivez-moi ou retrouvez-moi sur LinkedIn et GitHub.",
      email: 'Envoyez-moi un e-mail',
      cv: 'Télécharger mon CV',
    },
    footer: {
      note: 'Étudiante en Data Science · IA, Vision par ordinateur & Deep Learning · Tunis, Tunisie',
      rights: '© 2026 Mariam Ben Abdallah',
    },
  },
}
