import Hero from "@/components/Hero";
import About from "@/components/About";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section id="form" className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Let&apos;s build your loan plan
            </h2>
            <p className="mt-3 text-slate-600">
              Answer a few quick questions and Marie will personally reach out
              with your options. Takes about 60 seconds.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
      <About />
      <SocialProof />
      <Footer />
    </main>
  );
}
