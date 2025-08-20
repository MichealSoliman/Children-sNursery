import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Star, Users, BookOpen, Palette, Music, Heart, Shield, Clock } from 'lucide-react';

// استبدل هذه المسارات بمسارات الصور في مشروعك
import nurseryImage1 from '../assets/services-1.jpg'; // صورة الحضانة
import nurseryImage2 from '../assets/services-2.jpg'; // صورة الأطفال يلعبون
import educationalMaterial1 from '../assets/services-3.jpg'; // مواد تعليمية
import educationalMaterial2 from '../assets/services-4.jpg'; 


const NurserySection = () => {
  const services = [
    {
      id: 1,
      title: "الرعاية اليومية المتكاملة",
      description: "رعاية شاملة للأطفال في بيئة آمنة ومحفزة مع فريق مؤهل من المربيات المتخصصات",
      image: nurseryImage1,
      icon: Heart,
      features: ["رعاية طبية", "وجبات صحية", "بيئة آمنة"]
    },
    {
      id: 2,
      title: "الأنشطة التعليمية التفاعلية",
      description: "برامج تعليمية متنوعة تساعد على تنمية المهارات الأساسية والإبداعية للطفل",
      image: nurseryImage2,
      icon: BookOpen,
      features: ["تعلم الحروف", "الأرقام", "المهارات الحركية"]
    },
    {
      id: 3,
      title: "الفنون والحرف اليدوية",
      description: "ورش فنية متخصصة لتنمية الإبداع والمهارات الحركية الدقيقة لدى الأطفال",
      image: educationalMaterial1,
      icon: Palette,
      features: ["الرسم", "الأشغال اليدوية", "النحت"]
    },
    {
      id: 4,
      title: "الموسيقى والحركة",
      description: "جلسات موسيقية تفاعلية تساعد على تطوير الحس الموسيقي والتعبير الحركي",
      image: educationalMaterial2,
      icon: Music,
      features: ["الغناء", "الآلات الموسيقية", "الرقص"]
    }
  ];

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
         
          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            خدماتنا المتميزة
            <span className="block  bg-clip-text text-yellow-500">
              لرعاية أطفالكم
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم أفضل الخدمات التعليمية والترفيهية في بيئة آمنة ومحفزة تساعد على نمو طفلكم بشكل صحي ومتوازن
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-7xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="group bg-white/80 backdrop-blur-sm border-2 border-blue-100 hover:border-[#023047] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardHeader className="pb-4 px-6 pt-6">
                  <CardTitle className="text-2xl font-bold text-gray-800 text-right mb-3 group-hover:text-[#023047] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-right text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2 justify-end">
                    {service.features.map((feature, index) => (
                      <Badge key={index} className="bg-[#023047] text-white p-2 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-md">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

    

        {/* Call to Action */}
        <div className="text-center bg-[#023047] rounded-3xl p-12 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">
            ابدأ رحلة طفلك التعليمية معنا اليوم
          </h2>
          <p className="text-xl mb-8 opacity-90">
            انضم إلى عائلة حضانتنا واكتشف الفرق في رعاية وتعليم طفلك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              احجز زيارة مجانية
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NurserySection;



