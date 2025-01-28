export const links = [
  {
    label: "الحلول",
    value: "#solutions",
  },
  {
    label: "مجالاتنا",
    value: "#fields",
  },
  {
    label: "الخبرة",
    value: "#experience",
  },
  {
    label: "الجودة",
    value: "#quality",
  },
  {
    label: "الفريق",
    value: "#team",
  },
  {
    label: "أسئلة شائعة",
    value: "#faq",
  },
  {
    label: "تواصل معنا",
    value: "/contact_us",
  },
];

export function Logo(props: JSX.IntrinsicElements["svg"]) {
  return (
    <div className="flex items-center">
      <img className="w-32" src={"/images/txperience.png"} />
      <img className="w-14 sm:w-20" src={"/images/PrimaryLogo.png"} />
    </div>
  );
}
