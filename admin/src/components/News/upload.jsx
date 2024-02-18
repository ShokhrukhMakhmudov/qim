import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AiOutlinePlus } from "react-icons/ai";
import { storage } from "../../firebase/config";

const UploadImage = () => {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUpload] = useState("");

  const postImage = async (file) => {
    const storageRef = ref(storage, `images/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log(uploading);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setUpload(progress);

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setFileList((prev) => [...prev, downloadURL]);
        });
      }
    );
  };

  const handleChange = async (fileInput) => {
    const file = fileInput.files[0];

    await postImage(file);

    fileInput.value = "";
  };
  console.log(fileList);
  return (
    <>
      <>
        <label>
          <p>Rasmlar:</p>
        </label>
        <div className="upload-image-wrapper">
          {fileList &&
            fileList.map((item) => {
              return <img src={item} className="uploaded-image" />;
            })}
          <label className="upload-image">
            <AiOutlinePlus />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleChange(e.target)}
            />
          </label>
        </div>
      </>
    </>
  );
};

export default UploadImage;
