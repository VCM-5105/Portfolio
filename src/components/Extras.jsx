import React, { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// ─── EmailJS Config ───────────────────────────────────────────────
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a Service (Gmail / Outlook etc.) → copy Service ID
// 3. Create an Email Template → copy Template ID
// 4. Go to Account → copy your Public Key
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "abcDEFghiJKL"
// ──────────────────────────────────────────────────────────────────

const Extras = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = async (fields) => {
    const payload = {
      service_id:  EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id:     EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name:    fields.name,
        from_email:   fields.email,
        message:      fields.message,
      },
    };

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("EmailJS request failed");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const fields = {
      name:    e.target.name.value.trim(),
      email:   e.target.email.value.trim(),
      message: e.target.message.value.trim(),
    };

    try {
      await sendEmail(fields);
      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      console.error("Email send error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#020617] px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12">
        Get In Touch
      </h2>

      <div
        className="max-w-xl mx-auto bg-[#020617]/60 backdrop-blur-md
                   border border-gray-800 rounded-2xl p-8
                   shadow-[0_0_40px_rgba(34,211,238,0.05)]"
      >
        {/* ── Status messages ── */}
        {status === "success" && (
          <p className="text-green-400 mb-4 font-medium">
            Message sent successfully 🚀
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 mb-4 font-medium">
            Something went wrong. Please try again or email me directly.
          </p>
        )}

        {/* ── Form ── */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            minLength={2}
            className="p-4 rounded-lg bg-gray-900 border border-gray-700
                       text-gray-200 focus:border-cyan-400 focus:ring-1
                       focus:ring-cyan-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-lg bg-gray-900 border border-gray-700
                       text-gray-200 focus:border-cyan-400 focus:ring-1
                       focus:ring-cyan-400 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            minLength={10}
            className="p-4 rounded-lg bg-gray-900 border border-gray-700
                       text-gray-200 focus:border-cyan-400 focus:ring-1
                       focus:ring-cyan-400 outline-none resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-linear-to-r from-cyan-400 to-blue-500
                       text-black py-3 rounded-lg font-medium
                       hover:opacity-90 transition disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </form>

        {/* ── Divider ── */}
        <div className="my-6 border-t border-gray-800" />

        {/* ── Social links ── */}
        <div className="flex justify-center gap-6 text-gray-400 text-xl">
          <a
            href="mailto:vcmvipul5105@gmail.com"
            aria-label="Send email"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/VCM-5105"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/vipul5105"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Extras;