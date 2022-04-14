import { useState, useEffect } from "react";
import FavoriteList from "../components/favorite/FavoriteList";

function FavoritesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNoFavorite, setIsNoFavorite] = useState(false);
  const [loadedFavorite, setLoadedFavorites] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/api/v1/favorites")
      .then((response) => response.json())
      .then((data) => {
        if(Object.keys(data).length !== 0) {
          setIsNoFavorite(false);
        const favorites = [];

        for (const key in data) {
          const favorite = {
            id: key,
            ...data[key],
          };

          favorites.push(favorite);
        }

        setIsLoading(false);
        setLoadedFavorites(favorites);
      } 
      setIsLoading(false);
     
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }


  if (isNoFavorite) {
    return (
      <section>
        <p>No favorite found</p>
      </section>
    );
  }

  return (
    <section>
      <h1>My Favorite List</h1>
      <FavoriteList favorites={loadedFavorite} />
    </section>
  );
}

export default FavoritesPage;
