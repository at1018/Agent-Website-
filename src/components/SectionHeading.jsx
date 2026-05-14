function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-300/80 font-semibold">{eyebrow}</p>
      <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] sm:tracking-[-0.03em] text-white">{title}</h2>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8 text-slate-300">{description}</p>
    </div>
  );
}

export default SectionHeading;
