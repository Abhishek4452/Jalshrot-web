import {
  FiActivity,
  FiAlertTriangle,
  FiArrowRight,
  FiCompass,
  FiDroplet,
  FiGlobe,
  FiMapPin,
  FiShield,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import { SITE } from '../constants';

const PILLARS = [
  {
    icon: FiAlertTriangle,
    tag: 'Local Water Security',
    title: 'Himalayan Communities',
    text: 'Water is essential for drinking, agriculture, livestock, and everyday livelihoods in Himalayan communities. Understanding their water-resource needs and challenges is important for developing sustainable management approaches and strengthening community resilience.',
  },
  {
    icon: FiDroplet,
    tag: 'Basin Hydrology',
    title: 'Downstream Resilience',
    text: 'Himalayan rivers and watersheds play an important role in supporting downstream water resources. Sustainable management of these upstream resources is essential for maintaining ecological balance and contributing to downstream water security.',
  },
  {
    icon: FiActivity,
    tag: 'Smart & Sustainable Science',
    title: 'Smart and Sustainable Management',
    text: 'Exploring innovative methods, scientific knowledge, technological solutions, and efficient planning can support better management and sustainable utilisation of water resources for present and future needs.',
  },
];

const OBJECTIVES = [
  {
    title: 'Identification of Natural Water Sources',
    text: 'To identify and explore natural water sources, particularly springs in the Himalayan region, and investigate suitable approaches for their sustainable management, conservation, and utilisation.',
  },
  {
    title: 'Smart Approaches for Improved Water Resource Management',
    text: 'To explore innovative, efficient, and practical approaches for the sustainable management, conservation, and utilisation of water resources by integrating scientific knowledge, technological advancements, and improved planning.',
  },
  {
    title: 'Water-Resource Needs and Resilience of Himalayan Communities',
    text: 'To understand the water-resource requirements and challenges of Himalayan communities and explore approaches that strengthen their ability to cope with water-related uncertainties and changing environmental conditions.',
  },
];

const STAGES = [
  {
    icon: FiCompass,
    stage: 'Stage 01',
    title: 'Field Survey & GPS Tagging',
    text: 'Research teams traverse remote watersheds, mapping precise GPS coordinates, photographic proof, catchment geography, and seasonal flow behavior.',
  },
  {
    icon: FiDroplet,
    stage: 'Stage 02',
    title: 'Water Sample Testing',
    text: 'Water samples collected from different natural springs are subjected to laboratory analysis to measure various physico-chemical water quality parameters and assess their quality.',
  },
  {
    icon: FiActivity,
    stage: 'Stage 03',
    title: 'Smart Approaches for Water Sources',
    text: 'Explore innovative, efficient, and practical approaches for the sustainable management, conservation, and utilisation of water resources, incorporating scientific knowledge, technological advancements, and improved planning.',
  },
  {
    icon: FiShield,
    stage: 'Stage 04',
    title: 'Strengthening Himalayan Water Security & Community Resilience',
    text: 'To understand the water-resource requirements and challenges of Himalayan communities and consider approaches that strengthen their capacity to cope with water-related uncertainties and changing environmental conditions.',
  },
];

const PARTNERS = [
  {
    icon: FiGlobe,
    label: 'Executing Institution',
    name: 'G.B. Pant Institute of Engineering & Technology',
    location: 'Ghurdauri, Pauri Garhwal, Uttarakhand — 246194',
    description:
      'An autonomous institute of the Government of Uttarakhand, leading applied research in water resources, environmental sensing, and digital geospatial systems.',
    link: true,
  },
  {
    icon: FiShield,
    label: 'Sponsoring Department',
    name: 'Uttarakhand State Council for Science & Technology (UCOST)',
    location: 'Department of Science & Technology, Government of Uttarakhand',
    description:
      'Providing financial and strategic research sanction to investigate sustainable water management frameworks for Himalayan communities and downstream resilience.',
    link: false,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={SITE.title}
        contentClassName="max-w-none text-center"
        paddingClassName="py-3"
        containerClassName="max-w-[1440px]"
      >
        <p className="mt-2 text-center text-[17px] font-bold uppercase tracking-[0.14em] text-brand-600 dark:text-brand-400">
          ( {SITE.project} )
        </p>
      </PageHeader>

      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-[23px] font-bold text-ink-900 dark:text-white">
              About The Project
            </h2>
            <div className="mt-4 max-w-prose space-y-5 text-justify text-[19px] font-normal leading-8 tracking-[0.01em] text-ink-600 dark:text-ink-300">
              <p>
                Water is the foundation of life, livelihoods, and ecological sustainability in the
                Himalayan region. The rivers, springs, glaciers, and watersheds of Uttarakhand sustain
                mountain communities, support rich biodiversity, and contribute to the water security
                of millions of people in downstream regions. Sustainable management of these
                interconnected water resources is therefore essential for strengthening the resilience
                of both Himalayan and downstream communities.
              </p>
              <p>
                The “Smart and Sustainable Water Resource Management for Himalayan Communities and
                Downstream Resilience in Uttarakhand” is a one-year research project sanctioned by the
                Uttarakhand State Council for Science and Technology (UCOST), Government of
                Uttarakhand.
              </p>
              <p>
                The project is being implemented at G.B. Pant Institute of Engineering &amp;
                Technology, Pauri Garhwal, Uttarakhand. It focuses on exploring smart, innovative, and
                sustainable approaches to water resource management, with particular emphasis on
                identifying natural water sources, addressing the water-resource needs of Himalayan
                communities, and strengthening downstream resilience.
              </p>
              <p>
                The project is led by Dr. Pushkar Praveen (Principal Investigator), with Dr. Agya Ram
                Verma and Dr. Papendra Kumar serving as Co-Principal Investigators. Through an
                interdisciplinary research approach, the project aims to contribute to improved water
                resource management, sustainable utilisation of natural water resources, and long-term
                resilience across the Himalayan region.
              </p>
            </div>
          </div>

          <div className="flex items-start justify-center">
            <img
              src="/images/about-water-source.png"
              alt="Water flowing from a spring in a forested hillside"
              className="h-auto max-h-[530px] max-w-full rounded-2xl border border-ink-200 object-contain shadow-soft dark:border-ink-800"
              loading="lazy"
            />
          </div>
        </div>

        <section className="mt-20">
          <h2 className="mt-1.5 text-[29px] font-bold text-ink-900 dark:text-white">Why This Project Matters</h2>
          <p className="mt-2 whitespace-nowrap text-[17px] leading-relaxed text-ink-500 dark:text-ink-400">
            The project title embodies three interconnected spheres of ecological, community, and downstream resilience.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar, index) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm dark:border-ink-800 dark:bg-ink-900 sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-xl ${
                      ['bg-amber-100 text-amber-700', 'bg-sky-100 text-sky-700', 'bg-emerald-100 text-emerald-700'][index]
                    }`}
                  >
                    <pillar.icon size={18} />
                  </span>
                  <span className="rounded-full bg-ink-100 px-2.5 py-1 text-[10px] font-semibold text-ink-600 dark:bg-ink-800 dark:text-ink-300">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-bold text-ink-900 dark:text-white">{pillar.title}</h3>
                <p className="mt-2 text-justify text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-600 dark:text-brand-400">
            Research goals
          </p>
          <h2 className="mt-1.5 text-2xl font-bold text-ink-900 dark:text-white">Project Objectives</h2>
          <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
            Key milestones guiding field surveys, water testing, and the open public registry.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {OBJECTIVES.map((objective, index) => (
              <article
                key={objective.title}
                className="flex gap-4 rounded-2xl border border-ink-200 bg-white p-5 shadow-sm dark:border-ink-800 dark:bg-ink-900 sm:p-6"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-brand-200 bg-brand-50 text-sm font-bold text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink-900 dark:text-white">{objective.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {objective.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-2xl border border-ink-200 bg-white p-6 shadow-soft dark:border-ink-800 dark:bg-ink-900 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-600 dark:text-brand-400">
            Standardized methodology
          </p>
          <h2 className="mt-1.5 text-2xl font-bold text-ink-900 dark:text-white">
            How Every Water Source Is Documented
          </h2>
          <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
            A four-stage process documenting water sources, assessing quality, and supporting sustainable water management.
          </p>
          <div className="mt-6 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
            {STAGES.map((stage) => (
              <article
                key={stage.stage}
                className="h-full rounded-2xl border border-ink-200 bg-ink-50/60 p-4 shadow-sm dark:border-ink-800 dark:bg-ink-950/50 sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-brand-600 dark:text-brand-400">
                    {stage.stage}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                    <stage.icon size={19} />
                  </span>
                </div>
                <h3 className="mt-0.5 text-lg font-bold text-ink-900 dark:text-white">{stage.title}</h3>
                <p className="mt-3 text-justify text-[15px] leading-7 text-ink-500 dark:text-ink-400">{stage.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-5 lg:grid-cols-2">
          {PARTNERS.map((partner) => (
            <article
              key={partner.label}
              className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm dark:border-ink-800 dark:bg-ink-900 sm:p-6"
            >
              <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-50 px-2.5 py-1 text-[11px] font-bold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                <partner.icon size={13} /> {partner.label}
              </span>
              <h3 className="mt-4 text-base font-bold text-ink-900 dark:text-white">{partner.name}</h3>
              <p className="mt-1 text-xs text-ink-400">{partner.location}</p>
              <p className="mt-3 text-justify text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {partner.description}
              </p>
              <div className="mt-5 border-t border-ink-100 pt-4 dark:border-ink-800">
                {partner.link ? (
                  <Link
                    to="/research"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:underline dark:text-brand-300"
                  >
                    Meet the Research Team &amp; Investigators <FiArrowRight size={13} />
                  </Link>
                ) : (
                  <span className="text-xs text-ink-400">
                    <FiMapPin className="mr-1 inline" size={12} />
                    Official sanctioned grant · Department of Science &amp; Technology
                  </span>
                )}
              </div>
            </article>
          ))}
        </section>

        <p className="mt-12 text-center font-display text-[25px] font-extrabold leading-relaxed text-ink-900 dark:text-white">
          “Our vision is to support a future where Himalayan water resources are sustainably managed,
          <br />
          mountain communities are resilient, and downstream water security is strengthened”
        </p>

      </div>
    </>
  );
}
