import React, { useState } from "react";
import CommentForm from "./CommentForm";
import ListComments from "./ListComments";

const Post = ({ author, avatar, time, content, image }) => {
    const [likes, setLikes] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const [listData, setListData] = useState([]);
    const [nextID, setNextID] = useState(1);

    const getCommentData = (comment) => {
        if (comment.trim()) {
            setListData([
                ...listData,
                { id: nextID, text: comment, likes: 0, replies: [] }
            ]);
            setNextID(nextID + 1);
        }
    }

    const likeComment = (commentId) => {
        const updatedList = listData.map(comment =>
            comment.id === commentId
                ? { ...comment, likes: (comment.likes || 0) + 1 }
                : comment
        );
        setListData(updatedList);
    }

    const addReply = (commentId, replyText) => {
        if (replyText.trim()) {
            const updatedList = listData.map(comment =>
                comment.id === commentId
                    ? { ...comment, replies: [...(comment.replies || []), { id: Date.now(), text: replyText }] }
                    : comment
            );
            setListData(updatedList);
        }
    }

    return (
        <div className="w3-container w3-card w3-white w3-round w3-margin">
            <br />
            <img src={avatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: "60px" }} />
            <span className="w3-right w3-opacity">{time}</span>
            <h4>{author}</h4>
            <br />
            <hr className="w3-clear" />
            <p>{content}</p>
            
            {image && (
                <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                    <div className="w3-col">
                        <img src={image} style={{ width: "100%" }} alt="Post" className="w3-margin-bottom" />
                    </div>
                </div>
            )}

            <div className="w3-margin-bottom">
                <button 
                    type="button" 
                    className="w3-button w3-theme-d1" 
                    onClick={() => setLikes(likes + 1)}
                >
                    <i className="fa fa-thumbs-up"></i>  Like {likes > 0 && <span>({likes})</span>}
                </button>
                <button 
                    type="button" 
                    className="w3-button w3-theme-d2 w3-margin-left" 
                    onClick={() => setShowComments(!showComments)}
                >
                    <i className="fa fa-comment"></i>  Comment {listData.length > 0 && <span>({listData.length})</span>}
                </button>
            </div>

            {showComments && (
                <div className="w3-container w3-border-top w3-padding-16">
                    <CommentForm getCommentData={getCommentData} />
                    <ListComments listComData={listData} onLike={likeComment} onReply={addReply} />
                </div>
            )}
        </div>
    );
}

export default Post;
