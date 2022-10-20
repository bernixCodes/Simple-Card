import { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div className="border-2 border-gray-600 text-gray-700 text-xl font-semibold py-2 px-6 pb-10">
        <h2>{this.props.description}</h2>
      </div>
    );
  }
}

export default Description;
