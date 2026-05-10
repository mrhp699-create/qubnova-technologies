import { useMemo, useState } from 'react';
import { generateBusinessNames } from '../../utils/aiService';

const defaultForm = {
  industry: 'fitness coaching',
  style: 'modern',
  keywords: 'energy, strength, progress',
};

export default function BusinessNameGenerator() {
  const [form, setForm] = useState(defaultForm);
  const result = useMemo(() => generateBusinessNames(form), [form]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <section className="demo-card business-name-generator">
      <header>
        <p className="eyebrow">Branding Tool</p>
        <h2>Business Name Generator</h2>
        <p>Brainstorm names with deterministic local naming patterns.</p>
      </header>

      <div className="demo-grid">
        <form className="demo-form">
          <label>
            Industry
            <input name="industry" value={form.industry} onChange={updateField} />
          </label>
          <label>
            Style
            <select name="style" value={form.style} onChange={updateField}>
              <option value="modern">Modern</option>
              <option value="luxury">Luxury</option>
              <option value="tech">Tech</option>
              <option value="playful">Playful</option>
              <option value="minimal">Minimal</option>
            </select>
          </label>
          <label>
            Keywords
            <textarea name="keywords" value={form.keywords} onChange={updateField} />
          </label>
        </form>

        <output className="demo-output">
          <h3>Name Ideas</h3>
          <div className="name-cloud">
            {result.names.map((name) => <span key={name}>{name}</span>)}
          </div>
          <h4>Naming Tips</h4>
          <ul>{result.namingTips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
        </output>
      </div>
    </section>
  );
}
