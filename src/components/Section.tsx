interface Props {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: Props) {
  return (
    <section className="px-4 pb-8">
      <h2 className="font-semibold text-xl mb-8">{title}</h2>
      <div className=" space-y-8">{children}</div>
    </section>
  );
}
