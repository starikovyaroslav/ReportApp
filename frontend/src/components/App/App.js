import React, { useEffect } from "react";

import api from "../../utils/MainApi";
import "./App.css";
import Search from "../Search/Search";
import Cards from "../Cards/Cards";
import Modal from "../Modal/Modal";

function App() {
  const [usersList, setUsersList] = React.useState([]);
  const [modalOpened, setModalOpened] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState([]);

  const getInitialCards = () => {
    api
      .getUsersInfo()
      .then((cards) => {
        setUsersList(cards);
      })
      .catch((err) => {
        console.log(`${err.message} (${err.status})`);
      });
  };

  const searchUsersInfo = (evt) => {
    evt.preventDefault();
    const { value } = evt.target[0];
    api
      .searchInfo(value)
      .then((cards) => setUsersList(cards))
      .catch((err) => {
        console.log(`${err.message} (${err.status})`);
      });
  };

  useEffect(() => {
    getInitialCards();
  }, []);

  return (
    <div className="app">
      <Search search={searchUsersInfo} />
      <Cards
        users={usersList}
        openCard={setModalOpened}
        setUserInfo={setUserInfo}
      />
      <Modal
        opened={modalOpened}
        setOpened={setModalOpened}
        userInfo={userInfo}
      />
    </div>
  );
}

export default App;
