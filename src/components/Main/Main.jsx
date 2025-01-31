import { useState } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "New Card", children: <NewCard /> };

  const editProfilePopup = { title: "Edit Profile", children: <EditProfile /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__picture-container">
          <img
            className="profile__image"
            src="#"
            alt="Imagem de um senhor de idade."
          />
          <img
            className="profile__edit-picture"
            src="./images/icon__change-picture-profile.svg"
            alt="Imagem representando uma caneta"
          />
        </div>
        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 id="profile-name" className="profile__title"></h1>
            <button
              className="profile__edit-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            ></button>
          </div>
          <h2 id="profile-role" className="profile__subtitle"></h2>
        </div>
        <button
          className="profile__add-button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      <div className="gallery">
        <template id="template">
          <div className="gallery__card">
            <button className="gallery__delete-button">
              <img
                className="gallery__delete-icon"
                src="./images/delete-icon.png"
                alt="Ícone do botão que exclui uma imagem da galeria, representando uma lixeira"
              />
            </button>
            <img className="gallery__card-image" src="#" alt="" />
            <div className="gallery__wrapper-text-and-like-button">
              <p className="gallery__card-name"></p>
              <button className="gallery__like-button">
                <img
                  className="gallery__like-icon"
                  src="./images/button__icon.svg"
                  alt="Ícone do botão de curtir, em formato de coração"
                />
              </button>
            </div>
          </div>
        </template>
      </div>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
