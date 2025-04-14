
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  city: z.string().min(2, "Please enter your city"),
  contactPreference: z.enum(["call", "text", "both"], {
    required_error: "Please select a contact preference",
  }),
  message: z.string().optional(),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      contactPreference: "both",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Message sent successfully!");
    form.reset();
  }

  return (
    <div className="py-20 px-4 bg-indigo-900/50">
      <div className="max-w-[800px] mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Name (Required)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} className="bg-white/10 text-white border-white/20" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Your Contact Number (Required)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number" {...field} className="bg-white/10 text-white border-white/20" />
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
                  <FormLabel className="text-white">Email (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" {...field} className="bg-white/10 text-white border-white/20" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Your City</FormLabel>
                  <FormControl>
                    <Input placeholder="Your city" {...field} className="bg-white/10 text-white border-white/20" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactPreference"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-white">Contact Preference</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="call" className="border-white text-white" />
                        </FormControl>
                        <FormLabel className="text-white font-normal">Phone call</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="text" className="border-white text-white" />
                        </FormControl>
                        <FormLabel className="text-white font-normal">Text/WhatsApp only</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="both" className="border-white text-white" />
                        </FormControl>
                        <FormLabel className="text-white font-normal">Both</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Enter Your Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here"
                      className="bg-white/10 text-white border-white/20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
              Send Your Message
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
