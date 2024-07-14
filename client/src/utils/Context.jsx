import { createContext, useContext, useState } from "react";
import data from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState(null);

  const [favNotes, setFavNotes] = useState([]);

  const [trashbinNotes, setTrashbinNotes] = useState(null);

  // for home , fav (common)
  // add to fav
  const addToFav = (id) => {
    //  client side change
    let filterData = allNotes.map((item) => {
      if (item.id === id) {
        item.fav = true;
      }
      return item;
    });
    setAllNotes(filterData);
    console.log("from context api (add to fav) ", filterData);

    // server side changes (todo ...)
  };

  // add to trash bin
  const addToTrashBin = (id, type) => {
    console.log(typeof id);
    //  client side change
    if (type === "allnotes") {
      let filterData = allNotes.filter((item) => item.id !== id);
      setAllNotes(filterData);
      console.log("from context api( add to trashbin)", filterData);
    } else if (type === "favnotes") {
      let filterData = favNotes.filter((item) => item.id !== id);
      setFavNotes(filterData);
      console.log("from context api( add to trashbin)", filterData);
    } else {
      console.log("do nothing ");
    }

    // server side changes (todo ...)
  };

  // favroite
  // remove from fav
  const removeFromFav = (id) => {
    let filterData = favNotes.filter((item) => item.id !== id);

    setFavNotes(filterData);
    console.log("from context api(remove from fav)", filterData);

    // server side change (todo ....)
  };

  // trash bin
  // delete forever

  // restore
  const restore = (id) => {
    const filterData = trashbinNotes.filter((item) => item.id !== id);

    setTrashbinNotes(filterData);

    console.log("trash bin data is", filterData);

    // call to backend api
  };

  return (
    <AppContext.Provider
      value={{
        allNotes,
        setAllNotes,
        favNotes,
        setFavNotes,
        trashbinNotes,
        setTrashbinNotes,
        addToFav,
        addToTrashBin,
        restore,
        removeFromFav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};
export default AppProvider;
