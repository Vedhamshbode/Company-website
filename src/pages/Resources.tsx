import React from 'react';
import { BookOpen, Star, Mail, Calendar, User, ArrowRight, Download, Eye } from 'lucide-react';

const Resources = () => {
  const blogs = [
    {
      title: 'The Future of Industrial Automation: AI-Powered Robotics',
      excerpt: 'Explore how artificial intelligence is revolutionizing industrial robotics and what it means for manufacturing.',
      author: 'Dr. Sarah Chen',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '2.3k'
    },
    {
      title: 'Implementing Service Robots in Healthcare: A Complete Guide',
      excerpt: 'Learn best practices for deploying service robots in healthcare environments to improve patient care.',
      author: 'Dr. Emily Watson',
      date: 'January 10, 2025',
      readTime: '12 min read',
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '1.8k'
    },
    {
      title: 'ROI Analysis: Warehouse Automation Success Stories',
      excerpt: 'Real-world case studies showing the financial impact of implementing robotic warehouse solutions.',
      author: 'Michael Rodriguez',
      date: 'January 5, 2025',
      readTime: '10 min read',
      category: 'Business',
      image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '3.1k'
    },
    {
      title: 'Safety Standards in Collaborative Robotics',
      excerpt: 'Understanding safety protocols and standards when humans and robots work together in shared spaces.',
      author: 'Dr. Sarah Chen',
      date: 'December 28, 2024',
      readTime: '6 min read',
      category: 'Safety',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '1.5k'
    },
    {
      title: 'Machine Learning in Robotic Vision Systems',
      excerpt: 'How computer vision and machine learning are enabling robots to see and understand their environment.',
      author: 'Dr. Emily Watson',
      date: 'December 20, 2024',
      readTime: '9 min read',
      category: 'AI & ML',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '2.7k'
    },
    {
      title: 'Sustainable Robotics: Green Manufacturing Solutions',
      excerpt: 'Exploring how robotic automation contributes to sustainable manufacturing and environmental goals.',
      author: 'Michael Rodriguez',
      date: 'December 15, 2024',
      readTime: '7 min read',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/1634861/pexels-photo-1634861.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '1.9k'
    }
  ];

  const reviews = [
    {
      company: 'TechCorp Manufacturing',
      industry: 'Automotive',
      rating: 5,
      review: 'RoboTech Solutions transformed our production line with their industrial robots. We achieved 40% increase in efficiency and 60% reduction in defects. Outstanding support team!',
      reviewer: 'James Wilson',
      position: 'Operations Director',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'January 2025'
    },
    {
      company: 'Metropolitan Hospital',
      industry: 'Healthcare',
      rating: 5,
      review: 'The surgical robots have revolutionized our operating procedures. The precision and reliability are exceptional. Patient outcomes have improved significantly.',
      reviewer: 'Dr. Lisa Chen',
      position: 'Chief of Surgery',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'December 2024'
    },
    {
      company: 'Global Logistics Inc.',
      industry: 'E-commerce',
      rating: 5,
      review: 'Warehouse automation exceeded our expectations. 70% faster order processing and 99.9% accuracy. The ROI was achieved within 8 months.',
      reviewer: 'Mark Thompson',
      position: 'Warehouse Manager',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'November 2024'
    },
    {
      company: 'Luxury Hotel Chain',
      industry: 'Hospitality',
      rating: 4,
      review: 'Service robots have enhanced our guest experience tremendously. Guests love interacting with them, and they handle routine tasks efficiently.',
      reviewer: 'Sarah Martinez',
      position: 'General Manager',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'October 2024'
    }
  ];

  const newsletters = [
    {
      title: 'RoboTech Monthly Insights',
      description: 'Latest trends, product updates, and industry insights delivered to your inbox',
      frequency: 'Monthly',
      subscribers: '15,000+',
      topics: ['Product Updates', 'Industry Trends', 'Case Studies', 'Technical Tips']
    },
    {
      title: 'Innovation Spotlight',
      description: 'Deep dives into cutting-edge robotics research and breakthrough technologies',
      frequency: 'Bi-weekly',
      subscribers: '8,500+',
      topics: ['Research Breakthroughs', 'Technology Deep Dives', 'Future Predictions', 'Expert Interviews']
    },
    {
      title: 'Customer Success Stories',
      description: 'Real-world implementations and success stories from our global client base',
      frequency: 'Weekly',
      subscribers: '12,000+',
      topics: ['Case Studies', 'ROI Analysis', 'Implementation Tips', 'Best Practices']
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed with the latest insights, trends, and innovations in robotics and automation
            </p>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blogs</h2>
              <p className="text-lg text-gray-600">
                Expert insights and technical articles from our robotics specialists
              </p>
            </div>
            <BookOpen className="h-12 w-12 text-blue-600" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                         transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {blog.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
                    <Eye className="h-3 w-3 mr-1" />
                    {blog.views}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blog.date}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-medium">{blog.readTime}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
                             hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
              View All Blog Posts
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Reviews</h2>
              <p className="text-lg text-gray-600">
                Real feedback from our satisfied clients worldwide
              </p>
            </div>
            <Star className="h-12 w-12 text-yellow-400 fill-current" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{review.review}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={review.image}
                    alt={review.reviewer}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{review.reviewer}</div>
                    <div className="text-sm text-gray-600">{review.position}</div>
                    <div className="text-sm text-blue-600">{review.company} • {review.industry}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
                             hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
              Read All Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Newsletters Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Newsletters</h2>
              <p className="text-lg text-gray-600">
                Stay updated with our regular publications and industry insights
              </p>
            </div>
            <Mail className="h-12 w-12 text-blue-600" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {newsletters.map((newsletter, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                         transform hover:-translate-y-1 p-8"
              >
                <div className="text-center mb-6">
                  <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{newsletter.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{newsletter.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Frequency:</span>
                    <span className="font-semibold text-gray-900">{newsletter.frequency}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subscribers:</span>
                    <span className="font-semibold text-blue-600">{newsletter.subscribers}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {newsletter.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold 
                                 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Download Resources</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access our comprehensive guides, whitepapers, and technical documentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300">
              <Download className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Industry Guide 2025</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive guide to robotics implementation across different industries
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Download PDF
              </button>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300">
              <Download className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Technical Specifications</h3>
              <p className="text-gray-300 mb-4">
                Detailed technical documentation for all our robotic solutions
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Download PDF
              </button>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300">
              <Download className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">ROI Calculator</h3>
              <p className="text-gray-300 mb-4">
                Calculate the return on investment for robotic automation solutions
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Download Tool
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;