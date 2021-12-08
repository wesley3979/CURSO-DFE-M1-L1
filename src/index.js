import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './features/welcome';
import './index.css';

const title = process.env.REACT_APP_TITLE;
const data = 0;
const data2 = 0;

ReactDOM.render(
  <Welcome title={title} Data={data} Data2={data2} />
  ,
  document.getElementById('root')
);