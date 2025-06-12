
import React from "react";
import { X } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { openWhatsAppChat } from "@/utils/whatsapp";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  city: z.string().min(2, "Please enter your city"),
  qualification: z.string().min(2, "Please enter your qualification"),
  courses: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one course.",
  }),
});

interface CourseFeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CourseFeeModal: React.FC<CourseFeeModalProps> = ({ isOpen, onClose }) => {
  const courses = [
    "Gen AI Courses",
    "Advanced Animation",
    "Graphic Design",
    "VFX",
    "Gaming",
    "UI/UX Design",
    "Digital Marketing",
    "3D Modeling",
    "Motion Graphics",
    "Architectural Visualization"
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      city: "",
      qualification: "",
      courses: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const selectedCourses = values.courses.join(", ");
    const message = `
Fee Plan Request:
Name: ${values.name}
Email: ${values.email}
City: ${values.city}
Qualification: ${values.qualification}
Interested Courses: ${selectedCourses}

Please send me detailed fee plans for the selected courses.`;

    openWhatsAppChat('Fee Plan Request', message);
    toast.success("Request sent! You'll receive fee details on WhatsApp shortly.");
    form.reset();
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Get Course Fee Plans</h2>
          <p className="text-white/80">Fill in your details to receive detailed fee information on WhatsApp</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your full name" 
                        {...field} 
                        className="bg-white/10 text-white border-white/20 focus:border-yellow-400" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email ID</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your email" 
                        {...field} 
                        className="bg-white/10 text-white border-white/20 focus:border-yellow-400" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">City</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your city" 
                        {...field} 
                        className="bg-white/10 text-white border-white/20 focus:border-yellow-400" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="qualification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Qualification</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g., 12th Pass, Graduate" 
                        {...field} 
                        className="bg-white/10 text-white border-white/20 focus:border-yellow-400" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="courses"
              render={() => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Select Courses (You can select multiple)</FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {courses.map((course) => (
                      <FormField
                        key={course}
                        control={form.control}
                        name="courses"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={course}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(course)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, course])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== course
                                          )
                                        )
                                  }}
                                  className="border-white/40 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400"
                                />
                              </FormControl>
                              <FormLabel className="text-white font-normal cursor-pointer">
                                {course}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 text-lg"
            >
              Send me the fee plans on my WhatsApp now
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
