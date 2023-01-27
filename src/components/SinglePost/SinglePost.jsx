import React from "react";
import "./style.css";
import { useGlobalContext } from "../../context";
import EditPost from "../EditPost/EditPost";
import { useState } from "react";
import { TEXTS } from "../../constans";

const SinglePost = ({ isCreateNewPost }) => {
  const { data, functions } = useGlobalContext();
  const { title, description, image } = data.selectedPost;
  const { setSelectedPost } = functions;

  const [isEdit, setIsEdit] = useState(true);

  const changeEditMode = () => {
    setIsEdit(!isEdit);
  }

  const descriptionLines = description.split(TEXTS.newLineSymbol);

  return (
    <aside className="modal-overlay">
      <div className="modal">
        <div className="top-buttons">
          {!isCreateNewPost && 
          <>
          <button onClick={() => setSelectedPost(null)}> delete </button>
          <button onClick={changeEditMode}> edit </button>
          </>}
          <button onClick={() => setSelectedPost(null)}> back </button>
        </div>

        {isEdit ? <>
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="information">
            
          <h1>{title}</h1>
          <div>{descriptionLines.map((line, key) => <p className="description-line" key={key}>{line}</p>)}</div>
        </div>
        </> 
        :
        <EditPost changeEditMode={changeEditMode} />}
      </div>
    </aside>
  );
};

export default SinglePost;
