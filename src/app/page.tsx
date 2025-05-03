'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Student from '../../public/Students-pana.svg';
import Campus from '../../public/image.png';
import {
  BookOpen,
  Calendar,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sun,
  Users,
  X,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Page = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const newsRef = useRef<HTMLElement>(null);
  const blogRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionRef: any) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'gallery', ref: galleryRef },
        { id: 'news', ref: newsRef },
        { id: 'blog', ref: blogRef },
        { id: 'contact', ref: contactRef },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop - 100;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white py-4 px-6 shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-emerald-500" />
            <span className="text-emerald-500 font-semibold text-xl">
              Scholar-X-Sync
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection(homeRef)}
              className={`text-gray-700 hover:text-emerald-500 font-medium ${
                activeSection === 'home' ? 'text-emerald-500' : ''
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className={`text-gray-700 hover:text-emerald-500 font-medium ${
                activeSection === 'about' ? 'text-emerald-500' : ''
              }`}
            >
              ABOUT US
            </button>
            <button
              onClick={() => scrollToSection(galleryRef)}
              className={`text-gray-700 hover:text-emerald-500 font-medium ${
                activeSection === 'gallery' ? 'text-emerald-500' : ''
              }`}
            >
              GALLERY
            </button>
            <button
              onClick={() => scrollToSection(newsRef)}
              className={`text-gray-700 hover:text-emerald-500 font-medium ${
                activeSection === 'news' ? 'text-emerald-500' : ''
              }`}
            >
              NEWS
            </button>
            <button
              onClick={() => scrollToSection(blogRef)}
              className={`text-gray-700 hover:text-emerald-500 font-medium ${
                activeSection === 'blog' ? 'text-emerald-500' : ''
              }`}
            >
              BLOG
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className={`text-gray-700 hover:text-emerald-500 font-medium ${
                activeSection === 'contact' ? 'text-emerald-500' : ''
              }`}
            >
              CONTACT
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              className="text-gray-500 hover:text-emerald-500"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              className="text-gray-500 hover:text-emerald-500"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="text-gray-500 hover:text-emerald-500"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 py-4 px-6">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection(homeRef)}
                className="text-gray-700 hover:text-emerald-500 font-medium text-left"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-gray-700 hover:text-emerald-500 font-medium text-left"
              >
                ABOUT US
              </button>
              <button
                onClick={() => scrollToSection(galleryRef)}
                className="text-gray-700 hover:text-emerald-500 font-medium text-left"
              >
                GALLERY
              </button>
              <button
                onClick={() => scrollToSection(newsRef)}
                className="text-gray-700 hover:text-emerald-500 font-medium text-left"
              >
                NEWS
              </button>
              <button
                onClick={() => scrollToSection(blogRef)}
                className="text-gray-700 hover:text-emerald-500 font-medium text-left"
              >
                BLOG
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-gray-700 hover:text-emerald-500 font-medium text-left"
              >
                CONTACT
              </button>
            </nav>
          </div>
        )}
      </header>

      <section
        ref={homeRef}
        id="home"
        className="bg-gray-50 py-16 md:py-24 flex-grow mt-16"
      >
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Helping each of our students fulfill the potential
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              Welcome to Scholar-x-sync's Website. Our Scholar-Center is a proud
              district when it comes to the number of students it has & large
              talent within. It works to the amount of skill & success.
            </p>
            <Button
              onClick={() => router.push('/login')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-full text-lg"
            >
              Log In
            </Button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src={Student}
              alt="Student with backpack"
              width={400}
              height={500}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-emerald-500 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Calendar className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Offering success</h3>
              <p className="text-emerald-50">Orientation for each student</p>
            </div>

            <div className="flex flex-col items-center">
              <BookOpen className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">We work hard to</h3>
              <p className="text-emerald-50">Improve student achievement</p>
            </div>

            <div className="flex flex-col items-center">
              <Sun className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Preparing students</h3>
              <p className="text-emerald-50">For successful futures!</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={aboutRef} id="about" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <Image
                src={Campus}
                alt="Our campus"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                At Scholar-X-Sync, we are committed to providing a dynamic
                learning environment that fosters academic excellence, personal
                growth, and social responsibility. Our mission is to empower
                students with the knowledge, skills, and values they need to
                succeed in a rapidly changing global society.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 mb-6">
                To be recognized as a leading educational institution that
                inspires lifelong learning, critical thinking, and innovation.
                We aim to create a community where diversity is celebrated,
                talents are nurtured, and every student reaches their full
                potential.
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                  <Users className="h-8 w-8 text-emerald-500 mr-3" />
                  <div>
                    <h4 className="font-semibold">Expert Faculty</h4>
                    <p className="text-sm text-gray-600">
                      50+ Specialized Teachers
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                  <BookOpen className="h-8 w-8 text-emerald-500 mr-3" />
                  <div>
                    <h4 className="font-semibold">Diverse Programs</h4>
                    <p className="text-sm text-gray-600">
                      20+ Educational Pathways
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} id="gallery" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Gallery</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Explore our campus life through these images showcasing our
              facilities, events, and student achievements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* <Image
                  src={`edho/${300 + i}/${250 + i}`}
                  alt={`Gallery image ${i + 1}`}
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                /> */}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full">
              View More
            </Button>
          </div>
        </div>
      </section>

      <section ref={newsRef} id="news" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Stay updated with the latest announcements, achievements, and
              events at Scholar-X-Sync.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Annual Science Fair Winners Announced',
                date: 'May 1, 2025',
                excerpt:
                  'Congratulations to all participants and winners of our annual Science Fair. The creativity and innovation displayed were truly impressive.',
              },
              {
                title: 'New Computer Lab Opening',
                date: 'April 25, 2025',
                excerpt:
                  "We're excited to announce the opening of our state-of-the-art computer lab equipped with the latest technology for enhanced learning.",
              },
              {
                title: 'Sports Team Reaches State Finals',
                date: 'April 18, 2025',
                excerpt:
                  'Our basketball team has made it to the state finals! Join us in supporting them at the championship game next weekend.',
              },
            ].map((news, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* <Image
                  src={`edho/${350 + i}/${200}`}
                  alt={news.title}
                  width={350}
                  height={200}
                  className="w-full h-48 object-cover"
                /> */}
                <div className="p-6">
                  <p className="text-emerald-500 text-sm font-medium mb-2">
                    {news.date}
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Button
                    variant="ghost"
                    className="text-emerald-500 hover:text-emerald-700 p-0 hover:bg-transparent"
                  >
                    Read More →
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full">
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section ref={blogRef} id="blog" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Blog</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Insights, tips, and stories from our educational community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'The Importance of Project-Based Learning',
                author: 'Dr. Emily Johnson',
                date: 'April 30, 2025',
                excerpt:
                  'Project-based learning encourages students to develop critical thinking skills while engaging with real-world problems.',
              },
              {
                title: 'Balancing Academics and Extracurricular Activities',
                author: 'Prof. Michael Chen',
                date: 'April 27, 2025',
                excerpt:
                  'Finding the right balance between academic pursuits and extracurricular activities is essential for holistic development.',
              },
              {
                title: 'Preparing Students for the Digital Future',
                author: 'Sarah Martinez, Tech Coordinator',
                date: 'April 22, 2025',
                excerpt:
                  "In an increasingly digital world, here's how we're equipping our students with the skills they need to succeed.",
              },
              {
                title: 'The Role of Parents in Education',
                author: 'Dr. Robert Williams',
                date: 'April 15, 2025',
                excerpt:
                  "Parental involvement is a crucial factor in student success. Here are some ways parents can support their children's education.",
              },
            ].map((blog, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="md:w-1/3">
                  {/* <Image
                    src={`edho/${200}/${300 + i}`}
                    alt={blog.title}
                    width={200}
                    height={300}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-emerald-500 text-sm font-medium mb-2">
                    {blog.date}
                  </p>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">By {blog.author}</p>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <Button
                    variant="ghost"
                    className="text-emerald-500 hover:text-emerald-700 p-0 hover:bg-transparent"
                  >
                    Continue Reading →
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full">
              Explore All Articles
            </Button>
          </div>
        </div>
      </section>

      <section ref={contactRef} id="contact" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Have questions or need more information? We'd love to hear from
              you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Get In Touch
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md w-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Contact Information
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                <div className="flex items-start mb-6">
                  <MapPin className="h-6 w-6 text-emerald-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Our Location
                    </h4>
                    <p className="text-gray-600">
                      123 Education Avenue, Learning City, LC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <Mail className="h-6 w-6 text-emerald-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Us</h4>
                    <p className="text-gray-600">info@scholar-x-sync.edu</p>
                    <p className="text-gray-600">
                      admissions@scholar-x-sync.edu
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <Phone className="h-6 w-6 text-emerald-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Call Us</h4>
                    <p className="text-gray-600">Main Office: (123) 456-7890</p>
                    <p className="text-gray-600">Admissions: (123) 456-7891</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Office Hours
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-gray-800">Weekdays:</p>
                      <p className="text-gray-600">8:00 AM - 5:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Weekends:</p>
                      <p className="text-gray-600">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-8 w-8 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-xl">
                  Scholar-X-Sync
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering students to achieve excellence through quality
                education and personalized learning experiences.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  className="text-gray-400 hover:text-emerald-400"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.twitter.com"
                  target="_blank"
                  className="text-gray-400 hover:text-emerald-400"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  className="text-gray-400 hover:text-emerald-400"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection(homeRef)}
                    className="text-gray-400 hover:text-emerald-400"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="text-gray-400 hover:text-emerald-400"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(galleryRef)}
                    className="text-gray-400 hover:text-emerald-400"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(newsRef)}
                    className="text-gray-400 hover:text-emerald-400"
                  >
                    News
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(blogRef)}
                    className="text-gray-400 hover:text-emerald-400"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="text-gray-400 hover:text-emerald-400"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400">
                    Academic Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400">
                    Extracurricular Activities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400">
                    Summer Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400">
                    International Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400">
                    Online Learning
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter to receive the latest updates and
                news.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 w-full bg-gray-700 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-r"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Scholar-X-Sync. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
