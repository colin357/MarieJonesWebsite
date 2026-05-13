export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-white font-bold">Marie Jones</div>
            <div className="mt-1 text-sm">
              Loan Officer
              <br />
              Fairway Independent Mortgage Corporation
              <br />
              NMLS #290059
            </div>
          </div>
          <div className="text-sm">
            <div className="text-white font-semibold">Contact</div>
            <div className="mt-1">
              <a href="tel:+12625675005" className="hover:text-white">
                (262) 567-5005
              </a>
            </div>
            <div>
              <a
                href="mailto:mariej@fairwaymc.com"
                className="hover:text-white"
              >
                mariej@fairwaymc.com
              </a>
            </div>
            <div className="mt-1">
              205 S 3rd St
              <br />
              Watertown, WI 53094
            </div>
          </div>
          <div className="text-xs leading-relaxed">
            <div className="text-white font-semibold text-sm">Disclosures</div>
            <p className="mt-1">
              Equal Housing Lender. All loans subject to credit approval.
              Rates, terms and programs subject to change without notice. Not a
              commitment to lend. Licensed in Wisconsin. Copyright © Fairway
              Independent Mortgage Corporation. NMLS Entity ID #2289.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6 text-xs">
          © {new Date().getFullYear()} Marie Jones, Fairway Independent
          Mortgage Corporation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
