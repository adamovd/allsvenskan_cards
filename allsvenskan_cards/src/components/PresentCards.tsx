import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import styles from "../styles.module.scss";
import { useState } from "react";
import { to, from, trans } from "../helpers/CardDeckHelpers";

import React from "react";

const cards = [
  "https://d281ovntc614pi.cloudfront.net/content/uploads/2023/03/Kristoffer-Nordfeldt-600x871.jpg",
  "https://d281ovntc614pi.cloudfront.net/content/uploads/2023/03/Axel-Bjo%CC%88rnstro%CC%88m-600x871.jpg",
  "https://d281ovntc614pi.cloudfront.net/content/uploads/2023/07/BB230621JW0434-600x900.jpg",
  "https://d281ovntc614pi.cloudfront.net/content/uploads/2023/03/Jimmy-Durmaz-600x871.jpg",
  "https://d281ovntc614pi.cloudfront.net/content/uploads/2023/03/John-Guidetti-600x871.jpg",
];

const PresentCards = () => {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </>
  );
};

export default PresentCards;
