function About() {
  return (
    <section
      id="about"
      className="py-14 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col items-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p
            className="
            mt-5
            text-slate-400
            text-sm
            md:text-base
            text-center
            max-w-4xl
            mx-auto
            leading-7
            "
          >
            Passionate about Cloud Computing, DevOps,
            Infrastructure Automation and Continuous Learning.
          </p>

        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">

          {/* Left Side Content */}
          <div className="lg:ml-24">

            <h3 className="text-2xl md:text-3xl font-bold mb-5">
              DevOps Engineer & AWS Cloud Enthusiast
            </h3>

            <p className="text-white leading-7 text-sm md:text-base">
              Hello! I'm <strong>Abhinav Shankar Shrivastav</strong>,
              a passionate DevOps Engineer from Jaunpur,
              Uttar Pradesh.
            </p>

            <p className="text-white leading-7 text-sm md:text-base mt-4">
              Currently working as an
              <span className="text-cyan-400 font-semibold">
                {" "}Application Tester
              </span>
              , performing web and mobile application testing,
              feature validation and bug reporting.
            </p>

            <p className="text-white leading-7 text-sm md:text-base mt-4">
              I enjoy building scalable cloud infrastructure,
              automating deployments and working with AWS,
              Docker, Kubernetes and Terraform.
            </p>

            <p className="text-white leading-7 text-sm md:text-base mt-4">
              My goal is to become a professional Cloud & DevOps
              Engineer and contribute to real-world cloud projects.
            </p>

          </div>

          {/* Right Side Stats */}
          <div className="grid grid-cols-2 gap-5 ">

            <div className="bg-slate-900 border border-slate-800 rounded-xl h-28 flex flex-col justify-center items-center text-center hover:border-cyan-400 transition">
              <h3 className="text-2xl font-bold text-cyan-400">
                1+
              </h3>
              <p className="text-slate-400 text-xs mt-2">
                Years Learning
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl h-28 flex flex-col justify-center items-center text-center hover:border-cyan-400 transition">
              <h3 className="text-2xl font-bold text-cyan-400">
                10+
              </h3>
              <p className="text-slate-400 text-xs mt-2">
                AWS Services
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl h-28 flex flex-col justify-center items-center text-center hover:border-cyan-400 transition">
              <h3 className="text-2xl font-bold text-cyan-400">
                5+
              </h3>
              <p className="text-slate-400 text-xs mt-2">
                Projects
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl h-28 flex flex-col justify-center items-center text-center hover:border-cyan-400 transition">
              <h3 className="text-2xl font-bold text-cyan-400">
                100%
              </h3>
              <p className="text-slate-400 text-xs mt-2">
                Learning Mindset
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;