import { RotatingLines } from "react-loader-spinner";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <RotatingLines
        visible={true}
        height="60"
        width="60"
        strokeWidth="4"
        strokeColor="#3f51b5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}

export default Loader;