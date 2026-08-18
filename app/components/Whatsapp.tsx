"use client";

import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "8318558807";

  const message =
    "Hello, I am interested in your website development services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-500  text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600"
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.5 0 .17 5.33.17 11.87c0 2.09.55 4.13 1.6 5.93L.1 24l6.34-1.66a11.86 11.86 0 0 0 5.6 1.42h.01c6.54 0 11.87-5.33 11.87-11.87 0-3.17-1.24-6.15-3.4-8.41ZM12.05 21.75h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.76.99 1-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.24c0-5.44 4.43-9.87 9.88-9.87 2.63 0 5.1 1.03 6.96 2.9a9.82 9.82 0 0 1 2.9 6.97c0 5.45-4.43 9.88-9.85 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>

      {/* <span className="hidden sm:inline">Chat on WhatsApp</span> */}
    </a>
  );
};

export default WhatsAppButton;