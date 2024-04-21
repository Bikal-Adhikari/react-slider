import React, { useState } from "react";
import { shortList, list, longList } from "./data";

const Carousel = () => {
  const [people, setPeople] = useState(shortList);
  return <div>Carousel</div>;
};

export default Carousel;
