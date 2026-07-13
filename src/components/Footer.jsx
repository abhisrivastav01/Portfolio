function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">

      <div className="max-w-6xl mx-auto px-6 py-6">

        {/* Center Content */}
        <div className="flex flex-col items-center text-center space-y-2">

          <p className="text-slate-300 text-sm md:text-base">
            📧 abhi@abhihub.shop
          </p>

          <p className="text-slate-300 text-sm md:text-base">
            📍 Jaunpur, Uttar Pradesh, India
          </p>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-4 pt-4 text-center">

          <p className="text-slate-500 text-xs md:text-sm">
            © {new Date().getFullYear()} Abhinav Shankar Shrivastav.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;