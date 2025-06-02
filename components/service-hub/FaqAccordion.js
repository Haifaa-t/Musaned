import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
];

export default function FAQAccordion() {
  return (
    <div className="max-w-[1280px] mx-auto border-t border-[#D2D6DB] divide-y divide-[#D2D6DB]">
      <Accordion type="multiple" className="w-full">
        {faqList.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="px-4">
            <AccordionTrigger className="text-[#1F2A37] font-medium text-base py-5">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-[#4B5563] pb-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
