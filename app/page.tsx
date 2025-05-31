import CoreTrack from "./components/vigits/CoreTrack";
import Hero from "./components/vigits/Hero"
import SpecializedTracker from "./components/vigits/SpecializedTracker";
import ProgramOutcome from "./components/vigits/ProgramOutcome";

export default function Home() {
  return (
    <div className="px-20">
       <Hero/>
       <CoreTrack/>
       <SpecializedTracker/>
       <ProgramOutcome/>
    </div>
  );
}
