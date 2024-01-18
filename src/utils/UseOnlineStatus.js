import { useEffect, useState } from "react";

const UseOnlineStatus = () => {
  const [onlineStatus, setOnlindeStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlindeStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlindeStatus(true);
    });
  }, []);
  return onlineStatus;
};
export default UseOnlineStatus;
