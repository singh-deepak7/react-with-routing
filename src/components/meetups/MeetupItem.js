import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useNavigate } from "react-router-dom";

function MeetupItem(props) {
  const navigate = useNavigate();

  const sendToFavorite = (key, value) => {
    let request = {};
    request.meetupId = value;
    request.activeSw = true;

    fetch("http://localhost:8080/api/v1/favorites", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/favorites");
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
            value={props.id}
            onClick={(e) => sendToFavorite("meetupId", e.target.value)}
          >
            To Favorites
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
