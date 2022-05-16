//import { Component } from "react";
import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";


//Functional component

const CardList = ({monsters}) => {

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;


//Class component
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

//export default CardList;
