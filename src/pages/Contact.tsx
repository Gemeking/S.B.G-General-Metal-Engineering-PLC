"use client";

import Layout from "../components/layout/Layout";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errorMessage, setErrorMessage] = useState("");

  // ✅ Vite environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

  // Debug logging
  console.log("📧 EmailJS Config:", {
    SERVICE_ID: SERVICE_ID || "❌ Missing",
    TEMPLATE_ID: TEMPLATE_ID || "❌ Missing", 
    PUBLIC_KEY: PUBLIC_KEY ? "✅ Set (hidden)" : "❌ Missing"
  });

  // Initialize EmailJS with public key
  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
      console.log("✅ EmailJS initialized");
    }
  }, [PUBLIC_KEY]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setErrorMessage("");

  if (!formRef.current) return;

  // Honeypot check
  const honeypot = (formRef.current.elements.namedItem("honeypot") as HTMLInputElement)?.value;
  if (honeypot) {
    console.log("🕳️ Spam detected");
    return;
  }

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    setStatus("error");
    setErrorMessage("Configuration missing");
    return;
  }

  setLoading(true);
  setStatus(null);

  try {
    // Get form data
    const formData = new FormData(formRef.current);
    const templateParams = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string || "Not provided",
      service: formData.get("service") as string,
      subject: formData.get("subject") as string || "New Contact Form Submission",
      message: formData.get("message") as string,
    };
    
    console.log("📤 Sending with params:", templateParams);
    console.log("Service ID:", SERVICE_ID);
    console.log("Template ID:", TEMPLATE_ID);
    console.log("Public Key exists:", !!PUBLIC_KEY);

    // Try with a different approach - using sendForm
    const result = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY
    );

    console.log("✅ Success:", result);
    
    setStatus("success");
    formRef.current.reset();
    
  } catch (error: any) {
    console.error("❌ Full error object:", error);
    
    // Log all available error properties
    console.error("Error status:", error.status);
    console.error("Error text:", error.text);
    console.error("Error message:", error.message);
    console.error("Error response:", error.response);
    
    // Detailed error message based on status
    let message = "Failed to send. ";
    
    if (error.status === 404) {
      message = "Template or Service not found. Please check your IDs.";
    } else if (error.status === 401) {
      message = "Authentication failed. Please check your Public Key.";
    } else if (error.status === 400) {
      message = "Bad request. Check your template variables.";
    } else if (error.status === 412) {
      message = "Template variables mismatch. Check your EmailJS template.";
    } else if (error.status === 500) {
      message = "EmailJS server error. Please try again later.";
    } else if (error.message) {
      message = `Error: ${error.message}`;
    } else if (error.text) {
      message = `Error: ${error.text}`;
    } else {
      message = "Please try again.";
    }
    
    setErrorMessage(message);
    setStatus("error");
    
  } finally {
    setLoading(false);
  }
};

  return (
    <Layout>
      <section className="py-12 md:py-20 text-white overflow-x-hidden relative">
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
                <a href="tel:+251911225990" className="block hover:text-yellow-400 transition">
                  📞 +251 911 225990
                </a>
                <a href="tel:+251911610852" className="block hover:text-yellow-400 transition">
                  📞 +251 911 610852
                </a>
                <a href="mailto:sbg.general.metal.engineering.plc@gmail.com" className="block hover:text-yellow-400 transition break-all">
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
                className="w-full p-4 rounded-lg bg-white/20 border border-yellow-400/50 focus:border-yellow-400 focus:outline-none text-white placeholder-gray-400"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email *"
                required
                className="w-full p-4 rounded-lg bg-white/20 border border-yellow-400/50 focus:border-yellow-400 focus:outline-none text-white placeholder-gray-400"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Your Phone Number"
                className="w-full p-4 rounded-lg bg-white/20 border border-yellow-400/50 focus:border-yellow-400 focus:outline-none text-white placeholder-gray-400"
              />

              <select
                name="service"
                required
                defaultValue=""
                className="w-full p-4 rounded-lg bg-gray-800 border border-yellow-400/50 focus:border-yellow-400 focus:outline-none text-white"
              >
                <option value="" disabled className="bg-gray-800">Select Service *</option>
                <option value="Stone Crusher Plant" className="bg-gray-800">Stone Crusher Plant</option>
                <option value="Coal Crusher Plant" className="bg-gray-800">Coal Crusher Plant</option>
                <option value="Portable Crusher" className="bg-gray-800">Portable Crusher</option>
                <option value="Conveyor System" className="bg-gray-800">Conveyor System</option>
                <option value="Iron Sand Processing" className="bg-gray-800">Iron Sand Processing</option>
                <option value="Fertilizer Plant" className="bg-gray-800">Fertilizer Plant</option>
                <option value="Maintenance Services" className="bg-gray-800">Maintenance Services</option>
              </select>

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-lg bg-white/20 border border-yellow-400/50 focus:border-yellow-400 focus:outline-none text-white placeholder-gray-400"
              />

              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your Message *"
                className="w-full p-4 rounded-lg bg-white/20 border border-yellow-400/50 focus:border-yellow-400 focus:outline-none text-white placeholder-gray-400 resize-none"
              />

              {/* Honeypot */}
              <input type="text" name="honeypot" className="hidden" autoComplete="off" />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-amber-600
                text-black font-bold uppercase rounded-lg hover:scale-105 transition transform
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? "Sending..." : "Submit Message"}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mt-2">
                  <p className="text-green-400 text-sm text-center">
                    ✅ Message sent successfully! We will contact you soon.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mt-2">
                  <p className="text-red-400 text-sm text-center">
                    ❌ {errorMessage || "Something went wrong. Please try again."}
                  </p>
                </div>
              )}

              {/* Debug Info */}
              {import.meta.env.DEV && (
                <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-3 mt-2">
                  <p className="text-blue-400 text-xs font-mono">
                    Service: {SERVICE_ID}<br />
                    Template: {TEMPLATE_ID}<br />
                    Public Key: {PUBLIC_KEY ? "✓ Set" : "✗ Missing"}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}