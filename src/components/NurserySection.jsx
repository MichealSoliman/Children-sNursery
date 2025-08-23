import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import {
  Heart, BookOpen, Palette, Music,
  Languages, Smile, ShieldCheck, Sun
} from 'lucide-react';

// نفس الصور المستخدمة
import nurseryImage1 from '../../public/assets/services-1.jpg';
import nurseryImage2 from '../../public/assets/services-2.jpg';
import nurseryImage3 from '../../public/assets/services-3.jpg';
import nurseryImage4 from '../../public/assets/services-4.jpg';

const NurserySection = () => {
  const services = [
    {
      id: 1,
      title: "الرعاية اليومية المتكاملة",
      description: "نقدم رعاية متكاملة تشمل المتابعة الصحية، الغذاء المتوازن، والنظافة اليومية للأطفال في بيئة دافئة وآمنة.",
      image: nurseryImage1,
      icon: Heart,
      features: ["رعاية طبية", "وجبات صحية", "نظام متابعة يومي"]
    },
    {
      id: 2,
      title: "الأنشطة التعليمية التفاعلية",
      description: "من خلال التعلم باللعب، يتعلّم الأطفال الحروف والأرقام ويكتسبون المهارات الحركية والاجتماعية بطريقة ممتعة.",
      image: nurseryImage2,
      icon: BookOpen,
      features: ["الحروف والأرقام", "تنمية الذكاء", "تعلم تفاعلي"]
    },
    {
      id: 3,
      title: "الفنون والحرف اليدوية",
      description: "نشجع الأطفال على التعبير الفني من خلال الرسم، الطباعة، والأشغال اليدوية لتعزيز الإبداع والثقة بالنفس.",
      image: nurseryImage3,
      icon: Palette,
      features: ["رسم وتلوين", "أعمال يدوية", "ورش فنية"]
    },
    {
      id: 4,
      title: "الموسيقى والحركة",
      description: "نستخدم الموسيقى والرقص كوسيلة للتعبير الحركي وتطوير الحس الموسيقي والقدرات الجسدية.",
      image: nurseryImage4,
      icon: Music,
      features: ["الغناء", "الآلات الموسيقية", "تمارين حركية"]
    },
    {
      id: 5,
      title: "التعليم المبكر باللغات",
      description: "تقديم دروس مبسطة باللغة الإنجليزية من خلال القصص والأغاني لتنمية مهارات التواصل منذ الصغر.",
      image: nurseryImage1,
      icon: Languages,
      features: ["مفردات إنجليزية", "أغاني تعليمية", "تفاعل لغوي"]
    },
    {
      id: 6,
      title: "الدعم السلوكي والنفسي",
      description: "متابعة سلوك الأطفال ومساعدتهم على التعبير عن مشاعرهم وتعزيز احترام الذات والتفاعل الاجتماعي.",
      image: nurseryImage2,
      icon: Smile,
      features: ["تعزيز الثقة", "دعم عاطفي", "مراقبة سلوكية"]
    },
    {
      id: 7,
      title: "السلامة والأمان",
      description: "بيئة آمنة بوسائل حماية متطورة وكاميرات مراقبة لضمان راحة بال الأهالي وحماية الأطفال.",
      image: nurseryImage3,
      icon: ShieldCheck,
      features: ["مخارج طوارئ", "كاميرات مراقبة", "إجراءات وقائية"]
    },
    {
      id: 8,
      title: "أنشطة الهواء الطلق",
      description: "مساحات خارجية آمنة لممارسة الأنشطة البدنية والألعاب الحرة التي تنمي المهارات الجسدية والاجتماعية.",
      image: nurseryImage4,
      icon: Sun,
      features: ["ألعاب حركية", "تمارين في الخارج", "أنشطة ترفيهية"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            خدماتنا المتميزة
            <span className="block text-[#149c8c]">لرعاية أطفالكم</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            بيئة تعليمية وترفيهية متكاملة مصممة خصيصًا لتطوير مهارات طفلك من خلال برامج فعالة وممتعة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="group bg-white border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                    <IconComponent className="w-6 h-6 text-[#149c8c]" />
                  </div>
                </div>
                <CardHeader className="pb-2 pt-4 px-6">
                  <CardTitle className="text-xl font-bold text-right text-[#149c8c] mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-right leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6 mt-2">
                  <div className="flex flex-wrap gap-2 justify-end">
                    {service.features.map((feature, index) => (
                      <Badge
                        key={index}
                        className="bg-[#149c8c] text-white px-3 py-1 rounded-full text-sm shadow hover:scale-105 transition-transform"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center bg-[#149c8c] rounded-3xl p-12 mt-24 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">
            ابدأ رحلة طفلك التعليمية معنا اليوم
          </h2>
          <p className="text-lg mb-8 opacity-90">
            انضم إلى عائلتنا واكتشف الفرق في رعاية وتعليم طفلك بطريقة عصرية وآمنة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300">
              احجز زيارة مجانية
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NurserySection;
