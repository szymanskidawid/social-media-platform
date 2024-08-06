import { useState } from "react";

const Picture = ({ style, src }) => {
  const [showPicture, setShowPicture] = useState(false);
  return (
    <div
      className="picture-container"
      onClick={() => setShowPicture(!showPicture)}
    >
      <div className={`picture-${showPicture ? "zoom" : "normal"}`}>
        <img style={style} src={src} />
      </div>
    </div>
  );
};

export default Picture;
