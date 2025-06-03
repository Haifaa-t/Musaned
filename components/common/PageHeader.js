"use client";

import Link from "next/link";

export default function PageHeader({ breadcrumbs = [], title, description }) {
  return (
    <div className="w-full bg-[#F9FCFB] py-10 px-4 sm:px-6 lg:px-32 font-ibm">
      <div className="max-w-[1280px] mx-auto">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav
            className="text-sm text-[#6B7280] flex flex-wrap gap-1 mb-6"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              const label = typeof crumb === "string" ? crumb : crumb.label;
              const href =
                typeof crumb === "object" && crumb.href ? crumb.href : null;

              return (
                <span key={index} className="flex items-center gap-1">
                  {href && !isLast ? (
                    <Link
                      href={href}
                      className="text-[#374151] font-medium hover:underline"
                    >
                      {label}
                    </Link>
                  ) : (
                    <span
                      className={
                        isLast
                          ? "text-[#9CA3AF]"
                          : "text-[#374151] font-medium"
                      }
                    >
                      {label}
                    </span>
                  )}
                  {!isLast && <span className="text-[#D1D5DB]">/</span>}
                </span>
              );
            })}
          </nav>
        )}

        {/* Title */}
        {title && (
          <h1 className="text-[40px] font-semibold leading-[48px] tracking-[-0.02em] text-[#161616] mb-4">
            {title}
          </h1>
        )}

        {/* Description */}
        {description && (
          <p className="text-[16px] font-normal leading-[24px] text-[#1F2A37] max-w-[768px]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}



