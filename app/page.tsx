import Image from "next/image";
import { AppHeader } from "./home/app-header";
import { AppLogo } from "./home/app-logo";
import { AppFooterButtons } from "./home/footer/app_footer_buttons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AppHeader />
      <AppLogo />
      <AppFooterButtons />
    </main>
  );
}
