


const Skeleton = () =>{
    return <div className="card shadow shadow-md col mx-3 mb-4" aria-hidden="true"   style={{ width: "18rem" }}>
  
    <div className="card-body">
      <h5 className="card-title placeholder-glow">
        <span className="placeholder col-12" />
        <span className="placeholder col-10" />
      </h5>
      <p className="card-text placeholder-glow">
        <span className="placeholder col-3" />
        <span className="placeholder col-3 mx-1" />
        <span className="placeholder col-4" />
        <span className="placeholder col-6" />
        <span className="placeholder col-8" />
      </p>
     
   
    </div>
  
  </div>
  
}


const SkeletonLoader = () => {
  return (
   <>
   <Skeleton/>
   <Skeleton/>
   <Skeleton/>
   <Skeleton/>
   <Skeleton/>
   <Skeleton/>
   <Skeleton/>
   <Skeleton/>
   <Skeleton/>
  


   </>
  )
}

export default SkeletonLoader
