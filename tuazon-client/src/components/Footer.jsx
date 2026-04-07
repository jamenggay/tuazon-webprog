import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F5EDE6] border-t-2 border-[#5A2A6E] px-6 py-10 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-lg font-bold text-[#5A2A6E]">kavira<br /> towards FGM Awareness</h2>
          <p className="mt-3 text-sm leading-6 text-[#2E2E2E]">
            A platform dedicated to raising awareness, educating communities,
            and supporting the global effort to end Female Genital Mutilation
            (FGM).
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C97B84]">
            Explore
          </h3>

          <ul className="mt-4 space-y-2 text-sm text-[#5A2A6E]">
            <li>
              <Link to="/" className="hover:text-[#C97B84] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#C97B84] transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/articles" className="hover:text-[#C97B84] transition">
                Articles
              </Link>
            </li>
          </ul>
        </div>

        {/* Advocacy / Message */}
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C97B84]">
            Our Mission
          </h3>

          <p className="mt-4 text-sm leading-6 text-[#2E2E2E]">
            We believe every girl deserves safety, dignity, and freedom from
            harm. Through education and awareness, we aim to challenge harmful
            traditions and promote lasting change.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-10 max-w-6xl border-t border-[#C97B84] pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[#2E2E2E]">
          © {new Date().getFullYear()} FGM Awareness. All rights reserved.
        </p>

        <p className="text-xs text-[#5A2A6E]">
          Built for education and advocacy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
