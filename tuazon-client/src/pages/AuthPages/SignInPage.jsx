import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-2xl border border-[#D6C6E1] bg-white px-4 py-3 text-sm text-[#2E2E2E] outline-none transition placeholder:text-[#C97B84] focus:border-[#5A2A6E] focus:ring-2 focus:ring-[#5A2A6E]";

const actionButtonClassName =
  "w-full rounded-2xl py-3 text-[11px] font-semibold uppercase tracking-[0.2em]";

const SignInPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Log In
      </h1>
      <p className="mt-3 text-sm leading-6 text-zinc-200">
        Access your account using the same monochrome wireframe language used
        across the site
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="signin-email"
            className="text-sm font-medium text-white"
          >
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="signin-password"
            className="text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            className={inputClasses}
          />
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-zinc-200">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-300 accent-zinc-900"
            />
            <span>Remember me</span>
          </label>
          <button
            type="button"
            className="font-medium text-white/80 transition hover:text-white"
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          className={`${actionButtonClassName} bg-[#F8E1FF] text-[#5A2A6E] hover:bg-[#d89cf5] transition-colors`}
        >
          Log In
        </Button>
        {/* Social Buttons */}
        <div className="grid gap-3 sm:grid-cols-2 mt-4">
          <a href="#" className="block">
            <button className="w-full text-sm text-center hover:bg-[#d89cf5] transition-colors py-3 border flex items-center justify-center border-slate-200 rounded-[30px] text-white hover:border-slate-400 hover:text-white hover:shadow transition duration-150">
              <img
                src="/src/assets/icon/google-logo.png"
                className="w-4 h-4 mr-2"
                alt="Google Icon"
              />
              <span className="text-white">Login with Google</span>
            </button>
          </a>

          <a href="#" className="block">
            <button className="w-full text-sm text-center  hover:bg-[#d89cf5] transition-colors py-3 border flex items-center justify-center border-slate-200 rounded-[30px] text-white hover:border-slate-400 hover:text-white hover:shadow transition duration-150">
              <img
                src="/src/assets/icon/github-logo..png"
                className="w-7 h-5 mr-2"
                alt="Github Icon"
              />
              <span className="text-white">Login with Github</span>
            </button>
          </a>
        </div>
      </form>

      <div className="mt-8 border-t border-white/10 pt-6 text-sm text-zinc-200">
        No account yet?{" "}
        <Link
          to="/auth/signup"
          className="font-semibold text-white transition hover:text-zinc-200"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
