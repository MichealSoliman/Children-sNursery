import React from 'react';
import { Calendar, User, ArrowLeft, BookOpen, Heart, Users, Star } from 'lucide-react';
import './BlogNewsSection.css'
const BlogNewsSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "نصائح مهمة لتحضير طفلك لأول يوم في الحضانة",
      excerpt: "كيف تساعدين طفلك على التأقلم مع البيئة الجديدة والاستمتاع بتجربة التعلم الأولى", 
      category: "نصائح الأبوة",
      image: "../public/assets/kindergarten_education.jpg",
      tags: ["تربية", "نصائح", "أطفال"]
    },
    {
      id: 2,
      title: "فعاليات الأسبوع الثقافي في حضانة الأمل",
      excerpt: "شاهدوا أجمل اللحظات من فعاليات الأسبوع الثقافي وأنشطة الأطفال المتنوعة",  
      category: "أخبار الحضانة",
      image: "../public/assets/kindergarten_activity1.jpeg",
      tags: ["فعاليات", "ثقافة", "أنشطة"]
    },
    {
      id: 3,
      title: "أهمية اللعب في تنمية مهارات الطفل",
      excerpt: "تعرفي على كيفية استخدام اللعب كوسيلة تعليمية فعالة لتطوير قدرات طفلك",
      category: "تعليم وتطوير",
      image: "../public/assets/kindergarten_classroom.jpg",
      tags: ["تعليم", "لعب", "تطوير"]
    },
    {
      id: 4,
      title: "احتفالية اليوم الوطني في حضانتنا",
      excerpt: "صور وذكريات جميلة من احتفالنا باليوم الوطني السعودي مع أطفالنا الأعزاء",
      category: "أخبار الحضانة",
      image: "../public/assets/kindergarten_activity2.jpg",
      tags: ["وطني", "احتفال", "تراث"]
    },
    {
      id: 5,
      title: "كيفية اختيار الحضانة المناسبة لطفلك",
      excerpt: "دليل شامل للأهل لاختيار أفضل حضانة تناسب احتياجات طفلهم وتوقعاتهم",
      category: "نصائح الأبوة",
      image: "../public/assets/kindergarten_building.webp",
      tags: ["اختيار", "حضانة", "نصائح"]
    },
    {
      id: 6,
      title: "ورشة الفنون والحرف اليدوية للأطفال",
      excerpt: "تفاصيل ورشة الفنون الجديدة وكيف تساهم في تنمية الإبداع لدى الأطفال",
      category: "أنشطة وفعاليات",
      image: "../public/assets/kindergarten_education.jpg",
      tags: ["فنون", "إبداع", "ورشة"]
    }
  ];

  const categories = [
    // { name: "الكل",  active: true },
    { name: "نصائح الأبوة"},
    { name: "أخبار الحضانة"},
    { name: "تعليم وتطوير",},
    { name: "أنشطة وفعاليات",}
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#023047] rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            المدونة والأخبار
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اكتشفي أحدث النصائح في تربية الأطفال، وتابعي أخبار حضانتنا وفعالياتها المميزة
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                category
                  ? 'bg-[#023047] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-[#023047]'
              }`}
            >
              {category.name} 
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

               

                {/* Read More Button */}
                <button className="w-full bg-[#023047] text-white py-3 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
                 <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  <span>اقرأ المزيد</span>
                  
                  
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-1">150+</h4>
              <p className="text-gray-600">مقال تعليمي</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-1">5000+</h4>
              <p className="text-gray-600">أولياء أمور</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-3">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-1">4.9</h4>
              <p className="text-gray-600">تقييم المحتوى</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-1">98%</h4>
              <p className="text-gray-600">رضا الأهالي</p>
            </div>
          </div>
        </div>

       
      
      </div>
    </section>
  );
};

export default BlogNewsSection;

