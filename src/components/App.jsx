import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../context/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  /*async function handleGetUser() {
    const response = await api.getInitialUserInfo();
    const userResponse = await response.json();

    setCurrentUser(userResponse);
  }
  useEffect(() => {
    handleGetUser();
  }, []);*/

  useEffect(() => {
    (async () => {
      await api.getInitialUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.patchUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const [popup, setPopup] = useState(null);
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api.patchPicProfile(data).then((avatar) => {
        setCurrentUser(avatar);

        handleClosePopup();
      });
    })();
  };

  const [cards, setCards] = useState([]);
  useEffect(() => {
    handleGetInitialCards();
  }, []);
  async function handleGetInitialCards() {
    const response = await api.getInitialCards();
    const cardsResponse = await response.json();

    setCards(cardsResponse);
  }

  async function handleCardDelete(card) {
    await api
      .deleteUserCard(card._id)
      .then((res) => {
        if (res.status !== 200) {
          return Promise.reject("Erro no delete card");
        }
        setCards(
          cards.filter((currentCard) => {
            return currentCard._id !== card._id;
          })
        );
      })
      .catch((error) => console.error(error));
  }

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

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider
          value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
        >
          <Header></Header>

          <Main
            popup={popup}
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          ></Main>

          <Footer></Footer>
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
