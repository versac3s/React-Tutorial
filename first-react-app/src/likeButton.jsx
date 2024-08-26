//CREATING A LIKE BUTTON
//useState hook to change the icons.
//hooks can only be declared in function component
import { useState } from "react";
export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let toggleLike = () => {
    setIsLiked(!isLiked);
  };
  let likeStyle = {
    color: "red",
    transform: "scale(1.2)",
    transition: "transform 0.1s ease"
  };
  return (
    <div>
      <button onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </button>
    </div>
  );
}
