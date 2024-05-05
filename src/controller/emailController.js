import { sendEmailService } from "../service/emailService.js";

export const sendEmailController = async (req, res) => {
  try {
    let email = req.body.email;
    if (email) {
      const response = await sendEmailService(email);
      return res.json(response);
    }
    return res.json({
      status: "err",
      message: "the email is required",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: "err",
    });
  }
};
