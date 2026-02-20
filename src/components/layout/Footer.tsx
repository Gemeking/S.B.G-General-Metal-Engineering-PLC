import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative  bg-white/20 backdrop-blur-xl border-t border-gray-200 text-gray-900">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* LOGO + NAME */}
          <div className="space-y-4">
            <img
              src="iconic.png"
              alt="SBG Logo"
              className="h-20 w-auto"
            />

            <h2 className="font-extrabold text-lg tracking-widest uppercase">
              S.B.G General Metal Engineering PLC
            </h2>

            <p className="text-gray-700 font-medium">
              We are crusher’s solution!!
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-wider text-lg">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 font-semibold">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <Link to="/aboutus" className="hover:text-blue-600">About Us</Link>
              <Link to="/contact" className="hover:text-blue-600">Contact</Link>
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-wider text-lg">
              Contact
            </h3>

            <p className="font-semibold">
              📞 +251 911 225990  
              <br />
              📞 +251 911 610852
            </p>

            {/* EMAIL BUTTON */}
            <a
              href={`mailto:ksmon369@gmail.com?subject=SBG GENERAL METAL ENGINEERING PLC.&body=We are crusher's solution!!`}
              className="
                inline-block mt-2
                px-6 py-3
                bg-blue-600 text-white
                font-bold uppercase tracking-wider
                rounded-full
                hover:bg-blue-700
                transition
              "
            >
              Email Us
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-gray-300 text-center text-gray-700 font-medium">
          © {new Date().getFullYear()} S.B.G General Metal Engineering PLC.  
          All rights reserved.
        </div>

      </div>

    </footer>
  );
}
