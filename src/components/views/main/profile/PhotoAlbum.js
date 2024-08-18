import { useContext } from "react";
import Photo from "../../../small-components/Photo";
import { LightModeContext } from "../../../../contexts/LightModeContext";

const PhotoAlbum = () => {
  const { isLightMode } = useContext(LightModeContext);
  return (
    <div
      className={`photo-album-container ${isLightMode ? "light-mode-1" : "dark-mode-1"}`}
    >
      <div
        className={`photo-album-top-section ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
      >
        All Photos
      </div>
      <div className="photo-album-content">
        <div className="photo-album-photo-container">
          <Photo type={"change"} src="/assets/addNewPhoto.jpg" />
        </div>
        <div className="photo-album-photo-container">
          <Photo type={"view"} src={"https://picsum.photos/id/237/400/400"} />
        </div>
        <div className="photo-album-photo-container">
          <Photo type={"view"} src={"https://picsum.photos/id/238/400/400"} />
        </div>
        <div className="photo-album-photo-container">
          <Photo type={"view"} src={"https://picsum.photos/id/239/400/400"} />
        </div>
        <div className="photo-album-photo-container">
          <Photo type={"view"} src={"https://picsum.photos/id/240/400/400"} />
        </div>
        <div className="photo-album-photo-container">
          <Photo type={"view"} src={"https://picsum.photos/id/241/400/400"} />
        </div>
        <div className="photo-album-photo-container">
          <Photo type={"view"} src={"https://picsum.photos/id/242/400/400"} />
        </div>
        <div className="photo-album-photo-container">
          <Photo type={"view"} src={"https://picsum.photos/id/243/400/400"} />
        </div>
        <div className="photo-album-photo-container">
          <Photo type={"view"} src={"https://picsum.photos/id/244/400/400"} />
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbum;
