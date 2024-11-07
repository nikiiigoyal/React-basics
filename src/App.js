import ToolKit from "./RespondingToEvents/EventProppagation";
import Button from "./RespondingToEvents/HandleClick";
import Toolbar from "./RespondingToEvents/ReadingProps";
import LightSwitch from "./RespondingToEvents/TogglingBg";

export default function App() {
  return (
    <>
      <div>
        <Button />
        <Toolbar />
        <ToolKit />
        <LightSwitch />
      </div>
    </>
  );
}
