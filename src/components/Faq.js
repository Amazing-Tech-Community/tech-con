import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  // Function to toggle accordion
  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const faqData = [
    {
      question: "Will I be given a certificate if I attend?",
      answer: "Of course, all participants will be given certificates of participants.",
    },
    {
      question: "I have a question that is not answered",
      answer: "You can send an email to techstartersmeetupinfo@gmail.com.",
    },
    {
      question: "What is Tech Starters Conference?",
      answer:
        "Tech Starters Conference is designed to help individuals navigate the overwhelming world of technology and provide a clear direction for students, enthusiasts, career changers, tech beginners, and anyone interested in the industry.",
    },
    {
      question: "How much is the registration fee?",
      answer: "Registration for Tech Starters Conference tickets varies and depends on your choice.",
    },
    {
      question: "Will there be refreshments?",
      answer: "Sure, there will be refreshments to the fullest.",
    },
  ];

  return (
    <div className="py-14 sm:px-20 px-3">
      <div>
        <div className="py-5 sm:px-4 xx:px-2 pt-3 mb-6">
          <div className="sm:text-[55px] text-xl sm:leading-[3rem] font-mediumm justify-center text-center ">
            <h1 className="text-green font-bold">
              <b className="text-white font-bold">FAQ'S</b>
            </h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mt-6 space-y-6">
            {faqData.map((faq, index) => (
              <div
                className="rounded-lg overflow-hidden w-full p-2 font-medium text-left text-gray-500 border border-[#DBD2FF] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 mb-3"
                key={index}
              >
                <button
                  className="w-full bg-gray-50 transition-colors duration-200 ease-in-out"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center justify-between px-1 py-4 sm:px-6">
                    <span className="xx:text-md sm:text-lg md:text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <svg
                      className={`transform ${
                        openIndex === index ? "rotate-180" : ""
                      } w-5 h-5 text-gray-400 transition-transform duration-200 ease-in-out`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`${
                    openIndex === index ? "block" : "hidden"
                  } bg-white p-4 overflow-hidden transition-max-height duration-300 ease-in-out`}
                  style={{
                    maxHeight: openIndex === index ? "1000px" : "0px",
                  }}
                >
                  <div className="mb-4 last:mb-0">
                    <div className="text-lg font-semibold text-black">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
