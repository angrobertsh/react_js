import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './tabs';
import Clock from './clocks';
import Weather from './weather';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const tabTitles = {0: "title1", 1: "title2", 2:"title3"};
  const tabContents = {0: "content1", 1: "Content2", 2:"content3"};
  const tabData = [tabTitles, tabContents];

  ReactDOM.render(
    <div>
      <Tab tabData={tabData} />
      <Clock />
      <Weather />
    </div>, root
  );
});
