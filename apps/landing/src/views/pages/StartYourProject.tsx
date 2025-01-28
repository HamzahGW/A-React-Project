import emailjs from "@emailjs/browser";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@tx/ui-components";
import { useLocale } from "@tx/util-hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

const projectTypes = [
  "crowdfunding_solutions",
  "booking_system",
  "intro_site",
  "systems_management_solutions",
  "visual_audio_communication_systems",
  "other",
] as const;
const ProjectTypeEnum = z.enum(projectTypes);

const projectRelatedTo = ["company", "government"] as const;

const ProjectRelatedToEnum = z.enum(projectRelatedTo);

const projectSize = ["small", "medium", "big", "large", "other"] as const;
const ProjectSizeEnum = z.enum(projectSize);

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().length(10),
  projectType: ProjectTypeEnum,
  projectSize: ProjectSizeEnum,
  projectRelatedTo: ProjectRelatedToEnum,
  projectDescription: z.string().nonempty(),
  hearAboutUs: z.string().nonempty(),
});

type IForm = z.infer<typeof schema>;

export function StartYourProject() {
  const form = useForm<IForm>({
    mode: "onTouched",
    resolver: zodResolver(schema),
    defaultValues: {
      projectRelatedTo: ProjectRelatedToEnum.enum.company,
      projectSize: ProjectSizeEnum.enum.medium,
      projectType: ProjectTypeEnum.enum.crowdfunding_solutions,
      name: "",
      projectDescription: "",
      email: "",
      phone: "",
    },
  });
  const { t } = useLocale();
  return (
    <div className="isolate bg-white px-6 py-20 sm:py-24 lg:px-8">
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
          أطلق مشروعك
        </h2>
        {/* <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p> */}
      </div>
      <div className="mx-auto mt-16 max-w-xl">
        <div className="border-border grid grid-cols-1 gap-y-6 rounded-lg border bg-white p-4 sm:p-8">
          <div className="space-y-8">
            <Form {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(async (data) => {
                  await emailjs
                    .send(
                      "service_my6qn0i",
                      "template_zyb1y8l",
                      {
                        ...data,
                        projectRelatedTo: t(data.projectRelatedTo),
                        projectSize: t(data.projectSize),
                        projectType: t(data.projectType),
                      } as any,
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
                  form.reset();
                })}
              >
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>الإسم</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="projectRelatedTo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>المشروع خاص بـ</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={`${field.value}`}
                        >
                          <FormControl>
                            <SelectTrigger
                              onBlur={field.onBlur}
                              ref={field.ref}
                            >
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {ProjectRelatedToEnum.options.map((item, index) => (
                              <SelectItem key={index} value={item}>
                                {t(item)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>نوع المشروع</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={`${field.value}`}
                        >
                          <FormControl>
                            <SelectTrigger
                              onBlur={field.onBlur}
                              ref={field.ref}
                            >
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {projectTypes.map((item) => (
                              <SelectItem value={item}>{t(item)}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>حجم المشروع</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={`${field.value}`}
                        >
                          <FormControl>
                            <SelectTrigger
                              onBlur={field.onBlur}
                              ref={field.ref}
                            >
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={ProjectSizeEnum.Enum.small}>
                              صغير (200 الف - 400 الف ريال)
                            </SelectItem>
                            <SelectItem value={ProjectSizeEnum.Enum.medium}>
                              {t("medium_project")}
                            </SelectItem>
                            <SelectItem value={ProjectSizeEnum.Enum.big}>
                              {t("big_project")}
                            </SelectItem>
                            <SelectItem value={ProjectSizeEnum.Enum.large}>
                              {t("large_project")}
                            </SelectItem>
                            <SelectItem value={ProjectSizeEnum.Enum.other}>
                              {t("other")}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>وصف عن المشروع</FormLabel>
                        <FormControl>
                          <Textarea rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>رقم الجوال</FormLabel>
                        <FormControl>
                          <Input
                            dir="ltr"
                            placeholder="05********"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>البريد الإلكتروني</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hearAboutUs"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>كيف عرفت عن TX؟</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    isLoading={form.formState.isSubmitting}
                    type="submit"
                    className="w-full "
                  >
                    إرسال
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
