
import React from "react";
import { Card, CardContent } from "../ui/card";
import { BookOpen, Code } from "lucide-react";

export const DegreePrograms = () => {
  const programs = [
    {
      title: "B.Voc in VFX Film Making",
      icon: BookOpen,
      semesters: [
        {
          title: "Semester 1",
          gec: [
            "Introduction to Computer Fundamentals",
            "Graphic & Visualization Fundamentals",
            "Pre-Production Concepts",
            "Writing Skills- English"
          ],
          sdc: [
            "Digital Illustration",
            "Media Artworks & Publishing",
            "Adobe Photoshop"
          ]
        },
        {
          title: "Semester 2",
          gec: [
            "Basics of Television Graphics",
            "Basics of Script Writing",
            "Film Appreciation"
          ],
          sdc: [
            "Concepts of Editing",
            "Audio Video Editing",
            "Compositing with Adobe After Effects"
          ]
        },
        {
          title: "Semester 3",
          gec: [
            "History and Principles of Animation",
            "Concept of Web and Internet",
            "Concept of Web Marketing"
          ],
          sdc: [
            "Animation Production Process",
            "Basics of 2D Animation",
            "2D Animation with Adobe Animate CC"
          ]
        },
        {
          title: "Semester 4",
          gec: [
            "Storyboarding & Clay Modeling",
            "Animation Technology",
            "Lighting with 3DS Max"
          ],
          sdc: [
            "Basics of 3DS Max",
            "Modeling & Texturing with Max",
            "Portfolio Project – 3D Animation"
          ]
        },
        {
          title: "Semester 5",
          gec: [
            "Modeling for Gaming",
            "Texturing with Maya",
            "VFX Fundamentals"
          ],
          sdc: [
            "Basics of Maya",
            "Dynamics, Simulation, & Technical Animation with Maya",
            "Compositing with Nuke"
          ]
        },
        {
          title: "Semester 6",
          gec: [
            "Rotoscoping",
            "Matte Painting",
            "Personality Development & Current Affairs"
          ],
          sdc: [
            "Matchmoving",
            "Compositing with Nuke – Advanced",
            "Final Project VFX/ Animation"
          ]
        }
      ]
    },
    {
      title: "B.Voc in Game Design & Development",
      icon: Code,
      semesters: [
        {
          title: "Semester 1",
          gec: [
            "Introduction to Computer Fundamentals",
            "Graphic & Visualization Fundamentals",
            "Pre-Production Concepts",
            "Writing Skills- English"
          ],
          sdc: [
            "Art for Games - 1",
            "Art for Games - 2",
            "Character Design"
          ]
        },
        {
          title: "Semester 2",
          gec: [
            "Basics of Television Graphics",
            "Basics of Script Writing",
            "Film Appreciation"
          ],
          sdc: [
            "Game Concept Design",
            "Game Design - Part 1",
            "Game Design - Part 2"
          ]
        },
        {
          title: "Semester 3",
          gec: [
            "History and Principles of Animation",
            "Concept of Web and Internet",
            "Concept of Web Marketing"
          ],
          sdc: [
            "Game Design - Part 1",
            "Game Engine - Part 2",
            "Game Engine - Part 3"
          ]
        },
        {
          title: "Semester 4",
          gec: [
            "Storyboarding & Clay Modeling",
            "Animation Technology",
            "Lighting with 3DS Max"
          ],
          sdc: [
            "Game Engine - Part 3",
            "Asset Modeling",
            "Asset Texturing"
          ]
        },
        {
          title: "Semester 5",
          gec: [
            "Modeling for Gaming",
            "Texturing with Maya",
            "VFX Fundamentals"
          ],
          sdc: [
            "Character Modeling",
            "Character Texturing",
            "Game Development"
          ]
        },
        {
          title: "Semester 6",
          gec: [
            "Rotoscoping",
            "Matte Painting",
            "Personality Development & Current Affairs"
          ],
          sdc: [
            "2D Game Development",
            "AR App Development",
            "Final Project"
          ]
        }
      ]
    }
  ];

  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Degrees Offered
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Choose from our specialized degree programs designed to prepare you for the industry
          </p>
        </div>
        
        <div className="space-y-20">
          {programs.map((program, index) => (
            <div key={index} className="space-y-8">
              <div className="flex items-center gap-3 justify-center">
                <program.icon className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">{program.title}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {program.semesters.map((semester, semIndex) => (
                  <Card key={semIndex} className="bg-white/5 border-purple-500/20">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">{semester.title}</h4>
                      
                      <div className="mb-4">
                        <h5 className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2">
                          GENERAL EDUCATION COMPONENT (GEC)
                        </h5>
                        <ul className="space-y-2">
                          {semester.gec.map((item, i) => (
                            <li key={i} className="text-white/80 text-sm">{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2">
                          SKILL DEVELOPMENT COMPONENT (SDC)
                        </h5>
                        <ul className="space-y-2">
                          {semester.sdc.map((item, i) => (
                            <li key={i} className="text-white/80 text-sm">{item}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
