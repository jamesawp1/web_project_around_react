/*import ImagePopup from "../Popup/components/ImagePopup/ImagePopup";*/
import deleteIcon from "../../../../images/delete-icon.png";
import likeIcon from "../../../../images/button__icon.svg";

export default function Card(props) {
  const { name, link, isLiked /*handleOpenPopup*/ } = props.card;
  /*const imageComponent = {
    title: null,
    children: <ImagePopup card={props.card} />,
  };*/

  return (
    <li className="gallery__card">
      <button className="gallery__delete-button">
        <img
          className="gallery__delete-icon"
          src={deleteIcon}
          alt="Ícone do botão que exclui uma imagem da galeria, representando uma lixeira"
        />
      </button>
      <img
        className="gallery__card-image"
        src={link}
        alt={name}
        /*onClick={handleOpenPopup(imageComponent)}*/
      />
      <div className="gallery__wrapper-text-and-like-button">
        <h2 className="gallery__card-name">{name}</h2>
        <button className="gallery__like-button">
          <img
            className="gallery__like-icon"
            src={likeIcon}
            alt="Ícone do botão de curtir, em formato de coração"
          />
        </button>
      </div>
    </li>
  );
}
