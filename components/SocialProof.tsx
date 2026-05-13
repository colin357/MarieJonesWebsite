export default function SocialProof() {
  const testimonials = [
    {
      quote:
        "Marie was kind, prompt, and very helpful additionally, her team was super helpful and very prompt. I had great and pleasant interactions with Tracy. Marie and her team made the purchase of my house easy and seamless!! Thank you so much!!",
      author: "Kim",
      context: "Oconomowoc, WI",
    },
    {
      quote:
        "Have been dealing with Marie Jones and her team for a few years now the team is phenomenal, they are very professional have great customer service and they always provide me with what I need when shopping for a home. I would recommend Fairway Mortgage to anyone.",
      author: "Frances",
      context: "Milwaukee, WI",
    },
    {
      quote:
        "We had a great experience working with our mortgage company throughout the home buying process. From start to finish, they were professional, responsive, and very patient in answering all of our questions. The communication was clear, and we always felt informed about what was happening next.",
      author: "Calynn",
      context: "Watertown, WI",
    },
  ];

  const stats = [
    { value: "WI", label: "Licensed in Wisconsin" },
    { value: "469", label: "Five-star reviews" },
    { value: "20+", label: "Years of experience" },
    { value: "Local", label: "Watertown, WI based" },
  ];

  return (
    <section className="bg-slate-900 py-16 sm:py-24 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            What clients say
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Wisconsin families trust Marie.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10"
            >
              <div className="text-3xl font-extrabold text-accent-500">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-slate-300">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
            >
              <div className="flex gap-1 text-accent-500" aria-hidden="true">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <blockquote className="mt-3 text-slate-100">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4">
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-slate-400">{t.context}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#form"
            className="inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-slate-900 shadow-lg hover:bg-accent-600 transition"
          >
            Start my loan plan →
          </a>
        </div>
      </div>
    </section>
  );
}
