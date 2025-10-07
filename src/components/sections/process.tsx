import { Container } from "../ui/container";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section className="bg-slate-900 py-20 text-slate-100">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Our process</span>
          <h2 className="text-3xl font-semibold sm:text-4xl">Seamless delivery from inspiration to installation.</h2>
          <p className="text-base text-slate-300">
            Your dedicated project concierge coordinates design direction, procurement timelines, and field execution so every surface arrives on schedule.
          </p>
        </div>
        <ol className="grid gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <li key={step.step} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">{step.step}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">{step.description}</p>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
