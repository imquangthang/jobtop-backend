import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

export const sendEmailService = async (
  action,
  email,
  company,
  job,
  dayInterview,
  timeInterview,
  address,
  interviewer,
  phone
) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = "";
  if (action === "Accept") {
    info = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME, // sender address
      to: email, // list of receivers
      subject: "Thông Tin Tuyển Dụng", // Subject line
      text: "nội dung", // plain text body
      html: `<h2>Chúc Mừng Bạn Đã Trúng Tuyển</h2>
    <p><b>Công Ty:</b> ${company}</p>
    <p><b>Công Việc:</b> ${job}</p>
    <p><b>Ngày Phỏng Vấn:</b> ${dayInterview}</p>
    <p><b>Thời gian:</b> ${timeInterview}</p>
    <p><b>Địa Chỉ:</b> ${address}</p>
    <p><b>Người Phỏng Vấn:</b> ${interviewer}</p>
    <p><b>SĐT Liên Hệ:</b> ${phone}</p>
    <p>Cảm ơn bạn đã tin dùng JobTop.</p>`,
    });
  } else if (action === "Reject") {
    info = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME, // sender address
      to: email, // list of receivers
      subject: "Thông Tin Tuyển Dụng", // Subject line
      text: "nội dung", // plain text body
      html: `<h2>Đơn Ứng Tuyển Của Bạn Đã Bị Hủy</h2>
    <p><b>Công Ty:</b> ${company}</p>
    <p><b>Công Việc:</b> ${job}</p>
    <p>Cảm ơn bạn đã tin dùng JobTop.</p>`,
    });
  }
  return info;
};
