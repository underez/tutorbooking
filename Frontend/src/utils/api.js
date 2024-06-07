import axios from "axios";

const sendConfirmationEmail = async (email) => {
  try {
    await axios.post("http://localhost:4090/api/send-email", {
      email,
    });
    console.log("Confirmation email sent successfully!");
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }
};

export { sendConfirmationEmail };
