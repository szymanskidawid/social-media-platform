import { useContext } from "react";
import Photo from "../../../small-components/Photo";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { PeopleContext } from "../../../../contexts/PeopleContext";
import { SelectedPersonIdContext } from "../../../../contexts/SelectedPersonIdContext";

const PhotoAlbum = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { people } = useContext(PeopleContext);
  const { selectedPersonId } = useContext(SelectedPersonIdContext);

  const selectedPerson = people.find(
    (person) => person.user_id === selectedPersonId
  );

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
        {selectedPerson.photos && selectedPerson.photos.length > 0 ? (
          selectedPerson.photos.map((photo) => {
            <div className="photo-album-photo-container">
              <Photo type={"view"} key={photo.id} src={photo.url} />
            </div>;
          })
        ) : (
          <p>No photos available.</p>
        )}
      </div>
    </div>
  );
};

export default PhotoAlbum;
