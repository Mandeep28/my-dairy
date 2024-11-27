

const Underline = ({type, width}) => {
  return (
    <div className={`my-2 ${type === 'center' ? 'mx-auto': type==='end' ? 'ms-auto' : ''}`} style={{width: "100px" , height : '2px' , marginTop: '3px' , marginLeft : '2px' ,
     background: 'linear-gradient(to right, #000000dc, rgba(255, 240, 0, 0.850))'
     }}>
    </div>
  )
}

export default Underline
