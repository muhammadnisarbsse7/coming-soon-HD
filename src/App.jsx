import "./App.css";
import { DiscordIcon } from "./SVG/DiscordIcon";
import { MediumIcon } from "./SVG/MediumIcon";
import { TelegramIcon } from "./SVG/TelegramIcon";
import { TwitterIcon } from "./SVG/TwitterIcon";

function App() {
  return (
    <main>
      <nav className="flex justify-between items-center mt-4 px-3 border-4">
        <div className="font-poppins font-semibold text-[32px] text-[#494949]">
          Hawala{" "}
          <span className="font-poppins font-semibold text-[32px] text-[#FF3389] leading-[48px]">
            DEX
          </span>
        </div>
        <div className="flex gap-5">
          <a
            href="https://t.me/yourTelegramLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon />
          </a>
          <a
            href="https://twitter.com/yourTwitterLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://discord.gg/yourDiscordLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon />
          </a>
          <a
            href="https://medium.com/@yourMediumProfile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MediumIcon />
          </a>
        </div>
      </nav>
    </main>
  );
}

export default App;
