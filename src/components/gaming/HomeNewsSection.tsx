
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { newsItems } from "@/data/news";

export const HomeNewsSection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 overflow-hidden relative">
      {/* Gaming texture background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&q=80")'
        }}
      />
      {/* Black overlay */}
      <div className="absolute inset-0 z-0 bg-black/50" />
      
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
        
        <div className="relative">
          <div className="flex animate-scroll-x gap-6">
            {/* First set */}
            {newsItems.map((item, index) => <div key={`first-${index}`} className="min-w-[300px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300" onClick={() => navigate('/news')}>
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
              </div>)}
            
            {/* Second set for seamless loop */}
            {newsItems.map((item, index) => <div key={`second-${index}`} className="min-w-[300px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300" onClick={() => navigate('/news')}>
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
              </div>)}
            
            {/* Third set for extra buffer */}
            {newsItems.map((item, index) => <div key={`third-${index}`} className="min-w-[300px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300" onClick={() => navigate('/news')}>
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
              </div>)}
          </div>
        </div>
      </div>
    </section>
  );
};
