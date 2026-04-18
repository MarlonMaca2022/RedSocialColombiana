import React, { useState, useEffect, useRef } from 'react';
import Menu from "../Componentes/Menu";

const initialConversations = [
  {
    id: 1,
    name: "Jane Doe",
    avatar: "https://www.w3schools.com/w3images/avatar5.png",
    lastMessage: "Hola, ¿cómo estás?",
    time: "10:30",
    status: "Activa ahora"
  },
  {
    id: 2,
    name: "Angie Jane",
    avatar: "https://www.w3schools.com/w3images/avatar6.png",
    lastMessage: "¿Viste el nuevo proyecto?",
    time: "Ayer",
    status: "Activa hace 2h"
  },
  {
    id: 3,
    name: "John Doe",
    avatar: "https://www.w3schools.com/w3images/avatar2.png",
    lastMessage: "¡Claro! Quedó genial.",
    time: "Ayer",
    status: "Desconectado"
  }
];

const initialMessages = {
  1: [
    { sender: "Jane Doe", text: "¡Hola! ¿Cómo va el diseño?", time: "10:28", isMe: false },
    { sender: "Tú", text: "Muy bien, casi terminado. ¿Te gustó la última versión?", time: "10:30", isMe: true },
    { sender: "Jane Doe", text: "Sí, está genial. Solo unos ajustes en los colores.", time: "10:32", isMe: false },
  ],
  2: [
    { sender: "Angie Jane", text: "¿Viste el nuevo proyecto?", time: "Ayer", isMe: false },
  ],
  3: [
    { sender: "John Doe", text: "¡Claro! Quedó genial.", time: "Ayer", isMe: false },
  ]
};

export default function ChatPage() {
  const [conversations, setConversations] = useState(initialConversations);
  const [activeChatId, setActiveChatId] = useState(1);
  const [allMessages, setAllMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  
  const messagesEndRef = useRef(null);

  const activeChat = conversations.find(c => c.id === activeChatId) || conversations[0];
  const messages = allMessages[activeChatId] || [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (newMessage.trim() === "") return;

      const updatedMessages = {
        ...allMessages,
        [activeChatId]: [
          ...messages,
          {
            sender: "Tú",
            text: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isMe: true
          }
        ]
      };
      
      setAllMessages(updatedMessages);
      
      // Update last message in the list
      setConversations(conversations.map(c => 
        c.id === activeChatId ? { ...c, lastMessage: newMessage, time: "Ahora" } : c
      ));

      setNewMessage("");
    }
  };

  const filteredConversations = conversations.filter(c => 
    c.name.toLowerCase().includes(searchFilter.toLowerCase()) || 
    c.lastMessage.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="w3-theme-l5" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Menu />

      <div className="w3-container w3-content chat-container" style={{ maxWidth: "1200px", marginTop: "80px", flex: 1 }}>
        <div className="w3-row-padding">
          
          {/* Lista de chats */}
          <div className="w3-col m4 w3-margin-bottom">
            <div className="w3-card w3-round chat-list-container">
              <div className="w3-container w3-padding-16 w3-theme-d2 w3-round-large" style={{ marginBottom: '10px' }}>
                <h4 style={{ margin: 0 }}><i className="fa fa-comments"></i> Conversaciones</h4>
                <div className="w3-section">
                  <input 
                    className="w3-input w3-border w3-round" 
                    type="text" 
                    placeholder="Buscar mensajes..."
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                  />
                </div>
              </div>
              <ul className="w3-ul w3-hoverable">
                {filteredConversations.map((conv) => (
                  <li 
                    key={conv.id} 
                    className={`w3-padding-16 chat-item ${activeChatId === conv.id ? 'active' : ''}`}
                    onClick={() => setActiveChatId(conv.id)}
                  >
                    <img 
                      src={conv.avatar} 
                      className="w3-left w3-circle w3-margin-right avatar-img" 
                      style={{ width: "50px" }} 
                      alt={conv.name}
                    />
                    <span className="w3-large">{conv.name}</span>
                    <span className="w3-right w3-small w3-text-theme">{conv.time}</span>
                    <br />
                    <span className="w3-opacity" style={{ 
                      display: 'block', 
                      whiteSpace: 'nowrap', 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis',
                      maxWidth: '200px'
                    }}>
                      {conv.lastMessage}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ventana de chat activa */}
          <div className="w3-col m8">
            <div className="w3-card w3-round chat-window">
              {/* Header del Chat */}
              <div className="w3-container w3-padding-16 w3-theme-d2 w3-round-large" style={{ flexShrink: 0 }}>
                <h4 style={{ margin: 0 }}>
                  <img 
                    src={activeChat.avatar} 
                    className="w3-circle" 
                    style={{ width: "40px", verticalAlign: "middle", marginRight: "10px" }} 
                    alt="Chatting with"
                  /> 
                  {activeChat.name} 
                  <span className="w3-opacity w3-medium" style={{ marginLeft: '10px', fontSize: '14px' }}> 
                    · {activeChat.status}
                  </span>
                </h4>
              </div>

              {/* Área de Mensajes */}
              <div className="chat-messages" style={{ overflowY: 'auto' }}>
                {messages.length > 0 ? messages.map((msg, index) => (
                  <div key={index} className={`w3-container w3-section`}>
                    <div className={`message-bubble ${msg.isMe ? 'message-right w3-border-green w3-theme-l4 w3-rightbar' : 'message-left w3-border-blue w3-theme-l5 w3-leftbar'} w3-round-large w3-card-2`}>
                      <div className="w3-small" style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                        {msg.sender} <span className="w3-opacity" style={{ fontWeight: 'normal', float: 'right', marginLeft: '10px' }}>{msg.time}</span>
                      </div>
                      <p style={{ margin: 0 }}>{msg.text}</p>
                    </div>
                  </div>
                )) : (
                  <div className="w3-center w3-padding-32 w3-opacity">
                    <i className="fa fa-commenting-o w3-jumbo"></i>
                    <p>No hay mensajes en esta conversación.</p>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Área de Entrada de Texto */}
              <div className="chat-input-area" style={{ flexShrink: 0 }}>
                <div className="w3-row">
                  <div className="w3-col s9">
                    <input 
                      className="w3-input w3-border w3-round" 
                      type="text" 
                      placeholder="Escribe un mensaje..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={handleSendMessage}
                    />
                  </div>
                  <div className="w3-col s3" style={{ paddingLeft: '10px' }}>
                    <button 
                      className="w3-button w3-theme-d2 w3-round w3-block"
                      onClick={handleSendMessage}
                    >
                      <i className="fa fa-paper-plane"></i> <span className="w3-hide-small">Enviar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <footer className="w3-container w3-theme-d3 w3-padding-16 w3-center">
        <h5>RedSocial © 2025</h5>
      </footer>
    </div>
  );
}

