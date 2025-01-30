export default function NewCard() {
  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <label className="popup__field">
        <input
          id="card-name"
          className="popup__input popup__input_type_card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Título"
          required
          type="text"
        />
        <span
          id="card-name-error"
          className="popup__error card-name-error"
        ></span>
      </label>
      <label className="popup__field">
        <input
          id="card-link"
          className="popup__input popup__input_type_url"
          name="card-link"
          placeholder="URL da imagem"
          type="url"
          required
        />
        <span
          id="card-link-error"
          className="popup__error card-link-error"
        ></span>
      </label>
      <button type="submit" className="button popup__button">
        Salvar
      </button>
    </form>
  );
}
