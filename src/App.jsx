import "./App.css";
import { MrMonopoly } from "./assets";
import { DiscordIcon } from "./SVG/DiscordIcon";
import { MediumIcon } from "./SVG/MediumIcon";
import { TelegramIcon } from "./SVG/TelegramIcon";
import { TwitterIcon } from "./SVG/TwitterIcon";

function App() {
  return (
    <main>
      <nav className="flex justify-between items-center mt-4 px-3">
        <div className="font-poppins font-semibold text-[24px] leading-[36px] sm:text-[32px] sm:leading-[48px] text-[#494949]">
          Hawala{" "}
          <span className="font-poppins font-semibold text-[24px] leading-[36px] sm:text-[32px] text-[#FF3389] sm:leading-[48px]">
            DEX
          </span>
        </div>
        <div className="flex gap-3 sm:gap-7 md:gap-10 xl:gap-12">
          <a
            href="https://t.me/HawalaDEX"
            target="_blank"
            rel="noopener noreferrer"
            // className="sm:h-full sm:w-full"
          >
            <div className="ss:h-3 xs:w-3 sm:h-6 sm:w-6 md:h-8 md:w-8">
              <TelegramIcon />
            </div>
          </a>
          <a
            href="https://x.com/hawaladex"
            target="_blank"
            rel="noopener noreferrer"
            // className="sm:h-full sm:w-full"
          >
            <div className="ss:h-3 xs:w-3 sm:h-6 sm:w-6 md:h-8 md:w-8">
              <TwitterIcon />
            </div>
          </a>
          <a
            href="https://discord.gg/hNNx3saV"
            target="_blank"
            rel="noopener noreferrer"
            // className="sm:h-full sm:w-full"
          >
            <div className="xs:h-3 xs:w-3 sm:h-6 sm:w-6 md:h-8 md:w-8">
              <DiscordIcon />
            </div>
          </a>
          <a
            href="https://medium.com/@Hawaladex"
            target="_blank"
            rel="noopener noreferrer"
            // className="sm:h-full sm:w-full"
          >
            <div className="xs:h-3 xs:w-3 sm:h-6 sm:w-6 md:h-8 md:w-8">
              <MediumIcon />
            </div>
          </a>
        </div>
      </nav>
      <section className="flex flex-col sm:flex-row justify-center mt-32  px-20 gap-3 overflow-x-hidden w-full">
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src={MrMonopoly}
            alt="Hawala"
            className="w-full max-w-[60vw] sm:max-w-[40vw] h-auto rounded-lg"
          />
        </div>
        <div className="w-full flex flex-col sm:items-center sm:justify-center border py-10">
          <div className="font-poppins font-semibold text-[10vw] text-white bg-[#FF3389] leading-[12vw] rounded-[1vw] px-[2vw]">
            LAUNCHING
          </div>
          <div className="font-poppins font-semibold text-[8vw] text-[#FF3389] leading-[10vw] mt-[3vw]">
            OCTOBER{" "}
            <span className="font-poppins font-semibold text-[8vw] text-[#494949] leading-[10vw]">
              2024
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
