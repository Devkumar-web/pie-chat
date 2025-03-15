import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from 'next/link';


const topics = [
  {
    text: "python",
    img: "/python.png",
    desc: "Let's discuss about python",
    slug: "Python-new"
  },
  // Add more topics here if needed
  {
    text: "javascript",
    img: "/javascript.png",
    desc: "Let's talk about JavaScript and web development.",
    slug: "javascript-new"
  },
    {
    text: "react",
    img: "/react.png",
    desc: "React.js and frontend best practices.",
    slug: "React-new"
  },
    {
    text: "node.js",
    img: "/node.js.png",
    desc: "Backend development with Node.js.",
    slug: "Nodejs-new"
  },
  {
    text: "databases",
    img: "/database.png",
    desc: "SQL, NoSQL, and database design.",
    slug: "Databases-new"
  },
  {
    text: "cloud computing",
    img: "/cloud.png",
    desc: "AWS, Azure, and cloud technologies.",
    slug: "Cloud-new"
  },
  {
    text: "machine learning",
    img: "/ml.png",
    desc: "Machine learning algorithms and applications.",
    slug: "Ml-new"
  },
 

];
const Forums = () => {
  return (
    <div className='container mx-auto  max-w-[85vw] my-20'>
      <h1 className='text-3xl text-center font-bold mb-10 gap-2'>
        Discussion Forums
      </h1>
      <div className='flex flex-wrap justify-center'>
        {topics.map(topic=>{
          return <div key={topic.img} className='shadow-lg bg-slate-200 m-4 w-1/4 flex justify-center flex-col items-center text-center py-10 rounded-xl gap-4 '> 
          <Image width={75} height={75}  alt={topic.desc} className=" " src={topic.img} />
          <h2 className='text-2xl'>
          {topic.text}
          </h2>
          <p className='px-3'>{topic.desc}</p>
          <Link href={`/forum/${topic.slug}`} >
          <Button className='px-4 border border-slate-400 py-2'>Discuss Now</Button>
         </Link>
          </div>
        })}
      </div>
    </div>
  )
}

export default Forums
