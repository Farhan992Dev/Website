export const Footer = ({ content }) => {
  return (
    <>
      <footer className="border-t border-white/5 bg-main">
        <div className="mx-auto flex w-full   flex-col gap-4 px-6 py-12 text-sm text-neutral-500">
          <p className="font-semibold text-white tracking-widest uppercase">
            {content.company.name}
          </p>
          <p className="text-neutral-400">{content.company.tagline}</p>
          <p className="text-neutral-600 mt-4 pt-4 border-t border-white/5">
            {content.company.email} · {content.company.phone}
          </p>
        </div>
      </footer>
    </>
  );
};
