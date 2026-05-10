const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Blog title is required.'], trim: true, maxlength: 180 },
    slug: { type: String, required: [true, 'Blog slug is required.'], unique: true, lowercase: true, trim: true },
    excerpt: { type: String, required: [true, 'Blog excerpt is required.'], trim: true, maxlength: 320 },
    content: { type: String, required: [true, 'Blog content is required.'], trim: true },
    coverImage: { type: String, trim: true, default: '' },
    author: { type: String, trim: true, default: 'Qubnova Technologies' },
    tags: [{ type: String, trim: true }],
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
