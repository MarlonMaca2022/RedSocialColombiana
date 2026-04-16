import React, { useState } from "react";

const ListComments = ({ listComData, onLike, onReply }) => {
    const [replyOpen, setReplyOpen] = useState(null);
    const [replyText, setReplyText] = useState("");

    const handleReplySubmit = (commentId) => {
        if (replyText.trim()) {
            onReply(commentId, replyText);
            setReplyText("");
            setReplyOpen(null);
        }
    };

    return (
        <div className="w3-container">
            {listComData.length > 0 && <hr />}
            <ul className="w3-ul">
                {listComData.map((comment) => (
                    <li key={comment.id} className="w3-padding-16">
                        <div className="comment">
                            <p><strong>{comment.text}</strong></p>
                            <div className="w3-row">
                                <button 
                                    className="w3-button w3-small w3-white w3-border w3-round" 
                                    onClick={() => onLike(comment.id)}
                                >
                                    👍 Like ({comment.likes ?? 0})
                                </button>
                                <button 
                                    className="w3-button w3-small w3-white w3-border w3-round w3-margin-left"
                                    onClick={() => setReplyOpen(replyOpen === comment.id ? null : comment.id)}
                                >
                                    💬 Responder
                                </button>
                            </div>

                            {replyOpen === comment.id && (
                                <div className="w3-container w3-margin-top w3-light-grey w3-padding" style={{ marginLeft: "20px" }}>
                                    <textarea 
                                        className="w3-border w3-padding w3-margin-bottom" 
                                        style={{ width: "100%" }}
                                        placeholder="Responde este comentario..."
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                    ></textarea>
                                    <div className="w3-row">
                                        <button 
                                            className="w3-button w3-theme-d2 w3-small"
                                            onClick={() => handleReplySubmit(comment.id)}
                                        >
                                            Responder
                                        </button>
                                        <button 
                                            className="w3-button w3-white w3-border w3-small w3-margin-left"
                                            onClick={() => {
                                                setReplyOpen(null);
                                                setReplyText("");
                                            }}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            )}

                            {comment.replies && comment.replies.length > 0 && (
                                <div className="replies" style={{ marginLeft: "20px", marginTop: "10px", borderLeft: "2px solid #ddd", paddingLeft: "10px" }}>
                                    {comment.replies.map((reply) => (
                                        <div key={reply.id} className="w3-container w3-margin-bottom">
                                            <p style={{ fontSize: "0.9rem", margin: "0" }}><em>{reply.text}</em></p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListComments;
