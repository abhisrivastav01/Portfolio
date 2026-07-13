function Certifications() {
  const certificates = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "In Progress",
    },
    {
      title: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      status: "Planned",
    },
    {
      title: "Docker Essentials",
      issuer: "Self Learning",
      status: "Completed",
    },
    {
      title: "Kubernetes Fundamentals",
      issuer: "Self Learning",
      status: "Completed",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-12 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-8">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            My <span className="text-cyan-400">Certifications</span>
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
              Professional certifications and continuous learning
              journey in Cloud and DevOps.
            </p>
          </div>

        </div>

        {/* Certification Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              p-4
              text-center
              hover:border-cyan-400
              transition-all
              duration-300
              flex
              flex-col
              items-center
              "
            >

              <div className="text-xl mb-2">
                🏆
              </div>

              <h3 className="text-sm font-bold mb-2">
                {cert.title}
              </h3>

              <p className="text-slate-400 text-xs mb-3">
                {cert.issuer}
              </p>

              <span
                className="
                inline-block
                px-3
                py-1
                rounded-full
                bg-cyan-500/10
                text-cyan-400
                text-xs
                "
              >
                {cert.status}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;