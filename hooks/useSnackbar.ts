import { useState } from "react";

const useSnackbar = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "error">("success");

  const showSnackbar = (message: string, type: "success" | "error") => {
    setMessage(message);
    setType(type);
    setVisible(true);
  };

  const showSuccessSnackbar = (message: string) => {
    showSnackbar(message, "success");
  };

  const showErrorSnackbar = (message: string) => {
    showSnackbar(message, "error");
  };

  const handleDismiss = () => setVisible(false);

  return {
    snackbarOptions: {
      visible,
      onDismiss: handleDismiss,
      duration: 3000,
      style: { backgroundColor: type === "success" ? "green" : "red" },
    },
    showSuccessSnackbar,
    showErrorSnackbar,
    snackbarMessage: message,
  };
};

export default useSnackbar;
