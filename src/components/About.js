import Image from "next/image";
import Link from 'next/link';

const About = () => {
  return (
    <div className="hero-container">
      <Image src="/src/images/perro.png"  className="profile-img" width={300} height={300}/>
      <div className="hero-text">
        <h1>Hey, I'm Joe 👋</h1>
        <p>
          I'm a software developer based in Lagos, Nigeria. I specialize in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </p>
        <ul>
      <li>
        <Link href="/">linkedin</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
    </ul>
      </div>
    </div>
  )
}

export default About;