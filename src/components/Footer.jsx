import React from "react";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Star,
  Baby,
} from "lucide-react";
import "../App.css";

const Footer = () => {
  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "خدماتنا", href: "#services" },
    { name: "عن الحضانة", href: "#about" },
    { name: "اتصل بنا", href: "#contact" },
    { name: "سياسة الخصوصية", href: "#privacy" },
    { name: "الشروط والأحكام", href: "#terms" },
  ];

  const services = [
    "التعليم المبكر",
    "الأنشطة الاجتماعية",
    "الفنون والإبداع",
    "الموسيقى والحركة",
    "التغذية الصحية",
    "الرعاية الطبية",
  ];

  return (
    <footer className="bg-[#149c8c] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center bounce-gentle">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">حضانة براعم المستقبل</h3>
                <p className="text-purple-200 text-sm">رعاية وتعليم بحب</p>
              </div>
            </div>

            <p className="text-purple-100 leading-relaxed mb-6">
              نحن ملتزمون بتوفير أفضل رعاية وتعليم لأطفالكم في بيئة آمنة ومحفزة
              للنمو والتطور.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover-lift"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover-lift"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover-lift"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center space-x-2 rtl:space-x-reverse">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>روابط سريعة</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-purple-100 hover:text-white transition-colors duration-300 hover:translate-x-2 rtl:hover:-translate-x-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center space-x-2 rtl:space-x-reverse">
              <Baby className="w-5 h-5 text-pink-400" />
              <span>خدماتنا</span>
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-purple-100 hover:text-white transition-colors duration-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center space-x-2 rtl:space-x-reverse">
              <Phone className="w-5 h-5 text-green-400" />
              <span>تواصل معنا</span>
            </h4>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-purple-100">
                    الرياض، حي النرجس
                    <br />
                    شارع الأمير محمد بن عبدالعزيز
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-green-400" />
                <p className="text-purple-100" dir="ltr">
                  +966 11 123 4567
                </p>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-purple-100">info@baraem-future.sa</p>
              </div>

              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <Clock className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-purple-100">
                    السبت - الخميس: 6:30 ص - 6:00 م<br />
                    الجمعة: مغلق
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
    </footer>
  );
};

export default Footer;
