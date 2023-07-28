import { AppButtonCourse } from "./app-button-cource";
import { AppButtonDeploy } from "./app-button-deploy";
import { AppButtomNext } from "./app-button-next";
import { AppButtomPlayground } from "./app-button-playground";

export function AppFooterButtons() {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <AppButtomNext />
      <AppButtonCourse />
      <AppButtomPlayground />
      <AppButtonDeploy />
    </div>
  );
}
