import { useState } from "react";
import { TfiTrash, TfiPencil } from "react-icons/tfi";
import { db } from "../../firebase/config";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import loader from "../../assets/loader200.gif";

function ScientificItem({ data: { id, name, content, subtitle }, firstRun }) {
  const [delModal, setDelModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [text, setText] = useState(content);
  const [subText, setSubText] = useState(subtitle ?? "");

  const handleSubmit = async (itemId) => {
    const ref = doc(db, "about", itemId);

    setLoading(true);

    await updateDoc(ref, {
      content: text,
      subtitle: subText,
    });
    setLoading(false);
    setEditModal(false);
    firstRun();
  };

  const deleteItem = async (key) => {
    setLoading(true);

    await deleteDoc(doc(db, "scientific", key));
    setDelModal(false);
    firstRun();
  };
  return (
    <>
      <div className="grid-wrapper__item article" key={id}>
        <h4 className="article__title">{name}</h4>
        <h5 className="article__desc">{content}</h5>
        <h5 className="article__desc">{subtitle ?? ""}</h5>

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

                <label htmlFor="">
                  <p>Subtitle:</p>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Maqola textini kiriting"
                    value={subText}
                    onChange={(e) => {
                      setSubText(e.target.value);
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
                <h3>Maqola o'chirilsinmi?</h3>
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

export default ScientificItem;
