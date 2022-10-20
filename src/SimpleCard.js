import { Component } from "react";
import Description from "./Description";
import Image from "./Image";
import Title from "./Title";

class SimpleCard extends Component {
  render() {
    return (
      <div className=" border-4 border-blue-600 m-10 p-4">
        <div className="flex gap-1">
          <Image src="IMG" />
          <div className="flex flex-col flex-auto gap-1">
            <Title title={"A Title"} />
            <Description description="The description goes here." />
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleCard;
