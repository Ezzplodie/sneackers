import React from "react";
import { motion } from "framer-motion";
export default function Cards({
  imageUrl,
  price,
  title,
  onFavorite,
  onPlus,
  onRemoveItem,
  onDelete,
  favorited,
  id,
}) {
  const [isAdded, setIsAdded] = React.useState();
  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus({ imageUrl, price, title, onRemoveItem });
    // console.log(isAdded);
  };
  const [isLiked, setLiked] = React.useState();
  const onClickLike = () => {
    setLiked(!isLiked);
    onFavorite({ imageUrl, price, title, onRemoveItem });
  };

  return (
    <div className="card">
      <div className="favoutite">
        <img
          src={isLiked ? "/img/liked.svg" : "/img/unliked.svg"}
          alt=""
          className="cu-p"
          onClick={onClickLike}
        />
      </div>
      <img
        width={133}
        height={112}
        src={imageUrl}
        alt=""
        className="card-img"
      />
      <p className="card-title">{title}</p>
      <div className="d-flex justify-between mt-5  align-center mb-40">
        <div className="card__inside d-flex flex-column pt-5  ">
          <p>Ціна:</p>
          <b>{price} грн.</b>
        </div>
        <img
          src={isAdded ? "/img/btn-plus-active1.svg" : "/img/btn-plus.svg"}
          alt=""
          className="plus"
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}
