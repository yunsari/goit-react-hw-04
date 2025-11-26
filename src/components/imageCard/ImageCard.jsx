import styles from "./ImageCard.module.css";

function ImageCard({ img, onSelect }) {
  return (
    <li className={styles.card} onClick={() => onSelect(img)}>
      <img className={styles.image} src={img.urls.small} alt={img.alt_description} />
    </li>
  );
}

export default ImageCard;