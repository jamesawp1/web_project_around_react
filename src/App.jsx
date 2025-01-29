import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="page">
        <header class="header">
          <img
            class="header__image"
            src="./images/header__image.png"
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

        <div class="popup popup-edit-profile">
          <div class="popup__container">
            <img
              class="popup__close-button"
              src="./images/close_icon.png"
              alt="Botão de fechar o popup"
            />
            <h2 class="popup__title">Editar perfil</h2>
            <form class="popup__form">
              <input
                id="input-name"
                class="popup__input"
                type="text"
                name="name"
                placeholder="Nome"
                minlength="2"
                maxlength="40"
                required
              />
              <span
                id="input-name-error"
                class="popup__form-error input-name-error"
              ></span>
              <input
                id="input-job"
                class="popup__input"
                type="text"
                name="about"
                placeholder="Sobre Mim"
                minlength="2"
                maxlength="200"
                required
              />
              <span
                id="input-role-error"
                class="popup__form-error input-job-error"
              ></span>
              <button id="save-button" class="popup__button" type="submit">
                Salvar
              </button>
            </form>
          </div>
        </div>

        <div class="popup popup-add-card">
          <div class="popup__container">
            <img
              class="popup__close-button popup-add-card__close-button"
              src="./images/close_icon.png"
              alt="Botão de fechar o popup"
            />
            <h2 class="popup__title">Novo Lugar</h2>
            <form class="popup__form popup__form-add-card">
              <input
                id="input-place-title"
                class="popup__input"
                name="name"
                placeholder="Título"
                minlength="2"
                maxlength="30"
                required
              />
              <span
                id="input-place-title-error"
                class="popup__form-error input-place-title-error"
              ></span>
              <input
                id="input-place-url"
                class="popup__input"
                name="link"
                placeholder="URL da imagem"
                type="url"
                required
              />
              <span
                id="input-place-url-error"
                class="popup__form-error input-place-url-error"
              ></span>
              <button type="submit" class="popup__button">
                Salvar
              </button>
            </form>
          </div>
        </div>

        <div class="popup popup-view-image">
          <div class="popup__container popup-view-image__image-title-container">
            <img
              class="popup__close-button popup-view-image__close-button"
              src="./images/close_icon.png"
              alt="Botão de fechar o popup"
            />
            <div class="popup-view-image__image-title-container">
              <img class="popup-view-image__image" src="#" alt="" />
              <p class="popup-view-image__title"></p>
            </div>
          </div>
        </div>

        <div class="popup popup-profile-picture">
          <div class="popup__container">
            <img
              class="popup__close-button popup-profile-picture__close-button"
              src="./images/close_icon.png"
              alt="Botão de fechar o popup"
            />
            <h2 class="popup__title">Alterar a foto do perfil</h2>
            <form class="popup__form popup__profile-picture">
              <input
                id="input-profile-picture"
                class="popup__input"
                name="link"
                placeholder="URL da fotografia"
                type="url"
                required
              />
              <span
                id="input-profile-picture-error"
                class="popup__form-error input-profile-picture-error"
              ></span>
              <button type="submit" class="popup__button">
                Salvar
              </button>
            </form>
          </div>
        </div>

        <div class="popup popup-confirmation">
          <div class="popup__container popup__container-confirmation">
            <img
              class="popup__close-button popup-confirmation__close-button"
              src="./images/close_icon.png"
              alt="Botão de fechar o popup"
            />
            <h2 class="popup__title">Tem certeza?</h2>
            <button type="submit" class="popup__button">
              Sim
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
