import Card from "../ui/Card";
import ItemMeetup from "./ItemMeetup";
import classes from "./ListaMeetups.module.css";

function ListaMeetups(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return (
          <Card>
            <ItemMeetup
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
              description={meetup.description}
            />
          </Card>
        );
      })}
    </ul>
  );
}

export default ListaMeetups;
