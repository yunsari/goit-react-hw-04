import { useState, useEffect } from "react";
import { fetchImages } from "./api/unsplash";

import { Toaster } from "react-hot-toast";

import SearchBar from "./components/searchBar/SearchBar";
import ImageGallery from "./components/imageGallery/ImageGallery";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import ImageModal from "./components/imageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await fetchImages(query, page);

        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError(err.message || "Bir hata oluştu!");
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Toaster position="top-right" />
      {error && <ErrorMessage message={error} />}

      <ImageGallery images={images} onSelect={setSelectedImage} />

      {loading && <Loader />}

      {images.length > 0 && !loading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={closeModal}
        imageUrl={selectedImage?.urls?.regular}
      />
    </div>
  )
}

export default App;
