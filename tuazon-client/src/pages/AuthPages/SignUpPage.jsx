import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-2xl border border-[#D6C6E1] bg-white px-4 py-3 text-sm text-[#2E2E2E] outline-none transition placeholder:text-[#C97B84] focus:border-[#5A2A6E] focus:ring-2 focus:ring-[#5A2A6E]";
const actionButtonClassName =
  "w-full rounded-2xl py-3 text-[11px] font-semibold uppercase tracking-[0.2em]";

const SignUpPage = () => {
  return (
    <>
      {/* Header */}
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Create Account
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-6 text-white">
        Sign up to access your account and continue your journey with us.
      </p>

      {/* Form */}
      <form className="mt-8 space-y-4">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-white">First Name</label>
            <input
              type="text"
              placeholder="John"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-white">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-white">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-white">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs text-white">
            Use at least 8 characters with a mix of letters, numbers, and
            symbols.
          </p>
        </div>

        {/* Primary CTA */}
        <Button
          type="submit"
          className={`${actionButtonClassName} bg-[#F8E1FF] text-[#5A2A6E] hover:bg-[#d89cf5] transition-colors`}
        >
          Create Account
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-200" />
          <span className="text-xs text-[#F5EDE6]">OR</span>
          <div className="h-px flex-1 bg-zinc-200" />
        </div>

        {/* Social Buttons */}
        <div className="grid gap-3 sm:grid-cols-2 mt-4">
          <a href="#" className="block">
            <button className="w-full text-sm text-center hover:bg-[#d89cf5] transition-colors py-3 border flex items-center justify-center border-slate-200 rounded-[30px] text-white hover:border-slate-400 hover:text-white hover:shadow transition duration-150">
              <img
                src="/src/assets/icon/google-logo.png"
                className="w-4 h-4 mr-2"
                alt="Google Icon"
              />
              <span className="text-white">Sign up with Google</span>
            </button>
          </a>

          <a href="#" className="block">
            <button className="w-full text-sm text-center  hover:bg-[#d89cf5] transition-colors py-3 border flex items-center justify-center border-slate-200 rounded-[30px] text-white hover:border-slate-400 hover:text-white hover:shadow transition duration-150">
              <img
                src="/src/assets/icon/github-logo..png"
                className="w-7 h-5 mr-1"
                alt="Github Icon"
              />
              <span className="text-white">Sign up with Github</span>
            </button>
          </a>
        </div>
      </form>

      {/* Footer */}
      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-white">
        Already have an account?{" "}
        <Link
          to="/auth/signin"
          className="font-semibold text-white transition hover:text-[#C97B84]"
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
