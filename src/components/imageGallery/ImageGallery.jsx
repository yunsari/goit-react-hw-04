import styles from "./ImageGallery.module.css";
import ImageCard from "../imageCard/ImageCard";

function ImageGallery({ images, onSelect }) {
  return (
    <ul className={styles.gallery}>
      {images.map((img) => (
        <ImageCard key={img.id} img={img} onSelect={onSelect} />
      ))}
    </ul>
  );
}

export default ImageGallery;