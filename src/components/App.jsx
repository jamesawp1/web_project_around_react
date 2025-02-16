import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../context/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  async function handleGetUser() {
    const response = await api.getInitialUserInfo();
    const userResponse = await response.json();
  }
  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header></Header>

          <Main></Main>

          <Footer></Footer>
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
