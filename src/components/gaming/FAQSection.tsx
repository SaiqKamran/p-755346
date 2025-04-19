
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
          a: "With Employment Driven Education, Arena enhances your job prospects by monitoring trending jobs through recruiter feedback and recommending specific courses to help you gain the required skills. This is an evolution from the traditional approach where placement assistance was only offered after course completion."
        }
      ]
    },
    {
      value: "jobs",
      label: "Jobs & Placements",
      questions: [
        {
          q: "Is media & entertainment industry impacted by job losses?",
          a: "No! There is huge demand for media & entertainment professionals. The Animation & VFX industry in India continues to grow exponentially, requiring trained and skilled professionals for films, TV shows, ads, and more."
        },
        {
          q: "How does Arena help students to get jobs?",
          a: "Arena's dedicated placement cell provides: \n• Special interview preparation training\n• Project and demo reel guidance\n• Access to Employability Enhancement Program (EEP)\n• On-campus placements through job fairs & placement drives"
        },
        {
          q: "How many students got placements last year?",
          a: "Over 2800 students of Arena Animation received job placements in top companies across India during the last placement cycle."
        },
        {
          q: "Do you offer 100% job placement?",
          a: "Arena Animation offers 100% job placement assistance.* When you complete your course successfully, Arena's Placements Cell helps you get interviews with major companies. (*Placements are at the sole discretion of recruiters)"
        }
      ]
    },
    {
      value: "courses",
      label: "Courses & Eligibility",
      questions: [
        {
          q: "What courses does Arena Animation offer?",
          a: "Arena offers a wide range of career & short-term courses including:\n• AAIPP (Arena Animation International Premier Program)\n• Advanced Programs in Animation, VFX, Game Design\n• Digital Content Creation\n• UI/UX Design\n• Digital Marketing with Gen AI\n• And many more specialized programs"
        },
        {
          q: "What is the eligibility for joining an Arena course?",
          a: "The basic eligibility for Arena's Career Courses is completion of class 12 or 10."
        },
        {
          q: "Are there courses for working professionals?",
          a: "Yes! Arena offers various short-term courses for working professionals, including specialized programs in Gen AI, Blender, Maya, Unreal Engine, and more."
        }
      ]
    },
    {
      value: "fees",
      label: "Fees & Loans",
      questions: [
        {
          q: "What are the fee structure and duration for Arena courses?",
          a: "Each course has a different fee structure and duration. The fee is paid in installments."
        },
        {
          q: "Will Arena provide me a student loan?",
          a: "Yes, Arena offers student loan facility at 0% interest. Please visit the institute for details."
        },
        {
          q: "How can I apply for a student loan?",
          a: "Please visit the institute or call us for details. It is a 5-minute procedure and needs no paperwork. You will get instant notification on your loan status."
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
