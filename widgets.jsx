import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './tabs';
import Clock from './clocks';
import Weather from './weather';
import Autocomplete from './autocomplete';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const tabTitles = {0: "title1", 1: "title2", 2:"title3"};
  const tabContents = {0: "content1", 1: "Content2", 2:"content3"};
  const tabData = [tabTitles, tabContents];
  const nameData = ["Ron", "Daffodil", "Jehosaphet",
                    "Sunshine", "Oliver", "Yoonik",
                    "Rawelna", "Ronald", "Sweatbox",
                    "Sunny"];

  ReactDOM.render(
    <div>
      <Tab tabData={tabData} />
      <Clock />
      <Weather />
      <Autocomplete nameData={nameData} />
    </div>, root
  );
});
