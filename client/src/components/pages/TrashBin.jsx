import { useEffect } from "react";
import { AppState } from "../../utils/Context";
import NoteContainer from "../utils/NoteContainer";
import data from "../../utils/data";

const TrashBin = () => {
  const { trashbinNotes, setTrashbinNotes } = AppState();
  useEffect(()=>{

      const filterData = data.filter((item) => item.trash === true)
      setTrashbinNotes(filterData)
  
  },[])

  return (
    <>
      <NoteContainer title={"Trash Bin"} data={trashbinNotes} type='trashbin' />
    </>
  );
};

export default TrashBin;
