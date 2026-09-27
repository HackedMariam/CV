/* =========================================================================
   ⚙️  SITE CONFIGURATION — the only file you need to edit
   -------------------------------------------------------------------------
   Your links, CV files, skills and every piece of page text (EN + FR)
   live here. Change a value, save, and the whole page updates.
   ========================================================================= */

export type Lang = 'en' | 'fr'

/* --- 1. Your professional links ------------------------------------------ */
export const links = {
  linkedin: 'https://www.linkedin.com/in/mariam-ben-abdallah-aimvp/',
  github: 'https://github.com/HackedMariam',
  email: 'mailto:mariambenabdallaht@gmail.com',
} as const

/* --- 2. CV files (served from /public/cv) --------------------------------- */
export const cv = {
  en: '/cv/cv-mariam-ben-abdallah-en.pdf',
  fr: '/cv/cv-mariam-ben-abdallah-fr.pdf',
} as const

/* --- 3. Your profile ------------------------------------------------------ */
export const profile = {
  name: 'Mariam Ben Abdallah',
  monogram: 'MB',
} as const

/* --- 4. Skills (keep the list short) -------------------------------------- */
export const skills = [
  'Python',
  'TensorFlow',
  'PyTorch / Keras',
  'Scikit-learn',
  'Computer Vision',
  'NLP',
  'LLMs',
  'MLOps',
] as const

/* --- 5. All page text ----------------------------------------------------- */
export interface Copy {
  skipToContent: string
  languageSwitch: string
  statusPill: string
  role: string
  field: string
  location: string
  cvSection: string
  cvPrimary: string
  cvOther: string
  connectLabel: string
  emailLabel: string
  emailAria: string
  opensInNewTab: string
  availabilityLabel: string
  availabilityMain: string
  availabilitySub: string
  toolkitLabel: string
}

export const copy: Record<Lang, Copy> = {
  en: {
    skipToContent: 'Skip to content',
    languageSwitch: 'Language',
    statusPill: 'Open to work · Jan 2027',
    role: 'Data Science Engineering Student',
    field: 'AI • Computer Vision • Deep Learning',
    location: 'Tunis, Tunisia',
    cvSection: 'Curriculum vitae',
    cvPrimary: 'Download my CV',
    cvOther: 'Télécharger le CV (FR)',
    connectLabel: 'Connect',
    emailLabel: 'Email',
    emailAria: 'Send an email to Mariam Ben Abdallah',
    opensInNewTab: 'opens in a new tab',
    availabilityLabel: 'Currently looking for',
    availabilityMain: 'PFE / AI & Data Science opportunities',
    availabilitySub: 'Starting January 2027',
    toolkitLabel: 'Toolkit',
  },
  fr: {
    skipToContent: 'Aller au contenu',
    languageSwitch: 'Langue',
    statusPill: 'Disponible · Janv. 2027',
    role: 'Étudiante en Génie Data Science',
    field: 'IA • Vision par ordinateur • Deep Learning',
    location: 'Tunis, Tunisie',
    cvSection: 'Curriculum vitae',
    cvPrimary: 'Télécharger mon CV',
    cvOther: 'Download the CV (EN)',
    connectLabel: 'Me retrouver',
    emailLabel: 'E-mail',
    emailAria: 'Envoyer un e-mail à Mariam Ben Abdallah',
    opensInNewTab: 's’ouvre dans un nouvel onglet',
    availabilityLabel: 'Je recherche actuellement',
    availabilityMain: 'PFE / Opportunités IA & Data Science',
    availabilitySub: 'À partir de janvier 2027',
    toolkitLabel: 'Stack',
  },
}
