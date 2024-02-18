import { useState } from "react";
import { TfiTrash, TfiPencil } from "react-icons/tfi";
import { db, months, storage } from "../../firebase/config";
import { deleteObject, ref } from "firebase/storage";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import loader from "../../assets/loader200.gif";
function LawsItem({ data, firstRun }) {
  const {
    id,
    title: itemTitle,
    fileUrl,
    fileScr,
    text: itemText,
    time: itemTime,
  } = data;
  const timeFormat = `${itemTime.slice(7)}-${
    months[`${itemTime.slice(3, 6)}`]
  }-${itemTime.slice(0, 2)}`;

  const [delModal, setDelModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(itemTitle);
  const [text, setText] = useState(itemText);
  const [time, setTime] = useState(timeFormat);

  const handleSubmit = async (itemId) => {
    const ref = doc(db, "laws", itemId);
    const timestampt = `${time.slice(8)} ${
      months[`${time.slice(5, 7)}`]
    } ${time.slice(0, 4)}`;

    setLoading(true);
    await updateDoc(ref, {
      title,
      text,
      time: timestampt,
    });
    setLoading(false);
    setEditModal(false);
    firstRun();
  };

  const deleteItem = async (key) => {
    setLoading(true);
    const desertRef = ref(storage, fileScr);
    deleteObject(desertRef)
      .then(async () => {
        await deleteDoc(doc(db, "laws", key));
        setDelModal(false);
        firstRun();
      })
      .catch((error) => {
        console.log(error);
        setDelModal(false);
      });
  };
  return (
    <>
      <div className="grid-wrapper__item article" key={id}>
        <h4 className="article__title">{itemTitle}</h4>
        <h5 className="article__desc">{itemText ?? "error"}</h5>
        <div className="article__footer">
          {/* <span className="author">by Shokhrukh</span> */}
          <span className="date">{itemTime}</span>
        </div>
        <button
          className="delete-btn grid-wrapper__item--btn"
          onClick={() => {
            setDelModal(true);
          }}>
          <TfiTrash />
        </button>
        <button
          className="edit-btn grid-wrapper__item--btn"
          onClick={() => {
            setEditModal(true);
          }}>
          <TfiPencil />
        </button>
      </div>
      {editModal && (
        <>
          <div className="modal">
            {loading ? (
              <img
                src={loader}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            ) : (
              <form
                className="modal-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(id);
                }}>
                <button
                  className="close-btn"
                  type="button"
                  onClick={() => {
                    setEditModal(false);
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
                    placeholder="Maqola sarlavhasini kiriting"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}></textarea>
                </label>
                <label>
                  <input
                    type="date"
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                  />
                </label>
                <label>
                  <p>File:</p>
                  <a href={`${data.fileUrl}`} target="_blank" download>
                    Download
                  </a>
                </label>
                <label htmlFor="">
                  <p>Text:</p>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Maqola textini kiriting"
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}></textarea>
                </label>
                <button className="add-btn" type="submit">
                  O'zgartirish
                </button>
              </form>
            )}
          </div>
          <div className="overlay"></div>
        </>
      )}
      {delModal && (
        <>
          <div className="del-modal">
            {loading ? (
              <img src={loader} width={150} />
            ) : (
              <>
                <h3>Fayl o'chirilsinmi?</h3>
                <div className="del-modal__buttons">
                  <button
                    onClick={() => {
                      deleteItem(id);
                    }}>
                    Ha
                  </button>
                  <button
                    onClick={() => {
                      setDelModal(false);
                    }}>
                    Yo'q
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="overlay"></div>
        </>
      )}
    </>
  );
}

export default LawsItem;
