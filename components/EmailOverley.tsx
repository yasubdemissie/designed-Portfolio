"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Mail, User, MessageSquare, Send } from "lucide-react";
import { useContactContext } from "./supporters/context";

export function EmailOverlay() {
  const { isOverlayOpen: isOpen, setIsOverlayOpen } = useContactContext();
  function onClose() {
    setIsOverlayOpen(false);
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex bg-brand-main items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 backdrop-blur-md transition-opacity bg-brand-main duration-300"
        onClick={onClose}
      />

      {/* Form Container */}
      <div className="relative w-full bg-brand-main max-w-md rounded-2xl shadow-2xl p-8 transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <Button variant={"email"} onClick={onClose}>
          <X className="w-5 h-5 text-gray-600" />
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-custom-accent-dark mx-auto mb-4 flex items-center justify-center">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600">We&apos;d love to hear from you</p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-custom-accent-dark">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-600">
              Thank you for reaching out. We&apos;ll get back to you soon.
            </p>
          </div>
        )}

        {/* Form */}
        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-12 py-3 bg-white/70 border-gray-300 focus:border-[#37003c] focus:ring-[#37003c] rounded-lg"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-12 py-3 bg-white/70 border-gray-300 focus:border-[#37003c] focus:ring-[#37003c] rounded-lg"
              />
            </div>

            {/* Subject Field */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="pl-12 py-3 bg-white/70 border-gray-300 focus:border-[#37003c] focus:ring-[#37003c] rounded-lg"
              />
            </div>

            {/* Message Field */}
            <div>
              <Textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="bg-white/70 border-gray-300 focus:border-[#37003c] focus:ring-[#37003c] rounded-lg resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "#37003c",
                background: "linear-gradient(135deg, #37003c 0%, #66006f 100%)",
              }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </div>
              )}
            </Button>
          </form>
        )}

        {/* Footer Note */}
        {!isSubmitted && (
          <p className="text-center text-sm text-gray-500 mt-6">
            Thank you for reaching out! I&apos;ll get back to you as soon as
            possible.
          </p>
        )}
      </div>
    </div>
  );
}
