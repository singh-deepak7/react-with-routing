import Card from "../ui/Card";
import classes from "./FavoriteItem.module.css";
import React, { useState } from "react";




function FavoriteItem(props) {

  const [value,setValue] = useState();

  const removeFromFavorite = (key, value) => {
    let request = {};
    request.id = value;
    request.activeSw = false;

    fetch("http://localhost:8080/api/v1/favorite", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
       // it re-renders the component
       window.location.reload();
    });
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button
            value={props.meetupId}
            onClick={(e) => removeFromFavorite("meetupId", e.target.value)}
          >
            Remove from Favorites
          </button>
        </div>
      </Card>
    </li>
  );
}

export default FavoriteItem;
