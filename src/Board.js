import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import "./stylesheets/Board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.size = this.props.size;
    this.blocks = [];
    for (let i = 1; i <= this.size; i++) {
      for (let j = 1; j <= this.size; j++) {
        this.blocks.push([i, j]);
      }
    }
  }
  render = () => {
    return (
      <div
        className="Board"
        style={{ gridTemplateColumns: `repeat(${this.size}, 1fr)` }}
      >
        {this.blocks.map((block) => {
          return (
            <Paper key={block.join("-")} square>
              {block.join("-")}
            </Paper>
          );
        })}
      </div>
    );
  };
}

export default Board;