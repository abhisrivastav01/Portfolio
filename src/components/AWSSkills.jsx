const awsServices = [
  "EC2",
  "VPC",
  "IAM",
  "S3",
  "Route 53",
  "CloudFront",
  "RDS",
  "SNS",
  "SQS",
  "Lambda",
  "Auto Scaling",
  "Elastic Load Balancer",
  "CloudWatch",
];

function AWSSkills() {
  return (
    <section
      id="aws-skills"
      className="py-10 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-6">

          <h2 className="text-3xl md:text-4xl font-bold">
            AWS <span className="text-cyan-400">Cloud Skills</span>
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
            Experienced with designing, deploying, monitoring and managing
            cloud infrastructure using AWS services.
          </p>

        </div>

        {/* AWS Services */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

          {awsServices.map((service) => (
            <div
              key={service}
              className="
                bg-slate-800
                border
                border-slate-700
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
                {service}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default AWSSkills;