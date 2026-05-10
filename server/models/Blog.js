const mongoose = require('mongoose');
const slugify = require('../utils/slugify');

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, trim: true },
    category: { type: String, required: true, trim: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    image: { type: String, default: '' },
    author: { type: String, default: 'Moaz Saeed' },
    readTime: { type: String, default: '4 min read' },
  },
  { timestamps: true },
);

blogSchema.pre('validate', function setSlug(next) {
  if (!this.slug && this.title) this.slug = slugify(this.title);
  next();
});

module.exports = mongoose.model('Blog', blogSchema);
