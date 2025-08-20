import React from 'react';
import { 
  Heart, 
  Users, 
  Award, 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Star,
  CheckCircle,
  Target,
  Lightbulb,
  Smile
} from 'lucide-react';
import '../App.css';
import nurseryTeamImage from '../../public/assets/about.jpg';

const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "200+",
      label: "طفل سعيد",
      color: "bg-[#023047]"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15",
      label: "سنة خبرة",
      color: "bg-[#023047]"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "100%",
      label: "بيئة آمنة",
      color: "bg-[#023047]"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "4.9",
      label: "تقييم الأهالي",
      color: "bg-[#023047]"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "الحب والرعاية",
      description: "نؤمن بأن الحب هو أساس التربية السليمة"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "التميز في التعليم",
      description: "نسعى لتقديم أفضل البرامج التعليمية المطورة"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "الأمان أولاً",
      description: "سلامة أطفالكم هي أولويتنا القصوى"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "الإبداع والابتكار",
      description: "نحفز الأطفال على التفكير الإبداعي والمبتكر"
    }
  ];

 

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
  

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse mb-4">
            
            <span className="text font-bold font-semibold text-lg">تعرف علينا</span>
            
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#023047] mb-6">
            من نحن؟ <span className="text-yellow-500">حضانة براعم المستقبل</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن أكثر من مجرد حضانة، نحن شركاء في رحلة نمو وتطور أطفالكم
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center space-x-3 rtl:space-x-reverse">
                <Heart className="w-8 h-8 text-red-600" />
                <span>رسالتنا</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                في حضانة براعم المستقبل، نؤمن بأن كل طفل هو كنز ثمين يحتاج إلى رعاية خاصة وحب لا محدود. 
                نحن ملتزمون بتوفير بيئة تعليمية آمنة ومحفزة تساعد الأطفال على النمو والازدهار في جميع جوانب شخصيتهم.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                منذ تأسيسنا قبل 15 عاماً، نفخر بكوننا البيت الثاني لأكثر من 200 طفل، حيث نقدم لهم 
                أفضل الخدمات التعليمية والترفيهية مع فريق متخصص من المربيات المؤهلات.
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift">
              <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-6 h-6 text-green-500" />
                <span>تواصل معنا</span>
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-[#023047] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">هاتف الحضانة</p>
                    <p className="text-gray-600" dir="ltr">+966 11 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-[#023047] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">البريد الإلكتروني</p>
                    <p className="text-gray-600">info@baraem-future.sa</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-[#023047] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">العنوان</p>
                    <p className="text-gray-600">الرياض، حي النرجس<br />شارع الأمير محمد بن عبدالعزيز</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-[#023047] rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">ساعات العمل</p>
                    <p className="text-gray-600">السبت - الخميس: 6:30 ص - 6:00 م</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift">
                <img 
                  src={nurseryTeamImage} 
                  alt="فريق حضانة براعم المستقبل" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-purple-800 font-bold text-lg">فريقنا المتخصص</p>
                  <p className="text-purple-600">مربيات مؤهلات ومدربات</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover-lift text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 `}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              قيمنا <span className="text-yellow-500">ومبادئنا</span>
            </h3>
            <p className="text-lg text-gray-600">
              المبادئ التي نؤمن بها ونطبقها في رعاية أطفالكم
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover-lift text-center group"
              >
                <div className="w-16 h-16 bg-[#023047] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:wiggle">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;

