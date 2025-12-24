"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // The Webhook URL will be added to Vercel later as an Environment Variable
      const response = await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("Success! Your message was sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error: Check your n8n Webhook URL.");
      }
    } catch (error) {
      setStatus("Error: Connection failed.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-black">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-500 mb-6 font-medium text-sm text-center">n8n AI Automation Form</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text" placeholder="Your Name" required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email" placeholder="Email Address" required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message" required rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
            Submit Message
          </button>
        </form>

        {status && (
          <div className={`mt-4 p-3 rounded text-center font-bold ${status.includes("Error") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
            {status}
          </div>
        )}
      </div>
    </main>
  );
}