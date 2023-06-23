import Image from 'next/image';
import photo from '/public/images/alex-hort-francis.jpg';


export default function AboutPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mt-8 mb-6">About</h1>
      <p>Hello 👋</p>
      <p>My name is Alex Hort-Francis, and I&apos;ve been learning Next.js</p>
      <p>I&apos;m looking forward to making lots of interesting projects with this front-end framework!</p>
      <p>You can find me on <a href="https://github.com/hortfrancis" className="font-medium hover:text-blue-600">GitHub</a>, <a href="https://www.linkedin.com/in/hortfrancis" className="font-medium hover:text-blue-600">LinkedIn</a>, & <a href="https://www.instagram.com/hortfrancis/" className="font-medium hover:text-blue-600" >Instagram</a>.</p>
      <Image src={photo} alt="Alex Hort-Francis" placeholder="blur" className="rounded-lg mt-6 mx-auto" width={200} height={200}/>
    </>
  )
}
