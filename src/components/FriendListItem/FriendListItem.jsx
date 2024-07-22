import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListItem}>
      <img src={avatar} alt="Avatar" width="128" />
      <p className={css.itemTitle}>{name}</p>
      <p className={clsx(isOnline ? css.greenText : css.redText)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
