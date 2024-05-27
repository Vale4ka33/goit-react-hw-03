import style from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={style.container}>
      <div className={style.info}>
        <img className={style.photo} src={image} alt={name} />
        <p className={style.name}>{name}</p>
        <p className={style.text}>@{tag}</p>
        <p className={style.text}>{location}</p>
      </div>
      <ul className={style.list}>
        <li>
          <span className={style.stats}>Followers</span>
          <span className={style.count}>{followers}</span>
        </li>
        <li>
          <span className={style.stats}>Views</span>
          <span className={style.count}>{views}</span>
        </li>
        <li>
          <span className={style.stats}>Likes</span>
          <span className={style.count}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
