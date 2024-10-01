import React from 'react'
import PageHeader from '../component/PageHeader'
import { TeckStack } from '../utils/util'

const Skills = () => {
  const desc = {
    title: "Tech Stack",
    Text: "The dev tools, apps, devices, i use",
  };
  return (
    <PageHeader value={desc}>
      <main className=' py-10 p-3 relative'>
        {TeckStack.map((value)=>{
          return(
            <div className='flex flex-col gap-3 mb-10'>
              <h1 className='text-white-3 mb-8 text-4xl font-bold'>{value.title}</h1>
              <div className=' grid grid-cols-3 gap-3 max-md:grid-cols-1'>
                {value.card?.map((car,index)=>{
                  return (
                    <div className="flex relative  md:h-[270px] md:flex-col gap-2 p-3 bg-black-2 border-2 border-black-3 rounded-3xl max-md:gap-5 ">
                      {value.card[index].name == "Text Docs" && <div className='arrow'></div>}
                      <div className="flex md:justify-center items-center  md:grow">
                        <img src={car.icon} width={80}  className=' max-md:size-14'  />
                      </div>
                      <div className="flex justify-between items-center max-md:grow">
                        <p className=' text-white-1 text-lg flex-1 max-md:text-left' >{car.name}</p>
                        <p className=' rounded-full p-2 border-[0.5px] border-black-3 text-white-2 text-xs'>{car.fam}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        })}
      </main>
    </PageHeader>
  )
}

export default Skills