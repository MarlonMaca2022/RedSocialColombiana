import React, { useState } from 'react';
import Menu from "../Componentes/Menu";

export default function PerfilPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Juan Pérez",
      avatar: "https://www.w3schools.com/w3images/avatar2.png",
      time: "Hace 2 horas",
      text: "¡Nuevo diseño de interfaz terminado! 🎨 ¿Qué opinan?",
      image: "https://www.w3schools.com/w3images/nature.jpg",
      likes: 15
    },
    {
      id: 2,
      author: "Juan Pérez",
      avatar: "https://www.w3schools.com/w3images/avatar2.png",
      time: "Ayer",
      text: "Feliz de anunciar que me uniré al equipo de diseño de W3Schools como colaborador. 🚀",
      image: null,
      likes: 42
    }
  ]);

  const [newPostText, setNewPostText] = useState("");

  const handleLike = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handlePublish = () => {
    if (newPostText.trim() === "") return;
    const newPost = {
      id: Date.now(),
      author: "Juan Pérez",
      avatar: "https://www.w3schools.com/w3images/avatar2.png",
      time: "Ahora mismo",
      text: newPostText,
      image: null,
      likes: 0
    };
    setPosts([newPost, ...posts]);
    setNewPostText("");
  };

  return (
    <div className="w3-theme-l5" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Menu />

      <div className="w3-container w3-content fade-in" style={{ maxWidth: "1400px", marginTop: "80px", flex: 1 }}>
        <div className="w3-row">
          
          {/* Columna izquierda: info de perfil */}
          <div className="w3-col m3">
            <div className="w3-card w3-round w3-white premium-card">
              <div className="w3-container w3-padding-16">
                <h4 className="w3-center">Mi perfil</h4>
                <p className="w3-center">
                  <img 
                    src="https://www.w3schools.com/w3images/avatar3.png" 
                    className="w3-circle img-hover" 
                    style={{ height: "106px", width: "106px" }} 
                    alt="Avatar" 
                  />
                </p>
                <hr />
                <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Diseñador UI</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Londres, Reino Unido</p>
                <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> 1 de abril, 1988</p>
                <p><i className="fa fa-users fa-fw w3-margin-right w3-text-theme"></i> 1.2k seguidores · 345 siguiendo</p>
                <button className="w3-button w3-block w3-theme-d2 w3-margin-bottom btn-hover"><i className="fa fa-pencil"></i> Editar perfil</button>
              </div>
            </div>
            <br />
            
            {/* Fotos destacadas */}
            <div className="w3-card w3-round w3-white premium-card">
              <div className="w3-container w3-padding">
                <p><i className="fa fa-camera"></i> Mis Fotos</p>
                <div className="w3-row-padding">
                  <div className="w3-third">
                    <img src="https://www.w3schools.com/w3images/lights.jpg" style={{ width: "100%" }} className="w3-margin-bottom w3-round img-hover" alt="lights" />
                  </div>
                  <div className="w3-third">
                    <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: "100%" }} className="w3-margin-bottom w3-round img-hover" alt="nature" />
                  </div>
                  <div className="w3-third">
                    <img src="https://www.w3schools.com/w3images/mountains.jpg" style={{ width: "100%" }} className="w3-margin-bottom w3-round img-hover" alt="mountains" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna central: publicaciones y actividad */}
          <div className="w3-col m7">
            {/* Portada */}
            <div className="w3-card w3-round w3-white w3-margin-bottom premium-card" style={{ overflow: 'hidden' }}>
              <img 
                src="https://www.w3schools.com/w3images/forest.jpg" 
                alt="Portada" 
                style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} 
                className="img-hover"
              />
              <div className="w3-container w3-padding">
                <h3>Juan Pérez <span className="w3-opacity w3-medium">@juanperez</span></h3>
                <p>Diseñador UI/UX. Amante del café y la fotografía. #w3css</p>
              </div>
            </div>

            {/* Publicar estado */}
            <div className="w3-card w3-round w3-white w3-margin-bottom premium-card">
              <div className="w3-container w3-padding-16">
                <h6 className="w3-opacity">¿Qué estás pensando?</h6>
                <div 
                  contentEditable="true" 
                  className="w3-border w3-padding w3-round w3-margin-bottom" 
                  style={{ minHeight: '60px', outline: 'none' }}
                  onInput={(e) => setNewPostText(e.currentTarget.textContent)}
                  dangerouslySetInnerHTML={{ __html: newPostText === "" ? "<span style='color: #999'>Comparte algo...</span>" : "" }}
                  onFocus={(e) => { if(newPostText === "") e.currentTarget.innerHTML = ""; }}
                ></div>
                <button 
                  type="button" 
                  className="w3-button w3-theme btn-hover w3-round-large"
                  onClick={handlePublish}
                >
                  <i className="fa fa-pencil"></i> Publicar
                </button>
              </div>
            </div>

            {/* Renderizado de Publicaciones */}
            {posts.map(post => (
              <div key={post.id} className="w3-container w3-card w3-white w3-round w3-margin premium-card"><br />
                <img 
                  src={post.avatar} 
                  alt="Avatar" 
                  className="w3-left w3-circle w3-margin-right" 
                  style={{ width: "60px" }} 
                />
                <span className="w3-right w3-opacity">{post.time}</span>
                <h4>{post.author}</h4><br />
                <hr className="w3-clear" />
                <p>{post.text}</p>
                {post.image && (
                  <img src={post.image} style={{ width: "100%" }} className="w3-margin-bottom w3-round img-hover" alt="post img" />
                )}
                <div className="w3-padding-16">
                  <button 
                    type="button" 
                    className="w3-button w3-theme-d1 w3-margin-bottom btn-hover w3-round-large"
                    onClick={() => handleLike(post.id)}
                  >
                    <i className="fa fa-thumbs-up"></i> {post.likes > 0 ? `${post.likes} ` : ''}Me gusta
                  </button>
                  <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom btn-hover w3-round-large" style={{ marginLeft: '5px' }}>
                    <i className="fa fa-comment"></i> Comentar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Columna derecha */}
          <div className="w3-col m2">
            <div className="w3-card w3-round w3-white w3-center w3-padding-16 premium-card">
              <p><i className="fa fa-calendar"></i> Próximos eventos</p>
              <p><strong>Reunión de diseño</strong><br />Viernes 15:00</p>
              <button className="w3-button w3-block w3-theme-l4 btn-hover">Info</button>
            </div>
            <br />
            <div className="w3-card w3-round w3-white w3-padding-32 w3-center premium-card">
              <p><i className="fa fa-rocket w3-xxlarge w3-text-theme"></i></p>
              <p className="w3-small">Sube de nivel con Pro</p>
            </div>
          </div>
        </div>
      </div>
      
      <br />
      <footer className="w3-container w3-theme-d3 w3-padding-16">
        <h5>RedSocial © 2025</h5>
      </footer>
    </div>
  );
}

