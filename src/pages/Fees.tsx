
import React from "react";
import { Button } from "@/components/ui/button";
import { WhatsApp, FileText, Phone } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const courses = [
  {
    title: "AAIPP",
    description: "Arena Animation International Premier Program",
    whatsappLink: "https://wa.me/+919876543210?text=I'm%20interested%20in%20AAIPP%20course%20fee%20details"
  },
  {
    title: "Advanced VFX",
    description: "Advanced Program in Visual Effects",
    whatsappLink: "https://wa.me/+919876543210?text=I'm%20interested%20in%20Advanced%20VFX%20course%20fee%20details"
  },
  {
    title: "ArchViz",
    description: "Advanced Program in Architectural Visualization and Interior Design",
    whatsappLink: "https://wa.me/+919876543210?text=I'm%20interested%20in%20ArchViz%20course%20fee%20details"
  },
  {
    title: "Custom Course",
    description: "Get a personalized course plan based on your needs",
    whatsappLink: "https://wa.me/+919876543210?text=I'm%20interested%20in%20discussing%20a%20custom%20course"
  }
];

const Fees = () => {
  return (
    <div className="min-h-screen bg-[rgba(45,30,107,1)] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Fee Details & Plans</h1>
          <p className="text-white/80 text-lg">Get detailed information about our course fees and flexible payment plans</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.title} className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">{course.title}</CardTitle>
                <CardDescription className="text-white/70">{course.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col gap-3">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => window.open(course.whatsappLink, '_blank')}
                >
                  <WhatsApp className="mr-2 h-4 w-4" />
                  Get Fee Details on WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-white/20 text-white hover:bg-white/10"
                  onClick={() => window.location.href = "/contact"}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call for Enquiry
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-500"
            onClick={() => window.open("/contact")}
          >
            <FileText className="mr-2 h-4 w-4" />
            Request Complete Fee Structure
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Fees;
