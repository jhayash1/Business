"use client"

import { useState } from "react"

export default function Contact(){
    const[formData,setFormData] = useState({
        name: "",
  email: "",
  projectType: "",
  message: "",
    })
    const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
    return(
        <section id="contact" className="bg-gray-50 py-24">

        <div className="mx-auto max-w-4xl px-6">

          <div className="text-center">

            <p className="font-semibold text-blue-600">
              CONTACT US
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Let's Build Something Together
            </h2>

            <p className="mt-4 text-gray-600">
              Tell us about your project and we'll get back to you.
            </p>

          </div>


          <form className="mx-auto mt-12 max-w-2xl space-y-5" onSubmit={handleSubmit}>

            <div className="grid gap-5 md:grid-cols-2">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="rounded-lg border bg-white px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="rounded-lg border bg-white px-4 py-3 outline-none focus:border-blue-600"
              />

            </div>

            <input
              type="text"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              placeholder="Project Type"
              className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-blue-600"
            />

            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-blue-600"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>
    )
}