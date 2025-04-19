
import React, { useState } from "react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, ArrowRight, Eye, ThumbsUp, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const newsItems = [
  {
    title: "The Rise of Unreal Engine 5 in Animation",
    date: "April 15, 2025",
    excerpt: "Discover how Unreal Engine 5 is revolutionizing the animation industry with its groundbreaking features...",
    category: "Industry Trends",
    fullContent: "Unreal Engine 5 has become a game-changer in the animation industry, offering revolutionary features like Nanite and Lumen that are transforming how we create and render animated content. With its real-time rendering capabilities and photorealistic results, more studios are adopting UE5 for their animation pipelines.",
    views: 1250,
    likes: 342,
    comments: 28
  },
  {
    title: "AI in VFX: Transforming Post-Production",
    date: "April 12, 2025",
    excerpt: "Explore how artificial intelligence is streamlining VFX workflows and enhancing creative possibilities...",
    category: "Technology",
    fullContent: "Artificial Intelligence is revolutionizing VFX post-production workflows. From automated rotoscoping to smart compositing tools, AI-powered solutions are helping artists work more efficiently while achieving higher quality results. Learn how leading studios are incorporating AI into their pipelines.",
    views: 980,
    likes: 245,
    comments: 32
  },
  {
    title: "Latest Animation Techniques in 2025",
    date: "April 10, 2025",
    excerpt: "Stay updated with the most innovative animation techniques shaping the industry this year...",
    category: "Techniques",
    fullContent: "2025 has brought exciting innovations in animation techniques. From advanced procedural animation systems to breakthrough motion capture technologies, we're seeing a transformation in how animated content is created. Discover the cutting-edge methods being used by industry leaders.",
    views: 1520,
    likes: 430,
    comments: 45
  }
];

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof newsItems[0] | null>(null);

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
                  <Button 
                    variant="link" 
                    className="text-purple-400 hover:text-purple-300"
                    onClick={() => setSelectedArticle(item)}
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="bg-[#1b1240] border-purple-500/20 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-4">
              {selectedArticle?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-purple-400">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{selectedArticle?.date}</span>
              <span className="text-sm text-purple-400 ml-2">{selectedArticle?.category}</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              {selectedArticle?.fullContent}
            </p>
            <div className="flex items-center gap-6 pt-4 border-t border-purple-500/20">
              <div className="flex items-center gap-2 text-purple-400">
                <Eye className="h-4 w-4" />
                <span>{selectedArticle?.views} views</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <ThumbsUp className="h-4 w-4" />
                <span>{selectedArticle?.likes} likes</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <MessageCircle className="h-4 w-4" />
                <span>{selectedArticle?.comments} comments</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default News;
