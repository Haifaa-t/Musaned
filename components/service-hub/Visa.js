"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, Mic } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const tabs = [
  "All",
  "Domestic Labor",
  "Special Needs",
  "Agriculture",
  "Replacement",
];

const faqList = [
  "What are the recruitment regulations for Visa",
  "If cancelation is done within more than 72 hours",
  "Where can I find more information?",
  "Can I customize this platform?",
  "How do I contact support?",
];

export default function Visa() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-32 py-16 space-y-8 font-ibm">
      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center justify-between border border-[#9DA4AE] rounded-sm px-3 py-2 w-full max-w-xs h-10">
          <div className="flex items-center flex-1">
            <Search className="w-4 h-4 text-[#6B7280] mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full text-sm text-[#1F2A37] placeholder:text-[#9CA3AF]"
            />
          </div>
          <button className="ml-2">
            <Mic className="w-4 h-4 text-[#1F2A37]" />
          </button>
        </div>

        <button className="flex items-center gap-2 h-10 px-4 min-w-[123px] rounded-sm bg-[#0D121C] text-white text-sm font-medium">
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-[#D2D6DB]">
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-semibold px-1 py-3 relative ${
                activeTab === tab ? "text-[#161616]" : "text-[#6B7280]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute -bottom-[1px] left-0 w-full h-[3px] bg-[#1B8354] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion */}
      <div className="max-w-[1280px] mx-auto divide-y divide-[#D2D6DB]">
        <Accordion type="multiple" className="w-full">
          {faqList.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`px-4 py-3 transition duration-200 ${
                index !== 0 ? "border-t border-[#D2D6DB]" : ""
              } hover:shadow-md hover:bg-[#FAFAFA]`}
            >
              <AccordionTrigger className="text-[#161616] font-semibold text-[16px] leading-[24px] hover:no-underline">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-[14px] leading-[22px] font-normal max-w-[768px] mt-2">
                The accordion component delivers large amounts of content in a
                small space through progressive disclosure. The user gets key
                details about the underlying content and can choose to expand
                that content within the constraints of the accordion.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

