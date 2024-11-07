import toast from "react-hot-toast";
export const BASEURL = "http://localhost:4003";

export const successToast = (message) => toast.success(message);
export const errorToast = (message) => toast.error(message);
