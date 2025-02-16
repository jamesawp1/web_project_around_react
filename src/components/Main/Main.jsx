import { useState, useEffect } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card.jsx";
import editImg from "../../images/icon__change-picture-profile.svg";
import { api } from "../../utils/api.js";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext.js";

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

  const { currentUser } = useContext(CurrentUserContext);

  /*async function handleCardLike(card) {
    if (!card.isLiked) {
      await api.putLikeUserCard(card._id).then((updatedCard) => {
        const cartoso = updatedCard.json();
        setCards((cards) => {
          return cards.map((currentCard) => {
            return currentCard._id === card._id ? cartoso : currentCard;
          });
        });
      });
    } else {
      await api.deleteLikeUserCard(card._id).then((updatedCard) => {
        setCards((cards) => {
          return cards.map((currentCard) => {
            return currentCard._id === card._id ? updatedCard : currentCard;
          });
        });
      });
    }
  }*/
  async function handleCardLike(card) {
    // Verificar mais uma vez se esse cartão já foi curtido
    const isLiked = card.isLiked;

    // Enviar uma solicitação para a API e obter os dados do cartão atualizados
    /*await api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id
              ? { ...currentCard, isLiked: newCard.isLiked }
              : currentCard
          )
        );
      })
      .catch((error) => console.error(`OLHA O ERRO ${error}`));*/
    await api
      .changeLikeCardStatus(card._id, isLiked)
      .then((response) => response.json())
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

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
            src={currentUser.avatar}
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
              {currentUser.name}
            </h1>
            <button
              className="profile__edit-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            ></button>
          </div>
          <h2 id="profile-role" className="profile__subtitle">
            {currentUser.about}
          </h2>
        </div>
        <button
          className="profile__add-button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      <ul className="gallery">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              openImg={handleOpenPopup}
              onCardLike={handleCardLike}
            />
          );
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
