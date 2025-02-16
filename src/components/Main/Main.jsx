import { useState, useEffect } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card.jsx";
import profileImg from "../../images/profile__image.jpg";
import editImg from "../../images/icon__change-picture-profile.svg";
import { api } from "../../utils/api.js";

export default function Main() {
  const [popup, setPopup] = useState(null);

  const [cards, setCards] = useState([]);
  useEffect(() => {
    handleGetInitialCards();
  }, []);
  async function handleGetInitialCards() {
    const response = await api.getInitialCards();
    const cardsResponse = await response.json();

    setCards(cardsResponse);
  }

  const [user, setUser] = useState([]);
  async function handleGetUser() {
    const response = await api.getInitialUserInfo();
    const userResponse = await response.json();
  }
  useEffect(() => {
    handleGetUser();
  }, []);

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
            src={profileImg}
            alt="Imagem de um senhor de idade."
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />
          <img
            className="profile__edit-picture"
            src={editImg}
            alt="Imagem representando uma caneta"
          />
        </div>
        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 id="profile-name" className="profile__title">
              Jacques Cousteau
            </h1>
            <button
              className="profile__edit-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            ></button>
          </div>
          <h2 id="profile-role" className="profile__subtitle">
            Explorador
          </h2>
        </div>
        <button
          className="profile__add-button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      <ul className="gallery">
        {cards.map((card) => {
          return <Card key={card._id} card={card} openImg={handleOpenPopup} />;
        })}
      </ul>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
