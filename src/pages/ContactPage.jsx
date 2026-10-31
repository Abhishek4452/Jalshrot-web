import { useState } from 'react';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import PageHeader from '../components/layout/PageHeader';
import Button from '../components/ui/Button';
import { Field, Input, Textarea } from '../components/ui/Field';
import { useToast } from '../context/ToastContext';
import { SITE } from '../constants';

const CONTACT_CARDS = [
  {
    icon: FiMail,
    title: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: FiMapPin,
    title: 'Institution',
    value: SITE.institution,
    href: 'https://www.openstreetmap.org/',
  },
];

export default function ContactPage() {
  const toast = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${SITE.email}?body=${encodeURIComponent(body)}`;
    toast.success('Opening your email app with the message ready to send.');
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        eyebrowClassName="text-[32px]"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr]">
          <div className="space-y-4">
            {CONTACT_CARDS.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="flex items-start gap-4 rounded-xl border border-ink-200 bg-white p-5 transition hover:border-brand-300 dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-500/40"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                  <card.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-400">{card.title}</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-ink-800 dark:text-ink-100">
                    {card.value}
                  </p>
                </div>
              </a>
            ))}

          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-ink-200 bg-white p-5 sm:p-6 dark:border-ink-800 dark:bg-ink-900"
          >
            <h2 className="text-lg font-semibold text-ink-900 dark:text-white">Have a query?</h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Field label="Your name" required htmlFor="contact-name">
                <Input
                  id="contact-name"
                  required
                  value={form.name}
                  onChange={(event) => update('name', event.target.value)}
                  placeholder="Full name"
                />
              </Field>
              <Field label="Email" required htmlFor="contact-email">
                <Input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => update('email', event.target.value)}
                  placeholder="you@example.com"
                />
              </Field>
            </div>

            <Field label="Message" className="mt-3" required htmlFor="contact-message">
              <Textarea
                id="contact-message"
                rows={6}
                required
                value={form.message}
                onChange={(event) => update('message', event.target.value)}
                placeholder="Tell us about the source, question or collaboration…"
              />
            </Field>

            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-xs text-ink-400">Messages open in your email app.</p>
              <Button type="submit" icon={<FiSend size={14} />}>
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
