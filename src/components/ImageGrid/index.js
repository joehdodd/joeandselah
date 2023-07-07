import * as React from "react";
import ImageModal from "../ImageModal";
import "./ImageGrid.css";

const images = [
  { src: require("../../assets/img/AnnaJordan-1.jpg") },
  { src: require("../../assets/img/AnnaJordan-2.jpg") },
  { src: require("../../assets/img/AnnaJordan-3.jpg") },
  { src: require("../../assets/img/AnnaJordan-4.jpg") },
  { src: require("../../assets/img/FranklinKristin-1.jpg") },
  { src: require("../../assets/img/FranklinKristin-2.jpg") },
  { src: require("../../assets/img/FranklinKristin-3.jpg") },
  { src: require("../../assets/img/KatieDave-1.jpg") },
  { src: require("../../assets/img/KatieDave-2.jpg") },
  { src: require("../../assets/img/KatieDave-3.jpg") },
  { src: require("../../assets/img/KatieDave-4.jpg") },
];

function useClickAway(ref, handler) {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const ImageGrid = () => {
  const modalRef = React.useRef(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const handleImageClick = (e) => {
    setSelectedImage(e.target.src);
    setModalOpen(true);
  };

  useClickAway(modalRef, () => setModalOpen(false));

  return (
    <div className="photos-wrapper">
      <div className="photos-container">
        {images.map((img) => (
          <img src={img.src} alt="Wedding" onClick={handleImageClick} />
        ))}
      </div>
      <ImageModal isOpen={modalOpen}>
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            width: "100vw",
            background: "rgba(0, 0, 0, 0.75)",
          }}
        >
          <div
            style={{
              height: '100%"',
              width: "75%",
              margin: "4rem auto",
              padding: 32,
            }}
            ref={modalRef}
          >
            <img style={{ width: "100%" }} src={selectedImage} alt="Wedding" />
          </div>
        </div>
      </ImageModal>
    </div>
  );
};

export default ImageGrid;
