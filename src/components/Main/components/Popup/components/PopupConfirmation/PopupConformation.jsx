import deleteIcon from "../../../../../../images/delete-icon.png";

export default function PopupConfirmation() {
  return (
    <div className="popup popup-confirmation">
      <div className="popup__container popup__container-confirmation">
        <img
          className="popup__close-button popup-confirmation__close-button"
          src={deleteIcon}
          alt="Botão de fechar o popup"
        />
        <h2 className="popup__title">Tem certeza?</h2>
        <button type="submit" className="popup__button">
          Sim
        </button>
      </div>
    </div>
  );
}
