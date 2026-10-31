import { Link } from 'react-router-dom';
import {
  FiArrowRight,
  FiDroplet,
  FiFeather,
  FiActivity,
  FiUsers,
} from 'react-icons/fi';
import { useSources } from '../hooks/useSources';
import { SITE, sourceTypeMeta } from '../constants';

export default function HomePage() {
  const { stats } = useSources();

  return (
    <div>
      {/* Project intro */}
      <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-[21px] font-bold uppercase tracking-[0.14em] text-brand-700 ring-1 ring-inset ring-brand-200 dark:bg-brand-500/15 dark:text-brand-300 dark:ring-brand-500/30">
            {SITE.project}
          </span>
          <h2 className="mt-3 text-balance text-2xl font-bold leading-tight text-ink-900 sm:text-[2rem] dark:text-white">
            {SITE.title}
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-ink-200 shadow-soft dark:border-ink-800">
            <img
              src="/images/Praniya%20Walla.jpg"
              alt="Praniya"
              className="h-72 w-full object-cover sm:h-96"
              loading="lazy"
            />
            <div className="mt-6 overflow-hidden rounded-2xl border border-ink-200 shadow-soft dark:border-ink-800">
              <img
                src="/images/home-waterfall-2.png"
                alt="Water flowing down a forested hillside"
                className="h-72 w-full object-cover sm:h-96"
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-4 text-justify text-lg font-normal leading-relaxed text-ink-600 dark:text-ink-300">
            <p>
              The Himalayan region of Uttarakhand is a vital source of freshwater, sustaining
              mountain communities, supporting biodiversity and agriculture, and providing essential
              water resources to millions of people in downstream regions. Its rivers, springs,
              glaciers, and wetlands form an interconnected ecological and socio-economic lifeline.
              However, these fragile water systems are increasingly threatened by climate change,
              extreme weather events, declining spring discharge, changing river flows,
              deforestation, and growing water demands.
            </p>
            <p>
              To address these challenges, “Smart and Sustainable Water Resource Management for
              Himalayan Communities and Downstream Resilience in Uttarakhand” is a one-year research
              project sanctioned by the Uttarakhand State Council for Science and Technology
              (UCOST), Government of Uttarakhand. The project is being implemented at G.B. Pant
              Institute of Engineering &amp; Technology, Pauri Garhwal, Uttarakhand, under the
              leadership of Dr. Pushkar Praveen (Principal Investigator), with Dr. Agya Ram Verma
              and Dr. Papendra Kumar serving as Co-Principal Investigators.
            </p>
            <p>
              The project focuses on promoting sustainable water resource management through
              scientific assessment, geospatial technologies, nature-based solutions, and community
              participation. It aims to strengthen water security, conserve natural ecosystems,
              enhance the resilience of Himalayan communities, and promote sustainable water
              management across upstream and downstream regions.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-normal text-brand-700 hover:underline dark:text-brand-300"
            >
              Learn more about the project <FiArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Project focus */}
      <section className="border-y border-ink-200 bg-white py-16 dark:border-ink-800 dark:bg-ink-950">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[23px] font-bold uppercase tracking-[0.16em] text-brand-700 dark:text-brand-300">
              Our focus
            </p>
            <h2 className="mt-3 text-[29px] font-bold text-ink-900 sm:text-[37px] dark:text-white">
              Working Toward Smart Water Resource Management
            </h2>
            <p className="mt-2 text-sm font-bold text-ink-900 dark:text-white">
              Our project focuses on smart management, sustainability and resilience of Himalayan water resources.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FiDroplet,
                iconClass: 'bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300',
                title: 'Smart Water Resource Management',
                text: 'Exploring approaches toward smarter management of water resources in the Himalayan context.',
              },
              {
                icon: FiFeather,
                iconClass: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300',
                title: 'Sustainable Water Resources',
                text: 'Promoting a long-term perspective on the sustainable management of water resources.',
              },
              {
                icon: FiUsers,
                iconClass: 'bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300',
                title: 'Himalayan Communities',
                text: 'Recognizing the importance of sustainable water resources for communities in the Himalayan region.',
              },
              {
                icon: FiActivity,
                iconClass: 'bg-sky-50 text-sky-600 dark:bg-sky-500/15 dark:text-sky-300',
                title: 'Downstream Resilience',
                text: 'Considering the broader importance of water-resource resilience for downstream regions.',
              },
            ].map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900/60"
              >
                <span className={`grid h-10 w-10 place-items-center rounded-lg ${feature.iconClass}`}>
                  <feature.icon size={19} />
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug text-ink-900 dark:text-white">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {Object.entries(stats?.byType || {}).map(([type, count]) => {
            const meta = sourceTypeMeta(type);
            return (
              <Link
                key={type}
                to={`/sources?type=${type}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink-600 transition hover:border-brand-300 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-300"
              >
                <span className="h-2 w-2 rounded-full" style={{ background: meta.color }} />
                {meta.label}
                <span className="text-ink-400">{count}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
