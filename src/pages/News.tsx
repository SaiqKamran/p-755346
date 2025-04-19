
import React from "react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, ArrowRight } from "lucide-react";

const newsItems = [
  {
    title: "The Rise of Unreal Engine 5 in Animation",
    date: "April 15, 2025",
    excerpt: "Discover how Unreal Engine 5 is revolutionizing the animation industry with its groundbreaking features...",
    category: "Industry Trends"
  },
  {
    title: "AI in VFX: Transforming Post-Production",
    date: "April 12, 2025",
    excerpt: "Explore how artificial intelligence is streamlining VFX workflows and enhancing creative possibilities...",
    category: "Technology"
  },
  {
    title: "Latest Animation Techniques in 2025",
    date: "April 10, 2025",
    excerpt: "Stay updated with the most innovative animation techniques shaping the industry this year...",
    category: "Techniques"
  }
];

const News = () => {
  return (
    <div className="min-h-screen bg-[#1b1240]">
      <SplashCursor
        BACK_COLOR={{ r: 0.05, g: 0.0, b: 0.1 }}
        CURL={20}
        COLOR_UPDATE_SPEED={5}
        SPLAT_RADIUS={0.3}
        SPLAT_FORCE={6000}
      />
      <div className="max-w-[1400px] mx-auto">
        <Header />
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-white mb-8 animate-fade-in">
          News & Events
        </h1>
        <p className="text-lg text-white/80 mb-12 animate-fade-in delay-100">
          Stay updated with the latest trends and developments in VFX and animation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <CardTitle className="text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 mb-4">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-400">{item.category}</span>
                  <Button variant="link" className="text-purple-400 hover:text-purple-300">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default News;
