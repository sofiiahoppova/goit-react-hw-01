import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div>
        <img className={css.userImage} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userDescription}>@{tag}</p>
        <p className={css.userDescription}>{location}</p>
      </div>
      <ul className={css.userPropsList}>
        <li className={css.propsListItem}>
          <span>Followers </span>
          <span className={css.boldText}>{stats.followers}</span>
        </li>
        <li className={css.propsListItem}>
          <span>Views </span>
          <span className={css.boldText}>{stats.views}</span>
        </li>
        <li className={css.propsListItem}>
          <span>Likes </span>
          <span className={css.boldText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
