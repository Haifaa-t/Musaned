"use client"

import Link from "next/link"
import {
  ArrowRight,
  FileText,
  UserPlus,
  RefreshCcw,
  BadgeCheck,
} from "lucide-react"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const cards = [
  {
    icon: <FileText className="w-5 h-5 text-[#067647]" />,
    title: "Issuing a visa",
    description:
      "Comprehensive information and answers to questions related to issuing visas, including domestic labor visas, special needs visas, agricultural visas, and replacement visas.",
  },
  {
    icon: <UserPlus className="w-5 h-5 text-[#067647]" />,
    title: "Hiring new workers",
    description:
      "Comprehensive information and answers to questions related to labor hiring, including personal interviews, contracting, contract insurance, contract complaints, known services, domestic labor services, and direct transfers.",
  },
  {
    icon: <BadgeCheck className="w-5 h-5 text-[#067647]" />,
    title: "Managing existing laborers",
    description:
      "Comprehensive information and answers to questions related to labor management, including worker and employer rights, contract authentication, salaries, and financial exemption.",
  },
  {
    icon: <RefreshCcw className="w-5 h-5 text-[#067647]" />,
    title: "Workers Transfer Services",
    description:
      "Comprehensive information and answers to questions related to transferring labor services between individuals and entities, including transfers from entity to individual, individual to individual, individual to entity, and agricultural services.",
  },
]

const faqList = [
  {
    question: "What is this FAQ section for?",
    answer:
      "The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.",
  },
  {
    question: "How do I get started?",
    answer:
      "The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.",
  },
  {
    question: "Where can I find more information?",
    answer:
      "The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.",
  },
  {
    question: "Can I customize this platform?",
    answer:
      "The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.",
  },
  {
    question: "How do I contact support?",
    answer:
      "The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.",
  },
]

export default function ServiceHubSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-32 py-20 space-y-16 font-sans">
      {/* Cards Grid */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {cards.map((card, index) => {
          const CardContent = (
            <div className="bg-white rounded-lg border border-[#D2D6DB] p-6 shadow-sm flex flex-col justify-between transition hover:shadow-md h-full">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E6F4EE] flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-[18px] font-semibold text-[#1F2A37] leading-[28px]">
                  {card.title}
                </h3>
                <p className="text-[16px] font-normal text-[#1F2A37] leading-[24px]">
                  {card.description}
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#F3F4F6] hover:bg-gray-200">
                  <ArrowRight className="w-5 h-5 text-[#4B5563]" />
                </div>
              </div>
            </div>
          )

          return card.title === "Issuing a visa" ? (
            <Link key={index} href="/issuing-a-visa">{CardContent}</Link>
          ) : (
            <div key={index}>{CardContent}</div>
          )
        })}
      </div>

      {/* Accordion Section */}
      <div className="max-w-[1280px] mx-auto border-t border-[#D2D6DB]">
        <Accordion type="multiple" className="w-full divide-y divide-[#D2D6DB]">
          {faqList.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`px-4 py-3 transition duration-200 ${index !== 0 ? 'border-t border-[#D2D6DB]' : ''} hover:shadow-md hover:bg-[#FAFAFA]`}
            >
              <AccordionTrigger className="text-[#161616] font-semibold text-[16px] leading-[24px] tracking-normal hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] text-[14px] leading-[22px] font-normal max-w-[768px] mt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}







