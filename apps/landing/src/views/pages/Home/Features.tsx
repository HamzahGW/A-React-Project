import {
  ArrowLeftRight,
  Box,
  Button,
  Component,
  FolderCog,
  Landmark,
  ListChecks,
  PersonStanding,
  Scroll,
  TrendingUp,
  Users2,
  Volume2,
  Gift,
  HeartHandshake,
} from "@tx/ui-components";
import { useState } from "react";

const features = [
  {
    name: "التمويل الجماعي بالدين",
    description:
      "نظام مبتكر يربط بين المشاريع والمستثمرين في إطار شرعي يعزز التعاون والتنمية الاقتصادية.",
    icon: Component,
    badge: (
      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        التقنية المالية
      </span>
    ),
  },
  {
    name: "التمويل الجماعي بالملكية",
    description:
      "نظام تمويل مبتكر يشترك فيه المستثمرون بالملكية في الاكتتاب عبر شراء أسهم الشركات الصغيرة والمتوسطة ",
    icon: TrendingUp,
    badge: (
      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        التقنية المالية
      </span>
    ),
  },
  {
    name: "التمويل الجماعي بالمكافآت",
    description:
      "دعم المشاريع المبتكرة عبر دعم المشاريع الواعدة وشراء المنتجات المميزة مسبقًا، مما يساهم في توليد منتجات ومشاريع مميزة ",
    icon: Gift,
    badge: (
      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        التقنية المالية
      </span>
    ),
  },
  {
    name: "توزيع الصناديق الاستثمارية",
    description:
      "نموذج لطرح صناديق استثمارية بعشرات ومئات الملايين (عقارية/غير عقارية)، والاستثمار فيها عبر شراء وحدات في الصناديق بمبالغ صغيرة ",
    icon: Box,
    badge: (
      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        التقنية المالية
      </span>
    ),
  },
  {
    name: "التمويل الجماعي بالصكوك",
    description:
      "نموذج تمويل إسلامي يعتمد على إصدار صكوك للشركات تصل لعشرات الملايين ليتم تمويلها من قبل العموم على أن يتم إطفاء الصكوك وسداد الأرباح في مدة محددة ",
    icon: Scroll,
    badge: (
      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        التقنية المالية
      </span>
    ),
  },
  {
    name: "التمويل الجماعي الخيري",
    description: "حل تقني للجمعيات والجمعيات الخيرية المصرحة لجمع التبرعات",
    icon: HeartHandshake,
    badge: (
      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        التقنية المالية
      </span>
    ),
  },
  {
    name: "إدارة المهام",
    description:
      "حل تقني يساعد فرق العمل في تقسيم المهام، وتوزيعها وتتبعها بين فرق العمل وتوثيق المستجدات حول كل مهمة بسلاسة ",
    icon: ListChecks,
    badge: (
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        إدارة المنظومات
      </span>
    ),
  },
  {
    name: "إدارة الاجتماعات",
    description:
      "حل تقني يوفر إمكانية إدارة متكاملة للاجتماعات من دعوة الحضور إلى إنشاء محضر الاجتماع ونشره",
    icon: Users2,
    badge: (
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        إدارة المنظومات
      </span>
    ),
  },
  {
    name: "إدارة المستفيدين",
    description:
      "حل شامل يتيح إدارة فعالة للمستفيدين، حيث يسهل تنظيم وتتبع المعلومات الخاصة بهم",
    icon: PersonStanding,
    badge: (
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        إدارة المنظومات
      </span>
    ),
  },
  {
    name: "إدارة المشاريع",
    description:
      "تخطيط وتنفيذ ومتابعة المشاريع بفعالية. يوفر أدوات وميزات لإدارة المهام والجداول الزمنية والموارد والتواصل، مما يحسن التنسيق بين الفرق ويضمن تحقيق الأهداف بنجاح وفي المواعيد المحددة",
    icon: FolderCog,
    badge: (
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        إدارة المنظومات
      </span>
    ),
  },
  {
    name: "تخطيط موارد المؤسسات (ERP)",
    description:
      "حل شامل يدمج ويوحد إدارة جميع عمليات وأقسام المؤسسة في نظام واحد. يتضمن وحدات لإدارة الموارد البشرية والمالية والمخزون والإنتاج والمبيعات وغيرها",
    icon: Landmark,
    badge: (
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        إدارة المنظومات
      </span>
    ),
  },
  {
    name: "أنظمة تواصلية مرئية/صوتية",
    description:
      "يمكن استخدامها لتقديم حلول متنوعة في التواصل بين مقدمي الخدمات والمستفيدين",
    icon: Volume2,
    badge: (
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
        أنظمة تواصلية مرئية/صوتية
      </span>
    ),
  },
];

export default function Features() {
  const [expanded, setExpanded] = useState(false);
  const dataForDisplay = expanded ? features : features.slice(0, 6);
  return (
    <div id="fields" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-primary-600 text-base font-semibold leading-7">
          كل ما تحتاجه
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          أبرز المجالات التي نتخصص بها
        </p>
        {/* <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p> */}
        <section
          id="secondary-features"
          aria-label="Features for building a portfolio"
        >
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
          >
            {dataForDisplay.map((feature) => (
              <li
                key={feature.name}
                className="rounded-2xl border border-gray-200 p-8"
              >
                <div className="flex justify-end">{feature.badge}</div>
                <feature.icon className="h-7 w-7" />
                <h3 className="mt-6 font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-gray-700">{feature.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <div className="flex items-center justify-center">
          <Button
            variant="primary-Outline"
            className="mt-20 w-80"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "إخفاء" : "أظهر المزيد"}
          </Button>
        </div>
      </div>
    </div>
  );
}
