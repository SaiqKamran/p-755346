
import React, { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

interface CourseTermProps {
  title: string;
  items: string[];
}

const CourseTerm: React.FC<CourseTermProps> = ({ title, items }) => {
  return (
    <div className="mb-6">
      <h5 className="text-lg font-semibold text-yellow-400 mb-3">{title}</h5>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-white/80 text-sm pl-4 border-l border-purple-500/30">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface CourseDetailProps {
  title?: string;
  description?: string;
  terms?: {
    title: string;
    items: string[];
  }[];
  content?: string[];
  software?: string;
  careers?: string;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ 
  title, 
  description, 
  terms, 
  content,
  software, 
  careers 
}) => {
  return (
    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
      {title && <h4 className="text-xl font-semibold text-white mb-4">{title}</h4>}
      
      {description && <p className="text-white/80 mb-6">{description}</p>}
      
      {terms && terms.map((term, i) => (
        <CourseTerm key={i} title={term.title} items={term.items} />
      ))}

      {content && (
        <div className="mb-6">
          <ul className="space-y-2">
            {content.map((item, i) => (
              <li key={i} className="text-white/80 text-sm pl-4 border-l border-purple-500/30">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {software && (
        <div className="mb-6">
          <h5 className="text-lg font-semibold text-yellow-400 mb-2">Software/Tools Covered</h5>
          <p className="text-white/80 text-sm">{software}</p>
        </div>
      )}
      
      {careers && (
        <div>
          <h5 className="text-lg font-semibold text-yellow-400 mb-2">Career Opportunities</h5>
          <p className="text-white/80 text-sm">{careers}</p>
        </div>
      )}
    </div>
  );
};

export const CourseCatalog = () => {
  const [openCourse, setOpenCourse] = useState<string | null>(null);

  const toggleCourse = (courseId: string) => {
    setOpenCourse(openCourse === courseId ? null : courseId);
  };

  const courses = [
    {
      id: "aaipp",
      title: "AAIPP (Arena Animation International Premier Program)",
      description: "This flagship program transforms creative talent into skilled professionals capable of producing high-quality animations using industry-leading tools including Unreal Engine.",
      subtitle: "Advanced Program in Animation with Unreal Engine",
      terms: [
        {
          title: "Term 1: Design & Visualization",
          items: [
            "Cinematography & Photography Basics",
            "Color and Light Magic",
            "Perspectives and Character Design",
            "Mastering Digital Illustrations",
            "Pixel Perfect Painter",
            "Storyboard Mastery",
            "Cinematic Edits",
            "Digital Sound Craft",
            "2D Animation Mastery",
            "Motion Graphics",
            "AI Art Innovator",
            "Portfolio Powerhouse"
          ]
        },
        {
          title: "Term 2: Advanced 3D Design",
          items: [
            "Understanding the CG Pipeline",
            "Asset Creation for CGI & Games",
            "Mastering Digital Sculpting",
            "Texture and Details",
            "Realistic Surface Creation",
            "Real World Replication",
            "Illuminating Assets",
            "Bringing Characters to Life with Rigging",
            "Art of 3D Animation",
            "AI-Powered 3D Workflow",
            "Portfolio Powerhouse"
          ]
        },
        {
          title: "Term 3: Realtime Cinematics and FX",
          items: [
            "3D FX, Dynamics and Simulations",
            "Introduction to Virtual Production",
            "Cinematic Realism with Unreal",
            "Hyperrealistic Character Creation",
            "Portfolio Powerhouse",
            "Career Launchpad"
          ]
        }
      ],
      software: "Adobe Illustrator CC, Adobe Photoshop CC, Storyboarder, Adobe Premiere Pro CC, Adobe Audition CC, Adobe Animate CC, Adobe After Effects CC, Autodesk Maya, nCloth, X-Gen, Maxon ZBrush, Adobe Substance Painter, Reality Capture, Unreal Engine, MetaHuman, Gen AI Tools",
      careers: "Concept Artist, Character Designer, Storyboard Artist, 3D Modeler, Texturing Artist, Lighting Artist, 3D Animator, Rigging Artist, 3D Generalist, 3D Designer, 3D Product Designer, Unreal Generalist, Real-time 3D Artist, 3D Visualizer"
    },
    {
      id: "vfx",
      title: "Advanced Program in Visual Effects",
      description: "This comprehensive program equips students with the skills to create stunning visual effects for film, television, and digital media.",
      terms: [
        {
          title: "Term 1: Design & Visualization",
          items: [
            "Cinematography & Photography Basics",
            "Color and Light Magic",
            "Perspectives and Character Design",
            "Mastering Digital Illustrations",
            "Pixel Perfect Painter",
            "Storyboard Mastery",
            "Cinematic Edits",
            "Digital Sound Craft",
            "2D Animation Mastery",
            "Motion Graphics",
            "AI Art Innovator",
            "Portfolio Powerhouse"
          ]
        },
        {
          title: "Term 2: Advanced 3D Design for VFX",
          items: [
            "Understanding the CG Pipeline",
            "Asset Creation for CGI & Games",
            "Texture and Details",
            "Realistic Surface Creation",
            "Real World Replication",
            "Illuminating Assets",
            "Bringing Characters to Life with Rigging",
            "Art of 3D Animation",
            "AI-Powered 3D Workflow",
            "Portfolio Powerhouse"
          ]
        },
        {
          title: "Term 3: Advanced FX and Compositing",
          items: [
            "3D FX, Dynamics and Simulations",
            "Introduction to Virtual Production",
            "Procedural FX with Houdini",
            "Advanced Roto with Silhouette",
            "Art of Camera Tracking",
            "Magic of Compositing with Nuke",
            "Portfolio Powerhouse",
            "Career Launchpad"
          ]
        }
      ],
      software: "Adobe Illustrator CC, Adobe Photoshop CC, Storyboarder, Adobe Premiere Pro CC, Adobe Audition CC, Adobe Animate CC, Adobe After Effects CC, Autodesk Maya, nCloth, X-Gen, Adobe Substance Painter, Reality Capture, Houdini, Silhouette, 3D Equalizer, Nuke, Gen AI Tools",
      careers: "Concept Artist, Character Designer, Storyboard Artist, 3D Artist, Lighting Artist, 3D Generalist, 3D Designer, 3D Product Designer, Compositor, Matchmove Artist, VFX Generalist, FX Artist, Motion Graphics Artist, Matte Painter, Video Editor, Roto Artist"
    },
    {
      id: "archviz",
      title: "Advanced Program in Architectural Visualization and Interior Design",
      description: "This program teaches students to transform architectural concepts into stunning visual presentations using cutting-edge tools and techniques.",
      terms: [
        {
          title: "Term 1: Design & Visualization",
          items: [
            "Cinematography & Photography Basics",
            "Color and Light Magic",
            "Perspectives and Character Design",
            "Mastering Digital Illustrations",
            "Pixel Perfect Painter",
            "Storyboard Mastery",
            "Cinematic Edits",
            "Digital Sound Craft",
            "2D Animation Mastery",
            "Motion Graphics",
            "AI Art Innovator",
            "Portfolio Powerhouse"
          ]
        },
        {
          title: "Term 2: Advanced 3D Visualization",
          items: [
            "Understanding CG Pipeline",
            "Introduction to AutoCAD",
            "Shaping World with 3ds Max",
            "Mastering Texturing & Lighting with 3ds Max",
            "Animating in 3ds Max",
            "RenderCraft in 3ds Max",
            "Realistic Surface Creation",
            "Introduction to SketchUp",
            "AI-Powered 3D Workflow",
            "Portfolio Powerhouse"
          ]
        },
        {
          title: "Term 3: Advanced Immersive Visualization",
          items: [
            "Introduction to Blender",
            "Modeling Concepts and Techniques",
            "UV Mapping and Texturing",
            "Materials and Shading",
            "Lighting Techniques",
            "Animation in Blender",
            "Rendering and Post Processing",
            "Immersive Media with Unreal Engine",
            "Archviz with Twinmotion",
            "Portfolio Powerhouse",
            "Career Launchpad"
          ]
        }
      ],
      software: "Gen AI, Adobe Illustrator CC, Storyboarder, Adobe Premier Pro CC, Adobe Audition CC, Adobe Animate CC, Adobe After Effects CC, AutoCAD, 3Ds Max, Vray, Substance Painter, Sketchup, Blender, Unreal Engine, Twinmotion",
      careers: "Concept Artist, 3D Artist, Lighting Artist, 3D Generalist, 3D Designer, 3D Product Designer, Archviz Artist, Interior Designer, 3D Visualizer, Unreal Engine Archviz Specialist, 3D Rendering Artist"
    },
    {
      id: "broadcast",
      title: "Broadcast Design",
      description: "This program focuses on creating dynamic visual content for television, film, and digital media platforms.",
      terms: [
        {
          title: "Term 1: Design and Visualization",
          items: [
            "Cinematography & Photography Basics",
            "Color and Light Magic",
            "Perspectives and Character Design",
            "Mastering Digital Illustrations",
            "Pixel Perfect Painter",
            "Storyboard Mastery",
            "Cinematic Edits",
            "Digital Sound Craft",
            "2D Animation Mastery",
            "Motion Graphics",
            "AI Art Innovator",
            "Portfolio Powerhouse"
          ]
        },
        {
          title: "Term 2: Advanced 3D Motion Design",
          items: [
            "Understanding Broadcast Pipeline",
            "Concepts of Broadcast Design",
            "Shaping World with 3ds Max",
            "Mastering Texturing & Lighting with 3ds Max",
            "Animating in 3ds Max",
            "RenderCraft in 3ds Max",
            "Broadcast Design with Cinema4D",
            "Broadcast Media",
            "AI-Powered 3D Workflow",
            "Portfolio Powerhouse",
            "Career Launchpad"
          ]
        }
      ],
      software: "Adobe Illustrator CC, Adobe Photoshop CC, Storyboarder, Adobe Premiere Pro CC, Adobe Audition CC, Adobe Animate CC, Adobe After Effects CC, Autodesk 3ds Max, Cinema4D, Gen AI Tools",
      careers: "Concept Artist, Storyboard Artist, 3D Artist, Lighting Artist, 3D Generalist, 3D Designer, Broadcast Designer, Motion Graphics Designer, Video Editor, Motion Design Visualizer"
    },
    {
      id: "dcc",
      title: "Digital Content Creation (DCC)",
      description: "This comprehensive program covers all aspects of digital content creation, from visual design to UI/UX and motion graphics.",
      terms: [
        {
          title: "Term 1: Visual Design and Branding",
          items: [
            "Foundation of Visual Design & Communication",
            "Color and Light Magic",
            "Copyright and Design Ethics",
            "Typography Techniques",
            "Creative Vector Illustrations",
            "Digital Design",
            "Digital and Interactive Publishing",
            "Designing for Social Engagement",
            "Product Visualization & Branding",
            "Portfolio Powerhouse"
          ]
        },
        {
          title: "Term 2: Motion Graphics & Gen AI Enhanced Creativity",
          items: [
            "Cinematography and Photography Basics",
            "Cinematic Edits",
            "Digital Sound Craft",
            "2D Motion Magic",
            "Motion Graphics",
            "Importance of Color Grading",
            "AI Art Innovator",
            "Portfolio Powerhouse"
          ]
        },
        {
          title: "Term 3: Comprehensive UI/UX Design",
          items: [
            "Principles of Design in UI/UX",
            "Design Thinking Process",
            "UX Research Process in UCD",
            "UX Informative Architecture",
            "UI Design Principles",
            "Wireframing and Collaboration",
            "Interactive Prototyping with Figma",
            "UX Research Fundamentals",
            "Gen AI for UI/UX Design",
            "Ethical AI Practices",
            "Responsive Design",
            "Make a Website with WordPress",
            "Working with Frameworks",
            "Case Study & Capstone Project",
            "Portfolio Powerhouse",
            "Career Launchpad"
          ]
        }
      ],
      software: "Adobe Illustrator CC, Adobe Photoshop CC, Adobe InDesign CC, Canva, Adobe Dimensions, Adobe Premiere Pro CC, Adobe Audition CC, Adobe Animate CC, Adobe After Effects CC, DaVinci, Figma, Draw.io, VS Code, WordPress, XAMPP, Gen AI Tools",
      careers: "Graphic Designer, Digital Illustrator, UI Artist, Motion Graphics Artist, UX Designer, Social Media Designer, Video Editor, Front-end Designer, UX Researcher, Web Designer"
    },
    {
      id: "graphicweb",
      title: "Next-Gen Graphic Design and Web Development",
      description: "This program focuses on graphic design principles and web development skills for creating engaging digital experiences.",
      terms: [
        {
          title: "Term 1: Graphic and Visual Design",
          items: [
            "Foundation of Visual Design & Communication",
            "Color and Light Magic",
            "Copyright and Design Ethics",
            "Typography Techniques",
            "Principles of Design in UI/UX",
            "Creative Vector Illustrations",
            "Digital Design",
            "Digital and Interactive Publishing",
            "Designing for Social Engagement",
            "Product Visualization and Branding",
            "Design Thinking Process",
            "AI Art Innovator",
            "Wireframing and Collaboration",
            "Portfolio Powerhouse"
          ]
        },
        {
          title: "Term 2: Web Design and Development",
          items: [
            "Interactive Prototyping with Figma",
            "Gen AI for UI/UX Design",
            "Concepts of Web Design and Development",
            "Foundations of Modern Web Design",
            "Responsive Web Development with Bootstrap",
            "Dynamic Web Interactions",
            "CMS and Local Web Development with WordPress and XAMPP",
            "Intro to SEO and Digital Marketing Concepts",
            "Server-side Scripting with PHP",
            "Website Project",
            "Portfolio Powerhouse",
            "Career Launchpad"
          ]
        }
      ],
      software: "Adobe Illustrator CC, Adobe Photoshop CC, Adobe InDesign CC, Canva, Adobe Dimensions, Draw.io, Figma, HTML5, CSS3, Bootstrap, JavaScript, WordPress, XAMPP, Google AdWords & Analytics, PHP & MySQL, Gen AI Tools",
      careers: "Graphic Designer, Digital Illustrator, UI Artist, Social Media Designer, Front-end Designer, UX Researcher, Web Designer, Web Developer"
    },
    {
      id: "uiux",
      title: "Advanced Program in UI/UX Design",
      description: "This specialized program focuses on user interface and user experience design principles and practices.",
      content: [
        "Principles of Design in UI/UX",
        "Digital Design",
        "Creative Vector Illustrations",
        "Design Thinking Process",
        "UX Research Process in UCD",
        "UX Informative Architecture",
        "UI Design Principles",
        "Wireframing and Collaboration",
        "Interactive Prototyping with Figma",
        "UX Research Fundamentals",
        "Gen AI for UI/UX Design",
        "Ethical AI Practices",
        "Responsive Design – HTML, CSS",
        "Make a Website with WordPress",
        "Working with Frameworks",
        "Case Study and Capstone Project",
        "Career Launchpad"
      ],
      software: "Adobe Illustrator CC, Adobe Photoshop CC, Draw.io, Figma, HTML5, CSS3, WordPress, XAMPP, VS Code, Gen AI Tools",
      careers: "Creative Designer, Digital Illustrator, UI Artist, Social Media Designer, UX Researcher, Interaction Designer, Visual Designer"
    },
    {
      id: "digitalmarketing",
      title: "Advanced Program in Digital Marketing with Gen AI",
      description: "This program equips students with cutting-edge digital marketing skills enhanced by artificial intelligence tools.",
      content: [
        "Foundations of Digital Marketing",
        "Concepts of Web Design and Development",
        "Search and Display Marketing",
        "Social Media Marketing",
        "Role of AI in Digital Marketing",
        "Paid Advertising Strategies",
        "Advanced Analytics",
        "Affiliate Marketing",
        "Advanced Marketing Automation",
        "Data Privacy and Digital Marketing Ethics",
        "Portfolio Powerhouse",
        "Career Launchpad"
      ],
      software: "Google Ads, Google Analytics, Semrush, SpyFLU / Wordstream, Social Pilot, UpContent, Curata, Social Media Ads Platforms, Hubspot, Mixpanel, Sprout Social, Ahrefs, Google Data Studio, Bitly, Canva, Mailerlite, WordPress, Mailchimp, Zapier, Hootsuite",
      careers: "Digital Marketing Executive, Social Media Strategist, Marketing Data Analyst, SEO/SEM Specialist, Digital Marketing Consultant, Paid Media Specialist"
    },
    {
      id: "visualmotiongraphics",
      title: "Next-Gen Visual Design & Motion Graphics",
      description: "This program focuses on creating dynamic visual content through motion graphics and animation.",
      content: [
        "Foundation of Visual Design and Communication",
        "Cinematography and Photography Basics",
        "Copyright and Design Ethics",
        "Typography Techniques",
        "Color and Light Magic",
        "Creative Vector Illustrations",
        "Digital Design",
        "Designing for Social Engagement",
        "2D Motion Magic",
        "Cinematic Edits",
        "Digital Sound Craft",
        "Motion Graphics",
        "Importance of Color Grading",
        "AI Art Innovator",
        "Portfolio Powerhouse",
        "Career Launchpad"
      ],
      software: "Adobe Illustrator CC, Adobe Photoshop CC, Canva, Adobe Animate CC, Adobe Premiere Pro CC, Adobe Audition CC, Adobe After Effects, DaVinci, Gen AI Tools",
      careers: "Graphic Designer, Digital Illustrator, UI Artist, Motion Graphics Artist, Social Media Designer, Video Editor, Color Grading Artist, Creative Designer"
    },
    {
      id: "gaming",
      title: "Gaming & Interactive Design",
      subtitle: "Master Program in Game Art, Design & Development with ARVR-XR",
      description: "This comprehensive program covers all aspects of game development, including immersive technologies like AR/VR/XR.",
      terms: [
        {
          title: "Term 1: Game Design and Art Essentials",
          items: [
            "Fundamentals of Game Art & Design",
            "Pixel Perfect Painter",
            "Mastering Digital Illustrations",
            "UI/UX Design for Games",
            "Animate for Game Art",
            "AI Art Innovator",
            "Introduction to Game Engine",
            "2D Game Project"
          ]
        },
        {
          title: "Term 2: Advanced Game Art",
          items: [
            "Understanding Game Production Pipeline",
            "Asset Creation for CGI & Games",
            "Mastering Digital Sculpting",
            "Textures and Details",
            "Realistic Surface Creation",
            "Illuminating Assets",
            "Bringing Characters to Life with Rigging",
            "Art of 3D Animation",
            "Cinematic Realism with Unreal",
            "AI-Powered 3D Workflow",
            "Portfolio Powerhouse"
          ]
        },
        {
          title: "Term 3: Game Art Specialist",
          items: [
            "Specialization in Game Art",
            "Procedural Texture Creation",
            "Real-time Lookdev",
            "Real World Replication",
            "Portfolio Powerhouse"
          ]
        },
        {
          title: "Term 4: Comprehensive Game Development",
          items: [
            "Understanding Unreal Engine for Game Development",
            "Design Game Worlds with the Level Editor",
            "Create Game Elements with Actors",
            "Simplify Game Logic with Blueprints",
            "Set up Player Controls and Inputs",
            "Enhance Gameplay with Collision Systems",
            "Design User-Friendly Interfaces",
            "Integrate Audio for Immersive Experiences",
            "Export and Share your Game Demo",
            "Build a Standout 3D Portfolio",
            "Portfolio Powerhouse"
          ]
        },
        {
          title: "Term 5: Immersive Design",
          items: [
            "Introduction to Augmented Reality",
            "Creating a VR Experience in Unreal",
            "Essentials of Unity",
            "Unity AR Foundation",
            "Creating AR Experience",
            "Portfolio Powerhouse",
            "Career Launchpad"
          ]
        }
      ],
      software: "Adobe Illustrator CC, Adobe Photoshop CC, Figma, Adobe Animate CC, GDevelop.io, Autodesk Maya, Maxon ZBrush, Adobe Substance Painter, Unreal Engine, Blender, Adobe Substance Designer, Adobe Substance 3D Stager, Reality Capture, Unity, Spark AR, Gen AI Tools",
      careers: "Game Designer, Game Producer, Level Designer, 2D Game Artist, UI Artist, 3D Game Artist, Technical Artist, Game Environment Artist, Cinematic Artist, Unreal Generalist, Real-time 3D Artist, Game Developer, AR/VR Developer"
    }
  ];

  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Courses Offered
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            B.Voc is equivalent to any other Bachelor's Degree of 3 Years and is recognized by the University Grants Commission (UGC).
          </p>
        </div>

        <div className="mb-10">
          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
            <p className="text-white/80">
              Arena Animation offers a diverse range of courses designed to equip students with cutting-edge skills in animation, visual effects, game development, architectural visualization, and digital content creation. Each program combines theoretical knowledge with practical application, preparing students for successful careers in the creative and digital industries.
            </p>
          </div>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {courses.map((course) => (
            <AccordionItem 
              key={course.id} 
              value={course.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-xl font-semibold text-white hover:text-yellow-400 hover:no-underline">
                <div className="flex items-center gap-3">
                  <BookOpen className="text-purple-400 w-5 h-5" />
                  <span>{course.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <CourseDetail 
                  title={course.subtitle}
                  description={course.description}
                  terms={course.terms}
                  content={course.content}
                  software={course.software}
                  careers={course.careers}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
