function Projects() {
  const projects = [
    {
      title: "AWS Static Website Hosting",
      description:
        "Hosted a static portfolio website on Amazon S3 with CloudFront CDN, Route 53 and HTTPS support.",
      tech: "AWS S3 • CloudFront • Route53",
    },
    {
      title: "Docker Containerization",
      description:
        "Containerized web applications using Docker and managed images for scalable deployments.",
      tech: "Docker • Linux • Git",
    },
    {
      title: "Linux Automation",
      description:
        "Automated repetitive system administration tasks using Bash scripting and Linux tools.",
      tech: "Linux • Bash • Automation",
    },
    {
      title: "Terraform Infrastructure",
      description:
        "Provisioned AWS infrastructure using Infrastructure as Code with Terraform.",
      tech: "Terraform • AWS • IaC",
    },
  ];

  return (
    <section
      id="projects"
      className="py-12 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-8">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Featured <span className="text-cyan-400">Projects</span>
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
              Cloud, DevOps and Infrastructure projects built
              during learning and hands-on practice.
            </p>
          </div>

        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-4">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              overflow-hidden
              hover:border-cyan-400
              transition-all
              duration-300
              flex
              flex-col
              "
            >

              {/* Top Icon Area */}
              <div className="h-14 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>

              <div className="p-4 flex flex-col flex-grow">

                <h3 className="text-base font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-6 mb-3">
                  {project.description}
                </p>

                <p className="text-cyan-400 text-sm font-medium mb-3">
                  {project.tech}
                </p>

                <div className="flex gap-2 mt-auto">

                  <button
                    className="
                    px-3
                    py-2
                    bg-cyan-500
                    text-black
                    rounded-lg
                    text-xs
                    font-semibold
                    hover:bg-cyan-400
                    transition
                    "
                  >
                    GitHub
                  </button>

                  <button
                    className="
                    px-3
                    py-2
                    border
                    border-cyan-400
                    text-cyan-400
                    rounded-lg
                    text-xs
                    hover:bg-cyan-400
                    hover:text-black
                    transition
                    "
                  >
                    Live Demo
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;