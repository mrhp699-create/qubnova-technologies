const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Project title is required.'], trim: true, maxlength: 160 },
    slug: { type: String, required: [true, 'Project slug is required.'], unique: true, lowercase: true, trim: true },
    excerpt: { type: String, required: [true, 'Project excerpt is required.'], trim: true, maxlength: 300 },
    description: { type: String, required: [true, 'Project description is required.'], trim: true },
    image: { type: String, trim: true, default: '' },
    gallery: [{ type: String, trim: true }],
    tags: [{ type: String, trim: true }],
    techStack: [{ type: String, trim: true }],
    liveUrl: { type: String, trim: true, default: '' },
    repoUrl: { type: String, trim: true, default: '' },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
