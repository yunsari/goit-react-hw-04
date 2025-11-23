import styles from "./ImageModal.module.css";

function ImageModal({ img, onClose }) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <img className={styles.modalImage} src={img.urls.regular} alt="" />
    </div>
  );
}

export default ImageModal;