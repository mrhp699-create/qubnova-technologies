const mongoose = require('mongoose');

const designSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Design title is required.'], trim: true, maxlength: 160 },
    category: { type: String, required: [true, 'Design category is required.'], trim: true, maxlength: 120 },
    image: { type: String, required: [true, 'Design image is required.'], trim: true },
    description: { type: String, trim: true, default: '' },
    tags: [{ type: String, trim: true }],
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Design', designSchema);
