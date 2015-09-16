import React from 'react';
import Dot from "./Dot";

export default class Dice extends React.Component {
  render() {
    const { size, dotSize } = this.props;
    const faces =
      (this.props.faces > 6 || this.props.faces < 1) ? 1 : this.props.faces;

    return (
      <div
        className='dice'
        style={{
          width: size,
          height: size,
          padding: size / 10
        }}>
        <div className="dice__inner">
          {dots(diceAlignments[faces], dotSize)}
        </div>
      </div>
    );
  }
}

Dice.defaultProps = {
  faces: 1,
  size: 104,
  dotSize: 22
};

function dots(alignments, size) {
  return alignments.map((alignment, idx) => {
    return <Dot align={alignment} size={size} key={idx} />
  });
}

const diceAlignments = {
  1: [
    ["center", "center"]
  ],

  2: [
    ["top", "left"],
    ["bottom", "right"]
  ],

  3: [
    ["top", "left"],
    ["center", "center"],
    ["bottom", "right"]
  ],

  4: [
    ["top", "left"],
    ["top", "right"],
    ["bottom", "left"],
    ["bottom", "right"]
  ],

  5: [
    ["top", "left"],
    ["top", "right"],
    ["center", "center"],
    ["bottom", "left"],
    ["bottom", "right"]
  ],

  6: [
    ["top", "left"],
    ["top", "right"],
    ["center", "left"],
    ["center", "right"],
    ["bottom", "left"],
    ["bottom", "right"]
  ]
};
