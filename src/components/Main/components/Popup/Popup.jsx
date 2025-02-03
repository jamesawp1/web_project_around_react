import closePopupImg from "../../../../images/close_icon.png";

export default function Popup(props) {
  const { onClose, title, children } = props;

  return (
    <div className="popup">
      <div className="popup__container">
        <img
          aria-label="Close modal"
          className="popup__close-button"
          type="button"
          onClick={onClose}
          src={closePopupImg}
        />
        <h2 className="popup__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
