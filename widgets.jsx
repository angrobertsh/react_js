import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './tabs';
import Clock from './clocks';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const tabTitles = {0: "title1", 1: "title2", 2:"title3"};
  const tabContents = {0: "content1", 1: "Content2", 2:"content3"};
  const tabData = [tabTitles, tabContents];
  console.log("got here");
  ReactDOM.render(
    <div>
      <Tab tabData={tabData} />
      <Clock />
    </div>, root
  );
});
