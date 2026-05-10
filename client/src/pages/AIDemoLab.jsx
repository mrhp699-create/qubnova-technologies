import { useMemo, useState } from 'react';
import {
  Bot,
  BriefcaseBusiness,
  Calculator,
  ClipboardList,
  Copy,
  Download,
  FileText,
  MessageSquareText,
  RefreshCw,
  Rocket,
  Sparkles,
  WandSparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../components/common/Badge.jsx';
import Card from '../components/common/Card.jsx';
import GradientButton from '../components/common/GradientButton.jsx';

const assistantButtons = [
  'Web App',
  'AI Chatbot',
  'Dashboard',
  'Graphic Design',
  'Pricing',
  'Contact',
  'Founder',
  'Projects',
];

const tools = [
  {
    id: 'assistant',
    icon: Bot,
    title: 'Qubnova Website Assistant Bot',
    purpose: 'Guides visitors around the website and answers questions about Qubnova.',
    accent: 'from-cyan-400 to-violet-500',
  },
  {
    id: 'caption',
    icon: WandSparkles,
    title: 'AI Caption Generator',
    purpose: 'Creates caption, hashtag, and CTA ideas with template-based generation.',
    accent: 'from-fuchsia-400 to-cyan-400',
  },
  {
    id: 'estimator',
    icon: Calculator,
    title: 'Website Cost Estimator',
    purpose: 'Estimates budget, delivery timeline, and the best-fit package.',
    accent: 'from-violet-500 to-amber-300',
  },
  {
    id: 'invoice',
    icon: FileText,
    title: 'Invoice Generator',
    purpose: 'Builds a polished invoice preview with print-to-PDF support.',
    accent: 'from-cyan-400 to-emerald-400',
  },
  {
    id: 'brief',
    icon: ClipboardList,
    title: 'Client Brief Generator',
    purpose: 'Turns discovery answers into a clean project brief summary.',
    accent: 'from-amber-300 to-fuchsia-400',
  },
  {
    id: 'names',
    icon: BriefcaseBusiness,
    title: 'Business Name Generator',
    purpose: 'Generates business name ideas and tagline directions.',
    accent: 'from-emerald-400 to-violet-500',
  },
];

const defaultForms = {
  assistant: {
    message: 'What can Qubnova build for my business?',
    messages: [
      {
        role: 'bot',
        text: 'Hi! I am the Qubnova Website Assistant demo. Choose a quick button or ask about web apps, AI chatbots, dashboards, branding, pricing, projects, the founder, or contacting the team.',
      },
    ],
  },
  caption: {
    productName: 'Qubnova Launch Sprint',
    businessType: 'software and design studio',
    tone: 'Professional',
    platform: 'LinkedIn',
  },
  estimator: {
    projectType: 'Business Website',
    pages: 6,
    chatbot: 'Yes',
    adminPanel: 'No',
    dashboard: 'No',
    graphicDesign: 'Yes',
    urgency: 'Standard',
  },
  invoice: {
    clientName: 'Nova Retail Co.',
    serviceName: 'Website UI + Frontend Build',
    amount: 1200,
    date: new Date().toISOString().slice(0, 10),
    discount: 50,
    tax: 5,
  },
  brief: {
    projectType: 'Service business website',
    mainGoal: 'Generate leads and explain services clearly',
    requiredFeatures: 'Contact form, WhatsApp CTA, testimonials, service pages, basic SEO',
    designPreference: 'Futuristic, clean, premium gradients',
    budget: '$1,500 - $2,500',
    deadline: '4 weeks',
  },
  names: {
    industry: 'digital marketing',
    style: 'Modern',
    keywords: 'growth, nova, signal',
  },
};

const money = (amount) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Number(amount || 0));

const copyText = async (text) => {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
};

const yes = (value) => String(value).toLowerCase() === 'yes';

const buildAssistantReply = (input) => {
  const text = input.toLowerCase();

  if (text.includes('web app') || text.includes('website')) {
    return 'Qubnova builds fast, polished web apps and websites with responsive UI, conversion-focused pages, forms, dashboards, and scalable frontend architecture.';
  }
  if (text.includes('chatbot') || text.includes('ai')) {
    return 'Qubnova can prototype AI chatbot flows like this demo using rule-based logic first, then connect Gemini, OpenAI, or a client-provided API when you are ready for production intelligence.';
  }
  if (text.includes('dashboard') || text.includes('admin')) {
    return 'Dashboard concepts can include admin login, analytics cards, project management views, client data tables, and role-based workflows for internal operations.';
  }
  if (text.includes('graphic') || text.includes('design') || text.includes('brand')) {
    return 'Qubnova supports premium graphic design concepts including brand visuals, social media assets, landing page art direction, and futuristic UI systems.';
  }
  if (text.includes('pricing') || text.includes('cost') || text.includes('package')) {
    return 'Pricing depends on pages, features, chatbot needs, dashboards, admin tools, graphic design, and urgency. Try the Website Cost Estimator tab for a demo budget range.';
  }
  if (text.includes('contact')) {
    return 'Use the Contact page to send project details. Share your goal, required features, budget range, and ideal deadline for the most useful response.';
  }
  if (text.includes('founder')) {
    return 'The founder section introduces the person behind Qubnova, the mission, and the focus on smart web applications, creative design, and AI-ready business tools.';
  }
  if (text.includes('project') || text.includes('portfolio')) {
    return 'Visit Projects to explore sample builds and concepts. Qubnova focuses on practical, beautiful products that help businesses launch, automate, and grow.';
  }

  return 'I can guide you around Qubnova. Try asking about Web App, AI Chatbot, Dashboard, Graphic Design, Pricing, Contact, Founder, or Projects.';
};

const generateCaption = ({ productName, businessType, tone, platform }) => {
  const toneMap = {
    Professional: ['Built for clarity, speed, and measurable business impact', 'Book a strategy call today.'],
    Friendly: ['Helpful, simple, and made for real people', 'Message us and let us help you get started.'],
    Bold: ['Stop blending in — launch something customers remember', 'Claim your competitive edge now.'],
    Luxury: ['Premium digital presence for brands that value every detail', 'Elevate your brand experience today.'],
    Playful: ['Fresh ideas, smart tools, and a little spark of fun', 'Try it, share it, and tell us what you think.'],
  };
  const platformTags = {
    Instagram: ['#SmallBusiness', '#DigitalBrand', '#LaunchReady', '#Qubnova'],
    LinkedIn: ['#BusinessGrowth', '#WebDevelopment', '#Automation', '#DigitalStrategy'],
    Facebook: ['#LocalBusiness', '#OnlinePresence', '#SmartTools', '#BusinessSupport'],
    TikTok: ['#BusinessTips', '#AITools', '#WebDesign', '#ForYou'],
    X: ['#BuildInPublic', '#StartupTools', '#WebApps', '#AIReady'],
  };
  const [hook, cta] = toneMap[tone] || toneMap.Professional;
  const hashtags = platformTags[platform] || platformTags.LinkedIn;

  return {
    caption: `${productName} is here for ${businessType} teams that want smarter systems without unnecessary complexity. ${hook}. From idea to polished digital experience, Qubnova helps turn your next move into something people can trust, use, and remember.`,
    hashtags,
    cta,
  };
};

const estimateWebsite = (form) => {
  const base = {
    'Landing Page': 450,
    Portfolio: 700,
    'Business Website': 1100,
    'Ecommerce Store': 2200,
    'SaaS Dashboard': 3200,
    Marketplace: 4200,
  }[form.projectType] || 1000;
  const pageCost = Math.max(Number(form.pages || 1) - 1, 0) * 130;
  const addOns = [
    { label: 'AI chatbot flow', active: yes(form.chatbot), amount: 350 },
    { label: 'Admin panel', active: yes(form.adminPanel), amount: 650 },
    { label: 'Analytics dashboard', active: yes(form.dashboard), amount: 850 },
    { label: 'Graphic design package', active: yes(form.graphicDesign), amount: 450 },
  ];
  const urgencyMultiplier = form.urgency === 'Rush' ? 1.25 : form.urgency === 'Flexible' ? 0.92 : 1;
  const subtotal = base + pageCost + addOns.filter((item) => item.active).reduce((sum, item) => sum + item.amount, 0);
  const low = Math.round((subtotal * urgencyMultiplier * 0.9) / 50) * 50;
  const high = Math.round((subtotal * urgencyMultiplier * 1.22) / 50) * 50;
  const timelineBase = form.urgency === 'Rush' ? 2 : form.urgency === 'Flexible' ? 6 : 4;
  const timelineHigh = timelineBase + Math.ceil(Number(form.pages || 1) / 5) + (yes(form.dashboard) || yes(form.adminPanel) ? 2 : 0);
  const packageName = high > 3500 ? 'Qubnova Scale Build' : high > 1600 ? 'Qubnova Business Launch' : 'Qubnova Starter Sprint';

  return {
    range: `${money(low)} - ${money(high)}`,
    timeline: `${timelineBase}-${timelineHigh} weeks`,
    packageName,
    lineItems: [
      { label: `${form.projectType} base`, amount: base },
      { label: `${form.pages} pages`, amount: pageCost },
      ...addOns.filter((item) => item.active),
      { label: `${form.urgency} delivery adjustment`, amount: Math.max(low - subtotal, 0) },
    ],
  };
};

const generateInvoice = (form) => {
  const amount = Number(form.amount || 0);
  const discount = Number(form.discount || 0);
  const taxable = Math.max(amount - discount, 0);
  const taxAmount = taxable * (Number(form.tax || 0) / 100);
  const total = taxable + taxAmount;
  const invoiceNo = `QNV-${String(form.clientName || 'CLIENT').slice(0, 3).toUpperCase()}-${String(form.date || '').replaceAll('-', '').slice(2)}`;

  return { invoiceNo, subtotal: amount, discount, taxable, taxAmount, total };
};

const generateBrief = (form) => ({
  overview: `${form.projectType} focused on this main goal: ${form.mainGoal}.`,
  scope: `Required features: ${form.requiredFeatures}.`,
  direction: `Design preference: ${form.designPreference}.`,
  constraints: `Budget: ${form.budget}. Target deadline: ${form.deadline}.`,
  nextSteps: 'Recommended next steps: confirm priority features, provide brand assets, approve sitemap, then move into wireframe and build sprint.',
});

const generateNames = ({ industry, style, keywords }) => {
  const words = String(keywords || 'nova, spark, growth')
    .split(',')
    .map((word) => word.trim())
    .filter(Boolean);
  const first = words[0] || 'Nova';
  const second = words[1] || 'Signal';
  const third = words[2] || 'Labs';
  const suffixes = {
    Modern: ['Studio', 'Works', 'Collective'],
    Luxury: ['Maison', 'Atelier', 'Reserve'],
    Tech: ['Labs', 'Systems', 'AI'],
    Playful: ['Spark', 'Hive', 'Pop'],
    Minimal: ['Co', 'Line', 'Form'],
  }[style] || ['Studio', 'Labs', 'Works'];

  return {
    names: [
      `${first} ${suffixes[0]}`,
      `${second} ${suffixes[1]}`,
      `${third} ${suffixes[2]}`,
      `${first}${second}`.replace(/\s/g, ''),
      `${style} ${industry}`,
    ],
    taglines: [
      `Smart ${industry} solutions built around ${first}.`,
      `Where ${second} becomes measurable growth.`,
      `${style} ideas for brands ready to move faster.`,
    ],
  };
};

const initialOutputs = {
  caption: generateCaption(defaultForms.caption),
  estimator: estimateWebsite(defaultForms.estimator),
  invoice: generateInvoice(defaultForms.invoice),
  brief: generateBrief(defaultForms.brief),
  names: generateNames(defaultForms.names),
};

function Field({ label, children }) {
  return (
    <label className="space-y-2 text-sm font-bold text-slate-700 dark:text-aurora-slate">
      <span>{label}</span>
      {children}
    </label>
  );
}

function TextInput(props) {
  return <input className="input-luxury" {...props} />;
}

function SelectInput(props) {
  return <select className="input-luxury" {...props} />;
}

function TextArea(props) {
  return <textarea className="input-luxury min-h-28 resize-y" {...props} />;
}

function ActionButton({ children, className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-aurora-linear bg-[length:220%_220%] px-5 py-3 text-sm font-black text-white shadow-violet transition hover:scale-[1.02] hover:shadow-aurora disabled:cursor-wait disabled:opacity-70 animate-gradient-pan ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm font-black text-aurora-ink transition hover:border-aurora-cyan hover:text-aurora-violet dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:text-aurora-cyan ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function LoadingStrip() {
  return (
    <div className="rounded-3xl border border-aurora-cyan/20 bg-aurora-cyan/10 p-4" role="status" aria-live="polite">
      <div className="flex items-center gap-3 text-sm font-bold text-aurora-violet dark:text-aurora-cyan">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aurora-cyan opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-aurora-cyan" />
        </span>
        Demo AI is thinking through templates, rules, and structured outputs...
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/60 dark:bg-white/10">
        <span className="block h-full w-1/2 rounded-full bg-aurora-linear animate-shimmer" />
      </div>
    </div>
  );
}

function CopyButton({ value, label = 'Copy' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <GhostButton type="button" onClick={handleCopy} className="py-2.5">
      <Copy size={16} /> {copied ? 'Copied!' : label}
    </GhostButton>
  );
}

function ResultCard({ title, children, copyValue }) {
  return (
    <article className="rounded-[1.75rem] border border-white/30 bg-white/80 p-5 shadow-inner-glow backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-black text-aurora-ink dark:text-white">{title}</h3>
        {copyValue && <CopyButton value={copyValue} />}
      </div>
      <div className="space-y-4 text-sm leading-7 text-slate-600 dark:text-aurora-slate">{children}</div>
    </article>
  );
}

function ToolGrid({ children, onGenerate, onReset, loading }) {
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/[0.04]">
        {childArray[0]}
        <div className="mt-5 flex flex-wrap gap-3">
          <ActionButton type="button" onClick={onGenerate} disabled={loading}>
            <Sparkles size={18} /> Generate
          </ActionButton>
          <GhostButton type="button" onClick={onReset}>
            <RefreshCw size={16} /> Reset
          </GhostButton>
        </div>
      </div>
      {childArray[1]}
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-aurora-cyan/20 bg-aurora-cyan/10 p-4">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-aurora-violet dark:text-aurora-cyan">{label}</p>
      <p className="mt-2 text-lg font-black text-aurora-ink dark:text-white">{value}</p>
    </div>
  );
}

function InvoiceLine({ label, value, featured = false }) {
  return (
    <li className={`flex justify-between rounded-2xl px-4 py-3 ${featured ? 'bg-aurora-linear text-lg font-black text-white shadow-glow' : 'bg-slate-50 dark:bg-white/[0.05]'}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </li>
  );
}

export default function AIDemoLab() {
  const [activeTool, setActiveTool] = useState('assistant');
  const [forms, setForms] = useState(defaultForms);
  const [outputs, setOutputs] = useState(initialOutputs);
  const [loadingTool, setLoadingTool] = useState(null);
  const selectedTool = useMemo(() => tools.find((tool) => tool.id === activeTool) || tools[0], [activeTool]);

  const updateForm = (toolId, field, value) => {
    setForms((current) => ({ ...current, [toolId]: { ...current[toolId], [field]: value } }));
  };

  const resetTool = (toolId = activeTool) => {
    setForms((current) => ({ ...current, [toolId]: defaultForms[toolId] }));
    if (toolId !== 'assistant') {
      const generator = {
        caption: generateCaption,
        estimator: estimateWebsite,
        invoice: generateInvoice,
        brief: generateBrief,
        names: generateNames,
      }[toolId];
      setOutputs((current) => ({ ...current, [toolId]: generator(defaultForms[toolId]) }));
    }
  };

  const generateTool = (toolId, generator) => {
    setLoadingTool(toolId);
    window.setTimeout(() => {
      setOutputs((current) => ({ ...current, [toolId]: generator(forms[toolId]) }));
      setLoadingTool(null);
    }, 650);
  };

  const sendAssistant = (message) => {
    const cleanMessage = message.trim();
    if (!cleanMessage) return;

    setLoadingTool('assistant');
    setForms((current) => ({
      ...current,
      assistant: {
        ...current.assistant,
        message: '',
        messages: [...current.assistant.messages, { role: 'user', text: cleanMessage }],
      },
    }));

    window.setTimeout(() => {
      setForms((current) => ({
        ...current,
        assistant: {
          ...current.assistant,
          messages: [...current.assistant.messages, { role: 'bot', text: buildAssistantReply(cleanMessage) }],
        },
      }));
      setLoadingTool(null);
    }, 650);
  };

  const downloadInvoicePdf = () => {
    const invoice = forms.invoice;
    const totals = outputs.invoice;
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>${totals.invoiceNo} - Qubnova Invoice</title>
          <style>
            body { font-family: Inter, Arial, sans-serif; color: #0b1020; padding: 40px; }
            .invoice { max-width: 760px; margin: 0 auto; border: 1px solid #dbeafe; border-radius: 24px; padding: 32px; }
            h1 { margin: 0; font-size: 34px; }
            .muted { color: #64748b; }
            .row { display: flex; justify-content: space-between; border-bottom: 1px solid #e2e8f0; padding: 14px 0; }
            .total { font-size: 26px; font-weight: 900; color: #7c3aed; }
            @media print { button { display: none; } }
          </style>
        </head>
        <body>
          <main class="invoice">
            <p class="muted">Qubnova Technologies</p>
            <h1>Invoice ${totals.invoiceNo}</h1>
            <p><strong>Client:</strong> ${invoice.clientName}</p>
            <p><strong>Service:</strong> ${invoice.serviceName}</p>
            <p><strong>Date:</strong> ${invoice.date}</p>
            <div class="row"><span>Subtotal</span><strong>${money(totals.subtotal)}</strong></div>
            <div class="row"><span>Discount</span><strong>-${money(totals.discount)}</strong></div>
            <div class="row"><span>Tax</span><strong>${money(totals.taxAmount)}</strong></div>
            <div class="row total"><span>Total Due</span><strong>${money(totals.total)}</strong></div>
            <p class="muted">Use your browser print dialog to save this invoice as PDF.</p>
            <button onclick="window.print()">Download / Save PDF</button>
          </main>
          <script>window.onload = () => window.print();</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const renderTool = () => {
    if (activeTool === 'assistant') {
      const assistant = forms.assistant;
      const transcript = assistant.messages.map((message) => `${message.role === 'user' ? 'You' : 'Qubnova Bot'}: ${message.text}`).join('\n');

      return (
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {assistantButtons.map((button) => (
                <button
                  key={button}
                  type="button"
                  onClick={() => sendAssistant(button)}
                  className="rounded-2xl border border-aurora-cyan/20 bg-aurora-cyan/10 px-4 py-3 text-sm font-black text-aurora-violet transition hover:-translate-y-1 hover:bg-aurora-cyan/20 dark:text-aurora-cyan"
                >
                  {button}
                </button>
              ))}
            </div>
            <form
              className="space-y-3"
              onSubmit={(event) => {
                event.preventDefault();
                sendAssistant(assistant.message);
              }}
            >
              <Field label="Ask the Qubnova assistant">
                <TextInput
                  value={assistant.message}
                  onChange={(event) => updateForm('assistant', 'message', event.target.value)}
                  placeholder="Ask about pricing, projects, dashboards, or chatbots"
                />
              </Field>
              <div className="flex flex-wrap gap-3">
                <ActionButton type="submit" disabled={loadingTool === 'assistant'}>
                  <MessageSquareText size={18} /> Send message
                </ActionButton>
                <GhostButton type="button" onClick={() => resetTool('assistant')}>
                  <RefreshCw size={16} /> Reset
                </GhostButton>
              </div>
            </form>
          </div>
          <ResultCard title="Live chatbot demo" copyValue={transcript}>
            <div className="max-h-[34rem] space-y-3 overflow-y-auto pr-1" aria-live="polite">
              {assistant.messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-3xl p-4 ${
                    message.role === 'user'
                      ? 'ml-auto max-w-[88%] bg-aurora-linear text-white shadow-violet'
                      : 'mr-auto max-w-[92%] border border-slate-200/80 bg-white text-slate-700 dark:border-white/10 dark:bg-white/[0.08] dark:text-aurora-slate'
                  }`}
                >
                  <p className="text-xs font-black uppercase tracking-[0.22em] opacity-75">{message.role === 'user' ? 'You' : 'Qubnova Bot'}</p>
                  <p className="mt-2 text-sm leading-7">{message.text}</p>
                </div>
              ))}
              {loadingTool === 'assistant' && <LoadingStrip />}
            </div>
          </ResultCard>
        </div>
      );
    }

    if (activeTool === 'caption') {
      const form = forms.caption;
      const output = outputs.caption;
      const copyValue = `${output.caption}\n\n${output.hashtags.join(' ')}\n\nCTA: ${output.cta}`;

      return (
        <ToolGrid onGenerate={() => generateTool('caption', generateCaption)} onReset={() => resetTool('caption')} loading={loadingTool === 'caption'}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Product name"><TextInput value={form.productName} onChange={(event) => updateForm('caption', 'productName', event.target.value)} /></Field>
            <Field label="Business type"><TextInput value={form.businessType} onChange={(event) => updateForm('caption', 'businessType', event.target.value)} /></Field>
            <Field label="Tone"><SelectInput value={form.tone} onChange={(event) => updateForm('caption', 'tone', event.target.value)}>{['Professional', 'Friendly', 'Bold', 'Luxury', 'Playful'].map((item) => <option key={item}>{item}</option>)}</SelectInput></Field>
            <Field label="Platform"><SelectInput value={form.platform} onChange={(event) => updateForm('caption', 'platform', event.target.value)}>{['LinkedIn', 'Instagram', 'Facebook', 'TikTok', 'X'].map((item) => <option key={item}>{item}</option>)}</SelectInput></Field>
          </div>
          <ResultCard title="Generated caption kit" copyValue={copyValue}>
            {loadingTool === 'caption' ? <LoadingStrip /> : <><p className="rounded-2xl bg-slate-50 p-4 dark:bg-white/[0.05]">{output.caption}</p><div><h4 className="font-black text-aurora-ink dark:text-white">Hashtags</h4><p>{output.hashtags.join(' ')}</p></div><div><h4 className="font-black text-aurora-ink dark:text-white">CTA</h4><p>{output.cta}</p></div></>}
          </ResultCard>
        </ToolGrid>
      );
    }

    if (activeTool === 'estimator') {
      const form = forms.estimator;
      const output = outputs.estimator;
      const copyValue = `Estimated budget: ${output.range}\nTimeline: ${output.timeline}\nRecommended package: ${output.packageName}`;

      return (
        <ToolGrid onGenerate={() => generateTool('estimator', estimateWebsite)} onReset={() => resetTool('estimator')} loading={loadingTool === 'estimator'}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Project type"><SelectInput value={form.projectType} onChange={(event) => updateForm('estimator', 'projectType', event.target.value)}>{['Landing Page', 'Portfolio', 'Business Website', 'Ecommerce Store', 'SaaS Dashboard', 'Marketplace'].map((item) => <option key={item}>{item}</option>)}</SelectInput></Field>
            <Field label="Number of pages"><TextInput min="1" type="number" value={form.pages} onChange={(event) => updateForm('estimator', 'pages', event.target.value)} /></Field>
            {['chatbot', 'adminPanel', 'dashboard', 'graphicDesign'].map((field) => (
              <Field key={field} label={`Need ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}?`}><SelectInput value={form[field]} onChange={(event) => updateForm('estimator', field, event.target.value)}><option>Yes</option><option>No</option></SelectInput></Field>
            ))}
            <Field label="Delivery urgency"><SelectInput value={form.urgency} onChange={(event) => updateForm('estimator', 'urgency', event.target.value)}>{['Flexible', 'Standard', 'Rush'].map((item) => <option key={item}>{item}</option>)}</SelectInput></Field>
          </div>
          <ResultCard title="Budget intelligence" copyValue={copyValue}>
            {loadingTool === 'estimator' ? <LoadingStrip /> : <><div className="grid gap-3 sm:grid-cols-3"><Metric label="Estimated budget" value={output.range} /><Metric label="Timeline" value={output.timeline} /><Metric label="Package" value={output.packageName} /></div><ul className="space-y-2">{output.lineItems.map((item) => <li className="flex justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-white/[0.05]" key={item.label}><span>{item.label}</span><strong>{money(item.amount)}</strong></li>)}</ul></>}
          </ResultCard>
        </ToolGrid>
      );
    }

    if (activeTool === 'invoice') {
      const form = forms.invoice;
      const output = outputs.invoice;
      const copyValue = `Invoice ${output.invoiceNo}\nClient: ${form.clientName}\nService: ${form.serviceName}\nDate: ${form.date}\nTotal due: ${money(output.total)}`;

      return (
        <ToolGrid onGenerate={() => generateTool('invoice', generateInvoice)} onReset={() => resetTool('invoice')} loading={loadingTool === 'invoice'}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Client name"><TextInput value={form.clientName} onChange={(event) => updateForm('invoice', 'clientName', event.target.value)} /></Field>
            <Field label="Service name"><TextInput value={form.serviceName} onChange={(event) => updateForm('invoice', 'serviceName', event.target.value)} /></Field>
            <Field label="Amount"><TextInput min="0" type="number" value={form.amount} onChange={(event) => updateForm('invoice', 'amount', event.target.value)} /></Field>
            <Field label="Date"><TextInput type="date" value={form.date} onChange={(event) => updateForm('invoice', 'date', event.target.value)} /></Field>
            <Field label="Optional discount"><TextInput min="0" type="number" value={form.discount} onChange={(event) => updateForm('invoice', 'discount', event.target.value)} /></Field>
            <Field label="Optional tax (%)"><TextInput min="0" type="number" value={form.tax} onChange={(event) => updateForm('invoice', 'tax', event.target.value)} /></Field>
          </div>
          <ResultCard title="Invoice preview" copyValue={copyValue}>
            {loadingTool === 'invoice' ? <LoadingStrip /> : <><div className="rounded-[1.5rem] border border-aurora-cyan/20 bg-gradient-to-br from-white to-aurora-cyan/10 p-5 dark:from-white/[0.08] dark:to-aurora-violet/10"><p className="text-xs font-black uppercase tracking-[0.24em] text-aurora-violet dark:text-aurora-cyan">Qubnova Technologies</p><h4 className="mt-2 text-2xl font-black text-aurora-ink dark:text-white">Invoice {output.invoiceNo}</h4><p className="mt-3"><strong>Client:</strong> {form.clientName}</p><p><strong>Service:</strong> {form.serviceName}</p><p><strong>Date:</strong> {form.date}</p></div><ul className="space-y-2"><InvoiceLine label="Subtotal" value={money(output.subtotal)} /><InvoiceLine label="Discount" value={`-${money(output.discount)}`} /><InvoiceLine label="Tax" value={money(output.taxAmount)} /><InvoiceLine label="Total due" value={money(output.total)} featured /></ul><GhostButton type="button" onClick={downloadInvoicePdf}><Download size={16} /> Download PDF</GhostButton></>}
          </ResultCard>
        </ToolGrid>
      );
    }

    if (activeTool === 'brief') {
      const form = forms.brief;
      const output = outputs.brief;
      const copyValue = Object.values(output).join('\n\n');

      return (
        <ToolGrid onGenerate={() => generateTool('brief', generateBrief)} onReset={() => resetTool('brief')} loading={loadingTool === 'brief'}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Project type"><TextInput value={form.projectType} onChange={(event) => updateForm('brief', 'projectType', event.target.value)} /></Field>
            <Field label="Main goal"><TextInput value={form.mainGoal} onChange={(event) => updateForm('brief', 'mainGoal', event.target.value)} /></Field>
            <Field label="Required features"><TextArea value={form.requiredFeatures} onChange={(event) => updateForm('brief', 'requiredFeatures', event.target.value)} /></Field>
            <Field label="Design preference"><TextArea value={form.designPreference} onChange={(event) => updateForm('brief', 'designPreference', event.target.value)} /></Field>
            <Field label="Budget"><TextInput value={form.budget} onChange={(event) => updateForm('brief', 'budget', event.target.value)} /></Field>
            <Field label="Deadline"><TextInput value={form.deadline} onChange={(event) => updateForm('brief', 'deadline', event.target.value)} /></Field>
          </div>
          <ResultCard title="Project brief summary" copyValue={copyValue}>
            {loadingTool === 'brief' ? <LoadingStrip /> : Object.entries(output).map(([key, value]) => <div className="rounded-2xl bg-slate-50 p-4 dark:bg-white/[0.05]" key={key}><h4 className="font-black capitalize text-aurora-ink dark:text-white">{key.replace(/([A-Z])/g, ' $1')}</h4><p>{value}</p></div>)}
          </ResultCard>
        </ToolGrid>
      );
    }

    const form = forms.names;
    const output = outputs.names;
    const copyValue = `Names:\n${output.names.join('\n')}\n\nTaglines:\n${output.taglines.join('\n')}`;

    return (
      <ToolGrid onGenerate={() => generateTool('names', generateNames)} onReset={() => resetTool('names')} loading={loadingTool === 'names'}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Industry"><TextInput value={form.industry} onChange={(event) => updateForm('names', 'industry', event.target.value)} /></Field>
          <Field label="Style"><SelectInput value={form.style} onChange={(event) => updateForm('names', 'style', event.target.value)}>{['Modern', 'Luxury', 'Tech', 'Playful', 'Minimal'].map((item) => <option key={item}>{item}</option>)}</SelectInput></Field>
          <Field label="Keywords"><TextArea value={form.keywords} onChange={(event) => updateForm('names', 'keywords', event.target.value)} /></Field>
        </div>
        <ResultCard title="Business name studio" copyValue={copyValue}>
          {loadingTool === 'names' ? <LoadingStrip /> : <><div><h4 className="font-black text-aurora-ink dark:text-white">Business name ideas</h4><div className="mt-3 flex flex-wrap gap-3">{output.names.map((name) => <span className="rounded-full bg-aurora-linear px-4 py-2 text-sm font-black text-white shadow-glow" key={name}>{name}</span>)}</div></div><div><h4 className="font-black text-aurora-ink dark:text-white">Tagline ideas</h4><ul className="mt-3 space-y-2">{output.taglines.map((tagline) => <li className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-white/[0.05]" key={tagline}>{tagline}</li>)}</ul></div></>}
        </ResultCard>
      </ToolGrid>
    );
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-aurora-obsidian pt-32 text-white sm:pt-36">
        <div className="absolute inset-0 bg-premium-mesh opacity-95" />
        <div className="absolute inset-0 mesh-grid opacity-25" />
        <div className="floating-orb left-[-8rem] top-24 h-80 w-80 bg-aurora-cyan/25 animate-float" />
        <div className="floating-orb right-[-6rem] top-12 h-96 w-96 bg-aurora-violet/30 animate-float-slow" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gold-line" />
        <div className="container-page section-spacing relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <Badge className="text-aurora-cyan">AI Demo Lab Hero</Badge>
            <h1 className="mt-6 text-4xl font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl">Qubnova AI Demo Lab</h1>
            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-aurora-slate">
              Explore interactive AI-ready tools, chatbot demos, automation concepts, and business utilities built to demonstrate how smart web applications can solve real problems.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#interactive-tool-area" className="inline-flex items-center gap-2 rounded-2xl bg-aurora-linear bg-[length:220%_220%] px-6 py-3 font-black text-white shadow-violet animate-gradient-pan hover:scale-[1.02]">
                Launch a demo tool <Rocket size={18} />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-black text-white backdrop-blur-xl transition hover:bg-white/15">
                Discuss integration <MessageSquareText size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Tool Cards Grid</Badge>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-aurora-ink dark:text-white sm:text-5xl">Choose an AI-ready business utility.</h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-aurora-slate">Every demo below runs with local mock logic, polished UX, loading states, copy actions, and production-style structure.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {tools.map(({ id, icon: Icon, title, purpose, accent }, index) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTool(id)}
                className={`group premium-border h-full rounded-[2rem] bg-white/[0.82] p-5 text-left shadow-luxury shadow-inner-glow backdrop-blur-2xl transition hover:-translate-y-2 hover:scale-[1.01] dark:bg-white/[0.07] ${activeTool === id ? 'ring-2 ring-aurora-cyan' : ''}`}
              >
                <span className="shine-overlay" />
                <span className="relative z-10 block">
                  <span className="flex items-start justify-between gap-4">
                    <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-glow`}><Icon size={28} /></span>
                    <span className="rounded-full bg-aurora-cyan/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-aurora-violet dark:text-aurora-cyan">Tool 0{index + 1}</span>
                  </span>
                  <span className="mt-5 block text-xl font-black text-aurora-ink dark:text-white">{title}</span>
                  <span className="mt-3 block leading-7 text-slate-600 dark:text-aurora-slate">{purpose}</span>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-aurora-violet dark:text-aurora-cyan">Open interface <Sparkles size={16} /></span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="interactive-tool-area" className="pb-20 sm:pb-24 lg:pb-32">
        <div className="container-page">
          <div className="premium-border overflow-hidden rounded-[2.25rem] bg-white/85 p-4 shadow-luxury shadow-inner-glow backdrop-blur-2xl dark:bg-white/[0.07] sm:p-6 lg:p-8">
            <div className="relative z-10">
              <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <Badge>Interactive Tool Area</Badge>
                  <h2 className="mt-4 text-3xl font-black tracking-tight text-aurora-ink dark:text-white sm:text-5xl">{selectedTool.title}</h2>
                  <p className="mt-3 max-w-3xl leading-7 text-slate-600 dark:text-aurora-slate">{selectedTool.purpose}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <button key={tool.id} type="button" onClick={() => setActiveTool(tool.id)} className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.16em] transition ${activeTool === tool.id ? 'bg-aurora-linear text-white shadow-glow' : 'bg-slate-100 text-slate-600 hover:text-aurora-violet dark:bg-white/[0.07] dark:text-aurora-slate dark:hover:text-aurora-cyan'}`}>
                      {tool.title.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
              {renderTool()}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-32">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Card>
            <Badge>How Demo AI Works</Badge>
            <h2 className="mt-5 text-3xl font-black text-aurora-ink dark:text-white">Rule-based intelligence with production-ready UX.</h2>
            <div className="mt-6 space-y-4 text-slate-600 dark:text-aurora-slate">
              {[
                'Inputs are cleaned and mapped to known business patterns.',
                'Templates combine tone, platform, features, budget, and urgency into useful outputs.',
                'Loading and typing states simulate a real AI workflow while keeping demos instant and free.',
                'Copy, reset, print, and result cards show how these utilities can become daily business tools.',
              ].map((item) => <p className="rounded-2xl bg-slate-50 p-4 dark:bg-white/[0.05]" key={item}>{item}</p>)}
            </div>
          </Card>
          <Card>
            <Badge>Future AI Integration</Badge>
            <h2 className="mt-5 text-3xl font-black text-aurora-ink dark:text-white">Structured to connect with real AI later.</h2>
            <p className="mt-6 rounded-[1.5rem] border border-aurora-cyan/20 bg-aurora-cyan/10 p-5 font-bold leading-8 text-aurora-violet dark:text-aurora-cyan">
              No paid AI API is required for these demos. The tools use demo logic and are structured to connect with Gemini, OpenAI, or client-provided APIs later.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['Gemini-ready', 'OpenAI-ready', 'Custom API-ready'].map((item) => <Metric key={item} label="Integration path" value={item} />)}
            </div>
          </Card>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-32">
        <div className="container-page">
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-aurora-obsidian p-8 text-center text-white shadow-luxury sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-premium-mesh opacity-80" />
            <div className="absolute inset-0 mesh-grid opacity-20" />
            <div className="relative z-10 mx-auto max-w-4xl">
              <Badge className="text-aurora-cyan">CTA</Badge>
              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">Want a custom AI-ready tool for your business?</h2>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-aurora-slate">Qubnova can turn one of these demo concepts into a branded workflow for your website, sales process, client onboarding, or internal operations.</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <GradientButton to="/contact">Start a project</GradientButton>
                <Link to="/projects" className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-black text-white backdrop-blur-xl transition hover:bg-white/15">View projects</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
