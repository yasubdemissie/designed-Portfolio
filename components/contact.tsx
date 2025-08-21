"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Phone,
  MapPin,
  Clock,
  Globe,
  LinkIcon,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
// EmailJS will be imported after installation

export default function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Option 1: Formspree (free service)
      const response = await fetch("https://formspree.io/f/mkgzybpy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact me directly at yasubwachifo@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 transition-all duration-700 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" /> */}

        {/* Floating sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="w-8 h-8 text-brand-text" />
            <h2 className="text-4xl md:text-5xl font-light bg-brand-text bg-clip-text text-transparent">
              Let&apos;s Work Together
            </h2>
            <Sparkles className="w-8 h-8 text-brand-text" />
          </motion.div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
          <motion.aside
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute rounded-2xl" />

              <div className="relative rounded-2xl bg-brand-second backdrop-blur-xl p-8 transition-all duration-500">
                <motion.h3
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >                  Contact Details
                </motion.h3>

                <ul className="space-y-6 text-gray-700 dark:text-gray-300">
                  {[
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+251 938 177 141",
                      href: "tel:+251938177141",
                      bgColor: "bg-violet-100 dark:bg-violet-900/30",
                      iconColor: "text-violet-600 dark:text-violet-400",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "yasdam@gmail.com",
                      href: "mailto:yasdam@gmail.com",
                      bgColor: "bg-sky-100 dark:bg-sky-900/30",
                      iconColor: "text-sky-600 dark:text-sky-400",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Addis Ababa, Ethiopia",
                      bgColor: "bg-rose-100 dark:bg-rose-900/30",
                      iconColor: "text-rose-600 dark:text-rose-400",
                    },
                    {
                      icon: Clock,
                      label: "Availability",
                      value:
                        "Open to freelance & full-time · Responds within 24 hours",
                      bgColor: "bg-amber-100 dark:bg-amber-900/30",
                      iconColor: "text-amber-600 dark:text-amber-400",
                    },
                    {
                      icon: Globe,
                      label: "Website",
                      value: "yasubdemissie.dev",
                      href: "#",
                      bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
                      iconColor: "text-emerald-600 dark:text-emerald-400",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={item.label}
                      className="flex items-start gap-4 group/item"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ x: 4 }}
                    >
                      <div
                        className={`p-2 rounded-xl ${item.bgColor} group-hover/item:scale-110 transition-all duration-300`}
                      >
                        <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1 font-medium">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group-hover/item:underline"
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {item.value}
                            {item.href.startsWith("http") && (
                              <LinkIcon className="inline h-3 w-3 ml-1" />
                            )}
                          </a>
                        ) : (
                          <span>{item.value}</span>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 font-medium">
                    Connect With Me
                  </div>
                  <div className="flex gap-3">
                    {[
                      {
                        icon: Github,
                        href: "#",
                        label: "GitHub",
                        bgColor: "bg-slate-100 dark:bg-slate-800",
                        iconColor: "text-slate-600 dark:text-slate-400",
                      },
                      {
                        icon: Linkedin,
                        href: "#",
                        label: "LinkedIn",
                        bgColor: "bg-blue-100 dark:bg-blue-800",
                        iconColor: "text-blue-600 dark:text-blue-400",
                      },
                      {
                        icon: Mail,
                        href: "mailto:yasdam@gmail.com",
                        label: "Email",
                        bgColor: "bg-red-100 dark:bg-red-800",
                        iconColor: "text-red-600 dark:text-red-400",
                      },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/social p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-500 text-gray-600 dark:text-gray-300"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <div
                          className={`absolute inset-0 ${social.bgColor} opacity-0 group-hover/social:opacity-20 rounded-xl transition-opacity duration-300`}
                        />
                        <social.icon
                          className={`w-5 h-5 relative z-10 ${social.iconColor} group-hover/social:scale-110 transition-all duration-300`}
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          <div className="md:col-span-3">
            {/* 
              SETUP INSTRUCTIONS:
              1. Go to https://formspree.io and create a free account
              2. Create a new form and get your form ID
              3. Replace "YOUR_FORM_ID" in the handleSubmit function with your actual form ID
              4. The form will automatically send emails to your registered email address
              
              Alternative: You can also use Netlify Forms, EmailJS, or create your own API endpoint
            */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    id: "name",
                    label: "Name",
                    placeholder: "Your name",
                    type: "text",
                  },
                  {
                    id: "email",
                    label: "Email",
                    placeholder: "your@email.com",
                    type: "email",
                  },
                ].map((field) => (
                  <motion.div
                    key={field.id}
                    whileHover={{ y: -2 }}
                    className="relative group"
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300"
                    >
                      {field.label}
                    </label>
                    <div className="relative">
                      <Input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField(field.id)}
                        onBlur={() => setFocusedField(null)}
                        className="h-14 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-500 hover:shadow-md focus:shadow-lg"
                      />
                      {focusedField === field.id && (
                        <motion.div
                          className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div whileHover={{ y: -2 }} className="relative group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300"
                >
                  Message
                </label>
                <div className="relative">
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-500 resize-none hover:shadow-md focus:shadow-lg"
                  />
                  {focusedField === "message" && (
                    <motion.div
                      className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Status Messages */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl border-2 ${
                    submitStatus.type === "success"
                      ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                      : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20 text-red-800 dark:text-red-200"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute rounded-xl blur opacity-30 transition-all duration-500" />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="relative w-full bg-custom-accent-light hover:bg-custom-accent-light/80 text-white py-4 rounded-xl transition-all duration-500 border-0 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <motion.div
                    className="flex items-center justify-center gap-3"
                    whileHover={{ x: 2 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.div>
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
