require("dotenv").config();
const path = require("path");
const { google } = require("googleapis");
const fs = require("fs");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

const uploadFile = async (shared, name, mimeType, path) => {
  try {
    // ID của thư mục "JobTopCV"
    let folderId = "1o2ZQngWJPonu1lUXyjkioeOqXfJvUYfM";

    // Tạo yêu cầu tạo tệp
    let createFile = await drive.files.create({
      requestBody: {
        name,
        mimeType,
        parents: [folderId], // Chỉ định ID của thư mục cha
      },
      media: {
        mimeType,
        body: fs.createReadStream(path),
      },
    });

    let fileId = createFile.data.id;
    console.log("File created:", createFile.data);

    await setPublicFile(fileId);
    return fileId;
  } catch (error) {
    console.error("Error creating file:", error.message);
  }
};

const deleteFile = async (fileId) => {
  try {
    console.log(">>Delete File: " + fileId);
    let deleteFile = await drive.files.delete({
      fileId,
    });
    console.log(deleteFile.data, deleteFile.status);
  } catch (error) {
    console.error("Error deleting file:", error.message);
  }
};

const setPublicFile = async (fileId) => {
  try {
    await drive.permissions.create({
      fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    return getUrl;
  } catch (error) {
    console.error("Error set public file:", error.message);
  }
};

module.exports = { uploadFile, deleteFile, setPublicFile };
