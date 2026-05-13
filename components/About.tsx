export default function About() {
  const credentials = [
    { title: "20+ Years Experience", subtitle: "Mortgage lending" },
    { title: "469 Reviews", subtitle: "Five-star rated" },
    { title: "Wisconsin Specialist", subtitle: "Local market expertise" },
    { title: "Licensed in Wisconsin", subtitle: "NMLS #290059" },
    { title: "Conventional Loans", subtitle: "Purchase & refinance" },
    { title: "FHA & VA Loans", subtitle: "Government programs" },
    { title: "USDA Rural Loans", subtitle: "WI rural eligible areas" },
    { title: "Renovation Loans", subtitle: "203(k) & more" },
  ];

  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              About Marie
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              A mortgage partner who actually picks up the phone.
            </h2>
            <div className="mt-6 space-y-4 text-slate-700">
              <p>
                Based in Watertown, Wisconsin, Marie Jones has spent more than
                20 years helping Wisconsin families navigate the home loan
                process — from first-time buyers to experienced homeowners
                looking to refinance or tap equity.
              </p>
              <p>
                Whether you&apos;re purchasing your first home, building from
                the ground up, refinancing, or exploring your options, Marie
                walks you through every loan type and guides you from
                application to closing and beyond.
              </p>
              <p>
                With 469 five-star reviews and deep roots in the Wisconsin
                market, Marie brings the local knowledge and personal attention
                that make a real difference at every step of the process.
              </p>
            </div>

          </div>

          <div>
            <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-white p-6 ring-1 ring-brand-100">
              <h3 className="text-lg font-semibold text-slate-900">
                Credentials &amp; experience
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {credentials.map((c) => (
                  <li
                    key={c.title}
                    className="rounded-xl bg-white p-3 ring-1 ring-slate-100"
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {c.title}
                    </div>
                    <div className="text-xs text-slate-500">{c.subtitle}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <div className="text-sm font-semibold text-slate-900">
            Contact Marie directly
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-700">
            <div>
              Phone:{" "}
              <a
                href="tel:+12625675005"
                className="font-medium text-brand-700 hover:underline"
              >
                (262) 567-5005
              </a>
            </div>
            <div>
              Email:{" "}
              <a
                href="mailto:mariej@fairwaymc.com"
                className="font-medium text-brand-700 hover:underline"
              >
                mariej@fairwaymc.com
              </a>
            </div>
            <div>205 S 3rd St, Watertown, WI 53094 · NMLS #290059</div>
          </div>
        </div>
      </div>
    </section>
  );
}
