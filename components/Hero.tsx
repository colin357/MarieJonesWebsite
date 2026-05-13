import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 text-white">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_25%_20%,white_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <nav className="mb-12 flex items-center justify-between">
          <div className="text-lg font-bold tracking-tight">
            Marie Jones
            <span className="ml-2 hidden text-sm font-normal text-brand-100 sm:inline">
              | Fairway Home Mortgage
            </span>
          </div>
          <a
            href="#form"
            className="rounded-full bg-accent-500 px-5 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-accent-600 transition"
          >
            Get started
          </a>
        </nav>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-100 ring-1 ring-white/20">
              Licensed in Wisconsin · NMLS #290059
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Your home loan,
              <br />
              handled personally.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-brand-100">
              I&apos;m Marie Jones, a Wisconsin-based loan officer at Fairway
              Home Mortgage. With 20+ years of experience, I guide you from
              application to closing — and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#form"
                className="rounded-lg bg-accent-500 px-6 py-3 font-semibold text-slate-900 shadow-lg hover:bg-accent-600 transition"
              >
                Start my loan plan →
              </a>
              <a
                href="tel:+12625675005"
                className="rounded-lg bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/30 hover:bg-white/20 transition"
              >
                Call (262) 567-5005
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-brand-100">
              <div className="flex items-center gap-2">
                <CheckIcon />
                20+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                469 Five-Star Reviews
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                Wisconsin Specialist
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2rem] bg-accent-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur">
              <Image
                src="/public/marie.jpeg"
                alt="Marie Jones, Loan Officer with Fairway Home Mortgage"
                width={720}
                height={900}
                className="rounded-[1.5rem] object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white px-4 py-3 text-slate-900 shadow-lg">
              <div className="text-2xl font-extrabold text-brand-700">20+</div>
              <div className="text-xs font-medium">years helping families</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 text-accent-500"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
