import { useState } from "react";
import styles from "./SearchBar.module.css";
import { toast } from "react-hot-toast";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = value.trim();
    if (searchValue === "") {
      toast.error("Please Enter A Value!");
      return;
    }
    onSearch(searchValue);
    setValue("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search images..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;