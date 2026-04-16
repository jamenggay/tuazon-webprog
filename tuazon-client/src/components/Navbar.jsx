import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Articles", to: "/articles" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition",
    isActive
      ? "border-[#F5EDE6] bg-[#F5EDE6] text-[#5A2A6E]" // active = soft highlight
      : "border-transparent text-[#D6C6E1] hover:border-[#C97B84] hover:bg-[#F5EDE6] hover:text-[#5A2A6E]",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#C97B84] bg-[#5A2A6E]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="space-y-0.5">
            <img
              src="/src/assets/images/logo.png"
              alt="kavira logo"
              style={{ width: "100px", height: "50px" }}
            />
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink>
           <NavLink
            to="/auth/signin"
            className="rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] border-[#F5EDE6] bg-[#F5EDE6] text-[#5A2A6E]"
          >
            
            Log In
          </NavLink>

          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;