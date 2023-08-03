import React, { useState, setState } from "react";
import { Component } from "react";
import "./FeedPage.css";
import FeedWrite from "../feed/FeedWrite";
import FeedList from "../feed/FeedList";

class FeedPage extends Component {
  render() {
    return (
      <div className='FeedPage'>
        <FeedWrite />
        {/* <FeedList /> */}
      </div>
    );
  }
}
// function FeedPage() {
//   return (
//     <div className='FeedPage'>
//       <FeedWrite />
//       <FeedList />
//     </div>
//   );
// }

export default FeedPage;
