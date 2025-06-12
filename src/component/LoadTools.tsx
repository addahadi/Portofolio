import { KnowMeProps } from '../utils/type';

const LoadTools = ({value} : KnowMeProps) => {
  return (
    <div className='flex flex-col gap-3'>
        {[...new Array(2)].fill(0).map((_, index) => {
                if (typeof value.img === "string" || value.att == undefined) return;
                return (
                  <div
                    key={index}
                    className={` flex gap-2 self-start ${value.att[index]} w-max`}
                  >
                    {value.img.map((I,index) => {
                      return (
                        <div
                        key={index}
                          className="flex flex-row gap-2 items-center p-2 border-2 border-white-3 rounded-lg  
                        "
                        >
                          <img src={I.icon} width={40} />
                          <div className=" text-white-1">{I.title}</div>
                        </div>
                      );
                    })}
                  </div>
                )
              })
            }
    </div>
  )
}

export default LoadTools