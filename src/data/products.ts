import type { Localized } from '../i18n/utils';

// Dummy content based on the owner's notes — to be refined with real copy.
// TODO confirm with owner: textile salt alternative ("جروب") and the producer name next to "الفاكيم".
export interface Product {
  slug: string;
  category: 'salt'; // room for other categories later (e.g. fruits & vegetables)
  featured: boolean;
  industries: string[]; // industry slugs
  name: Localized;
  summary: Localized;
  description: Localized;
  features: Localized<string[]>;
}

export const products: Product[] = [
  {
    slug: 'vacuum-salt-tablets',
    category: 'salt',
    featured: true,
    industries: ['pharmaceuticals', 'water-treatment', 'food', 'textiles'],
    name: { en: 'Vacuum salt tablets', ar: 'أقراص ملح الفاكيم' },
    summary: {
      en: 'The purest salt, pressed into tablets for boilers and process water.',
      ar: 'أنقى أنواع الملح في صورة أقراص للغلايات ومياه التشغيل.',
    },
    description: {
      en: 'Vacuum salt is produced by evaporation and is the purest type of salt available. Only two factories in Egypt produce it. Its tablets are used in factories and boilers to remove water hardness, prevent scale and precipitate iron — especially in pharmaceutical plants.',
      ar: 'يُنتج ملح الفاكيم بالتبخير وهو أنقى أنواع الملح. ولا يوجد في مصر سوى مصنعين فقط لإنتاجه. وتُستخدم أقراصه في المصانع والغلايات لإزالة عسر المياه ومنع الترسبات وترسيب الحديد، خاصة في مصانع الأدوية.',
    },
    features: {
      en: ['Highest purity, produced by evaporation', 'Prevents scale and precipitates iron', 'Suited to pharmaceutical plants', 'Approved by health, industry and export authorities'],
      ar: ['أعلى درجات النقاء، يُنتج بالتبخير', 'يمنع الترسبات ويرسّب الحديد', 'مناسب لمصانع الأدوية', 'معتمد من جهات الصحة والصناعة والتصدير'],
    },
  },
  {
    slug: 'vacuum-salt',
    category: 'salt',
    featured: true,
    industries: ['food', 'textiles'],
    name: { en: 'Vacuum salt', ar: 'ملح الفاكيم' },
    summary: {
      en: 'High-purity evaporated salt for demanding food and textile factories.',
      ar: 'ملح مُبخَّر عالي النقاء لمصانع الأغذية والنسيج الأكثر تطلبًا.',
    },
    description: {
      en: 'Sought after by quality-conscious food manufacturers despite its higher price, and used by textile factories as a lower-cost alternative to more expensive grades.',
      ar: 'مطلوب لمصانع الأغذية شديدة الاهتمام بالجودة رغم ارتفاع ثمنه، وتستخدمه مصانع النسيج كبديل أقل تكلفة من الأنواع الأغلى.',
    },
    features: {
      en: ['Purest salt, evaporation process', 'Consistent quality batch to batch', 'Cost-saving option for textile mills'],
      ar: ['أنقى أنواع الملح، ينتج بالتبخير', 'جودة ثابتة في كل دفعة', 'خيار موفّر للتكلفة لمصانع النسيج'],
    },
  },
  {
    slug: 'refined-iodized-salt',
    category: 'salt',
    featured: true,
    industries: ['food'],
    name: { en: 'Fine refined iodized salt', ar: 'ملح ناعم مكرر يودي' },
    summary: {
      en: 'Fine, refined, iodized food-grade salt.',
      ar: 'ملح غذائي ناعم ومكرر ويودي.',
    },
    description: {
      en: 'Food-grade salt for food factories such as cheese and pastry producers.',
      ar: 'ملح غذائي لمصانع الأغذية مثل مصانع الجبن والمعجنات.',
    },
    features: {
      en: ['Fine, refined and iodized', 'Food-grade', 'Health approvals in place'],
      ar: ['ناعم ومكرر ويودي', 'صالح للاستخدام الغذائي', 'حاصل على الموافقات الصحية'],
    },
  },
  {
    slug: 'refined-non-iodized-salt',
    category: 'salt',
    featured: false,
    industries: ['food', 'general-industry'],
    name: { en: 'Refined non-iodized salt (fine or coarse)', ar: 'ملح مكرر غير يودي (ناعم أو خشن)' },
    summary: {
      en: 'Refined salt without iodine, in fine and coarse grades.',
      ar: 'ملح مكرر بدون يود، بدرجات ناعمة وخشنة.',
    },
    description: {
      en: 'Refined, non-iodized salt available as fine or coarse grain, for food and industrial processes where iodine is not wanted.',
      ar: 'ملح مكرر غير يودي متوفر بحبيبات ناعمة أو خشنة، للعمليات الغذائية والصناعية التي لا يُرغب فيها بوجود اليود.',
    },
    features: {
      en: ['Fine or coarse grain', 'No added iodine', 'Food and industrial use'],
      ar: ['حبيبات ناعمة أو خشنة', 'بدون يود مضاف', 'للاستخدام الغذائي والصناعي'],
    },
  },
  {
    slug: 'natural-mountain-salt',
    category: 'salt',
    featured: false,
    industries: ['general-industry'],
    name: { en: 'Natural mountain salt', ar: 'ملح جبلي طبيعي' },
    summary: {
      en: 'Natural rock salt for industrial use.',
      ar: 'ملح صخري طبيعي للاستخدام الصناعي.',
    },
    description: {
      en: 'Natural mountain salt, supplied in bulk for industrial applications.',
      ar: 'ملح جبلي طبيعي يُورَّد بكميات كبيرة للتطبيقات الصناعية.',
    },
    features: {
      en: ['Natural origin', 'Bulk supply', 'Industrial use'],
      ar: ['مصدر طبيعي', 'توريد بكميات كبيرة', 'للاستخدام الصناعي'],
    },
  },
  {
    slug: 'industrial-salt',
    category: 'salt',
    featured: false,
    industries: ['general-industry', 'textiles'],
    name: { en: 'Industrial salt', ar: 'ملح صناعي' },
    summary: {
      en: 'Industrial-grade salt for a wide range of processes.',
      ar: 'ملح بدرجة صناعية لمختلف العمليات.',
    },
    description: {
      en: 'Industrial-grade salt supplied by our partner factories, with industry and export approvals.',
      ar: 'ملح بدرجة صناعية من المصانع التي نمثلها، بموافقات الصناعة والتصدير.',
    },
    features: {
      en: ['Industrial grade', 'Reliable bulk supply', 'Industry and export approvals'],
      ar: ['درجة صناعية', 'إمداد موثوق بكميات كبيرة', 'موافقات الصناعة والتصدير'],
    },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productsForIndustry = (industrySlug: string) =>
  products.filter((p) => p.industries.includes(industrySlug));
