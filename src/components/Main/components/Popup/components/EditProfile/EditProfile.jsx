import { useState } from "react";

export default function EditProfile() {
  const { name, setName } = useState({});
  const { description, setDescription } = useState({});

  function handleChange(e, param) {
    param(e.target.value);
  }

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <label className="popup__field">
        <input
          id="profile-name"
          className="popup__input popup__input_type_profile-name"
          type="text"
          name="profile-name"
          placeholder="Nome"
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleChange}
          required
        />
        <span
          id="profile-name-error"
          className="popup__error profile-name-error"
        ></span>
      </label>
      <label className="popup__field">
        <input
          id="profession-name"
          className="popup__input popup__input_type_profession-name"
          type="text"
          name="profession-name"
          placeholder="Sobre Mim"
          minLength="2"
          maxLength="200"
          value={description}
          onChange={handleChange}
          required
        />
        <span
          id="profession-name-error"
          className="popup__error profession-name-error"
        ></span>
      </label>
      <button id="save-button" className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
