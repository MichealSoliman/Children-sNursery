import React from "react";
import { ArrowLeft, Star, Heart, Sparkles } from "lucide-react";
import "../App.css";
import nurseryImage from "../../public/assets/hero-1.jpg";
import playgroundImage from "../../public/assets/hero-2.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-5"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-end space-x-2 rtl:space-x-reverse">
                <Sparkles className="w-6 h-6 text-yellow-500 " />
                <span className="text-[#149c8c] font-semibold text-lg">
                  مرحباً بكم في
                </span>
                <Sparkles className="w-6 h-6 text-yellow-500 wiggle" />
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-[#023047]">حضانة</span>
                <br />
                <span className="text-[#149c8c]">براعم المستقبل</span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start space-x-1 rtl:space-x-reverse">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current "
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>

            <p className="text-xl lg:text-2xl text-[#023047] leading-relaxed max-w-3xl mx-auto lg:mx-0">
              نوفر بيئة آمنة ومحفزة لنمو طفلك وتطوير مهاراته الاجتماعية
              والتعليمية، حيث نهتم بكل جانب من جوانب نموه العقلي والعاطفي. نعتمد
              على وسائل تعليمية حديثة وألعاب تفاعلية تدمج بين المرح والتعلم، تحت
              إشراف فريق متخصص من المربيات المؤهلات اللاتي يقدمن الرعاية بكل حب
              واهتمام.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <button className="bg-[#149c8c] text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover-lift shadow-xl flex items-center justify-center space-x-2 rtl:space-x-reverse">
                <span>احجز جولة مجانية</span>
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </button>

              <button className="border-2 border-[#023047] text-[#023047] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#149c8c] hover:text-white  transition-all duration-300 hover-lift">
                تعرف على خدماتنا
              </button>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#023047]">+200</div>
                <div className="text-gray-600">طفل سعيد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#023047]">15</div>
                <div className="text-gray-600">سنة خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#023047]">24/7</div>
                <div className="text-gray-600">رعاية مستمرة</div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Main image */}
              <div className="col-span-2 relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift">
                  <img
                    src={nurseryImage}
                    alt="أطفال في الحضانة"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              {/* Secondary image */}
              <div className="col-span-2 relative">
                <div className="relative overflow-hidden rounded-3xl shadow-xl hover-lift">
                  <img
                    src={playgroundImage}
                    alt="منطقة اللعب"
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                    منطقة آمنة 100%
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center bounce-gentle">
              <Star className="w-6 h-6 text-yellow-800" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center float">
              <Heart className="w-8 h-8 text-pink-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
