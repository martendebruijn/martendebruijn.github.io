interface Props {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: Props) {
  return (
    <section className="px-4 pb-8">
      <h2 className="font-semibold text-xl mb-8">{title}</h2>
      <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}
