import { useMemo, useState } from 'react';
import { generateClientBrief } from '../../utils/aiService';

const defaultForm = {
  projectType: 'ecommerce website',
  mainGoal: 'increase product sales and automate customer inquiries',
  requiredFeatures: 'product catalog, checkout, chatbot, admin panel',
  designPreference: 'premium, clean, mobile-first, with bold product visuals',
  budget: '$3,000 - $5,000',
  deadline: '6 weeks',
};

export default function ClientBriefGenerator() {
  const [form, setForm] = useState(defaultForm);
  const brief = useMemo(() => generateClientBrief(form), [form]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <section className="demo-card client-brief-generator">
      <header>
        <p className="eyebrow">Discovery Tool</p>
        <h2>Client Brief Generator</h2>
        <p>Turn discovery inputs into a structured project brief.</p>
      </header>

      <div className="demo-grid">
        <form className="demo-form">
          <label>
            Project type
            <input name="projectType" value={form.projectType} onChange={updateField} />
          </label>
          <label>
            Main goal
            <textarea name="mainGoal" value={form.mainGoal} onChange={updateField} />
          </label>
          <label>
            Required features
            <textarea name="requiredFeatures" value={form.requiredFeatures} onChange={updateField} />
          </label>
          <label>
            Design preference
            <textarea name="designPreference" value={form.designPreference} onChange={updateField} />
          </label>
          <label>
            Budget
            <input name="budget" value={form.budget} onChange={updateField} />
          </label>
          <label>
            Deadline
            <input name="deadline" value={form.deadline} onChange={updateField} />
          </label>
        </form>

        <output className="demo-output">
          <h3>{brief.title}</h3>
          <p>{brief.overview}</p>
          <h4>Scope</h4>
          <ul>{brief.scope.map((item) => <li key={item}>{item}</li>)}</ul>
          <h4>Design Direction</h4>
          <p>{brief.designDirection}</p>
          <h4>Next Steps</h4>
          <ol>{brief.recommendedNextSteps.map((item) => <li key={item}>{item}</li>)}</ol>
        </output>
      </div>
    </section>
  );
}
