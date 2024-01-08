import "aos/dist/aos.css";
import ScrollSpy from "react-ui-scrollspy";
import SectionOne from "./components/SectionOne/Main";

export default function Home() {
  return (
    <ScrollSpy>
      <SectionOne />
    </ScrollSpy>
  );
}
