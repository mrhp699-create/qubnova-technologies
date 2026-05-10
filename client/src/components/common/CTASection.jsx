import GradientButton from './GradientButton.jsx';

export default function CTASection({ title = 'Ready to build your next unfair advantage?', description = 'Partner with Qubnova Technologies to design, build, and launch software that compounds your growth.', buttonLabel = 'Start a project', buttonTo = '/contact' }) {
  return <section className="section-spacing"><div className="container-page"><div className="overflow-hidden rounded-[2rem] bg-aurora-midnight bg-aurora-radial p-8 text-center text-white shadow-violet sm:p-12 lg:p-16"><h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">{title}</h2><p className="mx-auto mt-5 max-w-2xl text-aurora-slate">{description}</p><GradientButton to={buttonTo} className="mt-8">{buttonLabel}</GradientButton></div></div></section>;
}
