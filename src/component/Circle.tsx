
const Circle = ({value} : {value : number}) => {
  return (
    <div className={`shadow-[0_0_100px_inset] shadow-black-2 absolute inset-0  -z-30   top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4  rounded-full`}
    
    style={{width:`${value}px`, height:`${value}px`}}
    ></div>
  )
}

export default Circle