import dynamic from 'next/dynamic';

// Dynamically import components with SSR disabled
const Navbar = dynamic(() => import('@/app/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/app/components/hero'), { ssr: false });
const About = dynamic(() => import('@/app/components/About'), { ssr: false });
const Book = dynamic(() => import('@/app/components/booksession'), { ssr: false });
const Footer = dynamic(() => import('@/app/components/footer'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Book />
      <Footer />
    </div>
  );
}
