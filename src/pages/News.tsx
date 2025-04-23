
import React, { useState } from "react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, ArrowRight, Eye, ThumbsUp, MessageCircle, Tag } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { newsItems } from "@/data/news";

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof newsItems[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
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
              className="bg-black/40 backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <CardTitle className="text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 mb-4">{item.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags && item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-flex items-center text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-yellow-400">{item.category}</span>
                  <Button 
                    variant="link" 
                    className="text-yellow-400 hover:text-yellow-300"
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
        <DialogContent className="bg-[#1A1A1A] border-yellow-500/10 text-white max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-2">
              {selectedArticle?.title}
            </DialogTitle>
            <DialogDescription className="text-yellow-400 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{selectedArticle?.date}</span>
              <span className="text-yellow-400 ml-2">{selectedArticle?.category}</span>
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedArticle?.tags && selectedArticle.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="inline-flex items-center text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            
            <div 
              className="text-white/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedArticle?.fullContent || "" }}
            />
            
            <div className="flex items-center gap-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-yellow-400">
                <Eye className="h-4 w-4" />
                <span>{selectedArticle?.views} views</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <ThumbsUp className="h-4 w-4" />
                <span>{selectedArticle?.likes} likes</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
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
