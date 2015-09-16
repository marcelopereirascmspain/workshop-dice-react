import React from 'react';

export default class Dot extends React.Component {
  render() {
    var { align, size } = this.props;
    var [vertical, horizontal] = align;
    var verticalStyle = styleVertical(vertical, size);
    var horizontalStyle = styleHorizontal(horizontal, size);

    return (
      <div
        style={{
          width: size,
          height: size,
          ...verticalStyle,
          ...horizontalStyle
        }}
        className="dice__dot">
      </div>
    );
  }
}

Dot.defaultProps = {
  size: 22
};

function styleHorizontal(position, size) {
  switch (position) {
    case "right":
      return {right: 0};
    case "center":
      return {left: "50%", marginLeft: -size/2}
    case "left":
      return {left: 0};
  }
}

function styleVertical(position, size) {
  switch (position) {
    case "bottom":
      return {bottom: 0};
    case "center":
      return {top: "50%", marginTop: -size/2}
    default:
      return {top: 0};
  }
}
