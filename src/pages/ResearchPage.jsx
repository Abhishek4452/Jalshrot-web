import PageHeader from '../components/layout/PageHeader';
import { SITE } from '../constants';

const INSTITUTIONAL_LEADERS = [
  {
    name: 'Prof. (Dr.) V. K. Banga',
    role: 'Director',
    institution: 'Govind Ballabh Pant Institute of Engineering & Technology, Pauri Garhwal',
    initials: 'VB',
    image: '/images/vk-banga.png',
  },
  {
    name: 'Dr. Mamta Baunthiyal',
    role: 'Dean Research & Development',
    institution: 'Govind Ballabh Pant Institute of Engineering & Technology, Pauri Garhwal',
    initials: 'MB',
    image: '/images/dr-mamta-baunthiyal.jpg',
  },
];

const SCIENTIFIC_LEADERS = [
  {
    name: 'Dr. Pushkar Praveen',
    role: 'Principal Investigator',
    position: 'Assistant Professor',
    department: 'Department of Electronics & Communication Engineering',
    initials: 'PP',
    image: '/images/dr-pushkar-praveen.jpg',
  },
  {
    name: 'Dr. Agya Ram Verma',
    role: 'Co-Principal Investigator',
    position: 'Assistant Professor',
    department: 'Department of Electronics & Communication Engineering',
    initials: 'AV',
    image: '/images/dr-agya-ram-verma.jpg',
  },
  {
    name: 'Dr. Papendra Kumar',
    role: 'Co-Principal Investigator',
    position: 'Assistant Professor',
    department: 'Department of Computer Science & Engineering',
    initials: 'PK',
    image: '/images/dr-papendra-kumar.jpg',
  },
];

const IMPLEMENTATION_TEAM = [
  { name: 'Abhishek Pokhriyal', initials: 'AP' },
  { name: 'Alisha Ziya Kavish', initials: 'AZ' },
  { name: 'Meet Chauhan', initials: 'MC' },
];

const institutionName = 'G.B. Pant Institute of Engineering & Technology, Uttarakhand';

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-5">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-600 dark:text-brand-400">
        {eyebrow}
      </p>
      <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-[28px]">
        {title}
      </h2>
    </div>
  );
}

function Avatar({ initials, image, alt, large = false, medium = false }) {
  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-full border-4 border-brand-50 bg-brand-100 font-display font-bold text-brand-700 dark:border-brand-500/15 dark:bg-brand-500/20 dark:text-brand-200 ${
        large ? 'h-24 w-24 text-2xl' : medium ? 'h-[84px] w-[84px] text-xl' : 'h-14 w-14 text-base'
      }`}
    >
      {image ? (
        <img src={image} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </span>
  );
}

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research team"
        title="People Behind the Project"
        description={`An interdisciplinary faculty and student research team from ${SITE.institution}.`}
        contentClassName="max-w-none"
        containerClassName="max-w-[1440px]"
        descriptionClassName="text-[19px] lg:whitespace-nowrap"
      />

      <div className="mx-auto max-w-[1440px] space-y-20 px-4 py-12 sm:px-6 lg:px-8">
        <section>
          <SectionHeading eyebrow="Institutional governance" title="Institute Leadership" />
          <div className="grid gap-4 lg:grid-cols-2">
            {INSTITUTIONAL_LEADERS.map((person) => (
              <article
                key={person.name}
                className="flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-5 shadow-sm dark:border-ink-800 dark:bg-ink-900 sm:p-6"
              >
                <Avatar initials={person.initials} image={person.image} alt={person.name} medium />
                <div className="min-w-0">
                  <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
                    {person.role}
                  </span>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-ink-900 dark:text-white">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {person.institution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Scientific leadership"
            title="Principal Investigators & Project Leadership"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SCIENTIFIC_LEADERS.map((person) => (
              <article
                key={person.name}
                className="flex min-h-80 flex-col items-center rounded-2xl border border-ink-200 bg-white px-6 py-6 text-center shadow-sm dark:border-ink-800 dark:bg-ink-900"
              >
                <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
                  {person.role}
                </span>
                <Avatar initials={person.initials} image={person.image} alt={person.name} large />
                <h3 className="mt-3 text-base font-bold text-ink-900 dark:text-white">
                  {person.name}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-brand-600 dark:text-brand-300">
                  {person.position}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink-600 dark:text-ink-300">
                  {person.department}
                </p>
                <div className="mt-auto w-full border-t border-ink-100 pt-4 dark:border-ink-800">
                  <p className="text-[11px] leading-relaxed text-ink-400">{institutionName}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Technical & field execution" title="Project Implementation Team" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {IMPLEMENTATION_TEAM.map((person) => (
              <article
                key={person.name}
                className="flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-5 shadow-sm dark:border-ink-800 dark:bg-ink-900"
              >
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-brand-200 bg-brand-50 font-display text-lg font-bold text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
                  {person.initials}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-ink-900 dark:text-white">{person.name}</h3>
                  <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">
                    Project Research &amp; Implementation
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-ink-400">{institutionName}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
