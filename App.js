import React, { useState } from "react";
import "./App.css";
import Tab from "./components/Tab";
import Content from "./components/Content";
function App() {
  const [tab1, setTab1] = useState({
    name: "Tab 1",
    select: false,
  });
  const [tab2, setTab2] = useState({
    name: "Tab 2",
    select: false,
  });
  const [tab3, setTab3] = useState({
    name: "Tab 3",
    select: false,
  });

  const [content, setContent] = useState({
    tab1: "Tab 1 shown here, type something",
    tab2: "Tab 2 shown here, type something",
    tab3: "Tab 3 shown here, type something",
  });

  return (
    <div className="wrapper">
      <Tab
        name={tab1.name}
        setTab={setTab1}
        select={tab1.select}
        setOtherTab1={setTab2}
        name1={tab2.name}
        setOtherTab2={setTab3}
        name2={tab3.name}
      />
      <Tab
        name={tab2.name}
        setTab={setTab2}
        select={tab2.select}
        setOtherTab1={setTab1}
        name1={tab1.name}
        setOtherTab2={setTab3}
        name2={tab3.name}
      />
      <Tab
        name={tab3.name}
        setTab={setTab3}
        select={tab3.select}
        setOtherTab1={setTab1}
        name1={tab1.name}
        setOtherTab2={setTab2}
        name2={tab2.name}
      />
      <Content
        tab1={tab1.select}
        tab2={tab2.select}
        tab3={tab3.select}
        content={content}
        setContent={setContent}
      />
    </div>
  );
}

export default App;
