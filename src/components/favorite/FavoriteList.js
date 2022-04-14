import FavoriteItem from './FavoriteItem';
import classes from './FavoriteList.module.css';

function FavoriteList(props) {
  return (
    <ul className={classes.list}>
      {props.favorites.map((favorite) => (
        <FavoriteItem
          key={favorite.meetupId}
          meetupId={favorite.meetupId}
          id={favorite.id}
          image={favorite.image}
          title={favorite.title}
          address={favorite.address}
          description={favorite.description}
        />
      ))}
    </ul>
  );
}

export default FavoriteList;
