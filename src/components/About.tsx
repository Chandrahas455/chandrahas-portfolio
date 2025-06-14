
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const testimonials = [
    {
      name: 'Utsavam',
      role: 'Movie Production Channel',
      company: '',
      quote: 'Chandrahas is the best designer we\'ve ever worked with! His thumbnails elevate our films to another level—sometimes they\'re even better than the films themselves! His creativity and skill consistently leave us in awe. A true artist who adds immense value to every project!',
      avatar: '/placeholder.svg'
    },
    {
      name: 'Supreme Talkies',
      role: 'Independent Filmmakers',
      company: '',
      quote: 'What ever reach our video has got, I\'ll give 50% of the credits to Chandrahas. Great Talent!!',
      avatar: '/placeholder.svg'
    },
    {
      name: 'ThaniRex',
      role: 'Youtuber',
      company: '',
      quote: 'Chandrahas is an exceptional designer whose talent is matched by his humility. Calm under pressure, he excels at tackling demanding projects, delivering high-quality work even under tight deadlines. His dedication, growth mindset, and infectious passion for design make him a standout. A true inspiration and the best designer I\'ve worked with!',
      avatar: '/placeholder.svg'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-black mb-8 relative cursor-pointer group"
              whileHover={{ 
                scale: 1.05,
                color: "#eab308",
                transition: { duration: 0.3 }
              }}
            >
              <motion.span className="relative">
                About Me
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute bottom-2 left-0 h-1 bg-black group-hover:bg-yellow-500 transition-colors duration-300"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.2 }
                  }}
                  className="absolute -inset-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 blur-xl rounded-lg"
                />
              </motion.span>
            </motion.h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                I'm a passionate visual designer with over 4 years of experience 
                creating compelling graphics that tell stories and drive engagement. 
                My expertise spans across various design disciplines, from creative 
                fanart to professional brand campaigns.
              </p>
              
              <p>
                What sets me apart is my ability to blend technical proficiency 
                with creative vision, always staying current with design trends 
                while maintaining a timeless aesthetic approach. Every project 
                is an opportunity to push creative boundaries and deliver 
                exceptional results.
              </p>
              
              <p>
                When I'm not designing, I'm exploring new techniques, studying 
                visual trends, and finding inspiration in everything from 
                architecture to nature.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">What Clients Say</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                  >
                    <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm">{testimonial.name}</p>
                        <p className="text-gray-600 text-xs">{testimonial.role}{testimonial.company && ` • ${testimonial.company}`}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
