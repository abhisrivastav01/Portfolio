const tools = [
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Terraform",
  "Linux",
  "Git & GitHub",
  "Bash Scripting",
  "CI/CD",
];

function DevOpsTools() {
  return (
    <section
      id="devops"
      className="py-10 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-6">

          <h2 className="text-3xl md:text-4xl font-bold">
            DevOps <span className="text-cyan-400">Tools</span>
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
            Tools and technologies I use for automation,
            deployment, infrastructure management and
            cloud operations.
          </p>

        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

          {tools.map((tool) => (
            <div
              key={tool}
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
              <h3 className="text-sm md:text-base font-medium">
                {tool}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default DevOpsTools;