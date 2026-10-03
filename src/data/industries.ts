import type { Localized } from '../i18n/utils';

// Dummy content based on the owner's notes — to be refined with real copy.
export interface Industry {
  slug: string;
  name: Localized;
  summary: Localized;
  description: Localized;
}

export const industries: Industry[] = [
  {
    slug: 'food',
    name: { en: 'Food manufacturing', ar: 'الصناعات الغذائية' },
    summary: {
      en: 'Refined and vacuum salt for cheese, pastries and other food factories.',
      ar: 'ملح مكرر وملح فاكيم لمصانع الجبن والمعجنات وغيرها من المصانع الغذائية.',
    },
    description: {
      en: 'Food factories such as cheese and pastry producers need clean, consistent, approved salt. We supply fine refined salt, iodized or non-iodized, and high-purity vacuum salt for the most quality-conscious manufacturers.',
      ar: 'تحتاج المصانع الغذائية مثل مصانع الجبن والمعجنات إلى ملح نظيف ومتجانس ومعتمد. نورّد الملح الناعم المكرر، يوديًا أو غير يودي، وملح الفاكيم عالي النقاء للمصانع الأكثر حرصًا على الجودة.',
    },
  },
  {
    slug: 'pharmaceuticals',
    name: { en: 'Pharmaceuticals', ar: 'الأدوية' },
    summary: {
      en: 'High-purity vacuum salt tablets for pharmaceutical plants.',
      ar: 'أقراص ملح الفاكيم عالية النقاء لمصانع الأدوية.',
    },
    description: {
      en: 'Pharmaceutical plants rely on very pure salt and on water systems free of scale and iron. Vacuum salt, produced by evaporation, is the purest type of salt available.',
      ar: 'تعتمد مصانع الأدوية على ملح شديد النقاء وعلى أنظمة مياه خالية من الترسبات والحديد. وملح الفاكيم، الذي يُنتج بالتبخير، هو أنقى أنواع الملح.',
    },
  },
  {
    slug: 'textiles',
    name: { en: 'Textiles', ar: 'النسيج' },
    summary: {
      en: 'A cost-effective salt for textile factories.',
      ar: 'ملح اقتصادي لمصانع النسيج.',
    },
    description: {
      en: 'Textile factories can use vacuum salt in place of the more expensive salt grades traditionally used, at a lower cost.',
      ar: 'يمكن لمصانع النسيج استخدام ملح الفاكيم بدلًا من أنواع الملح الأغلى المستخدمة تقليديًا، بتكلفة أقل.',
    },
  },
  {
    slug: 'water-treatment',
    name: { en: 'Boilers & water treatment', ar: 'الغلايات ومعالجة المياه' },
    summary: {
      en: 'Salt tablets that soften water and prevent scale in boilers.',
      ar: 'أقراص ملح لإزالة عسر المياه ومنع الترسبات في الغلايات.',
    },
    description: {
      en: 'Salt tablets are used in factories and boilers to remove water hardness, prevent scale build-up and precipitate iron, protecting equipment and extending its life.',
      ar: 'تُستخدم أقراص الملح في المصانع والغلايات لإزالة عسر المياه ومنع تكوّن الترسبات وترسيب الحديد، مما يحمي المعدات ويطيل عمرها.',
    },
  },
  {
    slug: 'general-industry',
    name: { en: 'General industry', ar: 'الصناعات العامة' },
    summary: {
      en: 'Industrial and natural salt in bulk for a wide range of uses.',
      ar: 'ملح صناعي وطبيعي بكميات كبيرة لمجموعة واسعة من الاستخدامات.',
    },
    description: {
      en: 'Industrial, mountain and natural salt in bulk, for factories that need reliable supply for a wide range of processes.',
      ar: 'ملح صناعي وجبلي وطبيعي بكميات كبيرة للمصانع التي تحتاج إلى إمداد موثوق لمختلف العمليات.',
    },
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
