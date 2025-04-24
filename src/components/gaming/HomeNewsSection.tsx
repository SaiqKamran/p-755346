
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { newsItems } from "@/data/news";
import { events } from "@/data/events";

export const HomeNewsSection: React.FC = () => {
  const navigate = useNavigate();
  const pastEvents = events.filter(event => !event.isUpcoming);
  
  return (
    <section className="py-16 overflow-hidden relative">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/9f6bb6e7-33d6-470b-8942-809e46a03eb2.png"
          alt="Animation Studio Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-white">Latest News & Events</h2>
          <Button 
            variant="outline" 
            onClick={() => navigate('/news')} 
            className="bg-yellow-400 text-black hover:bg-yellow-500 border-yellow-400 font-normal"
          >
            View All News <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        {/* News Section - Scrolling Right */}
        <div className="relative mb-16">
          <div className="flex animate-scroll-x gap-6">
            {[...Array(3)].map((_, setIndex) => (
              <React.Fragment key={`news-set-${setIndex}`}>
                {newsItems.map((item, index) => (
                  <div key={`news-${setIndex}-${index}`} className="min-w-[300px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300" onClick={() => navigate('/news')}>
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                      <span className="text-sm">{item.date}</span>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-white/70 line-clamp-2 mb-4">{item.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-purple-400">{item.category}</span>
                      <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0" onClick={e => {
                        e.stopPropagation();
                        navigate('/news');
                      }}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Past Events Section - Scrolling Left */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Past Events</h2>
          <Button 
            variant="outline" 
            onClick={() => navigate('/news')} 
            className="bg-yellow-400 text-black hover:bg-yellow-500 border-yellow-400 font-normal"
          >
            View All Events <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="relative">
          <div className="flex animate-scroll-x-reverse gap-6">
            {[...Array(3)].map((_, setIndex) => (
              <React.Fragment key={`event-set-${setIndex}`}>
                {pastEvents.map((event, index) => (
                  <div key={`event-${setIndex}-${index}`} className="min-w-[350px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300" onClick={() => navigate('/news')}>
                    <div className="relative h-48">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-yellow-400 mb-2">
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <h3 className="text-white text-xl font-semibold mb-3">{event.title}</h3>
                      <p className="text-white/70 line-clamp-2 mb-4">{event.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-yellow-400">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <Button variant="link" className="text-yellow-400 hover:text-yellow-300 p-0" onClick={e => {
                          e.stopPropagation();
                          navigate('/news');
                        }}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
