import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "ما هي الفئة العمرية التي تستقبلها الحضانة؟",
      answer: "تستقبل حضانتنا الأطفال من عمر 3 أشهر وحتى 4 سنوات."
    },
    {
      question: "ما هي ساعات عمل الحضانة؟",
      answer: "تعمل الحضانة من الأحد إلى الخميس، من الساعة 7:00 صباحًا وحتى 4:00 مساءً. تتوفر ساعات إضافية حتى الساعة 6:00 مساءً برسوم إضافية."
    },
    {
      question: "هل توفر الحضانة وجبات طعام للأطفال؟",
      answer: "نعم، توفر الحضانة وجبتين صحيتين (فطور وغداء) ووجبة خفيفة، مع مراعاة أي حساسيات أو احتياجات غذائية خاصة للأطفال."
    },
    {
      question: "ما هي الأنشطة التعليمية والترفيهية المقدمة؟",
      answer: "نقدم مجموعة متنوعة من الأنشطة التي تشمل اللعب الحر، الأنشطة الفنية والحرفية، القصص، الأغاني، الألعاب التعليمية، والأنشطة الحركية في الأماكن المخصصة للعب الداخلي والخارجي."
    },
    {
      question: "كيف تتواصلون مع أولياء الأمور بخصوص تقدم أطفالهم؟",
      answer: "نتواصل مع أولياء الأمور بشكل يومي من خلال تقارير موجزة، بالإضافة إلى اجتماعات دورية لمناقشة تقدم الطفل وتطوره. كما يمكن التواصل معنا في أي وقت عبر الهاتف أو البريد الإلكتروني."
    },
    {
      question: "ما هي إجراءات السلامة المتبعة في الحضانة؟",
      answer: "نتبع أعلى معايير السلامة والنظافة، حيث يتم تعقيم الألعاب والمرافق بانتظام. جميع موظفينا مدربون على الإسعافات الأولية، وتوجد كاميرات مراقبة في جميع أنحاء الحضانة لضمان سلامة الأطفال."
    },
    {
      question: "هل يمكنني زيارة الحضانة قبل تسجيل طفلي؟",
      answer: "نرحب بزيارات أولياء الأمور للتعرف على مرافق الحضانة والبيئة التعليمية. يرجى الاتصال بنا لتحديد موعد للزيارة."
    },
    {
      question: "ما هي المستندات المطلوبة للتسجيل؟",
      answer: "المستندات المطلوبة تشمل: صورة من شهادة ميلاد الطفل، صورة من سجل الأسرة، صور شخصية للطفل، وصورة من بطاقة هوية ولي الأمر، بالإضافة إلى تعبئة نموذج التسجيل الصحي."
    },
    {
      question: "هل تقدمون برامج تعليمية خاصة للأطفال ذوي الاحتياجات الخاصة؟",
      answer: "يرجى التواصل معنا لمناقشة احتياجات طفلك الخاصة، وسنعمل على توفير الدعم المناسب قدر الإمكان."
    },
    {
      question: "ما هي رسوم التسجيل والدفع؟",
      answer: "تختلف الرسوم حسب الفئة العمرية وساعات الحضور. يرجى الاتصال بنا للحصول على تفاصيل كاملة حول الرسوم وخيارات الدفع المتاحة."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <HelpCircle className="w-12 h-12 text-blue-600 ml-3" />
            <h1 className="text-4xl font-bold text-gray-800">الأسئلة الشائعة</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            إجابات على الأسئلة المتكررة من أولياء الأمور
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-right flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center">
                  {openItems[index] ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 ml-3" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600 ml-3" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 flex-1">
                  {item.question}
                </h3>
              </button>
              
              {openItems[index] && (
                <div className="px-6 pb-5 animate-fadeIn">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            لم تجد إجابة لسؤالك؟
          </h3>
          <p className="text-gray-600 mb-6">
            لا تتردد في التواصل معنا، فريقنا جاهز لمساعدتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              اتصل بنا
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              احجز زيارة
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

