import { toast } from "react-toastify";

const notify = () =>
toast('Loading...', {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: false,
  draggable: true,
  pauseOnHover: false,
});

const notifyError = () => toast.error("City not found",{
position: "top-center",
autoClose: 1000,
hideProgressBar: false,
newestOnTop: false,
closeOnClick: true,
rtl: false,
pauseOnFocusLoss: false,
draggable: true,
pauseOnHover: false,
});

export { notify, notifyError };