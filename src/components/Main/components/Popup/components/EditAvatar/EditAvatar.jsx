export default function EditAvatar() {
  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <label className="popup__field">
        <input
          id="picture-link"
          className="popup__input popup__input_type_picture-link"
          name="picture-link"
          placeholder="URL da fotografia"
          type="url"
          required
        />
        <span
          id="picture-link-error"
          className="popup__error picture-link-error"
        ></span>
      </label>
      <button type="submit" className="button popup__button">
        Salvar
      </button>
    </form>
  );
}
