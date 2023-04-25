import { useState } from "react";
import "./App.css";
import { Main } from "./conponents/main/Main";
import { Header } from "./conponents/header/Header";
import { Modale } from "./conponents/modal/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [movie, setMovie] = useState([]);

  const addMovieFunction = (data) => {
    console.log(data);
    const upDatas = [...movie, data];
    setMovie(upDatas);

    setOpenModal((prevState) => !prevState);
  };

  const OpenModalHandler = (e) => {
    e.preventDefault();
    setOpenModal((prevState) => !prevState);
  };

  const deleteItem = (id) => {
    const deleteTodos = movie.filter((el) => el.id !== id);
    setMovie(deleteTodos);
  };

  return (
    <div className="App">
      <Header close={OpenModalHandler} />
      <Main setMovie={setMovie} deleteItem={deleteItem} datas={movie} />
      {openModal ? (
        <Modale addMovieFunction={addMovieFunction} close={OpenModalHandler} />
      ) : null}
    </div>
  );
}

export default App;
