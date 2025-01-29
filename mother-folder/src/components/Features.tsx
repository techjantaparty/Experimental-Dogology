import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <section
      id="features"
      className="px-6 py-20 bg-gradient-to-b from-[#151515] via-[#292929] to-[#151515]"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6">
        <div className="flex flex-col gap-6 md:gap-8 md:flex-row items-start justify-between">
          <div>
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Speak Without Fear</h1>
              <p className="text-gray-400">
                Our blockchain-powered platform ensures your anonymity while
                giving power to your voice. Share your experiences, report
                injustices, and contribute to a more transparent justice system.
              </p>
            </div>
            <ul className="my-8 space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-violet-500 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-xl">End-to-End Encryption</p>
                  <p className="text-gray-400">
                    Your identity is protected through advanced cryptographic
                    techniques
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-sky-500 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-xl">Blockchain Security</p>
                  <p className="text-gray-400">
                    Immutable records ensure your voice cannot be silenced or
                    altered
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-emerald-500 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-xl">Community Support</p>
                  <p className="text-gray-400">
                    Connect with others while maintaining anonymity
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="shadow-xl rounded-lg bg-[#1B1B1B] p-6 space-y-6">
              <div className="bg-[#2d2d2d] py-3 px-4 rounded-md space-y-2">
                <p className="text-gray-300 text-base">
                  &quot;Finally, a platform where I can share my story without
                  fear of retaliation. This is revolutionary for
                  whistleblowers.&quot;
                </p>
                <p className="text-gray-300 text-sm text-end">
                  - Anonymous User#123
                </p>
              </div>
              <div className="bg-[#2d2d2d] py-3 px-4 rounded-md space-y-2">
                <p className="text-gray-300">
                  &quot;The blockchain verification gives me confidence that my
                  voice will be heard and preserved.&quot;
                </p>
                <p className="text-gray-300 text-sm text-end">
                  - Anonymous User#124
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2px] bg-[#2d2d2d] my-4 md:my-6"></div>
        <div className="flex flex-col gap-6 md:gap-8 md:flex-row-reverse items-start justify-between">
          <div className="max-w-2xl">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Track Your Case Progress</h1>
              <p className="text-gray-400">
                Stay informed about every development in your case with our
                advanced tracking system. Real-time updates, automated
                notifications, and comprehensive timeline tracking.
              </p>
            </div>
            <ul className="my-8 space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-amber-500 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-xl">Document Management</p>
                  <p className="text-gray-400">
                    All case documents in one secure location
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-rose-500 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-xl">Progress Analytics</p>
                  <p className="text-gray-400">
                    Detailed insights into case progression
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="shadow-xl rounded-lg bg-[#1B1B1B] p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Case Filed</p>
                  <p className="text-gray-400 text-sm">
                    Case #2024-0123 registered successfully
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Under Review</p>
                  <p className="text-gray-400 text-sm">
                    Your case is being reviewed by our legal team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2px] bg-[#2d2d2d] my-4 md:my-6"></div>
        <div className="flex flex-col gap-6 md:gap-8 md:flex-row items-start justify-between">
          <div>
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Legal Document Analyzer</h1>
              <p className="text-gray-400">
                Transform complex legal jargon into clear, actionable insights
                with our advanced AI system.
              </p>
            </div>
            <ul className="my-8 space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-orange-500 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-xl">Smart Analysis</p>
                  <p className="text-gray-400">
                    Our AI processes complex legal documents and extracts key
                    information in seconds
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-lime-500 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-xl">Personal Guidance</p>
                  <p className="text-gray-400">
                    Our legal AI system provide tailored advice based on your
                    case
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="max-w-xl">
            <div className="flex flex-col shadow-xl rounded-lg bg-[#1B1B1B] p-6 space-y-6">
              <div className="bg-[#2d2d2d] py-3 px-4 rounded-md space-y-2 max-w-[70%]">
                <p className="text-gray-300 text-sm">
                  🤖: I have analysed the legal documents you provided. What
                  would you like me to explain?
                </p>
              </div>
              <div className="bg-[#2d2d2d] py-3 px-4 rounded-md space-y-2 max-w-[70%] self-end">
                <p className="text-gray-300 text-sm">
                  Can you explain the implications of the clause on page 3?
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Link href={"/legal-bot"}>
                <div className="shadow-2xl z-50 cursor-pointer border border-white bg-white hover:bg-white/90 text-gray-800 font-bold p-4 rounded-md text-base flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 animate-pulse"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <span className="text-sm">Analyze Documents</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
