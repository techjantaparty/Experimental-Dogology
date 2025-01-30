//import Noise from "@/components/ui/Noise";
import ShinyText from "@/components/ui/ShinyText";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const Hero = () => {
  return (
    <header className="px-6 relative overflow-hidden bg-gradient-to-b from-[#1B1B1B] via-[#2d2d2d] to-[#1B1B1B] flex flex-col space-y-8 items-center pt-20 md:pt-28 lg:pt-32 min-h-screen">
      {/*<Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />*/}
      <h1 className="fade-pullup text-4xl md:text-5xl lg:text-6xl font-bold max-w-xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 h-32">
        Is Justice Really Blind?
      </h1>
      <p className="fade-pullup-delayed-1 text-xl lg:text-2xl font-medium max-w-2xl text-center text-gray-400">
        Empowering voices through blockchain anonymity. Transforming legal
        transparency with AI-powered solutions.
      </p>
      <p className="text-lg text-center lg:text-xl fade-pullup-delayed-1 capitalize font-bold text-red-600">
        Your truth is now protected & heard.
      </p>
      <section className="flex flex-col sm:flex-row gap-6 fade-pullup-delayed-2">
        <Link href={"/signup"}>
          <PrimaryButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 -rotate-12 animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
              />
            </svg>
            <span>Raise your voice</span>
          </PrimaryButton>
        </Link>
        <Link href={"/#features"}>
          <SecondaryButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
            <ShinyText text="Explore Features" disabled={false} speed={3} />
          </SecondaryButton>
        </Link>
      </section>
    </header>
  );
};

export default Hero;
