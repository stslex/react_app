import Image from "next/image";

export function ButtonImage(props: ButtonImageProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50",
      }}
    >
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        src={props.imgLink}
        alt="Android Compose"
        width={50}
        height={50}
        priority
        style={{ alignSelf: "center" }}
      />
    </div>
  );
}

interface ButtonImageProps {
  imgLink: string;
}
