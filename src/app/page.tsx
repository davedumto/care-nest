import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/hero'
import About from '@/app/components/About'
import Book from "@/app/components/booksession"

export default function Home() {
  return (
<div>
  <Navbar/>
  <Hero/>
  <About/>
  <Book/>

</div>
  );
}
