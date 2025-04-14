
import React from "react";
import { Button } from "./Button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";

export const RequestBrochure = () => {
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Request Brochure
          </h2>
          <p className="text-white/80">
            Fill out the form below to receive your free brochure
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Name (Required)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Contact Number (Required)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number" {...field} />
                  </FormControl>
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
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your address" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="text-center">
              <Button variant="primary" className="w-full md:w-auto">
                Request Brochure
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
