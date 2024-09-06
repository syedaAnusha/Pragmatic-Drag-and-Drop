//* Custom Component Imports
import { TrelloBoard } from "@/component/Trello";

export default function Home() {
  return (
    <div className={`m-12`} aria-label="Trello-Board">
      <TrelloBoard />
    </div>
  );
}
