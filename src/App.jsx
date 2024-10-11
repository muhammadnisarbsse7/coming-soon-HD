import "./App.css";
import { MrMonopoly } from "./assets";
import { DiscordIcon } from "./SVG/DiscordIcon";
import { MediumIcon } from "./SVG/MediumIcon";
import { TelegramIcon } from "./SVG/TelegramIcon";
import { TwitterIcon } from "./SVG/TwitterIcon";

function App() {
  return (
    <main>
      <nav className="flex justify-between items-center mt-4 px-3 border-4">
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
      <section className="flex justify-center border mt-32 gap-3">
        <div>
          <img
            src={MrMonopoly}
            alt="Hawala"
            className="w-full sm:w-96  h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-poppins font-semibold text-[96px] text-white bg-[#FF3389] leading-[144px] rounded-[6px] px-4">
            LAUNCHING{" "}
          </div>
          <div className="font-poppins font-semibold text-[64px] text-[#FF3389] leading-[96px]">
            OCTOBER{" "}
            <span className="font-poppins font-semibold text-[64px] text-[#494949] leading-[96px]">
              2024
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
