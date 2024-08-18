import { useState } from "react";

const Photo = ({ type, style, src }) => {
  const [showPhoto, setShowPhoto] = useState(false);

  const selectedPhotoType = (selection) => {
    if (selection === "view") {
      return (
        <div
          className={`photo-${showPhoto ? "zoom" : "normal"}`}
          onClick={() => setShowPhoto(!showPhoto)}
        >
          <img style={style} src={src} />
        </div>
      );
    } else if (selection === "change") {
      return (
        <div className="photo-normal">
          <img style={style} src={src} />
        </div>
      );
    }
  };

  return <div className="photo-container">{selectedPhotoType(type)}</div>;
};

export default Photo;
