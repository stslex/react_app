import Image from "next/image";

export function AppHeader() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        first React App created by&nbsp;
        <code className="font-mono font-bold">Nest.js</code>
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://github.com/stslex"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="https://avatars.githubusercontent.com/u/62352202?s=400&u=27e5bb25e5e040800b9787f4a74c80454880a4fd&v=4"
            alt="StSlex"
            width={100}
            height={100}
            priority
            style={{ borderRadius: 100 / 2 }}
          />
          StSlex
        </a>
      </div>
    </div>
  );
}
