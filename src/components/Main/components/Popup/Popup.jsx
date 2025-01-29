export default function Popup(props) {
  const { title, children } = props;

  return (
    <div className="popup">
      <div className="popup__container">
        <img
          aria-label="Close modal"
          className="popup__close-button"
          type="button"
        />
        <h2 className="popup__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
