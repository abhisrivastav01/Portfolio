function Skills() {
  const skills = [
    "AWS",
    "Docker",
    "Kubernetes",
    "Linux",
    "Jenkins",
    "Git & GitHub",
    "Terraform",
    "CI/CD",
  ];

  return (
    <section
      id="skills"
      className="py-10 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-6">

          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p
            className="
            mt-2
            text-slate-400
            text-sm
            md:text-base
            text-center
            max-w-3xl
            mx-auto
            "
          >
            Technologies and tools I use for building cloud infrastructure,
            automation and DevOps solutions.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-xl
                py-3
                px-3
                text-center
                hover:border-cyan-400
                transition-all
                duration-300
              "
            >
              <h3 className="text-sm md:text-base font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;