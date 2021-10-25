import React, { useState } from "react";
import Content from "./Content/Content";
import Navbar from "./Utilities/Navbar";

const data = [
  {
    date: 1,
    imageUrl: "./images/Red.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus soluta ex, atque neque veniam. Aspernatur tempora amet illo possimus at eius delectus molestiae rerum nisi expedita, hic eaque quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sint maiores! Earum molestias harum nulla odio culpa, non tempora officiis, totam explicabo, aliquam repellat maiores amet iste! Soluta, deleniti qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quas accusantium eaque aspernatur, soluta distinctio voluptas repudiandae iure dolor dicta, quisquam minima amet reprehenderit. Consequuntur, et. Ullam aut iste sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quibusdam ullam eum libero facilis, exercitationem iure cumque distinctio laudantium voluptas",
  },
  {
    date: 2,
    imageUrl: "./images/Yellow.png",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quas accusantium eaque aspernatur, soluta distinctio voluptas repudiandae iure dolor dicta, quisquam minima amet reprehenderit. Consequuntur, et. Ullam aut iste sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quibusdam ullam eum libero facilis, exercitationem iure cumque distinctio laudantium voluptas",
  },
  {
    date: 3,
    imageUrl: "./images/Green.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus soluta ex, atque neque veniam. Aspernatur tempora amet illo possimus at eius delectus molestiae rerum nisi expedita, hic eaque quas?Consequuntur, et. Ullam aut iste sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quibusdam ullam eum libero facilis, exercitationem iure cumque distinctio laudantium voluptas",
  },
  {
    date: 4,
    imageUrl: "./images/Orange.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sint maiores! Earum molestias harum nulla odio culpa, non tempora officiis, totam explicabo, aliquam repellat maiores amet iste! Soluta, deleniti qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. aepe quibusdam ullam eum libero facilis, exercitationem iure cumque distinctio laudantium voluptas",
  },
  {
    date: 5,
    imageUrl: "./images/Blue.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sint maiores! Earum molestias harum nulla odio culpa, non tempora officiis, totam explicabo, aliquam repellat maiores amet iste! Soluta, deleniti qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quas accusantium eaque aspernatur, soluta distinctio voluptas repudiandae iure dolor dicta, quisquam minima amet reprehenderit. Consequuntur, et. Ullam aut iste sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quibusdam ullam eum libero facilis, exercitationem iure cumque distinctio laudantium voluptas",
  },
];

function Main() {
  const [dataSet, setDataSet] = useState(0);

  const indexHandler = (x) => {
    setDataSet(x);
  };

  return (
    <>
      <h2 className="text-center mb-3">TimeLine</h2>
      <Navbar setIndex={indexHandler} />
      <Content
        title={data[dataSet].date}
        img={data[dataSet].imageUrl}
        desc={data[dataSet].content}
      />
    </>
  );
}

export default Main;
