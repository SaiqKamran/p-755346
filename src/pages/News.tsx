
import React, { useState } from "react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, ArrowRight, Eye, ThumbsUp, MessageCircle, Tag } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const newsItems = [
  {
    title: "The Rise of Unreal Engine 5 in Animation",
    date: "April 15, 2025",
    excerpt: "Discover how Unreal Engine 5 is revolutionizing the animation industry with its groundbreaking features like Nanite and Lumen...",
    category: "Industry Trends",
    fullContent: `
      <h2>The Game-Changing Impact of Unreal Engine 5</h2>
      
      <p>Unreal Engine 5 has become a revolutionary force in the animation industry, offering groundbreaking features that are transforming how studios create and render animated content. With its introduction of Nanite and Lumen technologies, UE5 is setting new standards for real-time rendering that were previously unattainable.</p>
      
      <p>Nanite virtualized geometry allows artists to use film-quality assets directly in the engine, with millions of polygons displayed on screen without performance degradation. This eliminates the tedious process of creating low-poly versions of high-detail models - artists can now work with source quality assets throughout the entire pipeline.</p>
      
      <p>Lumen, the fully dynamic global illumination system, has changed how lighting works in real-time environments. Lighting now reacts to scene changes instantly, creating physically accurate reflections and shadows that previously required hours of baking and preparation. This dramatic improvement in lighting workflow gives artists immediate feedback and greater creative freedom.</p>
      
      <p>Major animation studios worldwide are adopting UE5 for their pipelines, citing significant reductions in production time and increases in visual quality. The transition from traditional rendering workflows to real-time production is accelerating, with UE5 at the forefront of this industry transformation.</p>
      
      <p>For animation students, mastering Unreal Engine 5 has become essential for career readiness. Our animation programs now integrate comprehensive UE5 training to prepare students for the industry's evolving demands.</p>
    `,
    views: 1250,
    likes: 342,
    comments: 28,
    tags: ["Unreal Engine", "3D Animation", "Real-time Rendering"]
  },
  {
    title: "AI in VFX: Transforming Post-Production",
    date: "April 12, 2025",
    excerpt: "Explore how artificial intelligence is streamlining VFX workflows and enhancing creative possibilities through automated processes...",
    category: "Technology",
    fullContent: `
      <h2>AI Revolution in Visual Effects</h2>
      
      <p>Artificial Intelligence is revolutionizing VFX post-production workflows across the industry. From automated rotoscoping to smart compositing tools, AI-powered solutions are helping artists work more efficiently while achieving higher quality results.</p>
      
      <p>Machine learning algorithms can now perform complex tasks that previously required hundreds of artist hours. Rotoscoping, once one of the most time-consuming aspects of post-production, can now be largely automated with AI tools that track and separate foreground elements with remarkable precision.</p>
      
      <p>Noise reduction, upscaling, and motion interpolation have all been transformed by neural networks that can analyze frames contextually, preserving important details while cleaning up artifacts. This allows studios to salvage footage that would have previously been unusable or extremely costly to fix.</p>
      
      <p>Leading VFX studios report productivity increases of 30-40% when implementing AI solutions in their pipelines. This efficiency gain allows artists to focus more on creative decision-making rather than technical execution.</p>
      
      <p>Our VFX curriculum now includes dedicated modules on AI-assisted workflows, ensuring graduates understand how to leverage these powerful tools while maintaining artistic control and vision.</p>
    `,
    views: 980,
    likes: 245,
    comments: 32,
    tags: ["Artificial Intelligence", "VFX", "Post-Production"]
  },
  {
    title: "Latest Animation Techniques in 2025",
    date: "April 10, 2025",
    excerpt: "Stay updated with the most innovative animation techniques shaping the industry this year, from procedural systems to new mocap...",
    category: "Techniques",
    fullContent: `
      <h2>Cutting-Edge Animation Methodologies of 2025</h2>
      
      <p>2025 has brought exciting innovations in animation techniques that are reshaping production pipelines across the industry. From advanced procedural animation systems to breakthrough motion capture technologies, we're witnessing a transformation in how animated content is created.</p>
      
      <p>Procedural animation has evolved dramatically, with new systems that can generate complex movements based on physical simulation and AI-driven behavior models. These tools allow animators to establish parameters and rules, while the software intelligently generates natural-looking motion that responds dynamically to changing conditions.</p>
      
      <p>Motion capture technology has become more accessible and precise, with markerless systems now capturing subtle facial expressions and finger movements with unprecedented accuracy. Portable mocap setups allow smaller studios to achieve high-quality character animation without massive infrastructure investments.</p>
      
      <p>Style transfer algorithms are creating new aesthetic possibilities, allowing artists to apply the visual characteristics of one animation style to content created in another. This is enabling hybrid approaches that combine the efficiency of 3D production with the artistic qualities of traditional 2D animation.</p>
      
      <p>Our animation programs continuously update to incorporate these emerging techniques, ensuring students master both foundational principles and cutting-edge methodologies.</p>
    `,
    views: 1520,
    likes: 430,
    comments: 45,
    tags: ["Animation Techniques", "Motion Capture", "Procedural Animation"]
  },
  {
    title: "Career Opportunities in Virtual Production",
    date: "April 5, 2025",
    excerpt: "Discover the rapidly expanding job market in virtual production and how our graduates are securing positions in this innovative field...",
    category: "Career Insights",
    fullContent: `
      <h2>The Virtual Production Job Boom</h2>
      
      <p>Virtual production has created an entirely new category of jobs in the entertainment industry, with demand for skilled professionals far exceeding supply. This technology, which merges physical filming with real-time digital environments, requires a unique blend of traditional filmmaking knowledge and technical expertise.</p>
      
      <p>Major studios are building dedicated virtual production stages and hiring specialized teams to operate them. Roles such as VP Supervisors, LED Volume Technicians, and Real-time Environment Artists barely existed three years ago but now command impressive salaries and offer exciting career paths.</p>
      
      <p>Our recent employment data shows that graduates with virtual production skills are securing positions within weeks of graduation, often with multiple offers to choose from. Starting salaries for these specialized roles average 25% higher than traditional entry-level animation positions.</p>
      
      <p>The virtual production workflow bridges multiple departments that previously worked separately, creating collaborative environments where creative and technical skills merge. This integration of disciplines represents the future of production across film, television, and interactive media.</p>
      
      <p>Our curriculum now includes comprehensive virtual production training, with students gaining hands-on experience in our state-of-the-art LED volume stage, preparing them for immediate employment in this growing field.</p>
    `,
    views: 875,
    likes: 218,
    comments: 19,
    tags: ["Virtual Production", "Career Development", "Industry Trends"]
  },
  {
    title: "Student Success Story: From Classroom to AAA Studio",
    date: "April 2, 2025",
    excerpt: "Read about recent graduate Priya Sharma's journey from our animation program to a lead position at a prestigious gaming studio...",
    category: "Student Spotlight",
    fullContent: `
      <h2>Priya Sharma: A Journey of Dedication and Talent</h2>
      
      <p>When Priya Sharma enrolled in our Advanced Animation Program three years ago, she had limited experience but boundless determination. Today, she holds a lead animator position at one of the industry's most prestigious AAA gaming studios, working on titles played by millions worldwide.</p>
      
      <p>Priya's journey wasn't without challenges. Coming from a background with no formal art training, she dedicated countless extra hours to building her foundational skills while simultaneously mastering technical animation tools. Her instructors noted her exceptional ability to incorporate feedback and her collaborative approach to group projects.</p>
      
      <p>"The program's industry-focused curriculum was crucial to my development," Priya explains. "Working with briefs based on real production scenarios and receiving critique from visiting professionals prepared me for the actual demands of studio work."</p>
      
      <p>Her final portfolio project, an emotionally resonant character animation sequence, caught the attention of several studios. After fielding multiple offers, Priya chose to join a team working on an anticipated open-world RPG, where she was quickly recognized for her talent and promoted to lead a character animation team.</p>
      
      <p>Priya returns to campus regularly as a guest speaker, mentoring current students and demonstrating the career possibilities that dedicated study can unlock.</p>
    `,
    views: 1052,
    likes: 387,
    comments: 41,
    tags: ["Student Success", "Animation Careers", "Alumni"]
  },
  {
    title: "Emerging Technologies: Extended Reality in Education",
    date: "March 28, 2025",
    excerpt: "Explore how XR technologies are transforming animation education and creating immersive learning experiences for students...",
    category: "Education",
    fullContent: `
      <h2>XR: Revolutionizing Animation Education</h2>
      
      <p>Extended Reality (XR) technologies are fundamentally changing how animation is taught and learned, creating unprecedented opportunities for immersive education. Our institution has been at the forefront of this transformation, integrating XR tools throughout our animation curriculum.</p>
      
      <p>Virtual Reality (VR) has proven particularly valuable for teaching spatial concepts and environment design. Students now sculpt and model in three-dimensional space, walking around their creations and adjusting them from any angle. This spatial understanding translates directly to stronger composition skills and more effective environmental storytelling.</p>
      
      <p>Augmented Reality (AR) applications allow students to overlay their animations onto real-world spaces, testing how characters interact with actual environments and lighting conditions. This hybrid approach builds an intuitive understanding of how animation principles apply across different media contexts.</p>
      
      <p>Mixed Reality (MR) collaboration tools enable instructors to demonstrate techniques by working directly in a student's virtual space, providing guidance that feels tangibly present rather than abstractly explained. These shared experiences have significantly accelerated skill development and comprehension.</p>
      
      <p>Our XR labs are equipped with the latest hardware and software, ensuring students gain experience with the tools that leading studios are adopting for their own production pipelines. This technological fluency gives our graduates a competitive advantage in the rapidly evolving job market.</p>
    `,
    views: 763,
    likes: 195,
    comments: 27,
    tags: ["Extended Reality", "Animation Education", "Immersive Learning"]
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags && item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-flex items-center text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
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
        <DialogContent className="bg-[#1b1240] border-purple-500/20 text-white max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-2">
              {selectedArticle?.title}
            </DialogTitle>
            <DialogDescription className="text-purple-400 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{selectedArticle?.date}</span>
              <span className="text-purple-400 ml-2">{selectedArticle?.category}</span>
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedArticle?.tags && selectedArticle.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="inline-flex items-center text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full"
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
