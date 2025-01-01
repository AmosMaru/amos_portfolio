import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import LoaderSpinner from "./Loader";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/mkggqvpy", {
        method: "POST",
        body: new FormData(e.target),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I will get back to you soon.",
        });
        e.target.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#111828]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="relative text-center mb-10">
            <h2 className="text-4xl md:text-8xl font-bold text-gray-500/10 select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
              CONTACT ME
            </h2>
            <h3 className="text-3xl font-bold text-white relative mb-2">
              Get In Touch
            </h3>
            <div className="w-20 h-1 bg-[#32daa1] mx-auto mb-4"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="lg:pl-12">
            <div className="bg-[#1d2939] rounded-2xl p-8 text-white h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Amos KIbet</h3>
                <p className="text-gray-400 text-sm font-medium mb-4">
                  Backend & AI Developer
                </p>
                <p className="text-gray-400  leading-relaxed">
                  I'm always interested in hearing about new projects and
                  opportunities. Let's collaborate to bring your ideas to life!
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 mb-8">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <p className="font-medium mb-1 text-gray-400">Email</p>
                  <a
                    href="mailto:amosmaru@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    amosmaru10@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 mb-8">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <p className="font-medium mb-1 text-gray-400">Phone</p>
                  <a
                    href="tel:+254711470560"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +254 768 500 572
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-medium mb-4">Let's Connect:</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/amos-kibet-maru-107249230/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="text-white font-bold hover:text-[#37b890] transition-all duration-300 text-xl md:text-2xl lg:text-3xl" />
                  </a>
                  <a
                    href="https://x.com/Amoskibetmaru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="text-white font-bold hover:text-[#37b890] transition-all duration-300 text-xl md:text-2xl lg:text-3xl" />
                  </a>
                  <a
                    href="https://github.com/AmosMaru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-white font-bold hover:text-[#37b890] transition-all duration-300 text-xl md:text-2xl lg:text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1d2939] rounded-2xl shadow-lg p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="https://formspree.io/f/mkggqvpy"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border bg-transparent text-white placeholder:text-xs border-gray-500 focus:border-[#32daa1] focus:ring-2 focus:ring-[#32daa1]/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border bg-transparent text-white placeholder:text-xs border-gray-500 focus:border-[#32daa1] focus:ring-2 focus:ring-[#32daa1]/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border bg-transparent text-white placeholder:text-xs border-gray-500 focus:border-[#32daa1] focus:ring-2 focus:ring-[#32daa1]/20 outline-none transition-all resize-none"
                  placeholder="Hello, I would like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#32daa1] hover:bg-[#32daa1]/90 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <LoaderSpinner />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus.message && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-white text-red-600"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
