const mongoose = require('mongoose');
const slugify = require('../utils/slugify');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    overview: { type: String, default: '' },
    problem: { type: String, default: '' },
    solution: { type: String, default: '' },
    features: [{ type: String, trim: true }],
    techStack: [{ type: String, trim: true }],
    image: { type: String, default: '' },
    screenshots: [{ type: String, trim: true }],
    liveUrl: { type: String, default: '' },
    githubUrl: { type: String, default: '' },
    status: { type: String, default: 'Portfolio Demo' },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true },
);

projectSchema.pre('validate', function setSlug(next) {
  if (!this.slug && this.title) this.slug = slugify(this.title);
  next();
});

module.exports = mongoose.model('Project', projectSchema);
