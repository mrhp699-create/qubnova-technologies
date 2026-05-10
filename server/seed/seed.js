const dotenv = require('dotenv');
const connectDB = require('../config/db');
const User = require('../models/User');
const Project = require('../models/Project');
const Design = require('../models/Design');
const Service = require('../models/Service');
const Message = require('../models/Message');
const Blog = require('../models/Blog');
const Testimonial = require('../models/Testimonial');
const slugify = require('../utils/slugify');

dotenv.config();

const placeholder = (label) => `https://placehold.co/1200x800/0B1020/00D4FF?text=${encodeURIComponent(label)}`;

const services = [
  {
    title: 'Full-Stack Web Development',
    category: 'Development',
    icon: 'Code2',
    description: 'Complete MERN applications with polished frontend, secure backend, MongoDB data models, authentication, dashboards, and deployment-ready APIs.',
    features: ['MERN stack applications', 'Business websites', 'Admin dashboards', 'CRUD applications', 'Database-connected apps', 'User authentication', 'Portfolio websites', 'SaaS MVPs', 'Landing pages', 'Responsive web apps'],
  },
  {
    title: 'AI Tools & Chatbot Integration',
    category: 'AI Automation',
    icon: 'Bot',
    description: 'AI-ready chatbot interfaces, automation utilities, and smart demo tools that can run in mock mode first and connect to OpenAI, Gemini, or client API keys later.',
    features: ['Website chatbot', 'Business assistant chatbot', 'AI content generator', 'AI caption generator', 'FAQ chatbot', 'Dashboard AI assistant', 'Gemini/OpenAI-ready integration', 'Client API key integration', 'Demo/mock AI mode'],
  },
  {
    title: 'SaaS MVP Development',
    category: 'SaaS',
    icon: 'Rocket',
    description: 'Startup-style SaaS MVPs with landing pages, authentication, role-based dashboards, admin systems, analytics, and payment-ready structure.',
    features: ['SaaS landing page', 'User dashboard', 'Admin dashboard', 'Subscription-ready structure', 'Role-based access', 'Payment-ready architecture', 'Analytics dashboard', 'Client management tools'],
  },
  {
    title: 'Business Dashboards & Admin Panels',
    category: 'Dashboards',
    icon: 'LayoutDashboard',
    description: 'Clean data dashboards for managing users, customers, projects, invoices, reports, and operational workflows.',
    features: ['Admin panels', 'Analytics dashboards', 'CRM dashboards', 'Inventory dashboards', 'Student dashboards', 'Task dashboards', 'Invoice dashboards', 'Report management systems'],
  },
  {
    title: 'Modern UI/UX & Frontend Design',
    category: 'Design',
    icon: 'Palette',
    description: 'Responsive, high-end interfaces for landing pages, SaaS products, dashboards, and mobile-friendly web apps.',
    features: ['Landing page UI', 'Dashboard UI', 'Responsive layouts', 'Dark/light mode', 'Animated interfaces', 'Component-based design', 'Modern web redesign'],
  },
  {
    title: 'Graphic Design & Digital Branding',
    category: 'Creative',
    icon: 'Gem',
    description: 'Digital marketing creatives and brand visuals for product launches, social media, business services, and promotional campaigns.',
    features: ['Business posters', 'Flyers', 'Social media posts', 'Product ads', 'YouTube thumbnails', 'Promotional banners', 'Instagram creatives', 'Brand identity visuals'],
  },
  {
    title: 'Deployment & Website Improvement',
    category: 'Deployment',
    icon: 'Cloud',
    description: 'Launch support for Vercel, Render, MongoDB Atlas, environment variables, GitHub setup, UI fixes, responsive improvements, and API connection issues.',
    features: ['Vercel deployment', 'Render deployment', 'MongoDB Atlas setup', 'Environment variables setup', 'Bug fixing', 'API connection fixes', 'UI improvement', 'Responsive fixes', 'GitHub setup'],
  },
];

const projects = [
  {
    title: 'AI LMS Platform',
    category: 'Full-Stack / AI',
    description: 'A MERN-based learning platform that recommends courses based on student interests and provides dashboards for students and admins.',
    overview: 'The AI LMS Platform is a portfolio project showing how Qubnova can combine authentication, dashboard UI, course data, and AI-ready recommendation workflows.',
    problem: 'Students often struggle to choose learning paths, while admins need a simple way to manage courses and monitor usage.',
    solution: 'The platform collects interests, recommends relevant courses, and provides separate student and admin experiences.',
    features: ['User login', 'Interest selection', 'Course recommendations', 'Course dashboard', 'Admin panel', 'Course management'],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    image: placeholder('AI LMS Platform'),
    screenshots: [placeholder('LMS Dashboard'), placeholder('Course Recommendations')],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Portfolio Demo',
    featured: true,
  },
  {
    title: 'Business CRM Dashboard',
    category: 'Dashboard / MERN',
    description: 'A clean CRM dashboard for managing leads, customers, tasks, notes, and analytics.',
    overview: 'A business-focused dashboard concept for organizing sales and customer operations in one MERN interface.',
    problem: 'Small teams often manage leads in scattered notes, spreadsheets, and messages.',
    solution: 'Centralized CRM cards, lead tracking, task management, notes, and analytics make the sales workflow clearer.',
    features: ['Customer management', 'Lead tracking', 'Task management', 'Analytics cards', 'Notes', 'Admin panel'],
    techStack: ['React', 'Recharts', 'Express.js', 'MongoDB', 'JWT'],
    image: placeholder('Business CRM Dashboard'),
    screenshots: [placeholder('CRM Analytics'), placeholder('Lead Pipeline')],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Portfolio Demo',
    featured: true,
  },
  {
    title: 'Qubnova Assistant Bot',
    category: 'AI Tool',
    description: 'A website chatbot demo that answers questions about Qubnova services, projects, pricing, founder, and contact options.',
    overview: 'A local mock AI assistant that gives the website an interactive product feel without requiring paid API keys.',
    problem: 'Visitors need quick answers about services, pricing, portfolio, and contact options.',
    solution: 'Rule-based responses and quick replies guide users around the Qubnova website and service offers.',
    features: ['Chatbot UI', 'Quick reply buttons', 'Service-based answers', 'FAQ support', 'API-ready structure', 'Demo AI mode'],
    techStack: ['React', 'Framer Motion', 'Local AI Logic', 'Provider-ready Architecture'],
    image: placeholder('Qubnova Assistant Bot'),
    screenshots: [placeholder('Chatbot Window')],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Working Demo',
    featured: true,
  },
  {
    title: 'Invoice Generator',
    category: 'Business Tool',
    description: 'A simple business invoice generator with client details, service information, pricing, invoice preview, and PDF export.',
    overview: 'A utility demo for turning simple service details into a professional invoice preview.',
    problem: 'Freelancers and small teams need fast invoice creation without complex accounting tools.',
    solution: 'Form inputs, calculations, preview layout, and export-ready structure create a quick business workflow.',
    features: ['Client info form', 'Service details', 'Price calculation', 'Invoice preview', 'PDF download'],
    techStack: ['React', 'JavaScript', 'jsPDF-ready UI'],
    image: placeholder('Invoice Generator'),
    screenshots: [placeholder('Invoice Preview')],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Working Demo',
    featured: true,
  },
  {
    title: 'Website Cost Estimator',
    category: 'Business Tool',
    description: 'A smart estimator that helps clients estimate website or web app cost based on selected features.',
    overview: 'A lead-generation tool that helps clients understand scope, budget range, package fit, and delivery timeline.',
    problem: 'Many clients are unsure how project features affect cost and delivery planning.',
    solution: 'Feature-based estimation creates transparent budget ranges and a recommended package.',
    features: ['Project type selection', 'Page count', 'Chatbot option', 'Dashboard option', 'Admin panel option', 'Estimated price range'],
    techStack: ['React', 'Local Estimation Logic', 'Tailwind CSS'],
    image: placeholder('Website Cost Estimator'),
    screenshots: [placeholder('Estimator Results')],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Working Demo',
    featured: true,
  },
  {
    title: 'Graphic Design Collection',
    category: 'Design',
    description: 'A collection of creative digital designs including posters, flyers, product ads, social media creatives, and thumbnails.',
    overview: 'A gallery-style showcase for Qubnova Studio creative services and design categories.',
    problem: 'Clients need to see both technical and creative capabilities before starting a project.',
    solution: 'Filtered design categories and preview cards demonstrate visual communication skills.',
    features: ['Design gallery', 'Category filters', 'Image preview', 'Design descriptions'],
    techStack: ['React', 'Tailwind CSS', 'UI/UX', 'Brand Design'],
    image: placeholder('Graphic Design Collection'),
    screenshots: [placeholder('Design Gallery')],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Portfolio Gallery',
    featured: true,
  },
];

const designs = [
  ['Perfume Product Poster', 'Posters', 'A premium fragrance campaign poster for social media and launch promotions.'],
  ['Coffee Advertisement Poster', 'Posters', 'A warm product advertisement creative for a cafe or beverage brand.'],
  ['Business Service Flyer', 'Flyers', 'A clean flyer layout explaining service packages and contact details.'],
  ['Social Media Promo Design', 'Social Media Posts', 'A high-contrast promo design for online campaign announcements.'],
  ['YouTube Thumbnail Concept', 'YouTube Thumbnails', 'A bold thumbnail concept focused on attention and topic clarity.'],
  ['Digital Marketing Banner', 'Business Banners', 'A campaign banner for digital marketing or agency services.'],
  ['Product Launch Poster', 'Product Ads', 'A launch creative with strong hierarchy, CTA, and product focus.'],
  ['Brand Identity Mockup', 'Brand Designs', 'A brand mockup concept for presenting logo, colors, and visual identity.'],
].map(([title, category, description]) => ({
  title,
  category,
  image: placeholder(title),
  toolsUsed: ['Canva', 'Photoshop', 'Figma'],
  purpose: `${category} showcase`,
  description,
}));

const blogs = [
  ['How AI Chatbots Help Small Businesses', 'AI', 'AI chatbots help small businesses answer questions, qualify leads, and support visitors faster.'],
  ['Why Every Business Needs a Modern Website', 'Web Development', 'A modern website builds trust, explains services clearly, and gives customers a direct path to contact you.'],
  ['What Is a SaaS MVP?', 'SaaS', 'A SaaS MVP is the smallest useful version of a software product that validates the idea with real users.'],
  ['How Dashboards Help Business Owners', 'Dashboards', 'Dashboards turn scattered business data into clear actions, reports, and daily decisions.'],
  ['MERN Stack Explained Simply', 'MERN', 'MERN combines MongoDB, Express, React, and Node.js to build complete JavaScript web applications.'],
  ['How AI Tools Can Save Time', 'AI', 'AI-ready tools can automate repetitive writing, planning, estimation, and customer support tasks.'],
  ['Why UI/UX Matters for Online Business', 'UI/UX', 'Strong UI/UX helps visitors understand your offer, trust your brand, and take action with less friction.'],
  ['How to Move a Localhost App to Live Deployment', 'Deployment', 'Deploying a MERN app requires frontend hosting, backend hosting, environment variables, and a cloud database.'],
].map(([title, category, excerpt]) => ({
  title,
  slug: slugify(title),
  category,
  excerpt,
  content: `${excerpt}\n\nThis Qubnova Technologies insight is written for clients, students, and small teams who want practical digital solutions without unnecessary complexity. The goal is to explain the idea clearly, show where it helps a business, and connect it to modern MERN, AI-ready, dashboard, or design workflows.`,
  image: placeholder(title),
  author: 'Moaz Saeed',
  readTime: '4 min read',
}));

const testimonials = [
  {
    clientName: 'Demo Client - Ayesha Khan',
    role: 'Founder',
    company: 'Sample Retail Co.',
    message: 'Demo/sample testimonial: Qubnova translated a rough idea into a clean dashboard concept that made the workflow easier to understand.',
    rating: 5,
    image: placeholder('Ayesha Khan'),
  },
  {
    clientName: 'Demo Client - Omar Farooq',
    role: 'Operations Manager',
    company: 'Example Logistics',
    message: 'Demo/sample testimonial: The AI-ready assistant concept showed how customer questions could be answered faster without overcomplicating the website.',
    rating: 5,
    image: placeholder('Omar Farooq'),
  },
  {
    clientName: 'Demo Client - Sara Malik',
    role: 'Marketing Lead',
    company: 'Demo Studio',
    message: 'Demo/sample testimonial: The design direction felt modern, premium, and practical for a small business that needs both branding and web presence.',
    rating: 5,
    image: placeholder('Sara Malik'),
  },
];

const seed = async () => {
  await connectDB();

  await Promise.all([
    User.deleteMany({}),
    Service.deleteMany({}),
    Project.deleteMany({}),
    Design.deleteMany({}),
    Message.deleteMany({}),
    Blog.deleteMany({}),
    Testimonial.deleteMany({}),
  ]);

  await User.create({
    name: process.env.ADMIN_NAME || 'Qubnova Admin',
    email: process.env.ADMIN_EMAIL || 'admin@qubnova.com',
    password: process.env.ADMIN_PASSWORD || 'ChangeMe123!',
    role: 'admin',
  });

  await Service.insertMany(services);
  await Project.insertMany(projects);
  await Design.insertMany(designs);
  await Blog.insertMany(blogs);
  await Testimonial.insertMany(testimonials);

  console.log('Qubnova seed complete.');
  console.log(`Admin email: ${process.env.ADMIN_EMAIL || 'admin@qubnova.com'}`);
  console.log(`Admin password: ${process.env.ADMIN_PASSWORD || 'ChangeMe123!'}`);
  await mongooseDisconnect();
};

const mongooseDisconnect = async () => {
  const mongoose = require('mongoose');
  await mongoose.connection.close();
};

seed().catch(async (error) => {
  console.error('Seed failed:', error);
  await mongooseDisconnect();
  process.exit(1);
});
