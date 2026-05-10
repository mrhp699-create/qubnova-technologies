import { useMemo, useState } from 'react';
import { estimateWebsiteCost } from '../../utils/aiService';

const defaultForm = {
  projectType: 'business website',
  pages: 5,
  chatbot: true,
  adminPanel: false,
  dashboard: false,
  graphicDesign: true,
  urgency: 'standard',
};

const money = (amount) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);

export default function WebsiteCostEstimator() {
  const [form, setForm] = useState(defaultForm);
  const estimate = useMemo(() => estimateWebsiteCost(form), [form]);

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <section className="demo-card website-cost-estimator">
      <header>
        <p className="eyebrow">Sales Tool</p>
        <h2>Website Cost Estimator</h2>
        <p>Generate transparent local estimates for common web projects.</p>
      </header>

      <div className="demo-grid">
        <form className="demo-form">
          <label>
            Project type
            <select name="projectType" value={form.projectType} onChange={updateField}>
              <option value="landing page">Landing page</option>
              <option value="portfolio">Portfolio</option>
              <option value="business website">Business website</option>
              <option value="ecommerce store">Ecommerce store</option>
              <option value="saas dashboard">SaaS dashboard</option>
              <option value="marketplace">Marketplace</option>
            </select>
          </label>
          <label>
            Pages
            <input min="1" name="pages" type="number" value={form.pages} onChange={updateField} />
          </label>
          <label>
            Urgency
            <select name="urgency" value={form.urgency} onChange={updateField}>
              <option value="flexible">Flexible</option>
              <option value="standard">Standard</option>
              <option value="rush">Rush</option>
            </select>
          </label>
          {['chatbot', 'adminPanel', 'dashboard', 'graphicDesign'].map((name) => (
            <label className="checkbox-row" key={name}>
              <input name={name} type="checkbox" checked={form[name]} onChange={updateField} />
              {name.replace(/([A-Z])/g, ' $1')}
            </label>
          ))}
        </form>

        <output className="demo-output">
          <h3>{estimate.formattedRange}</h3>
          <ul>
            {estimate.lineItems.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <strong>{money(item.amount)}</strong>
              </li>
            ))}
          </ul>
          <p>{estimate.notes[0]}</p>
        </output>
      </div>
    </section>
  );
}
