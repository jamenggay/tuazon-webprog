import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-[#F7F5FB] text-zinc-900">
      <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left Side */}
        <div className="relative flex items-center justify-center overflow-hidden bg-[#5A2A6E] px-6 py-10 sm:px-12 lg:px-16">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
            src="/src/assets/images/signup.jpg"
            alt="Community support"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#321849]/90 via-transparent to-[#1b0d33]/80" />

          <div className="relative flex w-full max-w-md flex-col gap-8 text-white">
            

            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Ending violence. Empowering voices. Protecting futures. 
              </h2>
              
            </div>

            
          </div>
        </div>

        {/* Right Side */}
        <main className="flex items-center justify-center bg-[#5A2A6E] px-6 py-10 sm:px-10 lg:px-16">
          <div className="w-full max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl shadow-black/25 ring-1 ring-white/15 backdrop-blur-3xl sm:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
