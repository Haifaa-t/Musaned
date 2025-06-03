import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FaqCard({ icon, title, description, href = "#" }) {
  return (
    <div className="w-[628px] h-[276px] bg-white border border-[#D2D6DB] rounded-lg p-6 flex flex-col justify-between shadow-sm font-ibm">
      <div className="flex flex-col gap-4">
        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-[#F3FCF6] flex items-center justify-center">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-[18px] font-semibold text-gray-900 leading-[26px]">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm font-normal text-gray-600 leading-[22px]">
          {description}
        </p>
      </div>

      {/* Arrow Button */}
      <div className="flex justify-end">
        <Link href={href}>
          <button
            aria-label="Go to details"
            className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200 transition"
          >
            <ArrowRight className="w-4 h-4 text-gray-600" />
          </button>
        </Link>
      </div>
    </div>
  );
}

