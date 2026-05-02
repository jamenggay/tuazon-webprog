import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../utils/auth";

const inputClasses =
  "mt-2 w-full rounded-2xl border border-[#D6C6E1] bg-white px-4 py-3 text-sm text-[#2E2E2E] outline-none transition placeholder:text-[#C97B84] focus:border-[#5A2A6E] focus:ring-2 focus:ring-[#5A2A6E]";

const actionButtonClassName =
  "w-full rounded-2xl py-3 text-[11px] font-semibold uppercase tracking-[0.2em]";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    console.log("Form submitted with:", { email, password }); // Debug

    // Validate inputs
    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    // Attempt login
    const result = login(email, password);
    console.log("Login result:", result); // Debug
    console.log(
      "localStorage auth state:",
      localStorage.getItem("isAuthenticated"),
    ); // Debug

    if (result.success) {
      // Redirect to dashboard after successful login
      console.log("Login successful, redirecting..."); // Debug
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } else {
      setError(result.message);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Log In
      </h1>
      <p className="mt-3 text-sm leading-6 text-zinc-200">
        Access your account using the same monochrome wireframe language used
        across the site
      </p>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-900/30 border border-red-500/50 rounded-lg">
          <p className="text-sm text-red-200">{error}</p>
        </div>
      )}

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        <button
          type="submit"
          disabled={loading}
          className={`${actionButtonClassName} w-full rounded-2xl py-3 text-[11px] font-semibold uppercase tracking-[0.2em] ${
            loading
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-[#F8E1FF] text-[#5A2A6E] hover:bg-[#d89cf5]"
          } transition-colors`}
        >
          {loading ? "Logging In..." : "Log In"}
        </button>
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
