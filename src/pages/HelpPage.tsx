// src/App.tsx
import FaqList from "@/components/FaqList";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "How does the app work?",
    answer:
      "The app connects users with service providers, allowing them to book services, make payments, and provide feedback, all through a mobile platform.",
  },
  {
    question: "How does the app work?",
    answer:
      "The app connects users with service providers, allowing them to book services, make payments, and provide feedback, all through a mobile platform.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "The app connects users with service providers, allowing them to book services, make payments, and provide feedback, all through a mobile platform.",
  },
  {
    question: "Why was my payment declined?",
    answer:
      "The app connects users with service providers, allowing them to book services, make payments, and provide feedback, all through a mobile platform.",
  },
  {
    question: "How can I resolve a failed payment?",
    answer:
      "The app connects users with service providers, allowing them to book services, make payments, and provide feedback, all through a mobile platform.",
  },
  {
    question: "Fix payment gateway error?",
    answer:
      "The app connects users with service providers, allowing them to book services, make payments, and provide feedback, all through a mobile platform.",
  },
  {
    question: "Refund processing time?",
    answer:
      "The app connects users with service providers, allowing them to book services, make payments, and provide feedback, all through a mobile platform.",
  },
];

const HelpPage: React.FC = () => {
  return (
    <main>
      <div>
        <h1 className="flex items-center mb-16 font-['Quicksand'] text-[#121212]">
          <Link to="/user-settings" className="flex items-center">
            <ChevronLeft size={34} className="mr-4" />
            Help Center
          </Link>
        </h1>

        <Link to="mailto:www.gmail.com" className="w-full flex items-center justify-start relative rounded-[10px] shadow-[0px_0px_13.86px_0.92px_#2E3B7F1A] py-4 mb-8 px-8">
          <div className="w-[4rem] h-[4rem] rounded-full flex items-center justify-center bg-[#2E3B7F] mr-4">
            <Mail size={25} className="text-[#ffffff]" />
          </div>
          <h2 className="font-['Quicksand'] text-[#333333] text-[20px] capitalize font-medium">
            send us an email
          </h2>
          <ChevronRight size={25} className="absolute right-8"/>
        </Link>

        <div className="flex flex-col items-center justify-start w-full">
          <h2 className="flex items-start text-left w-full mb-8 font-['Quicksand'] text-[#333333] text-[24px] font-semibold">
            Frequently Asked Questions
          </h2>
          <div className="w-full rounded-[10px] shadow-[0px_0px_13.86px_0.92px_#2E3B7F1A] py-4">
            <FaqList faqs={faqData} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HelpPage;
