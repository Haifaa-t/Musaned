"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Hand,
  Search,
  ZoomIn,
} from "lucide-react";

function FooterColumn({ title, items }) {
  return (
    <div className="space-y-4 min-w-[180px]">
      <div className="border-b border-white/30 pb-2 text-[16px] font-semibold font-ibm">
        {title}
      </div>
      <ul className="space-y-2 text-sm font-normal font-ibm">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const socialIcons = [Facebook, Twitter, Instagram];
const accessibilityIcons = [Hand, Search, ZoomIn];

export default function Footer() {
  return (
    <footer className="w-full bg-[#074D31] px-6 sm:px-10 lg:px-20 font-ibm text-white">
      <div className="max-w-[1280px] mx-auto py-20 space-y-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/30 pb-12">
          <FooterColumn
            title="Overview"
            items={[
              "About Musaned",
              "Privacy and terms of use",
              "How to use Musaned",
              "News and events",
              "Service level agreement statistics",
            ]}
          />

          <FooterColumn
            title="Important links"
            items={[
              "National service portal",
              "Open government data",
              "National strategy for data & AI",
              "Open data portal",
              "E-Participation portal",
            ]}
          />

          <FooterColumn
            title="Contact & support"
            items={[
              "Customer hub",
              "Contact us",
              "Engage with Us",
              "Submit complaint",
              "Report corruption",
            ]}
          />

          <div className="space-y-6 min-w-[180px]">
            {/* Social Media */}
            <div>
              <div className="border-b border-white/30 pb-2 text-[16px] font-semibold font-ibm">
                Social Media
              </div>
              <div className="flex gap-2 mt-2">
                {socialIcons.map((Icon, idx) => (
                  <button
                    key={idx}
                    className="w-8 h-8 border border-white/30 rounded-sm flex items-center justify-center"
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>

            {/* Accessibility Tools */}
            <div>
              <div className="border-b border-white/30 pb-2 text-[16px] font-semibold font-ibm">
                Accessibility Tools
              </div>
              <div className="flex gap-2 mt-2">
                {accessibilityIcons.map((Icon, idx) => (
                  <button
                    key={idx}
                    className="w-8 h-8 border border-white/30 rounded-sm flex items-center justify-center"
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 text-sm font-ibm">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-6 underline">
              <span>Sitemap</span>
              <span>RSS</span>
              <span>Mobile App</span>
            </div>
            <div className="font-semibold">
              All Right Reserved For Digital Government Authority © 2024
            </div>
            <div className="font-normal">
              Developed and Maintained by [insert the name of the entity]
            </div>
            <div className="font-normal">Last Modified Date: 04/12/2020</div>
          </div>

          {/* Logos */}
          <div className="flex items-center gap-8">
            <img src="/Musaned.svg" alt="Musaned Logo" className="h-[46px]" />
            <img src="/logo.svg" alt="DGA Logo" className="h-[42px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}



