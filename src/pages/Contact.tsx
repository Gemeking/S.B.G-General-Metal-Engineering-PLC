"use client";

import Layout from "../components/layout/Layout";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  // ✅ Vite environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Honeypot spam check
    const honeypot = (formRef.current.elements.namedItem("honeypot") as HTMLInputElement)?.value;
    if (honeypot) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      console.error("EmailJS environment variables are missing.");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="py-12 md:py-20 text-white overflow-x-hidden">
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-yellow-500/20 blur-[120px] rounded-full -translate-x-1/2 animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest
              bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
              bg-clip-text text-transparent">
              CONTACT US
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
              Let's build strong solutions together. Reach out for industrial machinery, crusher plants, and maintenance services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT INFO */}
            <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-10 shadow-2xl space-y-6">
              <h2 className="text-3xl font-bold text-yellow-400">
                S.B.G General Metal Engineering PLC
              </h2>

              <p className="text-gray-300">Industrial Zone, Addis Ababa, Ethiopia</p>

              <div className="space-y-3 text-yellow-300 font-semibold">
                <a href="tel:+251911225990">📞 +251 911 225990</a>
                <br />
                <a href="tel:+251911610852">📞 +251 911 610852</a>
                <br />
                <a href="mailto:sbg.general.metal.engineering.plc@gmail.com">
                  ✉ sbg.general.metal.engineering.plc@gmail.com
                </a>
              </div>

              <div className="pt-4 text-gray-400 text-sm">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 8:00 AM - 12:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-10 shadow-2xl space-y-6"
            >
              <h2 className="text-3xl font-bold text-yellow-400">
                Get a Quote
              </h2>

              <input
                name="name"
                type="text"
                placeholder="Your Name *"
                required
                className="w-full p-4 rounded-lg bg-white/20 border border-yellow-400/50"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email *"
                required
                className="w-full p-4 rounded-lg bg-white/20 border border-yellow-400/50"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Your Phone Number"
                className="w-full p-4 rounded-lg bg-white/20 border border-yellow-400/50"
              />

              <select
                name="service"
                required
                defaultValue=""
                className="w-full p-4 rounded-lg bg-white/20 border border-yellow-400/50"
              >
                <option value="" disabled>Select Service *</option>
                <option value="Stone Crusher Plant">Stone Crusher Plant</option>
                <option value="Coal Crusher Plant">Coal Crusher Plant</option>
                <option value="Portable Crusher">Portable Crusher</option>
                <option value="Conveyor System">Conveyor System</option>
                <option value="Iron Sand Processing">Iron Sand Processing</option>
                <option value="Fertilizer Plant">Fertilizer Plant</option>
                <option value="Maintenance Services">Maintenance Services</option>
              </select>

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-lg bg-white/20 border border-yellow-400/50"
              />

              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your Message *"
                className="w-full p-4 rounded-lg bg-white/20 border border-yellow-400/50"
              />

              {/* Honeypot */}
              <input type="text" name="honeypot" className="hidden" />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-amber-600
                text-black font-bold uppercase rounded-lg hover:scale-105 transition"
              >
                {loading ? "Sending..." : "Submit Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm mt-2">
                  ✅ Message sent successfully! We will contact you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm mt-2">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}