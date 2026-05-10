import { useMemo, useState } from 'react';
import { generateCaption } from '../../utils/aiService';

const defaultForm = {
  productName: 'Qubnova Web Sprint',
  businessType: 'software studio',
  tone: 'professional',
  platform: 'instagram',
};

export default function CaptionGenerator() {
  const [form, setForm] = useState(defaultForm);
  const caption = useMemo(() => generateCaption(form), [form]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <section className="demo-card caption-generator">
      <header>
        <p className="eyebrow">Content Tool</p>
        <h2>Caption Generator</h2>
        <p>Create social captions with local, rule-based templates.</p>
      </header>

      <div className="demo-grid">
        <form className="demo-form">
          <label>
            Product or service
            <input name="productName" value={form.productName} onChange={updateField} />
          </label>
          <label>
            Business type
            <input name="businessType" value={form.businessType} onChange={updateField} />
          </label>
          <label>
            Tone
            <select name="tone" value={form.tone} onChange={updateField}>
              <option value="friendly">Friendly</option>
              <option value="professional">Professional</option>
              <option value="luxury">Luxury</option>
              <option value="playful">Playful</option>
              <option value="bold">Bold</option>
            </select>
          </label>
          <label>
            Platform
            <select name="platform" value={form.platform} onChange={updateField}>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="linkedin">LinkedIn</option>
              <option value="tiktok">TikTok</option>
              <option value="x">X</option>
            </select>
          </label>
        </form>

        <output className="demo-output">
          <pre>{caption}</pre>
        </output>
      </div>
    </section>
  );
}
