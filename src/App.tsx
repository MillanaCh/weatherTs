import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
interface IFetchData {}
function App() {
  const URL = "https://api.unsplash.com/photos/?client_id=";
  const KEY = "NOYQOOlALtaZBz9-rsFGN3HELTPDnSWQzrXp4G9i_Cg";
  const [photos, setPhotos] = useState<object[]>([]);
  const [reset, setReset] = useState<boolean>(false);

  return (
    <div className="App">
      <h1>Match game</h1>
    </div>
  );
}

export default App;
