import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const categories = [
  "art",
  "science",
  "technology",
  "music",
  "cinema",
  "mysql",
  "react",
  "expressjs",
  "nodejs",
  "mongodb",
];



const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(
    state?.title || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, aliquid rem odit dicta, rerum numquam nihil aperiam officiis sed excepturi esse culpa eius tempore? Officiis."
  );
  const [title, setTitle] = useState(state?.descr || "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
  const [file, setFile] = useState(
    state?.file ||
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhvYmZHdAbdQkw_I9MdK54Nh7GaTiSxTrkg&usqp=CAU"
  );
  const [cat, setCat] = useState(state?.cat || "");
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  const handelClick = async (e) => {
    e.preventDefault();
    try {
      state
        ? await axios.put(`https://blogs-backend-l7v4.onrender.com/api/posts/${state.id}`, {
            title: title,
            descr: value,
            cat: cat,
            img: file,
          })
        : await axios.post(`https://blogs-backend-l7v4.onrender.com/api/posts/`, {
            title: title,
            descr: value,
            cat: cat,
            img: file,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            uid: currentUser.id,
          });
    } catch (error) {
      // console.log(error);
    }
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="add">
        <div className="content">
          <input
            type="text"
            value={title}
            required
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input
              required
              type="text"
              id="file"
              placeholder="Image URL"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            />
            <div className="buttons">
              <button onClick={handelClick}>Publish</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="categories">
              {categories.map((cat) => (
                <div className="cat" key={cat}>
                  <input
                    type="radio"
                    name="cat"
                    value={cat}
                    id={cat}
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label htmlFor={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Write;
