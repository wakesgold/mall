type ContactCardProps = {
  label: string;
  value: string;
  hint: string;
};

export function ContactCard({ label, value, hint }: ContactCardProps) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-4 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-3 text-sm leading-7 text-slate-300">{hint}</p>
    </div>
  );
}
