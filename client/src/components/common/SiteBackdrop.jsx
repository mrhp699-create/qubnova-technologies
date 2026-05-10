export default function SiteBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="floating-orb -left-32 top-24 h-80 w-80 bg-aurora-cyan/20 animate-float" />
      <div className="floating-orb right-[-10rem] top-52 h-[30rem] w-[30rem] bg-aurora-violet/20 animate-float-slow" />
      <div className="floating-orb bottom-[-12rem] left-1/3 h-[28rem] w-[28rem] bg-aurora-fuchsia/10 animate-float" />
      <div className="absolute inset-0 mesh-grid opacity-60 dark:opacity-30" />
      <div className="absolute inset-0 luxury-noise" />
    </div>
  );
}
