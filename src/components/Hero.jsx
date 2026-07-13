function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[340px_1fr] gap-7 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center text-center lg:pl-12">

            <div
              className="
              w-56
              h-56
              rounded-full
              border-4
              border-cyan-400
              overflow-hidden
              shadow-xl
              shadow-cyan-500/30
              "
            >
              <img
                src="/profile.jpg"
                alt="Abhinav Shankar Shrivastav"
                className="
                w-full
                h-full
                object-cover
                object-center
                "
              />
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              Abhinav Shankar
            </h2>

            <h2 className="text-3xl font-bold text-cyan-400">
              Shrivastav
            </h2>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <p className="text-cyan-400 text-lg font-medium mb-2">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              DevOps Engineer
            </h1>

            <h3 className="text-2xl md:text-3xl text-cyan-400 mt-3 font-semibold">
              Application Tester | AWS Cloud Enthusiast
            </h3>

            <p className="mt-5 text-lg text-slate-300 leading-8">
              Currently working as an Application Tester with experience
              in web and mobile application testing, bug reporting,
              feature validation and quality assurance.
            </p>

            <p className="mt-3 text-lg text-slate-300 leading-8">
              Passionate about Cloud Computing and DevOps with hands-on
              experience in AWS, Linux, Docker, Kubernetes,
              Terraform and Infrastructure Automation.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-21 mt-10 mb-14">

              <a
                href="/resume.pdf"
                download
                className="
                w-[220px]
                py-3
                text-center
                rounded-xl
                border-2
                border-cyan-400
                text-cyan-400
                font-semibold
                hover:bg-cyan-400
                hover:text-black
                hover:scale-105
                transition-all
                duration-300
                "
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="
                w-[220px]
                py-3
                text-center
                rounded-xl
                border-2
                border-cyan-400
                text-cyan-400
                font-semibold
                hover:bg-cyan-400
                hover:text-black
                hover:scale-105
                transition-all
                duration-300
                "
              >
                Contact Me
              </a>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6">

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center hover:border-cyan-400 transition">
                <h4 className="text-3xl font-bold text-cyan-400">
                  10+
                </h4>
                <p className="text-slate-400 text-sm mt-2">
                  AWS Services
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center hover:border-cyan-400 transition">
                <h4 className="text-3xl font-bold text-cyan-400">
                  5+
                </h4>
                <p className="text-slate-400 text-sm mt-2">
                  Projects
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center hover:border-cyan-400 transition">
                <h4 className="text-3xl font-bold text-cyan-400">
                  100%
                </h4>
                <p className="text-slate-400 text-sm mt-2">
                  Learning Mindset
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;