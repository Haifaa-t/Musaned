"use client";

import SecondNavHeader from "@/components/common/TopBar";
import NavHeader2 from "@/components/common/Navbar";
import PageHeader from "@/components/common/PageHeader";
import ServiceHubSection from "@/components/service-hub/ServiceHub";
import ContactUsSection from "@/components/contact/ContactUsSection";
import FeedbackSection from "@/components/contact/FeedBackSection";
import Footer from "@/components/common/Footer";

export default function FAQPage() {
  return (
    <main className="w-full font-ibm">
      <SecondNavHeader />
      <NavHeader2 />

      <PageHeader
        breadcrumbs={[
          { label: "Home" },
          { label: "FAQs", href: "/" },
        ]}
        title="FAQs"
        description="Find answers to common questions about our products, services, and policies."
      />

      <ServiceHubSection />
      <ContactUsSection />
      <FeedbackSection />
      <Footer />
    </main>
  );
}



