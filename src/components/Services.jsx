import React from 'react';
import { 
  BookOpen, 
  Users, 
  Palette, 
  Music, 
  Heart, 
  Shield, 
  Clock, 
  Utensils,
  Baby,
  Gamepad2,
  GraduationCap,
  Camera
} from 'lucide-react';
import '../App.css';

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "التعليم المبكر",
      description: "برامج تعليمية متطورة تناسب كل مرحلة عمرية لتنمية قدرات الطفل الذهنية والمعرفية",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "الأنشطة الاجتماعية",
      description: "أنشطة جماعية تساعد الأطفال على تطوير مهاراتهم الاجتماعية وبناء صداقات جديدة",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "الفنون والإبداع",
      description: "ورش فنية متنوعة للرسم والتلوين والأشغال اليدوية لتنمية الإبداع والخيال",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "الموسيقى والحركة",
      description: "جلسات موسيقية وحركية تساعد على تطوير الحس الفني والتناسق الحركي",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "الأمان والحماية",
      description: "بيئة آمنة 100% مع أنظمة مراقبة متطورة وفريق مدرب على الإسعافات الأولية",
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "التغذية الصحية",
      description: "وجبات صحية ومتوازنة معدة بعناية من قبل أخصائيي التغذية",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const additionalServices = [
    {
      icon: <Baby className="w-6 h-6" />,
      title: "رعاية الرضع",
      description: "رعاية خاصة للأطفال من عمر 6 أشهر إلى سنتين"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "ساعات مرنة",
      description: "أوقات عمل مرنة تناسب جدول الأهل"
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "ألعاب تعليمية",
      description: "ألعاب حديثة تجمع بين المتعة والتعلم"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "إعداد للمدرسة",
      description: "برامج تحضيرية لدخول المرحلة الابتدائية"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "تقارير يومية",
      description: "تقارير مصورة يومية عن أنشطة طفلك"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "الدعم النفسي",
      description: "أخصائيون نفسيون لدعم نمو الطفل الصحي"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse mb-4">
            <Heart className="w-8 h-8 text-pink-500 bounce-gentle" />
            <span className="text-purple-600 font-semibold text-lg">خدماتنا المميزة</span>
            <Heart className="w-8 h-8 text-pink-500 bounce-gentle" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            نقدم أفضل <span className="gradient-text">الخدمات</span> لأطفالكم
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن ملتزمون بتوفير بيئة تعليمية شاملة تساعد على نمو طفلكم في جميع الجوانب الجسدية والعقلية والاجتماعية
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${service.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift group cursor-pointer`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:wiggle`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              خدمات إضافية <span className="gradient-text">مميزة</span>
            </h3>
            <p className="text-lg text-gray-600">
              المزيد من الخدمات التي تجعل تجربة طفلكم معنا استثنائية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 rtl:space-x-reverse p-6 rounded-2xl hover:bg-purple-50 transition-all duration-300 hover-lift group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bounce-gentle">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              هل أنت مستعد لبدء رحلة طفلك معنا؟
            </h3>
            <p className="text-xl mb-8 opacity-90">
              احجز جولة مجانية اليوم واكتشف لماذا نحن الخيار الأول للأهالي في المملكة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover-lift shadow-lg">
                احجز جولة مجانية
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 hover-lift">
                اتصل بنا الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

