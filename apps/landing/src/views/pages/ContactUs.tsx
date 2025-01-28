import { Button } from "@tx/ui-components";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useBoolean } from "@tx/util-hooks";
import { cn } from "@tx/util-helpers";
import { useState } from "react";

interface IForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactUs() {
  const [inquiryType, setInquiryType] = useState("inquiry");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IForm>({
    mode: "onTouched",
    defaultValues: { name: "", phone: "", message: "", email: "" },
  });
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="from-primary-900 relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-10 flex items-center justify-center text-center">
          <Link to="/">
            <img src={"/images/PrimaryLogo.png"} className="w-28" />
          </Link>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          تواصل معنا
        </h2>
        {/* <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p> */}
      </div>
      <form
        onSubmit={handleSubmit(async (data) => {
          await emailjs
            .send(
              "service_my6qn0i",
              "template_azbw54z",
              { ...data, inquiryType } as any,
              "hWB3ugK46W9uD2iZo",
            )
            .then(
              (result) => {
                toast.success("تم الإرسال بنجاح");
              },
              (error) => {
                toast.error("حدث خطأ ما، حاول لاحقا");
              },
            );
          reset();
        })}
        className="mx-auto mt-16 max-w-xl"
      >
        <div className="grid grid-cols-1 gap-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              الاسم
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id={"name"}
                autoComplete="given-name"
                className="focus:ring-primary block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <div className="mt-2 text-sm text-red-500 lg:text-base">
                  حقل مطلوب
                </div>
              )}
              {errors.name?.type === "maxLength" && (
                <span className="text-sm text-red-500 lg:text-base">
                  Name must be under 40 characters
                </span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              الإيميل
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                autoComplete="given-email"
                className="focus:ring-primary block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                id="email"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <div className="mt-2 text-sm text-red-500 lg:text-base">
                  حقل مطلوب
                </div>
              )}
              {/* {errors.name?.type === "maxLength" && (
                <span className="text-sm text-red-500 lg:text-base">
                  Name must be under 40 characters
                </span>
              )} */}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
              id="phone"
            >
              الجوال
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                maxLength={20}
                autoComplete="phone"
                className="focus:ring-primary block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                {...register("phone", { required: true })}
              />
            </div>
            {errors.phone?.type === "required" && (
              <div className="mt-2 text-sm text-red-500 lg:text-base">
                حقل مطلوب
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <Button
              variant={
                inquiryType === "inquiry" ? "primary" : "primary-Outline"
              }
              onClick={() => setInquiryType("inquiry")}
              className="focus:bg-primary w-96 focus:text-white"
            >
              استفسار
            </Button>
            <Button
              variant={
                inquiryType === "jobInquiry" ? "primary" : "primary-Outline"
              }
              className="focus:bg-primary w-96 focus:text-white"
              onClick={() => setInquiryType("jobInquiry")}
            >
              توظيف
            </Button>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              id="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              الرسالة
            </label>
            <div className="mt-2.5">
              <textarea
                rows={4}
                className="focus:ring-primary block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                defaultValue={""}
                {...register("message", { required: true })}
              />
              {errors.message?.type === "required" && (
                <div className="mt-2 text-sm text-red-500 lg:text-base">
                  حقل مطلوب
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button type="submit" isLoading={isSubmitting} className="w-full">
            إرسال
          </Button>
        </div>
      </form>
    </div>
  );
}
