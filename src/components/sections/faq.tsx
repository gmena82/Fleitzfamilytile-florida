import { Container } from "../ui/container";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: readonly FaqItem[] | FaqItem[];
  title?: string;
  description?: string;
  className?: string;
}

export function FaqSection({ 
  items, 
  title = "Frequently Asked Questions", 
  description,
  className = "bg-slate-50"
}: FaqSectionProps) {
  return (
    <section className={`faq-section py-16 ${className}`}>
      <Container className="mx-auto max-w-3xl space-y-8">
        <div className="section-header space-y-3 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
          {description && (
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              {description}
            </p>
          )}
        </div>
        <div className="space-y-6">
          {items.map((faq) => (
            <div key={faq.question} className="faq-item rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
