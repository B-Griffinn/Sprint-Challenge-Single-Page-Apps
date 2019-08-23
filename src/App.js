import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import LocationList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";


export default function App() {
  return (
    <div>
      <Header />
      <TabNav/>
      <Route exact path="/character" component={CharacterList}/>
      <Route path="/location" component={LocationList}/>
      <Route path="/episode" component={EpisodeList} />
    </div>
  );
}
