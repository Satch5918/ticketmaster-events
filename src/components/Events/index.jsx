import { useState } from "react";

import EventsItem from "./components/EventItem";
import eventsJSON from "../../data/events.json";

/* const events = data._embedded.events; */

const Events = () => {
  const [data] = useState(eventsJSON);
  const {
    _embedded: { events },
  } = data;

  return (
    <div>
      <h1>Events</h1>
      {events.map((eventsItem) => (
        <EventsItem
          key={`event-items-${eventsItem.id}`}
          name={eventsItem.name}
          info={eventsItem.info}
          image={eventsItem.images[0].url}
        />
      ))}
    </div>
  );
};

export default Events;
