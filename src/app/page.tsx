export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur bg-slate-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-semibold tracking-tight text-cyan-300">
            مجموعة خبراء الذكاء
          </div>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a className="transition hover:text-cyan-300" href="#services">
              الخدمات
            </a>
            <a className="transition hover:text-cyan-300" href="#workflow">
              آلية العمل
            </a>
            <a className="transition hover:text-cyan-300" href="#testimonials">
              قصص النجاح
            </a>
            <a className="transition hover:text-cyan-300" href="#faq">
              الأسئلة
            </a>
          </nav>
          <a
            className="rounded-full bg-cyan-400/90 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-300"
            href="#contact"
          >
            احجز استشارة
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 md:px-10">
        <section className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-6">
            <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs tracking-widest text-cyan-200">
              وكالة ذكاء اصطناعي متكاملة على مدار الساعة
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              فريق واحد يجمع خبراء الذكاء الاصطناعي، التسويق، والمبيعات لخدمة
              عملك 24/7
            </h1>
            <p className="text-lg text-slate-200/80">
              نقدم حلاً شاملاً لتأسيس المواقع، إطلاق المنتجات الرقمية، إدارة
              الحملات الإعلانية، الرد الآلي على العملاء، ومعالجة المدفوعات دون
              توقف. فريقنا الهجين يجمع بين الذكاء الاصطناعي والخبرة البشرية
              لضمان نمو متواصل.
            </p>
            <div className="flex flex-col gap-3 text-sm text-slate-200/80 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="text-lg">⚙️</span>
                <div>
                  <p className="font-semibold text-white">خطط جاهزة للإطلاق</p>
                  <p>منصة كاملة خلال 14 يوماً فقط</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="text-lg">💬</span>
                <div>
                  <p className="font-semibold text-white">
                    دعم ومبيعات مهيأة بالذكاء
                  </p>
                  <p>ردود فورية بجميع القنوات</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-300"
                href="#contact"
              >
                تحدث معنا الآن
              </a>
              <a
                className="text-base text-cyan-200 transition hover:text-cyan-100"
                href="#services"
              >
                استعرض حلولنا الذكية →
              </a>
            </div>
          </div>
          <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-8">
            <div className="grid gap-6 text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                  لوحة القيادة
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  97% معدل التحويل من الردود الآلية المدعومة بالذكاء الاصطناعي
                </p>
                <p className="mt-4 text-sm text-slate-200/70">
                  روبوتات المحادثة تتكامل مع واتساب، إنستغرام، والبريد الإلكتروني
                  لتصلك تفاصيل الصفقات فوراً.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-cyan-400/10 p-5">
                  <p className="text-xs text-cyan-100/80">إطلاق مواقع</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    مواقع مدعومة بالذكاء تنشر المحتوى تلقائياً
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs text-cyan-100/80">التجارة الرقمية</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    تحصيل مدفوعات عالمي مع أنظمة حماية مدمجة
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">
                  مراقبة آنية
                </p>
                <p className="mt-3 text-sm text-slate-200/80">
                  فريق مراقبة يتابع الأداء على مدار الساعة ويضبط الحملات
                  الدعائية بناءً على البيانات اللحظية.
                </p>
              </div>
            </div>
            <div className="absolute inset-x-0 -top-16 mx-auto h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>
        </section>

        <section
          id="services"
          className="rounded-3xl border border-white/10 bg-white/5 px-6 py-12 md:px-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">
                ما الذي نقدمه كفريق ذكاء اصطناعي موحد؟
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-200/80">
                نجمع فرق التطوير، التسويق، خدمة العملاء، والمحاسبة في مجموعة
                واحدة تعتمد على أدوات ذكاء اصطناعي متطورة لتسليم نتائج قابلة
                للقياس في كل خطوة.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/60 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
              href="#workflow"
            >
              اكتشف طريقة التنفيذ
            </a>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-slate-950/40 p-6 transition hover:border-cyan-400/40 hover:bg-slate-900/70"
              >
                <div className="text-3xl">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-200/75">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-auto space-y-2 text-sm text-slate-300/80">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-cyan-300">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="workflow"
          className="grid gap-8 rounded-3xl border border-white/10 bg-slate-950/40 px-6 py-12 md:grid-cols-[1.1fr,1fr] md:px-10"
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold">مسار التنفيذ خلال 14 يوماً</h2>
            <p className="text-base text-slate-200/80">
              عملية مضبوطة بوضوح تربط الأدوات الذكية بفريق بشري على مدار الساعة
              لتأهيل العملاء وزيادة المبيعات دون انقطاع.
            </p>
            <div className="space-y-5">
              {workflow.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-cyan-200">
                      {step.badge}
                    </p>
                    <span className="text-lg font-semibold text-white">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-200/75">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-950 p-6">
            <h3 className="text-2xl font-semibold">
              جاهزية كاملة للتكامل مع أنظمتك الحالية
            </h3>
            <p className="text-sm text-slate-200/80">
              نعمل مع بوابات الدفع العالمية، CRMs، ومنصات الإعلان لضمان انسيابية
              التجربة.
            </p>
            <ul className="space-y-3 text-sm text-slate-100/80">
              {integrations.map((integration) => (
                <li
                  key={integration}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  <span className="text-cyan-300">✓</span>
                  <span>{integration}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200/80">
              <p className="font-semibold text-white">
                مراقبة وتحسين على مدار 24/7
              </p>
              <p className="mt-2">
                يقوم مهندسونا بمراجعة قرارات الأنظمة الذكية باستمرار لضمان جودة
                الردود ودقة الصفقات.
              </p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="space-y-8">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-3xl font-semibold">قصص نجاح مختارة</h2>
            <p className="text-base text-slate-200/80">
              شركات اعتمدت على فريقنا المشترك لتحقيق نمو متسارع في الإيرادات
              وخدمة العملاء.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <blockquote className="text-sm text-slate-200/80">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-base font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 px-6 py-12 md:grid-cols-2 md:px-10"
        >
          <div>
            <h2 className="text-3xl font-semibold">أسئلة شائعة</h2>
            <p className="mt-3 text-base text-slate-200/80">
              اخترنا أكثر التساؤلات المتكررة حول طريقة عمل فريقنا المشترك المدعوم
              بالذكاء الاصطناعي.
            </p>
          </div>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition"
              >
                <summary className="cursor-pointer text-base font-semibold text-white transition group-open:text-cyan-200">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-slate-200/75">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-slate-900 px-6 py-12 text-center md:px-16"
        >
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold">
              مستعد لتجربة فريق ذكاء اصطناعي متكامل؟
            </h2>
            <p className="text-base text-slate-100/80">
              نحدد احتياجك خلال مكالمة تعريفية مجانية ثم نطلق مشروعك خلال أسبوعين
              مع فريق يعمل نيابةً عنك 24/7.
            </p>
            <form className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 md:col-span-1"
                placeholder="الاسم الكامل"
                type="text"
                name="name"
              />
              <input
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 md:col-span-1"
                placeholder="البريد الإلكتروني أو واتساب"
                type="text"
                name="contact"
              />
              <textarea
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 md:col-span-2"
                placeholder="أخبرنا عن مشروعك أو التحديات الحالية"
                name="message"
                rows={4}
              />
              <button
                className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-base font-semibold text-cyan-100 shadow-lg shadow-cyan-500/30 transition hover:bg-slate-900"
                type="submit"
              >
                احجز مكالمة مجانية
              </button>
            </form>
            <p className="text-xs text-slate-200/70">
              نحترم خصوصيتك. لن نشارك بياناتك مع أي جهة خارجية.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p>© {new Date().getFullYear()} مجموعة خبراء الذكاء. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <a className="transition hover:text-cyan-200" href="#">
              سياسة الخصوصية
            </a>
            <a className="transition hover:text-cyan-200" href="#">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    icon: "🤖",
    title: "إطلاق المواقع وتوليد المحتوى",
    description:
      "من تصميم الهوية إلى إطلاق موقع متكامل مع روبوتات محادثة ذكية تنشر المحتوى تلقائياً.",
    bullets: [
      "مواقع متعددة اللغات مع تحسين محركات البحث",
      "مكتبة محتوى تتجدد بالذكاء الاصطناعي",
      "روبوتات محادثة مدمجة مع صفحات المبيعات",
    ],
  },
  {
    icon: "📣",
    title: "تسويق رقمي مدعوم بالبيانات",
    description:
      "حملات إعلانية على فيسبوك، إنستغرام، تيك توك، وجوجل مع تحليلات لحظية وتحسين مستمر.",
    bullets: [
      "إعلانات ديناميكية مبنية على شخصيات العملاء",
      "لوحات تحكم تجمع كل القنوات في مكان واحد",
      "تجارب A/B آلية لاكتشاف الرسائل الرابحة",
    ],
  },
  {
    icon: "💼",
    title: "إدارة عملاء ومبيعات متكاملة",
    description:
      "فريق مختلط من الذكاء الاصطناعي والبشر يدير الاستفسارات، يحول العملاء، ويتابع المدفوعات.",
    bullets: [
      "قنوات رد فوري على مدار الساعة",
      "تحويل تلقائي للفرص الساخنة إلى فريقك",
      "تكامل مع بوابات دفع وحلول فواتير عالمية",
    ],
  },
] as const;

const workflow = [
  {
    badge: "اليوم 1-2",
    title: "تشخيص شامل للاحتياج",
    description:
      "نحلل السوق، رحلة العميل، والأنظمة الحالية لتحديد الفرص السريعة والخصائص المطلوبة.",
    duration: "ورشة مكثفة",
  },
  {
    badge: "اليوم 3-7",
    title: "بناء الأصول الرقمية",
    description:
      "تصميم الهوية الرقمية، إعداد الموقع، إعداد قنوات المبيعات، وربطها ببنى الذكاء الاصطناعي.",
    duration: "أسبوع واحد",
  },
  {
    badge: "اليوم 8-11",
    title: "إطلاق الحملات والروبوتات",
    description:
      "تشغيل الحملات الإعلانية، تدريب نماذج المحادثة على معرفة منتجاتك، وربطها بقنواتك.",
    duration: "3 أيام",
  },
  {
    badge: "اليوم 12-14",
    title: "المراقبة والتحسين المستمر",
    description:
      "ضبط الأداء بناءً على البيانات الحية، تقديم تقارير يومية، وتفعيل سيناريوهات الأتمتة.",
    duration: "دعم دائم",
  },
] as const;

const integrations = [
  "تكامل مباشر مع واتساب للأعمال",
  "ربط إنستغرام وفيسبوك ماسنجر",
  "واجهات برمجة تطبيقات Stripe وTabby وPayPal",
  "HubSpot وZoho وSalesforce",
  "منصات التجارة الإلكترونية Shopify وWooCommerce",
] as const;

const testimonials = [
  {
    author: "سارة المنصوري",
    role: "مديرة نمو | منصة تعليم إلكتروني",
    quote:
      "حصلنا على 4 أضعاف الاشتراكات خلال 45 يوماً مع أتمتة كاملة للردود على الطلاب والمهتمين.",
  },
  {
    author: "وليد الكتبي",
    role: "مؤسس | متجر منتجات رقمية",
    quote:
      "الفريق دمج بوابات الدفع العالمية وأتاح لنا بيع منتجاتنا في أكثر من 20 دولة دون تدخل يدوي.",
  },
  {
    author: "ريما الحمادي",
    role: "مديرة تسويق | شركة خدمات مالية",
    quote:
      "المراقبة على مدار الساعة وفرت علينا فريق خدمة عملاء كامل وساهمت في إغلاق الصفقات ليلاً.",
  },
] as const;

const faqs = [
  {
    question: "هل الفريق بشري أم ذكاء اصطناعي؟",
    answer:
      "نستخدم مزيجاً من الخبراء البشريين مع أدوات ذكاء اصطناعي متقدمة لضمان سرعة الاستجابة وجودة النتائج، مع إشراف بشري دائم.",
  },
  {
    question: "ما مدة تنفيذ المشروع الأولي؟",
    answer:
      "نلتزم بخطة 14 يوماً للوصول إلى الإطلاق الأولي متضمنة الموقع، الروبوتات، والحملات الأساسية.",
  },
  {
    question: "كيف يتم تحصيل المدفوعات؟",
    answer:
      "نربط مشروعك بأفضل بوابات الدفع المناسبة لسوقك سواءً محلية أو عالمية، مع ربطها بأنظمة الفوترة والتقارير.",
  },
  {
    question: "هل يمكنني متابعة النتائج لحظياً؟",
    answer:
      "نوفر لوحة بيانات موحدة تعرض كل القنوات، الحملات، وتذاكر العملاء مع تنبيهات فورية عبر البريد أو واتساب.",
  },
  {
    question: "ما نوع العقود المتاحة؟",
    answer:
      "نقدم خطط شهرية مرنة مع إمكانية إنهاء الخدمة في أي وقت بعد فترة الالتزام الأولى وهي ثلاثة أشهر لضمان استقرار النتائج.",
  },
] as const;
