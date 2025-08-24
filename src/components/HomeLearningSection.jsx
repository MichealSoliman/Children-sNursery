import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  Users,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Lightbulb,
  Target,
  Award,
} from "lucide-react";
import homeLearningImg from "../../public/assets/home-learning.jpg";
import studySpaceImg from "../../public/assets/study-space.jpg";
import homeworkHelpImg from "../../public/assets/homework-help.jpg";

const HomeLearningSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const learningCards = [
    {
      id: 1,
      title: "التعامل مع الأطفال",
      subtitle: "بناء علاقة إيجابية",
      description:
        "تعلم كيفية التواصل الفعال مع طفلك وبناء بيئة محفزة للتعلم في المنزل",
      image: homeLearningImg,
      icon: Heart,
      color: "from-pink-400 to-rose-500",
      tips: [
        "استخدم التشجيع الإيجابي دائماً",
        "اصغ لطفلك واحترم مشاعره",
        "حدد روتين يومي ثابت للتعلم",
        "كن صبوراً ومتفهماً لاحتياجاته",
      ],
    },
    {
      id: 2,
      title: "تدريس المواد",
      subtitle: "التعلم من خلال اللعب",
      description:
        "طرق مبتكرة وممتعة لتعليم المواد الأساسية كالقراءة والكتابة والرياضيات",
      image: studySpaceImg,
      icon: BookOpen,
      color: "from-blue-400 to-indigo-500",
      tips: [
        "استخدم الألعاب التعليمية",
        "اربط التعلم بالحياة اليومية",
        "نوع في طرق التدريس",
        "اجعل التعلم تفاعلياً وممتعاً",
      ],
    },
    {
      id: 3,
      title: "المتابعة والتقييم",
      subtitle: "تتبع التقدم",
      description:
        "كيفية متابعة تقدم طفلك وتقييم مستواه التعليمي بطريقة إيجابية ومحفزة",
      image: homeworkHelpImg,
      icon: Target,
      color: "from-green-400 to-emerald-500",
      tips: [
        "احتفل بالإنجازات الصغيرة",
        "استخدم جداول المكافآت",
        "راجع التقدم أسبوعياً",
        "تواصل مع معلمي الحضانة",
      ],
    },
  ];

  const quickTips = [
    {
      icon: Lightbulb,
      text: "اجعل وقت التعلم ممتعاً",
      color: "text-yellow-500",
    },
    { icon: Star, text: "احتفل بكل إنجاز", color: "text-purple-500" },
    { icon: Users, text: "شارك في أنشطة جماعية", color: "text-blue-500" },
    {
      icon: Award,
      text: "كافئ الجهد وليس النتيجة فقط",
      color: "text-green-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-200 to-blue-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-[#149c8c] p-4 rounded-full shadow-lg">
              <Home className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            التعلم في البيت
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              رحلة مستمرة مع طفلك
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نساعدك في بناء بيئة تعليمية محفزة في المنزل، مع أدوات وطرق مبتكرة
            لمتابعة تقدم طفلك بعد انتهاء فترة الحضانة وضمان استمرار نموه
            التعليمي والشخصي
          </p>
        </motion.div>

        {/* Main Learning Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {learningCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-80`}
                  ></div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <card.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {card.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Tips List */}
                  <div
                    className={`space-y-3 transition-all duration-500 ${
                      activeCard === card.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {card.tips.map((tip, tipIndex) => (
                      <motion.div
                        key={tipIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: activeCard === card.id ? 1 : 0,
                          x: activeCard === card.id ? 0 : -20,
                        }}
                        transition={{ duration: 0.3, delay: tipIndex * 0.1 }}
                        className="flex items-center space-x-3 space-x-reverse"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="mt-6">
                    <button
                      className={`w-full bg-gradient-to-r ${card.color} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 space-x-reverse group`}
                    >
                      <span>اعرف المزيد</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              نصائح سريعة للنجاح
            </h3>
            <p className="text-gray-600">
              إرشادات بسيطة لجعل التعلم المنزلي أكثر فعالية ومتعة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group cursor-pointer"
              >
                <div className="mb-4">
                  <tip.icon
                    className={`w-12 h-12 ${tip.color} mx-auto transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>
                <p className="text-gray-700 font-medium">{tip.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-[#149c8c] rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">ابدأ رحلة التعلم اليوم</h3>
            <p className="text-blue-100 mb-8 text-lg">
              انضم إلى آلاف الأهالي الذين يثقون بنا في تعليم أطفالهم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                تواصل معنا
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                احجز استشارة مجانية
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default HomeLearningSection;
