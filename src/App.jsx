import { useState } from "react";
import reactLogo from "./assets/react.svg";
import logo from "./images/header__image.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="page">
        <header class="header">
          <img
            class="header__image"
            src={logo}
            alt="Logo do site Around The Us."
          />
        </header>

        <main class="main">
          <section class="profile">
            <div class="profile__picture-container">
              <img
                class="profile__image"
                src="#"
                alt="Imagem de um senhor de idade."
              />
              <img
                class="profile__edit-picture"
                src="./images/icon__change-picture-profile.svg"
                alt="Imagem representando uma caneta"
              />
            </div>
            <div class="profile__info">
              <div class="profile__info-wrapper">
                <h1 id="profile-name" class="profile__title"></h1>
                <button class="profile__edit-button"></button>
              </div>
              <h2 id="profile-role" class="profile__subtitle"></h2>
            </div>
            <button class="profile__add-button"></button>
          </section>

          <div class="gallery">
            <template id="template">
              <div class="gallery__card">
                <button class="gallery__delete-button">
                  <img
                    class="gallery__delete-icon"
                    src="./images/delete-icon.png"
                    alt="Ícone do botão que exclui uma imagem da galeria, representando uma lixeira"
                  />
                </button>
                <img class="gallery__card-image" src="#" alt="" />
                <div class="gallery__wrapper-text-and-like-button">
                  <p class="gallery__card-name"></p>
                  <button class="gallery__like-button">
                    <img
                      class="gallery__like-icon"
                      src="./images/button__icon.svg"
                      alt="Ícone do botão de curtir, em formato de coração"
                    />
                  </button>
                </div>
              </div>
            </template>
          </div>
        </main>

        <footer class="footer">
          <h2 class="footer__copyright">&copy; 2024 Around The U.S.</h2>
        </footer>
      </div>
    </>
  );
}

export default App;
