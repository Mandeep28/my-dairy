import { useEffect } from "react";
import { AppState } from "../../utils/Context";
import NoteContainer from "../utils/NoteContainer";
import data from "../../utils/data";

const FavouriteNotes = () => {
  const {favNotes, setFavNotes} = AppState();
  useEffect(() =>{
      const filterData = data.filter((item) => item.fav === true)
      setFavNotes(filterData)
  },[])



  
  return (
    <>
      <NoteContainer title={"Favourite Notes"} data={favNotes} type="favnotes" />
    </>
  );
};

export default FavouriteNotes;
