"use client";

import React, { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, SendHorizontal } from "lucide-react";

interface ContactUsPageProps {
  className?: string;
}

const ContactUsPage: React.FC<ContactUsPageProps> = ({ className = "" }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("You have clicked!");
  };

  return (
    <>
      <div
        className={`min-h-96 bg-green-100 flex justify-center flex-col gap-2 items-center bg-[url('/images/banner-10.png')] bg-cover bg-center  ${className}`}
      >
        <h4 className="text-slate-600 text-lg font-bold">
          How can we help you?
        </h4>
        <h2 className="text-5xl font-bold my-1">Let us know your problem</h2>
        <p className="text-slate-700 max-w-lg mx-auto text-center">
          You can share us about your problem by messaging us. We will try our
          best to provide you a smooth journey with Tienda.
        </p>
      </div>
      <div className="py-20 px-3 xl:px-0 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex-1">
            <h4 className="text-green-400 text-lg font-bold">Contact Form</h4>
            <h2 className="text-5xl font-bold my-5">Drop Us a Line</h2>
            <p className="text-slate-700 max-w-sm">
              Your email address will not be published. Fill all the information
              and press send button
            </p>
          </div>
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="name">Your fullname</Label>
                <Input type="text" id="name" placeholder="Your fullname" />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" id="subject" placeholder="Subject" />
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="message">Your message</Label>
                <Textarea placeholder="Type your message here." id="message" />
              </div>

              <Button
                type="submit"
                className="bg-primaryMat text-white hover:bg-orange-400 py-[5px] group/submit overflow-hidden flex items-center justify-center gap-[5px]"
              >
                Send Message
                <span className="relative top-[-7px]">
                  <span className="absolute top-0 left-0">
                    <Mail
                      className="mr-2 h-4 w-4 top-0 group-hover/submit:top-[-50px] group-hover/submit:rotate-[-15deg] relative"
                      style={{ transition: "0.3s" }}
                    />
                  </span>

                  <span className="absolute top-0 left-0">
                    <SendHorizontal
                      className="mr-2 h-4 w-4 bottom-[-50px] group-hover/submit:bottom-[0px] relative"
                      style={{ transition: "0.3s" }}
                    />
                  </span>
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
