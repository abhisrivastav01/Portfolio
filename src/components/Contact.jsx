import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-14 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-8">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Contact <span className="text-cyan-400">Me</span>
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
              Open to DevOps, Cloud and Infrastructure opportunities.
              Feel free to connect for collaborations, freelance projects,
              technical discussions and professional engagements.
            </p>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-3">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 hover:border-cyan-400 transition-all">
              <h3 className="text-sm font-bold text-cyan-400 mb-1 flex items-center gap-2">
                <FaEnvelope size={12} />
                Email
              </h3>

              <a
                href="mailto:abhi@abhihub.shop"
                className="text-slate-300 text-sm hover:text-cyan-400"
              >
                abhi@abhihub.shop
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 hover:border-cyan-400 transition-all">
              <h3 className="text-sm font-bold text-cyan-400 mb-1 flex items-center gap-2">
                <FaMapMarkerAlt size={12} />
                Location
              </h3>

              <p className="text-slate-300 text-sm">
                Jaunpur, Uttar Pradesh, India
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 hover:border-pink-400 transition-all">
              <h3 className="text-sm font-bold text-pink-400 mb-1 flex items-center gap-2">
                <FaInstagram size={12} />
                Instagram
              </h3>

              <a
                href="https://instagram.com/abhisrivastav01"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 text-sm hover:text-pink-400"
              >
                @abhisrivastav01
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 hover:border-green-400 transition-all">
              <h3 className="text-sm font-bold text-green-400 mb-1 flex items-center gap-2">
                <FaWhatsapp size={12} />
                WhatsApp
              </h3>

              <p className="text-slate-300 text-sm">
                @abhisrivastav01
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">

              <a
                href="#"
                className="
                bg-slate-900
                border
                border-slate-800
                rounded-lg
                h-12
                flex
                items-center
                justify-center
                gap-2
                text-sm
                font-semibold
                hover:border-cyan-400
                transition-all
                "
              >
                <FaLinkedin size={16} />
                LinkedIn
              </a>

              <a
                href="https://github.com/abhisrivastav01"
                target="_blank"
                rel="noreferrer"
                className="
                bg-slate-900
                border
                border-slate-800
                rounded-lg
                h-12
                flex
                items-center
                justify-center
                gap-2
                text-sm
                font-semibold
                hover:border-cyan-400
                transition-all
                "
              >
                <FaGithub size={16} />
                GitHub
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

            <h3 className="text-base font-bold mb-4 text-center text-cyan-400 flex items-center justify-center gap-2">
              <FaPaperPlane size={14} />
              Send a Message
            </h3>

            <form className="space-y-3">

              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                px-4
                py-3
                rounded-lg
                bg-slate-950
                border
                border-slate-700
                outline-none
                focus:border-cyan-400
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                w-full
                px-4
                py-3
                rounded-lg
                bg-slate-950
                border
                border-slate-700
                outline-none
                focus:border-cyan-400
                "
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="
                w-full
                px-4
                py-3
                rounded-lg
                bg-slate-950
                border
                border-slate-700
                outline-none
                focus:border-cyan-400
                "
              ></textarea>

              <button
                type="submit"
                className="
                w-full
                py-3
                rounded-lg
                bg-cyan-500
                text-black
                font-semibold
                hover:bg-cyan-400
                transition
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;