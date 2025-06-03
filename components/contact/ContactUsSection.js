"use client";

import { Mail } from "lucide-react";
import Link from "next/link";

export default function ContactUsSection() {
  const title = "Comments & suggestions";
  const description =
    "For any inquiry or feedback on Government Services, please fill the required information.";

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-32 pt-12 pb-16 font-ibm">
      <div className="max-w-[1280px] mx-auto">
        <div className="border border-[#D2D6DB] rounded-lg bg-white p-6 sm:p-8 flex flex-col gap-6">
          {/* Icon */}
          <div className="w-10 h-10 rounded-full bg-[#F3FCF6] flex items-center justify-center">
            <Mail className="w-5 h-5 text-[#067647]" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[16px] font-semibold text-[#1F2A37] leading-[24px]">
              {title}
            </h3>
            <p className="text-[14px] font-normal text-[#4B5563] leading-[22px] max-w-[768px]">
              {description}
            </p>
          </div>

          {/* Button */}
          <div>
            <Link href="/contact">
              <button className="h-10 px-6 bg-[#067647] text-white text-sm font-medium rounded-sm hover:bg-[#05643d] transition">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
