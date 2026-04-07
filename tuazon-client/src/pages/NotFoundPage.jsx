import Button from "../components/Button";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F5EDE6] px-4">
      <div className="w-full max-w-2xl text-center">

        {/* Soft glow background card */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-[#5A2A6E] bg-[#D6C6E1] p-10 sm:p-14">

          {/* Decorative soft circle */}
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#C97B84] opacity-20 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#5A2A6E] opacity-20 blur-2xl" />

          {/* Main content */}
          <div className="relative z-10">

            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5A2A6E]">
              404 Error
            </p>

            <h1 className="mt-3 text-4xl font-bold text-[#5A2A6E] sm:text-5xl">
              Page Not Found
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#2E2E2E] sm:text-base">
              The page you’re looking for doesn’t exist or may have been moved.
              This space is part of our awareness platform on Female Genital Mutilation (FGM),
              but the content you requested cannot be found.
            </p>

            {/* Big subtle number */}
            <div className="my-8 text-[90px] font-bold leading-none text-[#5A2A6E] opacity-10">
              404
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="primary" to="/">
                Go Home
              </Button>

              <Button variant="secondary" to="/articles">
                Explore Articles
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;