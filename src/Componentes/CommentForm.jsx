import React, { useState } from "react";

const CommentForm = ({ getCommentData }) => {
    const [comment, setComment] = useState("");

    const getComment = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = () => {
        if (comment.trim()) {
            getCommentData(comment);
            setComment("");
        }
    }

    return (
        <div className="w3-container w3-padding">
            <textarea 
                className="w3-border w3-padding w3-margin-bottom" 
                style={{ width: "100%" }} 
                placeholder="comenta algo..." 
                value={comment} 
                onChange={getComment}
            ></textarea>
            <button className="w3-button w3-theme-d2 w3-margin-bottom" onClick={handleSubmit}>
                <i className="fa fa-comment"></i> Comentar
            </button>
        </div>
    );
}

export default CommentForm;
