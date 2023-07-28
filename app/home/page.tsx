import Image from "next/image";
import { AppHeader } from "./app-header";
import { AppLogo } from "./app-logo";
import { AppFooterButtons } from "./footer/app_footer_buttons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AppHeader />
      <AppLogo />
      <AppFooterButtons />
    </main>
  );
}
