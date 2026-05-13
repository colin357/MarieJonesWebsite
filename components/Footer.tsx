export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto max-w-6xl px-4">

        {/* Contact columns */}
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-white font-bold">Marie Jones</div>
            <div className="mt-1 text-sm">
              Loan Officer
              <br />
              Fairway Independent Mortgage Corporation
              <br />
              Branch NMLS #290059
            </div>
            <div className="mt-3 text-xs">
              <a
                href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/290059"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                Verify license at NMLS Consumer Access
              </a>
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

          <div className="text-sm">
            <div className="text-white font-semibold">Fairway Corporate</div>
            <div className="mt-1 text-xs leading-relaxed">
              Fairway Independent Mortgage Corporation
              <br />
              4750 S. Biltmore Lane
              <br />
              Madison, WI 53718
              <br />
              1-866-912-4800
              <br />
              NMLS Entity ID #2289
            </div>
          </div>
        </div>

        {/* Disclosures */}
        <div className="mt-8 border-t border-slate-800 pt-6 text-xs leading-relaxed space-y-3">
          <p>
            <span className="font-semibold text-slate-300">Equal Housing Lender.</span>{" "}
            Fairway Independent Mortgage Corporation is an Equal Housing Lender.
            As prohibited by federal law, we do not engage in business practices
            that discriminate on the basis of race, color, religion, national
            origin, sex, marital status, age, because all or part of your income
            may be derived from any public assistance program, or because you
            have, in good faith, exercised any right under the Consumer Credit
            Protection Act.
          </p>
          <p>
            All loans subject to credit and property approval. Not a commitment
            to lend. Not all customers will qualify. Information, rates, programs,
            and terms are subject to change without prior notice. Other
            restrictions and limitations may apply. This is not an offer to enter
            into an agreement. All products are subject to credit and property
            approval.
          </p>
          <p>
            Marie Jones is licensed to originate mortgage loans in the state of
            Wisconsin only. Fairway Independent Mortgage Corporation is licensed
            by the Wisconsin Department of Financial Institutions.
          </p>
          <p>
            Fairway Independent Mortgage Corporation. NMLS Entity ID #2289.
            4750 S. Biltmore Lane, Madison, WI 53718. 1-866-912-4800.
            Marie Jones personal NMLS #290059.
          </p>
          <p>
            © {new Date().getFullYear()} Fairway Independent Mortgage Corporation.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
