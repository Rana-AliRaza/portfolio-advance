import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import img1 from "../../assets/testimonials-1.jpg";
import img2 from "../../assets/testimonials-2.jpg";
import img3 from "../../assets/testimonials-3.jpg";
import img4 from "../../assets/testimonials-4.jpg";
import img5 from "../../assets/testimonials-5.jpg";
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      pic: img1,
      name: "John Doe",
      work: "CEO & Founder",
      message: "A visionary and innovative leader, passionate and determined. Charismatic, influential, and ambitious. Resilient and focused, inspiring and dynamic. Committed, forward-thinking, adaptable, resourceful, tenacious. Driven, transformative, creative, empowering, growth-oriented, proactive, collaborative, ethical."
    },
    {
      id: 2,
      pic: img2,
      name: "Jane Smith",
      work: "Entrepreneur",
      message: "A visionary and innovative entrepreneur, passionate and determined. Charismatic, influential, and ambitious. Resilient and focused, inspiring and dynamic. Committed, forward-thinking, adaptable, resourceful, tenacious. Driven, transformative, creative, empowering, growth-oriented, proactive, collaborative, ethical."
    },
    {
      id: 3,
      pic: img3,
      name: "Mike Johnson",
      work: "Designer",
      message: "A creative and innovative designer, passionate and detail-oriented. Imaginative, resourceful, and adaptable. Trend-savvy, artistic, and visionary. Committed, focused, collaborative, inspiring, and dynamic. Forward-thinking, dedicated, skilled, driven, versatile, insightful, efficient, and ethical."
    },
    {
      id: 4,
      pic: img4,
      name: "Jena Carles",
      work: "Store Owner",
      message: "A dedicated and hardworking store owner, reliable and friendly. Customer-focused, organized, and efficient. Community-oriented and trustworthy, knowledgeable and resourceful. Committed, detail-oriented, adaptable, proactive, passionate. Goal-driven, innovative, empathetic, approachable, resilient, supportive, creative, collaborative, and ethical."
    },
    {
      id: 5,
      pic: img5,
      name: "Mike Johnson",
      work: "Freelancer",
      message: "A visionary and innovative freelancer, passionate and determined. Charismatic, influential, and ambitious. Resilient and focused, inspiring and dynamic. Committed, forward-thinking, adaptable, resourceful, tenacious. Driven, transformative, creative, empowering, growth-oriented, proactive, collaborative, ethical."
    },
  ];

  return (
    <div className="w-full h-full bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 lg:py-16 font-raleway" name="testimonialSection" style={{ background: "#f6f8f8" }}>
      <div className="skill px-1 lg:px-3">
        <div className="heading">
          <h4 className="text-4xl text-primary py-2 font-semibold">Testimonials</h4>
          <div className="border-b-4 border-blue-500 w-20 my-2"></div>
        </div>
        <p className="text-lg my-2 text-gray-700 mt-8">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <motion.div
          initial={{ opacity: 0, translateY: "200px" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div className="testimonialsCarousel mt-8">
            <Carousel
              autoPlay={true}
              interval={3000}
              infiniteLoop={true}
              showIndicators={true}
              showStatus={false}
              showThumbs={false}
              swipeable={true}
              transitionTime={500}
            >
              {testimonials.map(({ id, pic, name, work, message }) => (
                <div key={id}>
                  <div className="message p-4 bg-white shadow rounded-lg my-4">
                    <p>
                      <RiDoubleQuotesL className='text-blue-300 text-2xl font-semibold inline-block mx-2' />
                      {message}
                      <RiDoubleQuotesR className='text-blue-300 inline-block font-semibold text-2xl mx-2' />
                    </p>
                  </div>
                  <div className="pic mt-4 text-center pb-16 w-fit mx-auto">
                    <img src={pic} className='rounded-full w-[90px] h-[90px]' alt={name} />
                    <p className="heading my-2 text-xl text-black font-semibold">{name}</p>
                    <p className="work text-gray-400">{work}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
