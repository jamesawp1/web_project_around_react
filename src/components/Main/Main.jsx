import { useState } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];
console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "New Card", children: <NewCard /> };
  const editProfilePopup = { title: "Edit Profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit Avatar", children: <EditAvatar /> };

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
            onClick={() => handleOpenPopup(editAvatarPopup)}
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
