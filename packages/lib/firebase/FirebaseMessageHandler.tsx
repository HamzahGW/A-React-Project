import React, { useState } from "react";
// import { getMessagingToken } from "./firebase";

type Props = {
  vapidKey: string;
};

export function FirebaseMessageHandler({ vapidKey }: Props) {
  const [isTokenFound, setTokenFound] = useState(false);
  // getMessagingToken(setTokenFound, vapidKey);

  // inside the jsx being returned:
  return <>{/* Render custom pop up here for message request permission */}</>;
}

export default FirebaseMessageHandler;
