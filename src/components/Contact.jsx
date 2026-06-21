import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    formData.append("access_key", "ed9b31e5-c241-437b-8af9-d47fc07c61f5"); 

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);
      e.target.reset();
    } else {
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#020617] px-6 text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12">
        Get In Touch
      </h2>

      <div className="max-w-xl mx-auto bg-[#020617]/60 backdrop-blur-md 
                      border border-gray-800 rounded-2xl p-8 
                      shadow-[0_0_40px_rgba(34,211,238,0.05)]">

      
        {success && (
          <p className="text-green-400 mb-4">
            Message sent successfully 🚀
          </p>
        )}

        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 
                       text-gray-200 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 
                       text-gray-200 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 
                       text-gray-200 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-linear-to-r from-cyan-400 to-blue-500 
                       text-black py-3 rounded-lg font-medium 
                       hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="my-6 border-t border-gray-800"></div>

        <div className="flex justify-center gap-6 text-gray-400 text-xl">

          <a
            href="mailto:vcmvipul5105@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/VCM-5105"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/vipul5105"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;