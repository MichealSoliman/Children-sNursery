// ContactButtons.jsx
import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";


const ContactButtons = () => {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col gap-3 z-50">
      {/* زر الاتصال */}
      <a
        href="tel:0123456789"
        className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
        title="اتصال"
      >
        <FaPhone size={20} />
      </a>

      {/* زر الواتساب */}
      <a
        href="https://wa.me/201234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition"
        title="واتساب"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};

export default ContactButtons;
