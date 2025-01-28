// import { APP_CONFIG } from "@tx/configs";
// // import { TLaunchPopUp, useFetchContent } from "@tx/data-access";
// import { Button, Modal, Text } from "@tx/ui-components";
// import { useBoolean } from "@tx/util-hooks";
// import { EQContent } from "@tx/util-models";
// import React, { useEffect, useState } from "react";

// type Props = {};

// export default function PopUps({}: Props) {
//   const isOpen = useBoolean(false);
//   // const [popUpContent, setPopUpContent] = useState<TLaunchPopUp>();
//   // const { data: contents } = useFetchContent([EQContent.LAUNCH_POPUP], "keys");

//   // const handleClose = () => {
//   //   isOpen.setFalse();
//   //   if (popUpContent) {
//   //     const popups: string[] = JSON.parse(
//   //       localStorage.getItem("popups") || "[]",
//   //     );
//   //     popups.push(`${popUpContent?.id}`);
//   //     localStorage.setItem("popups", JSON.stringify(popups));
//   //   }
//   // };

//   // useEffect(() => {
//   //   if (contents?.launchPopup) {
//   //     const popups: string[] = JSON.parse(
//   //       localStorage.getItem("popups") || "[]",
//   //     );
//   //     if (Array.isArray(popups)) {
//   //       const popUp = contents.launchPopup.find(
//   //         (item) =>
//   //           item.type === APP_CONFIG.CHANNEL &&
//   //           item.isActive &&
//   //           !popups?.includes(`${item.id}`),
//   //       );
//   //       setPopUpContent(popUp);
//   //       if (popUp) isOpen.setTrue();
//   //     }
//   //   }
//   // }, [contents]);

//   return (
//     <Modal isOpen={false} onClose={handleClose}>
//       {popUpContent && (
//         <div className="space-y-6">
//           <Text size="xl">{popUpContent.title}</Text>
//           <img className="rounded-lg" src={popUpContent.image} />
//           <div className="py-3">
//             <Text>{popUpContent.description}</Text>
//           </div>
//           <div className="flex w-full flex-col gap-5">
//             <Button to={popUpContent.actionBtnURL}>
//               {popUpContent.actionBtnText}
//             </Button>
//             <Button onClick={handleClose} variant="primary-Outline">
//               تخطي
//             </Button>
//           </div>
//         </div>
//       )}
//     </Modal>
//   );
// }

export default function PopUps() {
  return <div></div>;
}
