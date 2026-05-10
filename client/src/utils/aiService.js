const DEFAULT_PROVIDER = 'mock';

const providerRegistry = {
  mock: {
    name: 'Local mock provider',
    available: true,
  },
  openai: {
    name: 'OpenAI',
    available: false,
    requiresApiKey: true,
  },
  gemini: {
    name: 'Gemini',
    available: false,
    requiresApiKey: true,
  },
  custom: {
    name: 'Custom provider',
    available: false,
    requiresApiKey: false,
  },
};

const asText = (value, fallback = '') => {
  if (Array.isArray(value)) return value.filter(Boolean).join(', ');
  if (value === undefined || value === null) return fallback;
  const text = String(value).trim();
  return text || fallback;
};

const toTitleCase = (value) =>
  asText(value)
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const unique = (items) => [...new Set(items.filter(Boolean))];

const withArticle = (phrase) => {
  const text = asText(phrase);
  if (!text) return 'a business';
  const article = /^[aeiou]/i.test(text) ? 'an' : 'a';
  return `${article} ${text}`;
};

const parseList = (value) => {
  if (Array.isArray(value)) return value.map((item) => asText(item)).filter(Boolean);
  return asText(value)
    .split(/[,\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
};

const pick = (items, indexSeed = 0) => items[Math.abs(indexSeed) % items.length];

const hashText = (value) =>
  asText(value)
    .split('')
    .reduce((total, char) => total + char.charCodeAt(0), 0);

const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);

const toneMap = {
  luxury: {
    opener: 'Elevate every moment with',
    adjective: 'premium',
    cta: 'Experience the upgrade today.',
  },
  playful: {
    opener: 'Make your day brighter with',
    adjective: 'fun',
    cta: 'Try it and tell us your favorite part!',
  },
  professional: {
    opener: 'Improve your workflow with',
    adjective: 'reliable',
    cta: 'Book a consultation to learn more.',
  },
  friendly: {
    opener: 'Meet your new favorite',
    adjective: 'helpful',
    cta: 'Message us to get started.',
  },
  bold: {
    opener: 'Stop scrolling — discover',
    adjective: 'standout',
    cta: 'Claim yours before everyone else does.',
  },
};

const platformDetails = {
  instagram: {
    ending: 'Save this post and share it with someone who needs this.',
    hashtags: ['#SmallBusiness', '#BrandStory', '#ShopNow', '#InstaDaily'],
  },
  facebook: {
    ending: 'Comment below or send us a message for details.',
    hashtags: ['#LocalBusiness', '#Community', '#NewLaunch'],
  },
  linkedin: {
    ending: 'Connect with us to explore practical next steps.',
    hashtags: ['#BusinessGrowth', '#Innovation', '#DigitalStrategy'],
  },
  tiktok: {
    ending: 'Follow for more quick ideas and behind-the-scenes updates.',
    hashtags: ['#TikTokMadeMeTryIt', '#BusinessTips', '#ForYou'],
  },
  x: {
    ending: 'Tell us what you would build with it.',
    hashtags: ['#BuildInPublic', '#Startup', '#Tech'],
  },
};

export const providers = providerRegistry;

export const getAvailableProviders = () =>
  Object.entries(providerRegistry).map(([key, value]) => ({ key, ...value }));

export function mockAIResponse(message = '') {
  const text = asText(message, 'Hello');
  const lower = text.toLowerCase();
  const seed = hashText(text);

  if (lower.includes('price') || lower.includes('cost') || lower.includes('quote')) {
    return 'I can help estimate a project range. Share the project type, number of pages, required features, and timeline so we can create a practical quote.';
  }

  if (lower.includes('caption') || lower.includes('post') || lower.includes('social')) {
    return 'Absolutely — tell me the product, tone, business type, and platform, and I will draft a ready-to-post caption with hashtags.';
  }

  if (lower.includes('brief') || lower.includes('requirements')) {
    return 'A strong brief should include the goal, audience, required features, visual direction, budget, deadline, and success metrics.';
  }

  if (lower.includes('name') || lower.includes('brand')) {
    return 'Great brand names are short, memorable, easy to spell, and connected to the emotion or outcome your audience wants.';
  }

  const replies = [
    'I am a local demo assistant, so I work without paid API keys. Ask me for captions, project estimates, briefs, invoices, or brand-name ideas.',
    'Here is a practical next step: describe your business goal in one sentence, then list the top three features you need most.',
    'I can help turn rough ideas into structured content using rule-based templates that are safe to run locally.',
    'For best results, provide context: audience, offer, tone, platform, budget, and timeline.',
  ];

  return pick(replies, seed);
}

export function generateCaption({ productName, businessType, tone, platform } = {}) {
  const product = asText(productName, 'your featured offer');
  const business = asText(businessType, 'business');
  const selectedTone = asText(tone, 'friendly').toLowerCase();
  const selectedPlatform = asText(platform, 'instagram').toLowerCase();
  const toneDetails = toneMap[selectedTone] || toneMap.friendly;
  const platformCopy = platformDetails[selectedPlatform] || platformDetails.instagram;

  return [
    `${toneDetails.opener} ${product} — a ${toneDetails.adjective} solution from ${withArticle(business)} built for people who value quality and results.`,
    `Whether you are discovering us for the first time or coming back for more, this is designed to help you move with confidence.`,
    `${platformCopy.ending} ${toneDetails.cta}`,
    platformCopy.hashtags.join(' '),
  ].join('\n\n');
}

export function estimateWebsiteCost({
  projectType,
  pages,
  chatbot,
  adminPanel,
  dashboard,
  graphicDesign,
  urgency,
} = {}) {
  const normalizedType = asText(projectType, 'business website').toLowerCase();
  const pageCount = Math.max(Number.parseInt(pages, 10) || 1, 1);

  const baseByProject = {
    landing: 450,
    portfolio: 800,
    business: 1200,
    ecommerce: 2400,
    saas: 4200,
    marketplace: 5500,
    dashboard: 3000,
    blog: 900,
  };

  const matchedType = Object.keys(baseByProject).find((type) => normalizedType.includes(type)) || 'business';
  const lineItems = [
    { label: `${toTitleCase(matchedType)} project setup`, amount: baseByProject[matchedType] },
    { label: `${pageCount} page${pageCount === 1 ? '' : 's'} of responsive UI`, amount: pageCount * 140 },
  ];

  if (chatbot) lineItems.push({ label: 'AI chatbot demo integration', amount: 550 });
  if (adminPanel) lineItems.push({ label: 'Admin panel', amount: 900 });
  if (dashboard) lineItems.push({ label: 'Analytics/dashboard module', amount: 850 });
  if (graphicDesign) lineItems.push({ label: 'Graphic design and brand assets', amount: 650 });

  const subtotal = lineItems.reduce((total, item) => total + item.amount, 0);
  const urgencyValue = asText(urgency, 'standard').toLowerCase();
  const urgencyMultiplier = urgencyValue.includes('rush') || urgencyValue.includes('urgent') ? 1.25 : urgencyValue.includes('flex') ? 0.9 : 1;
  const total = Math.round(subtotal * urgencyMultiplier);
  const buffer = Math.max(250, Math.round(total * 0.12));

  return {
    provider: DEFAULT_PROVIDER,
    projectType: toTitleCase(matchedType),
    lineItems,
    subtotal,
    urgencyMultiplier,
    estimatedMin: total,
    estimatedMax: total + buffer,
    formattedRange: `${formatCurrency(total)} - ${formatCurrency(total + buffer)}`,
    notes: [
      'Estimate is generated locally for demo purposes and is not a binding quote.',
      'Final pricing can change after reviewing integrations, content readiness, revisions, and deployment needs.',
    ],
  };
}

export function generateClientBrief({
  projectType,
  mainGoal,
  requiredFeatures,
  designPreference,
  budget,
  deadline,
} = {}) {
  const features = parseList(requiredFeatures);

  return {
    title: `${toTitleCase(projectType || 'Digital Project')} Client Brief`,
    overview: `Build a ${asText(projectType, 'digital solution')} that helps the client ${asText(mainGoal, 'launch with a clear online presence')}.`,
    goals: [
      asText(mainGoal, 'Create a polished, conversion-focused experience.'),
      'Make the experience responsive, fast, and easy for visitors to understand.',
      'Provide a structure that can grow as the business adds content or services.',
    ],
    scope: features.length ? features : ['Responsive pages', 'Contact form', 'Content sections', 'Basic SEO setup'],
    designDirection: asText(designPreference, 'Modern, clean, mobile-first, and aligned with the brand personality.'),
    budget: asText(budget, 'To be confirmed after discovery.'),
    deadline: asText(deadline, 'Timeline to be confirmed.'),
    recommendedNextSteps: [
      'Confirm target audience and top conversion action.',
      'Collect brand assets, copy, images, and reference websites.',
      'Approve sitemap and feature priority before development begins.',
    ],
  };
}

export function generateBusinessNames({ industry, style, keywords } = {}) {
  const cleanIndustry = toTitleCase(industry || 'Digital');
  const selectedStyle = asText(style, 'modern').toLowerCase();
  const keywordList = parseList(keywords);
  const baseWords = keywordList.length ? keywordList.map(toTitleCase) : [cleanIndustry, 'Nova', 'Spark'];

  const suffixesByStyle = {
    modern: ['Labs', 'Studio', 'Works', 'Collective'],
    luxury: ['Maison', 'Reserve', 'Atelier', 'Signature'],
    tech: ['AI', 'OS', 'Cloud', 'Systems'],
    playful: ['Pop', 'Sprout', 'Hive', 'Joy'],
    minimal: ['Co', 'One', 'Line', 'Base'],
  };
  const suffixes = suffixesByStyle[selectedStyle] || suffixesByStyle.modern;
  const prefixes = selectedStyle.includes('luxury') ? ['Velvet', 'Noble', 'Aurum'] : ['Bright', 'Prime', 'Urban'];

  const names = unique([
    ...baseWords.map((word, index) => `${word} ${pick(suffixes, index)}`),
    ...prefixes.map((prefix, index) => `${prefix} ${baseWords[index % baseWords.length]}`),
    `${cleanIndustry} ${pick(suffixes, hashText(cleanIndustry + selectedStyle))}`,
    `${baseWords[0]} & ${cleanIndustry}`,
  ]).slice(0, 10);

  return {
    provider: DEFAULT_PROVIDER,
    industry: cleanIndustry,
    style: selectedStyle,
    names,
    namingTips: [
      'Check domain and social handle availability before committing.',
      'Say the name out loud to test memorability and pronunciation.',
      'Avoid names that are too close to competitors or protected trademarks.',
    ],
  };
}

export default {
  providers,
  getAvailableProviders,
  mockAIResponse,
  generateCaption,
  estimateWebsiteCost,
  generateClientBrief,
  generateBusinessNames,
};
