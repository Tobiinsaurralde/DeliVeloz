import { useState } from "react";
import Card from "../../components/card/Card.jsx";

export default function Cards(props) {
  // console.log("esto", props);
  const { dishes } = props;
  return (
    <section>
      <article className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dishes.map(({ id, name, image, price }) => (
          <Card key={id} id={id} name={name} image={image.jpg} price={price} />
        ))}
      </article>
    </section>
  );
}
