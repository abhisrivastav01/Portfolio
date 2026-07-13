function Education() {
  return (
    <section
      id="education"
      className="py-12 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-8">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <div className="flex justify-center">
            <p
              className="
              mt-3
              text-slate-400
              text-sm
              md:text-base
              max-w-4xl
              text-center
              "
            >
              Academic journey and qualifications that built
              my technical foundation.
            </p>
          </div>

        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* B.Tech */}
          <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            p-5
            hover:border-cyan-400
            transition-all
            duration-300
            "
          >
            <div className="text-3xl mb-3">
              🎓
            </div>

            <h3 className="text-lg font-bold text-cyan-400 mb-2">
              B.Tech in Computer Science
            </h3>

            <p className="text-slate-300 text-sm mb-2">
              Bachelor of Technology
            </p>

            <p className="text-slate-400 text-sm leading-7">
              Built strong fundamentals in programming,
              networking, operating systems, databases
              and software development.
            </p>
          </div>

          {/* Diploma */}
          <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            p-5
            hover:border-cyan-400
            transition-all
            duration-300
            "
          >
            <div className="text-3xl mb-3">
              ⚡
            </div>

            <h3 className="text-lg font-bold text-cyan-400 mb-2">
              Diploma in Electrical Engineering
            </h3>

            <p className="text-slate-300 text-sm mb-2">
              Polytechnic Diploma
            </p>

            <p className="text-slate-400 text-sm leading-7">
              Learned core concepts of electrical systems,
              circuits, power distribution and industrial
              technologies.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;