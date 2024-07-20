import { useEffect, useState } from "react"
const useOnlineStatus = () => {
    const [onlinestatus,setOnlineStatus] = useState(true);
    // we check onlinestatus only one
    useEffect(() => {
        window.addEventListener("offline",() => {
            setOnlineStatus(false);
        });
        window.addEventListener("online",() => {
            setOnlineStatus(true);
        });
    },[]);
    return onlinestatus;
}
export default useOnlineStatus;