export default function PageHeader({
  eyebrow,
  eyebrowClassName = '',
  title,
  description,
  descriptionClassName = '',
  contentClassName = 'max-w-2xl',
  containerClassName = 'max-w-7xl',
  paddingClassName = 'py-10',
  actions,
  children,
}) {
  return (
    <div className="border-b border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-950">
      <div className={`mx-auto ${containerClassName} px-4 ${paddingClassName} sm:px-6 lg:px-8`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className={contentClassName}>
            {eyebrow && (
              <p className={`mb-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-600 dark:text-brand-400 ${eyebrowClassName}`}>
                {eyebrow}
              </p>
            )}
            <h1 className="text-2xl font-bold text-ink-900 sm:text-3xl dark:text-white">{title}</h1>
            {description && (
              <p className={`mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400 ${descriptionClassName}`}>
                {description}
              </p>
            )}
          </div>
          {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
        </div>
        {children}
      </div>
    </div>
  );
}
