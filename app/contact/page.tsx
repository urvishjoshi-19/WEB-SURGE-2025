'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input"; // Assuming you have a custom Input component
import { Button } from "@/components/ui/button"; // Assuming you have a custom Button component

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to an API)
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-[#003366] text-white py-16 text-center">
        <h1 className="text-4xl font-semibold">Contact Us</h1>
        <p className="mt-2 text-lg"></p>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-[#003366] mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-1 w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="mt-1 w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  className="mt-1 w-full border-gray-300 rounded-lg p-3 resize-none"
                ></textarea>
              </div>

              <div>
                <Button type="submit" className="w-full bg-[#003366] text-white hover:bg-[#0077cc]">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-[#003366] mb-6">Our Contact Information</h2>
            <div>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Address:</strong> DRDO Bhawan Rajaji Marg, New Delhi - 110011
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Phone:</strong> +91-11-23010101
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Email:</strong> director@drdo.gov.in
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
