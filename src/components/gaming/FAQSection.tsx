
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export const FAQSection = () => {
  const tabs = [
    {
      value: "education",
      label: "Education & Employment",
      questions: [
        {
          q: "What is Arena's Employment Driven Education strategy?",
          a: "Arena's Employment Driven Education strategy represents an evolution from traditional education models. Rather than simply enrolling students in courses and offering placement assistance upon completion, Arena actively monitors industry trends and job market demands with the help of recruiters. This approach allows Arena to recommend specific courses that will equip students with the skills most in-demand in the current job market, significantly enhancing their employment prospects."
        },
        {
          q: "How does Arena stay updated with industry trends?",
          a: "Arena maintains close relationships with industry professionals and recruiters to continuously monitor evolving trends, technological advancements, and changing skill requirements in the animation, VFX, gaming, and digital content creation industries. This network allows Arena to adapt its curriculum to ensure students learn the most relevant and in-demand skills."
        },
        {
          q: "What role does Unreal Engine play in Arena's curriculum?",
          a: "Unreal Engine has become a cornerstone of Arena's curriculum, particularly in programs like the Advanced Program in Animation with Unreal Engine. The industry is rapidly adopting Unreal Engine for real-time rendering, character animation, virtual production, and AI-assisted tools. Arena recognizes this shift and has integrated Unreal Engine training to prepare students for the future of animation and visual effects production."
        },
        {
          q: "How does Arena incorporate AI into its training programs?",
          a: "Arena has embraced AI across its curriculum, offering specialized courses like Master in Gen AI while also integrating AI tools and concepts into most programs. Students learn AI-driven workflows for asset creation, animation, design automation, and creative problem-solving, preparing them for an industry where AI is increasingly important for efficiency and innovation."
        },
        {
          q: "What industry partnerships does Arena maintain?",
          a: "Arena maintains partnerships with leading studios, production houses, and technology companies across the animation, VFX, gaming, and digital content industries. These partnerships facilitate masterclasses, workshops, industry projects, and placement opportunities for students."
        },
        {
          q: "How does Arena prepare students for emerging technologies?",
          a: "Arena's curriculum is continuously updated to include emerging technologies like virtual production, augmented reality (AR), virtual reality (VR), and extended reality (XR). Programs such as the Master Program in Game Art, Design & Development with ARVR-XR and Advanced Program in Immersive Design specifically focus on these cutting-edge technologies."
        }
      ]
    },
    {
      value: "jobs",
      label: "Jobs & Placements",
      questions: [
        {
          q: "How does Arena help students to get jobs?",
          a: "Arena provides comprehensive placement assistance through its dedicated placement cell. Students receive specialized interview preparation, portfolio development guidance, and access to the Employability Enhancement Program (EEP). Arena also organizes on-campus placements through job fairs and placement drives, connecting students directly with potential employers from the media and entertainment industry."
        },
        {
          q: "What types of companies hire Arena Animation graduates?",
          a: "Arena graduates are hired by a diverse range of companies including major television networks (Aaj Tak, NDTV, Zee Media), animation studios (DQ Entertainment, Prana Studio), VFX houses (Prime Focus, Red Chillies, Makuta Visual Effects), tech giants (Amazon, Accenture), and digital payment platforms (Paytm). These companies represent various sectors of the media, entertainment, and technology industries."
        },
        {
          q: "What job roles can graduates from Arena's animation programs expect?",
          a: "Graduates from Arena's animation programs can pursue roles such as 3D Animator, Character Designer, Storyboard Artist, 3D Modeler, Texturing Artist, Lighting Artist, Rigging Artist, 3D Generalist, and Technical Artist. With specialized training in Unreal Engine, graduates can also work as Real-time 3D Artists and Virtual Production Specialists."
        },
        {
          q: "How does Arena support students interested in game development careers?",
          a: "Arena offers specialized programs in game art, design, and development, preparing students for roles like Game Designer, Game Producer, Level Designer, 2D/3D Game Artist, UI Artist, Technical Artist, and Game Developer. The curriculum covers both artistic and technical aspects of game creation, using tools like Unreal Engine and Unity."
        }
      ]
    },
    {
      value: "courses",
      label: "Courses & Eligibility",
      questions: [
        {
          q: "What are the basic eligibility criteria for Arena Animation courses?",
          a: "The basic eligibility requirement for most Arena Animation career courses is completion of 10+2 (higher secondary education). This applies to programs across animation, VFX, game development, digital content creation, and architectural visualization."
        },
        {
          q: "What courses does Arena offer in Animation and VFX?",
          a: "Arena offers several programs in Animation and VFX, including:\n\n• Advanced Program in Animation with Unreal Engine\n• Advanced Program in Visual Effects\n• Advanced Program in Animation and VFX\n• Advanced Digital Graphics and Animation\n• Advanced Program in VFX Filmmaking\n• Advanced Program in VFX Compositing and Editing"
        },
        {
          q: "What Digital Content Creation courses are available at Arena?",
          a: "Arena's Digital Content Creation offerings include:\n\n• Digital Content Creation Program\n• Next-Gen Graphic Design and Web Development\n• Advanced Program in UI/UX Design\n• Advanced Program in Digital Marketing with Gen AI\n• Next-Gen Visual Design & Motion Graphics"
        },
        {
          q: "What Gaming and Interactive Design programs does Arena provide?",
          a: "Arena offers several Gaming and Interactive Design programs:\n\n• Master Program in Game Art, Design & Development with ARVR-XR\n• Advanced Program in Game Art and Design with Specialization\n• Advanced Program in Game Art, Design and Development\n• Advanced Program in Immersive Design"
        },
        {
          q: "What short-term courses does Arena offer for working professionals?",
          a: "Arena provides several short-term courses for skill enhancement:\n\n• Master in Gen AI\n• Master in Blender\n• Master in Unreal Engine\n• Master in Maya\n• Digital Architecture and Interior Design\n• Master in 2D Animation\n• Master in 3ds Max"
        }
      ]
    },
    {
      value: "fees",
      label: "Fees & Loans",
      questions: [
        {
          q: "Does Arena offer student loan facilities?",
          a: "Yes, Arena offers student loan facilities at 0% interest. This makes education more accessible to students who may not be able to pay the full course fee upfront. Students can visit their local Arena institute or call for details about this facility."
        },
        {
          q: "How is the fee structure organized at Arena?",
          a: "Each course at Arena has a different fee structure based on the program's duration, content, and resources required. The fees are typically paid in installments rather than as a lump sum, making it more manageable for students."
        },
        {
          q: "What is the application process for student loans at Arena?",
          a: "The student loan application process at Arena is designed to be quick and hassle-free. It's described as a 5-minute procedure that requires no paperwork, with instant notification of loan status. Students need to visit the institute or call for specific details."
        },
        {
          q: "Are there any scholarships available for Arena Animation courses?",
          a: "Arena may offer scholarships or special fee considerations based on merit, need, or other criteria. Prospective students should contact their local Arena center for information about any current scholarship opportunities."
        },
        {
          q: "Do the course fees include software licenses?",
          a: "Arena's course fees typically include access to the software and tools needed for training during the course duration. Students should check with their specific center regarding any software that might be provided for personal use beyond the classroom."
        }
      ]
    }
  ];

  return (
    <div className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-white/80 text-lg">
          Everything you ever wanted to know about Arena Animation, from course fees to batch timings are here.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="mt-6 bg-white/5 rounded-lg p-6"
            >
              <Accordion type="single" collapsible className="w-full">
                {tab.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-white/10"
                  >
                    <AccordionTrigger className="text-white hover:text-yellow-400">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/80 whitespace-pre-line">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
