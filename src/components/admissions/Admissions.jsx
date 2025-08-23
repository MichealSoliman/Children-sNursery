import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import {
  GraduationCap,
  FileText,
  CreditCard,
  CheckCircle,
  User,
  DollarSign,
  Phone,
  Download,
  AlertCircle,
  Star
} from 'lucide-react';
import '../admissions/Admissions.css';

const Admissions = () => {
  const registrationSteps = [
    {
      step: 1,
      title: 'تقديم الطلب',
      description: 'ملء نموذج التسجيل الإلكتروني أو زيارة الحضانة',
      icon: FileText,
    },
    {
      step: 2,
      title: 'تقديم الأوراق',
      description: 'إحضار جميع الوثائق والأوراق المطلوبة',
      icon: CheckCircle,
    },
    {
      step: 3,
      title: 'المقابلة الشخصية',
      description: 'لقاء مع إدارة الحضانة لمناقشة احتياجات الطفل',
      icon: User,
    },
    {
      step: 4,
      title: 'دفع الرسوم',
      description: 'سداد رسوم التسجيل والشهر الأول',
      icon: CreditCard,
    },
    {
      step: 5,
      title: 'بداية الدراسة',
      description: 'استقبال الطفل وبداية رحلته التعليمية',
      icon: GraduationCap,
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-pink-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 leading-tight">
            التسجيل والقبول
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            انضم إلى عائلتنا التربوية وابدأ رحلة تعليم طفلك معنا في بيئة آمنة، محفزة ومليئة بالحب والإبداع.
          </p>
        </div>

        {/* Registration Steps */}
        <Card className="mb-20 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-[#149c8c] flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8" />
              خطوات التسجيل
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {registrationSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center group transition-all duration-500 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-[#149c8c] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
                      <div className="text-2xl font-bold text-[#149c8c] mb-1">
                        {step.step}
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
        {/* Required Documents */}
        <Card className="mb-20 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#149c8c] flex items-center gap-3">
              <FileText className="w-6 h-6" />
              الوثائق المطلوبة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: 'شهادة ميلاد الطفل',
                description: 'نسخة أصلية ونسخة مصورة',
                required: true,
              },
              {
                title: 'صور شخصية للطفل',
                description: '4 صور حديثة مقاس 4×6',
                required: true,
              },
              {
                title: 'التقرير الطبي',
                description: 'فحص طبي وشهادة تطعيمات',
                required: true,
              },
              {
                title: 'هوية ولي الأمر',
                description: 'نسخة من الهوية أو الإقامة',
                required: true,
              },
              {
                title: 'إثبات السكن',
                description: 'عقد إيجار أو فاتورة خدمات',
                required: false,
              },
              {
                title: 'شهادة راتب ولي الأمر',
                description: 'لتحديد الرسوم المناسبة (اختياري)',
                required: false,
              }
            ].map((doc, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="mt-1">
                  {doc.required ? (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  ) : (
                    <Star className="w-5 h-5 text-yellow-500" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-800">{doc.title}</h4>
                    <Badge variant={doc.required ? "destructive" : "outline"} className="text-xs">
                      {doc.required ? 'مطلوب' : 'اختياري'}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{doc.description}</p>
                </div>
              </div>
            ))}

          
          </CardContent>
        </Card>
        {/* Tuition Fees & Payment Methods */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#149c8c] flex items-center gap-3">
              <CreditCard className="w-6 h-6" />
              الرسوم الدراسية وطرق الدفع
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* الرسوم */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  category: 'رسوم التسجيل',
                  amount: '500 ريال',
                  description: 'تُدفع مرة واحدة عند التسجيل (غير قابلة للاسترداد)',
                },
                {
                  category: 'الرسوم الشهرية',
                  amount: '1,200 - 1,800 ريال',
                  description: 'تختلف حسب عمر الطفل والبرنامج المختار',
                },
                {
                  category: 'رسوم الوجبات',
                  amount: '300 ريال / شهرياً',
                  description: 'وجبات صحية ومتوازنة (اختيارية)',
                },
                {
                  category: 'رسوم النقل',
                  amount: '400 ريال / شهرياً',
                  description: 'خدمة النقل من وإلى المنزل (اختيارية)',
                }
              ].map((fee, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{fee.category}</h4>
                    <span className="text-lg font-bold text-[#149c8c]">{fee.amount}</span>
                  </div>
                  <p className="text-sm text-gray-600">{fee.description}</p>
                </div>
              ))}
            </div>

            {/* طرق الدفع */}
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
              <h4 className="font-semibold text-green-800 mb-4 text-lg">
                طرق الدفع المتاحة
              </h4>
              <div className="space-y-4">
                {[
                  {
                    method: 'التحويل البنكي',
                    details: 'البنك الأهلي السعودي - رقم الحساب: 123456789',
                    icon: CreditCard
                  },
                  {
                    method: 'الدفع النقدي',
                    details: 'في مكتب الإدارة خلال أوقات الدوام الرسمي',
                    icon: DollarSign
                  },
                  {
                    method: 'الدفع الإلكتروني',
                    details: 'عبر تطبيق البنك أو منصة مدى',
                    icon: Phone
                  }
                ].map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <div className="font-medium text-gray-800">{method.method}</div>
                        <div className="text-sm text-gray-600">{method.details}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>  
  );
};
export default Admissions;
