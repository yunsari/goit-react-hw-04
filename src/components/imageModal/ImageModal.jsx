import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      className={styles.modalContent}
    >
      <img className={styles.modalImage} src={imageUrl} alt="img" />
    </Modal>
  );
};

export default ImageModal;
