"use client";

import SecondNavHeader from "@/components/common/TopBar";
import NavHeader2 from "@/components/common/Navbar";
import PageHeader from "@/components/common/PageHeader";
import Visa from "@/components/service-hub/Visa";
import FeedBackSection from "@/components/contact/FeedBackSection";
import ContactUsSection from "@/components/contact/ContactUsSection";
import Footer from "@/components/common/Footer";

export default function Page() {
  return (
    <div className="font-ibm">
      <SecondNavHeader />
      <NavHeader2 />
      <PageHeader
        breadcrumbs={[
          { label: "Home" },
          { label: "FAQs", href: "/" },
          { label: "Issuing a visa" },
        ]}
        title="Issuing a visa"
        description="Find answers to common questions about our products, services, and policies."
      />
      <Visa />
      <ContactUsSection />
      <FeedBackSection />
      <Footer />
    </div>
  );
}






