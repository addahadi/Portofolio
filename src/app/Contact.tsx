import Button from '@/component/Button';
import PageHeader from '@/component/PageHeader'
import React, { useState } from 'react'
import emailjs from "emailjs-com";
import { LoadingSpinner } from '@/component/LoaderSpinner';




const Contact = () => {
  const [formData, setFormData] = useState({
     email: "",
     name: "",
     subject: "",
     message: "",
  });
  const desc = {
    title: "Get in touch",
    Text: "Let’s build something awesome.",
  };
  const [isDesibled , setIsDesibled] = useState(false)
  const handleChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
     const { name, value } = e.target;
     setFormData({
       ...formData,
       [name]: value,
     });
   };
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     // Use emailjs.send or any other logic to send the form data
     if(!formData.email || !formData.message || !formData.name || !formData.subject) return 
     setIsDesibled(true)
     emailjs
        .send(
          "service_8rn350l",
          "template_xi8r6x4",
          formData,
          "QNLaLc7nhhktHKE5h"
        )
        .then(
          () => {
            alert("Message sent successfully! ");
            setIsDesibled(false)
          },
          (error) => {
            console.log(error);
            alert("Failed to send the message.");
            setIsDesibled(false)
          }
        );
   };
  return (
    <PageHeader value={desc}>
      <div className=" bg-black-2 mt-10 rounded-lg">
        <header className="flex flex-row items-center p-3 border-b-2  border-black-3">
          <div className="flex items-center gap-2">
            <span className=" w-3 h-3 rounded-full bg-red-700"></span>
            <span className=" w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className=" w-3 h-3 rounded-full bg-green-700"></span>
          </div>
          <div className=" text-white-1 text-center  flex-1">New message</div>
        </header>
        <main className="flex flex-col px-6 py-2">
          <div className=" border-b-2 pb-3 border-black-3">
            <span className=" ml-3 text-white-1">Email:</span>
            <input
              type="text"
              value={formData.email}
              name="email"
              onChange={handleChange}
              className=" outline-none border-none bg-black-2 ml-3 flex-1 text-white-3"
              placeholder="enter your email address"
              required
            />
          </div>
          <div className=" border-b-2 pb-3 border-black-3">
            <span className=" ml-3 text-white-1">Name:</span>
            <input
              type="text"
              value={formData.name}
              name="name"
              onChange={handleChange}
              className=" outline-none border-none bg-black-2 ml-3 flex-1 text-white-3"
              placeholder="enter your name"
              required
            />
          </div>
          <div className=" border-b-2 pb-3 border-black-3">
            <span className=" ml-3 text-white-1">Subject:</span>
            <input
              type="text"
              value={formData.subject}
              name="subject"
              onChange={handleChange}
              className=" outline-none border-none bg-black-2 ml-3 flex-1 text-white-3"
              placeholder="enter subject"
              required
            />
          </div>
        </main>
        <footer className=" p-5 py-7">
          <textarea
            onChange={handleChange}
            value={formData.message}
            name="message"
            placeholder="Write your message here"
            className="
           bg-black-1 p-6 rounded-2xl w-full h-[280px] flex-1 text-white-1"
            required
          ></textarea>
          <div className=" mt-12 flex justify-end">
            <Button disabled={isDesibled} type="submit" onClick={handleSubmit} Classname=' border-none  bg-black-1 justify-end'>
              {!isDesibled ?
                <span className=' text-white-1'>Send the Message</span>: <div className='flex gap-3 justify-center items-center'>
                  <LoadingSpinner Classname=' text-white-1'/>
                  <span className='text-white-1'>sending</span>
                  </div>
              }
            </Button>
          </div>
        </footer>
      </div>
      ;{" "}
    </PageHeader>
  );
}

export default Contact