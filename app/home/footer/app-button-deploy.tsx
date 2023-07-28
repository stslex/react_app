import Image from "next/image";
import { ButtonImage } from "./app-button_img";

export function AppButtonDeploy() {
  const param: string = "test";
  return (
    <a
      href="https://github.com/stslex/CSplashScreen"
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ButtonImage imgLink="/android_compose.png" />
      <h2 className={`mb-3 text-2xl font-semibold`}>
        Android Compose{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        Primary Android Compose application for searching wallpapers.
      </p>
    </a>
  );
}
