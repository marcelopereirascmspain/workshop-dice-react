import React from 'react';
import ReactDOM from "react-dom";
import {Dice} from '../src';
import './style.scss';
import '../src/index.scss';

const diceList = (faces) => {
  return faces.map((face, idx) => {
    return <Dice size={60} dotSize={10} faces={face} key={idx} />;
  });
}

ReactDOM.render(<div>{diceList([1, 2, 3, 4, 5, 6])}</div>, document.getElementById('main'));
