const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/qubnova-technologies';
const SALT_ROUNDS = Number.parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10);

const timestampFields = {
  timestamps: true,
  versionKey: false,
  strict: false,
};

const schemas = {
  User: new mongoose.Schema(
    {
      email: { type: String, unique: true, required: true, lowercase: true, trim: true },
      password: { type: String, required: true },
      role: { type: String, default: 'admin' },
      name: { type: String, default: 'Qubnova Admin' },
    },
    timestampFields,
  ),
  Service: new mongoose.Schema(
    {
      title: { type: String, unique: true, required: true, trim: true },
      slug: { type: String, unique: true, required: true, trim: true },
      description: { type: String, required: true },
      order: { type: Number, default: 0 },
      isActive: { type: Boolean, default: true },
    },
    timestampFields,
  ),
  Project: new mongoose.Schema(
    {
      title: { type: String, unique: true, required: true, trim: true },
      slug: { type: String, unique: true, required: true, trim: true },
      summary: { type: String, required: true },
      category: { type: String, required: true },
      isFeatured: { type: Boolean, default: true },
    },
    timestampFields,
  ),
  DesignItem: new mongoose.Schema(
    {
      title: { type: String, unique: true, required: true, trim: true },
      slug: { type: String, unique: true, required: true, trim: true },
      category: { type: String, required: true },
      description: { type: String, required: true },
      isDemo: { type: Boolean, default: true },
    },
    timestampFields,
  ),
  Blog: new mongoose.Schema(
    {
      title: { type: String, unique: true, required: true, trim: true },
      slug: { type: String, unique: true, required: true, trim: true },
      topic: { type: String, required: true },
      excerpt: { type: String, required: true },
      status: { type: String, default: 'draft' },
    },
    timestampFields,
  ),
  Testimonial: new mongoose.Schema(
    {
      clientName: { type: String, required: true, trim: true },
      clientTitle: { type: String, required: true, trim: true },
      quote: { type: String, required: true },
      rating: { type: Number, min: 1, max: 5, default: 5 },
      isDemo: { type: Boolean, default: true },
      disclaimer: { type: String, default: 'Demo/sample content for development and layout previews.' },
    },
    timestampFields,
  ),
};

const models = Object.fromEntries(
  Object.entries(schemas).map(([name, schema]) => [name, mongoose.model(name, schema)]),
);

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const services = [
  'Full-Stack Web Development',
  'AI Tools & Chatbot Integration',
  'SaaS MVP Development',
  'Business Dashboards & Admin Panels',
  'Modern UI/UX & Frontend Design',
  'Graphic Design & Digital Branding',
  'Deployment & Website Improvement',
].map((title, index) => ({
  title,
  slug: slugify(title),
  description: `${title} services for modern Qubnova Technologies client projects.`,
  order: index + 1,
  isActive: true,
}));

const projects = [
  ['AI LMS Platform', 'AI / Education'],
  ['Business CRM Dashboard', 'Business Operations'],
  ['Qubnova Assistant Bot', 'AI Automation'],
  ['Invoice Generator', 'SaaS Tools'],
  ['Website Cost Estimator', 'Lead Generation'],
  ['Graphic Design Collection', 'Design Portfolio'],
].map(([title, category]) => ({
  title,
  slug: slugify(title),
  category,
  summary: `${title} is seeded as a portfolio-ready project placeholder for Qubnova Technologies.`,
  isFeatured: true,
}));

const designItems = [
  ['Perfume Product Poster', 'Product Poster'],
  ['Coffee Advertisement Poster', 'Advertisement'],
  ['Business Service Flyer', 'Flyer'],
  ['Social Media Promo Design', 'Social Media'],
  ['YouTube Thumbnail Concept', 'Thumbnail'],
  ['Digital Marketing Banner', 'Marketing Banner'],
  ['Product Launch Poster', 'Launch Creative'],
  ['Brand Identity Mockup', 'Brand Identity'],
].map(([title, category]) => ({
  title,
  slug: slugify(title),
  category,
  description: `${title} sample design item for gallery and case-study previews.`,
  isDemo: true,
}));

const blogs = [
  'How AI Tools Can Improve Small Business Workflows',
  'Why Every Modern Business Needs a Fast Portfolio Website',
  'Planning a SaaS MVP Before Writing Code',
  'What to Include in a Business CRM Dashboard',
  'How Chatbots Improve Customer Support and Lead Capture',
  'UI/UX Design Principles for High-Converting Landing Pages',
  'Digital Branding Essentials for New Businesses',
  'Deployment, Maintenance, and Website Performance Best Practices',
  'Using Cost Estimators to Qualify Website Project Leads',
  'Building Admin Panels That Teams Actually Use',
].map((title) => ({
  title,
  slug: slugify(title),
  topic: title,
  excerpt: `${title} — draft blog topic seeded from the Qubnova Technologies product requirements roadmap.`,
  status: 'draft',
}));

const testimonials = [
  {
    clientName: 'Demo Client - Ayesha Khan',
    clientTitle: 'Founder, Sample Retail Co.',
    quote:
      'Demo/sample testimonial: Qubnova translated our rough idea into a clean dashboard concept that made the workflow easier to understand.',
    rating: 5,
  },
  {
    clientName: 'Demo Client - Omar Farooq',
    clientTitle: 'Operations Manager, Example Logistics',
    quote:
      'Demo/sample testimonial: The prototype felt modern, organized, and ready for stakeholder review within a short timeline.',
    rating: 5,
  },
  {
    clientName: 'Sample Client - Sara Ali',
    clientTitle: 'Marketing Lead, Demo Launch Studio',
    quote:
      'Demo/sample testimonial: The branding and landing-page direction gave our campaign a polished starting point.',
    rating: 4,
  },
  {
    clientName: 'Sample Client - Bilal Ahmed',
    clientTitle: 'Product Owner, Placeholder SaaS',
    quote:
      'Demo/sample testimonial: The SaaS MVP plan helped us prioritize core features before investing in full development.',
    rating: 5,
  },
].map((testimonial) => ({
  ...testimonial,
  isDemo: true,
  disclaimer: 'Demo/sample content for development and layout previews.',
}));

const upsertMany = async (Model, records, uniqueField) => {
  const operations = records.map((record) => ({
    updateOne: {
      filter: { [uniqueField]: record[uniqueField] },
      update: { $set: record },
      upsert: true,
    },
  }));

  if (!operations.length) {
    return { upsertedCount: 0, modifiedCount: 0 };
  }

  return Model.bulkWrite(operations, { ordered: false });
};

const seed = async () => {
  await mongoose.connect(MONGO_URI);

  const hashedPassword = await bcrypt.hash('Admin@12345', SALT_ROUNDS);
  await models.User.updateOne(
    { email: 'admin@qubnova.com' },
    {
      $set: {
        email: 'admin@qubnova.com',
        password: hashedPassword,
        role: 'admin',
        name: 'Qubnova Admin',
      },
    },
    { upsert: true },
  );

  const results = {
    services: await upsertMany(models.Service, services, 'slug'),
    projects: await upsertMany(models.Project, projects, 'slug'),
    designItems: await upsertMany(models.DesignItem, designItems, 'slug'),
    blogs: await upsertMany(models.Blog, blogs, 'slug'),
    testimonials: await upsertMany(models.Testimonial, testimonials, 'clientName'),
  };

  console.log('Seed completed successfully.');
  console.table(
    Object.entries(results).map(([collection, result]) => ({
      collection,
      inserted: result.upsertedCount || 0,
      updated: result.modifiedCount || 0,
    })),
  );
};

seed()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.connection.close();
  });
