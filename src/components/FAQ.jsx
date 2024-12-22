// import React, { useState } from 'react';

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I create a new project or assignment?",
      answer: "You can create a new project or assignment by navigating to the 'Create' section in the dashboard.",
    },
    {
      question: "How do I invite team members to a project?",
      answer: "Go to the project settings and select 'Invite Members' to add collaborators by their email addresses.",
    },
    {
      question: "Who can see our assignment and who can delete assignments?",
      answer: "Every user can see all assignments, but only the user who created an assignment can delete it.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* FAQ Image */}
        <div className="w-full md:w-1/3">
          <img
            src="https://i.ibb.co/cJVhdY7/faq-full-form.png"
            alt="FAQ"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="w-full md:w-2/3 bg-gray-100 rounded-lg shadow-md p-4">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-semibold text-gray-700 flex justify-between items-center p-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                {faq.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-600 text-sm p-2 bg-gray-50 rounded-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
