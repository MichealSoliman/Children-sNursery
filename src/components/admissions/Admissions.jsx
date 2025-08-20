import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import '../admissions/Admissions.css'
import { 
  GraduationCap,
  FileText,
  CreditCard,
  CheckCircle,
  User,
  Mail,
  Phone,
  Calendar,
  Baby,
  MapPin,
  Clock,
  DollarSign,
  Download,
  Send,
  AlertCircle,
  Star
} from 'lucide-react';

const Admissions = () => {


 

  

  const registrationSteps = [
    {
      step: 1,
      title: 'تقديم الطلب',
      description: 'ملء نموذج التسجيل الإلكتروني أو زيارة الحضانة',
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      step: 2,
      title: 'تقديم الأوراق',
      description: 'إحضار جميع الوثائق والأوراق المطلوبة',
      icon: CheckCircle,
      color: 'bg-green-500'
    },
    {
      step: 3,
      title: 'المقابلة الشخصية',
      description: 'لقاء مع إدارة الحضانة لمناقشة احتياجات الطفل',
      icon: User,
      color: 'bg-purple-500'
    },
    {
      step: 4,
      title: 'دفع الرسوم',
      description: 'سداد رسوم التسجيل والشهر الأول',
      icon: CreditCard,
      color: 'bg-orange-500'
    },
    {
      step: 5,
      title: 'بداية الدراسة',
      description: 'استقبال الطفل وبداية رحلته التعليمية',
      icon: GraduationCap,
      color: 'bg-pink-500'
    }
  ];

  const requiredDocuments = [
    {
      title: 'شهادة ميلاد الطفل',
      description: 'نسخة أصلية ونسخة مصورة',
      required: true
    },
    {
      title: 'صور شخصية للطفل',
      description: '4 صور حديثة مقاس 4×6',
      required: true
    },
    {
      title: 'التقرير الطبي',
      description: 'فحص طبي شامل وشهادة التطعيمات',
      required: true
    },
    {
      title: 'هوية ولي الأمر',
      description: 'نسخة من الهوية الوطنية أو الإقامة',
      required: true
    },
    {
      title: 'إثبات السكن',
      description: 'عقد إيجار أو فاتورة خدمات',
      required: false
    },
    {
      title: 'شهادة راتب ولي الأمر',
      description: 'لتحديد الرسوم المناسبة',
      required: false
    }
  ];

  const feeStructure = [
    {
      category: 'رسوم التسجيل',
      amount: '500 ريال',
      description: 'تدفع مرة واحدة عند التسجيل (غير قابلة للاسترداد)',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      category: 'الرسوم الشهرية',
      amount: '1,200 - 1,800 ريال',
      description: 'حسب العمر والبرنامج المختار',
      color: 'bg-green-50 border-green-200'
    },
    {
      category: 'رسوم الوجبات',
      amount: '300 ريال شهرياً',
      description: 'وجبات صحية ومتوازنة (اختيارية)',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      category: 'رسوم النقل',
      amount: '400 ريال شهرياً',
      description: 'خدمة النقل من وإلى المنزل (اختيارية)',
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const paymentMethods = [
    {
      method: 'التحويل البنكي',
      details: 'البنك الأهلي السعودي - رقم الحساب: 123456789',
      icon: CreditCard
    },
    {
      method: 'الدفع النقدي',
      details: 'في مكتب الإدارة خلال ساعات العمل الرسمية',
      icon: DollarSign
    },
    {
      method: 'الدفع الإلكتروني',
      details: 'عبر تطبيق البنك أو منصة مدى',
      icon: Phone
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            التسجيل والقبول
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            انضم إلى عائلة حضانتنا واحصل على أفضل رعاية تعليمية لطفلك في بيئة آمنة ومحفزة للإبداع والنمو
          </p>
        </div>

        {/* Registration Steps */}
        <Card className="mb-16 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              خطوات عملية التسجيل
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-6">
              {registrationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
                    <div className="text-2xl font-bold text-gray-800 mb-2">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Required Documents */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <FileText className="w-6 h-6 text-green-600" />
                المتطلبات والأوراق المطلوبة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {requiredDocuments.map((doc, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-shrink-0">
                    {doc.required ? (
                      <AlertCircle className="w-5 h-5 text-red-500 mt-1" />
                    ) : (
                      <Star className="w-5 h-5 text-yellow-500 mt-1" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-800">{doc.title}</h4>
                      <Badge variant={doc.required ? "destructive" : "secondary"} className="text-xs">
                        {doc.required ? 'مطلوب' : 'اختياري'}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{doc.description}</p>
                  </div>
                </div>
              ))}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Download className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-800">تحميل النماذج</span>
                </div>
                <p className="text-sm text-blue-700 mb-3">
                  يمكنك تحميل جميع النماذج المطلوبة وملؤها مسبقاً لتوفير الوقت
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="w-4 h-4 ml-2" />
                  تحميل النماذج
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Fee Structure */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-purple-600" />
                الرسوم الدراسية
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {feeStructure.map((fee, index) => (
                <div key={index} className={`p-4 rounded-lg border-2 ${fee.color}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{fee.category}</h4>
                    <span className="text-lg font-bold text-gray-800">{fee.amount}</span>
                  </div>
                  <p className="text-sm text-gray-600">{fee.description}</p>
                </div>
              ))}
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">طرق الدفع المتاحة</h4>
                <div className="space-y-3">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <method.icon className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <div className="font-medium text-green-800">{method.method}</div>
                        <div className="text-sm text-green-700">{method.details}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

       
      </div>
    </section>
  );
};

export default Admissions;

