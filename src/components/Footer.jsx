import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] pt-16 pb-10 px-6 border-t border-gray-800">

      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-left">

        {/* ABOUT */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">
            Vipul Mishra
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Building modern, responsive, and interactive web experiences.
            Focused on clean UI and real-world impact.
          </p>
        </div>

        {/* EXPLORE */}
        <div>
          <h4 className="text-gray-200 font-medium mb-4">Explore</h4>

          <ul className="space-y-2 text-gray-400 text-sm">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="text-gray-200 font-medium mb-4">Connect</h4>

          <div className="space-y-3 text-gray-400 text-sm">

            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <span>+91 8340256955</span>
            </div>

            <a
              href="https://wa.me/8340256955"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-green-400 transition"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://t.me/@vcm5105"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-400 transition"
            >
              <FaTelegramPlane />
              <span>Telegram</span>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=paritoshmishra5105@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>

          </div>
        </div>
      </div>

      {/* FOLLOW ME (BOTTOM CENTER) */}
      <div className="mt-12 text-center">
        
        <p className="text-gray-400 text-sm mb-4">Follow Me</p>

        <div className="flex justify-center gap-6 text-gray-400 text-lg">

          <a
            href="https://github.com/VCM-5105"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/vipul5105"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>

      

    </footer>
  );
};

export default Footer;