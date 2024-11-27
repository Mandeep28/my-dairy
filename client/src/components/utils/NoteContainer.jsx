import { useEffect, useState } from "react";
import NotesItem from "./NotesItem";
// import data from "../../utils/data";
import PreviewModal from "./PreviewModal";
import Underline from "./Underline";
import { AppState } from "../../utils/Context";
import SkeletonLoader from "../Loaders/SkeletonLoader";

const NoteContainer = ({ title , data , type}) => {

  useEffect(() => {
    console.log(data);
  }, []);

  const [search, setSearch] = useState("");
  const [previewData, setPreviewData] = useState({});
  const handleSearch = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value);
    // let filterData = data.filter((item)=>{
    //   return item.title.includes(e.target.value )
    // })
    // console.log("filter data is :", filterData)
  };

  return (
    <section className="main_content container-md my-3">
      <h3 className="mx-1">{title}</h3>
      <Underline type="start" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search something ..."
        className="form-control bg-secondary-subtle border-none my-4"
        value={search}
        onChange={handleSearch}
      />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 ">
        {!data ? (
          <SkeletonLoader/>
        ) : data && data.length < 1 ? (
          <div> No Notes to display ...</div>
        ) : (
          data.map((item) => {
            return (
              <NotesItem
                key={`notes-${item.id}`}
                data={item}
                setPreviewData={setPreviewData}
                type={type}
              />
            );
          })
        )}
        {/* preview note modal */}
        <PreviewModal data={previewData} />
      </div>
    </section>
  );
};

export default NoteContainer;
