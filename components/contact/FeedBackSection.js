"use client";

export default function FeedbackSection() {
  const lastModified = "04/12/2020 - 4:13 PM Saudi Arabia Time";
  const question = "Was this page useful?";
  const stats = "60% of users said Yes from 2843 Feedbacks";

  const handleFeedback = (value) => {
    console.log("User clicked:", value);
  };

  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-20 pt-6 pb-12">
      {/* Last Modified Date */}
      <div className="max-w-[1280px] mx-auto text-right text-xs text-[#1F2A37] mb-6">
        Last Modified Date: {lastModified}
      </div>

      {/* Divider */}
      <div className="w-full border-t-2 border-[#1B8354] mb-6" />

      {/* Feedback Section */}
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        {/* Question + Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <span className="text-[#1F2A37] text-sm">{question}</span>
          <div className="flex gap-4">
            <button
              onClick={() => handleFeedback("yes")}
              aria-label="Feedback Yes"
              className="w-[58px] h-10 bg-[#1B8354] text-white rounded-sm text-sm font-medium hover:bg-[#166B45]"
            >
              Yes
            </button>
            <button
              onClick={() => handleFeedback("no")}
              aria-label="Feedback No"
              className="w-[53px] h-10 bg-[#1B8354] text-white rounded-sm text-sm font-medium hover:bg-[#166B45]"
            >
              No
            </button>
          </div>
        </div>

        {/* Feedback Stats */}
        <span className="text-[#4B5563] text-sm text-right">{stats}</span>
      </div>
    </section>
  );
}



