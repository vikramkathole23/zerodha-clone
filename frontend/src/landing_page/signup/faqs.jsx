import React from "react";
import FaqsOption from "./faqsOption";

function FAQs() {
  return (
    <>
      <div className="faqs-section">
        <FaqsOption title='What is a Zerodha account?'/>
        <FaqsOption title='What documents are required to open a demat account?'/>
        <FaqsOption title='Is Zerodha account opening free?'/>
        <FaqsOption title='Are there any maintenance charges for a demat account?'/>
        <FaqsOption title='Can I open a demat account without a bank account?'/>
      </div>
    </>
  );
}

export default FAQs;
