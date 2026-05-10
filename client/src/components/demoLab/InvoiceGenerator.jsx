import { useMemo, useState } from 'react';

const defaultInvoice = {
  clientName: 'Acme Retail',
  projectName: 'Landing Page Build',
  hourlyRate: 65,
  hours: 24,
  fixedFee: 450,
  taxRate: 5,
};

const money = (amount) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(amount);

export default function InvoiceGenerator() {
  const [invoice, setInvoice] = useState(defaultInvoice);
  const totals = useMemo(() => {
    const labor = Number(invoice.hourlyRate || 0) * Number(invoice.hours || 0);
    const subtotal = labor + Number(invoice.fixedFee || 0);
    const tax = subtotal * (Number(invoice.taxRate || 0) / 100);
    return { labor, subtotal, tax, total: subtotal + tax };
  }, [invoice]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setInvoice((current) => ({ ...current, [name]: value }));
  };

  return (
    <section className="demo-card invoice-generator">
      <header>
        <p className="eyebrow">Operations Tool</p>
        <h2>Invoice Generator</h2>
        <p>Preview a simple project invoice locally with no external billing API.</p>
      </header>

      <div className="demo-grid">
        <form className="demo-form">
          <label>
            Client name
            <input name="clientName" value={invoice.clientName} onChange={updateField} />
          </label>
          <label>
            Project name
            <input name="projectName" value={invoice.projectName} onChange={updateField} />
          </label>
          <label>
            Hourly rate
            <input min="0" name="hourlyRate" type="number" value={invoice.hourlyRate} onChange={updateField} />
          </label>
          <label>
            Hours
            <input min="0" name="hours" type="number" value={invoice.hours} onChange={updateField} />
          </label>
          <label>
            Fixed fee
            <input min="0" name="fixedFee" type="number" value={invoice.fixedFee} onChange={updateField} />
          </label>
          <label>
            Tax rate (%)
            <input min="0" name="taxRate" type="number" value={invoice.taxRate} onChange={updateField} />
          </label>
        </form>

        <output className="demo-output invoice-preview">
          <h3>Invoice Preview</h3>
          <p><strong>Client:</strong> {invoice.clientName}</p>
          <p><strong>Project:</strong> {invoice.projectName}</p>
          <ul>
            <li><span>Labor</span><strong>{money(totals.labor)}</strong></li>
            <li><span>Fixed fee</span><strong>{money(Number(invoice.fixedFee || 0))}</strong></li>
            <li><span>Subtotal</span><strong>{money(totals.subtotal)}</strong></li>
            <li><span>Tax</span><strong>{money(totals.tax)}</strong></li>
          </ul>
          <h4>Total due: {money(totals.total)}</h4>
        </output>
      </div>
    </section>
  );
}
