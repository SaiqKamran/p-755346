
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { openWhatsAppChat } from "@/utils/whatsapp";
import { SplineScene } from "@/components/ui/splite";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  designation: z.string().min(2, "Designation is required"),
  mobile: z.string().min(10, "Please enter a valid phone number"),
  whatsapp: z.string().min(10, "Please enter a valid WhatsApp number"),
  email: z.string().email("Invalid company email address"),
  skillSet: z.string().min(2, "Please specify required skill set"),
  vacancies: z.string().min(1, "Number of vacancies is required"),
  jobLocation: z.string().min(2, "Job location is required"),
  salary: z.string().min(1, "Salary information is required"),
  website: z.string().url("Please enter a valid website URL"),
});

export const HireFromUsSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      designation: "",
      mobile: "",
      whatsapp: "",
      email: "",
      skillSet: "",
      vacancies: "",
      jobLocation: "",
      salary: "",
      website: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formattedMessage = `
New Hiring Request:
Name: ${values.name}
Designation: ${values.designation}
Mobile: ${values.mobile}
WhatsApp: ${values.whatsapp}
Company Email: ${values.email}
Skill Set Required: ${values.skillSet}
Number of Vacancies: ${values.vacancies}
Job Location: ${values.jobLocation}
Salary: ${values.salary}
Company Website: ${values.website}`;

    openWhatsAppChat('Hiring Request', formattedMessage);
    toast.success("Your hiring request has been submitted successfully!");
    form.reset();
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-black/95 to-black/90 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{transform: "scale(2)", transformOrigin: "center center", overflow: "hidden"}}>
        <SplineScene 
          scene="https://prod.spline.design/A3E2sL2EswWb9Kn4/scene.splinecode"
          className="w-full h-full"
        />
        
        {/* Darker overlay to ensure text readability */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none bg-black bg-opacity-60"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-white text-4xl font-bold mb-8 text-center">Hire From Us</h2>
          <p className="text-white/80 text-center mb-8">
            Looking for talented animators and designers? Fill out the form below to connect with our pool of skilled professionals.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-white/10 text-white border-white/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="designation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Designation</FormLabel>
                        <FormControl>
                          <Input placeholder="Your designation" {...field} className="bg-white/10 text-white border-white/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Mobile</FormLabel>
                        <FormControl>
                          <Input placeholder="Your mobile number" {...field} className="bg-white/10 text-white border-white/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="Your WhatsApp number" {...field} className="bg-white/10 text-white border-white/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Company Email ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company email" {...field} className="bg-white/10 text-white border-white/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="skillSet"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Skill Set Required</FormLabel>
                      <FormControl>
                        <Input placeholder="Required skills" {...field} className="bg-white/10 text-white border-white/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="vacancies"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Number of Vacancies</FormLabel>
                        <FormControl>
                          <Input placeholder="Number of positions" {...field} className="bg-white/10 text-white border-white/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="jobLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Job Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Location" {...field} className="bg-white/10 text-white border-white/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="salary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Salary</FormLabel>
                        <FormControl>
                          <Input placeholder="Salary range/details" {...field} className="bg-white/10 text-white border-white/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Your Company Website</FormLabel>
                        <FormControl>
                          <Input placeholder="https://yourcompany.com" {...field} className="bg-white/10 text-white border-white/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500 mt-6">
                  Submit Hiring Request
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
