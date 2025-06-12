import TextSection from '../component/TextSection'
import { MyProfile } from '../utils/util'
import Button from '../component/Button'
import PageHeader from '../component/PageHeader'
import { Link } from 'react-router-dom'

const About = () => {
  const desc = {
    title: "A little bit about me",
    Text: "Who I am and what I do.",
  };
  return (
    <PageHeader value={desc}>
      <main className='flex py-12 p-4 justify-between  border-black-2 max-lg:flex-col max-md:gap-7'>
        <div className='flex flex-col gap-10  basis-[500px]'>
          {MyProfile.map((value,index)=>{
            return (
          <TextSection key={index}>
            <h1 className=' text-white-3'>{value.title}</h1>
            <div className=' text-white-2'>{value.Text}</div>
          </TextSection>)
          })}
        </div>
        <div className=' w-fit flex flex-col gap-4'>
          <img src="/Portofolio/adda (2).jpg" width={400} className=' rounded-2xl' />
          <Button Classname=' w-full'>
            <img src="/Portofolio/Vector.png" />
            <Link to="/contact">
              <span className=' text-white-1'>Get in Touch</span>
            </Link>
          </Button>
        </div>
      </main>
    </PageHeader>
  )
}

export default About