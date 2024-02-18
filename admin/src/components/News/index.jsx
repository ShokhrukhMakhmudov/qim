import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { db, months, storage } from "../../firebase/config.jsx";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import UploadAnt from "./uploadAnt.jsx";
import { v4 as uuidv4 } from "uuid";
import UploadImage from "./upload.jsx";
import NewsItem from "../NewsItem/index.jsx";
import loader from "../../assets/loader200.gif";

import "./style.css";

function News() {
  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let year = today.getFullYear();

  today = `${year}-${month}-${day}`;

  const { setCategory, setItemCount, showModal, setModal } = useOutletContext();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [images, setImages] = useState("");
  const [text, setText] = useState("");
  const [time, setTime] = useState(today);
  const [submitBtn, setSubmitBtn] = useState(false);

  console.log(images);
  const firstRun = async () => {
    setLoading(true);
    const newsCol = collection(db, "news");
    const newsSnapshot = await getDocs(newsCol);
    const newsList = newsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(newsList);
    setItemCount(newsList.length);
    setLoading(false);
    setData(newsList);
  };

  useEffect(() => {
    setCategory("Yangiliklar");
    firstRun();
  }, []);

  const handleSubmit = async () => {
    const id = uuidv4();
    setSubmitBtn(true);
    const timestampt = `${time.slice(8)} ${
      months[`${time.slice(5, 7)}`]
    } ${time.slice(0, 4)}`;

    // const urls = [];

    // for (const file of fileList) {
    //   const storageRef = ref(storage, `images/${file.name}`);
    //   await uploadBytes(storageRef, file);
    //   const url = await getDownloadURL(storageRef);
    //   urls.push(url);
    // }

    await setDoc(doc(db, "news", id), {
      id,
      title,
      date: timestampt,
      images,
      text,
    });
    setTitle("");
    setImages("");
    setText("");
    firstRun();
    setModal(false);
    setSubmitBtn(false);
  };

  if (loading) {
    return (
      <div className="loading">
        <img width={100} src={loader} alt="" />
      </div>
    );
  }
  return (
    <div className="section-container">
      <div className="grid-wrapper">
        {data &&
          data.map((item) => {
            return <NewsItem data={item} firstRun={firstRun} key={item.id} />;
          })}
      </div>

      {showModal && (
        <>
          {submitBtn ? (
            <div className="modal-loader">
              <img
                src={loader}
                width={100}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
          ) : (
            <div className="modal">
              <form
                className="modal-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}>
                <button
                  className="close-btn"
                  type="button"
                  onClick={() => {
                    setModal((prev) => {
                      setImages("");
                      return !prev;
                    });
                  }}>
                  x
                </button>
                <label>
                  <p>Sarlavha:</p>

                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="2"
                    placeholder="Yangilikning sarlavhasini kiriting"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    required></textarea>
                </label>
                <label>
                  <input
                    type="date"
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                    required
                  />
                </label>
                {/* <form>
                  <label htmlFor="">
                    <p>Rasmlar:</p>

                    <input
                      type="file"
                      className="img-link"
                      placeholder="Rasm havolasi"
                      value={imgLink}
                      multiple="multiple"
                      onChange={(e) => {
                        setImgLink(e.target.value);
                      }}
                      required
                    />
                  </label>
                  <button>Jo'natish</button>
                </form> */}
                {/* <UploadImage setFileList={setFileList} fileList={fileList} /> */}
                <UploadAnt setImages={setImages} />
                <label>
                  <p>Text:</p>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Yangilikning textini kiriting"
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}></textarea>
                </label>
                <button
                  className="add-btn"
                  type="submit"
                  disabled={submitBtn ? true : ""}>
                  Qo'shish
                </button>
              </form>
            </div>
          )}
          <div className="overlay"></div>
        </>
      )}
    </div>
  );
}

export default News;
