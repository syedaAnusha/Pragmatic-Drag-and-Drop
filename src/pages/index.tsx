//* Custom Component Imports
import { Column } from "@/component/Column";
import { mockData } from "@/mock-data";

export default function Home() {
  return (
    <div className={`m-12 flex gap-2 justify-between select-none`}>
      {mockData.columns.map((data) => (
        <>
          <Column
            title={data.col_title}
            cardContent={data.cards}
            key={data.col_id}
          />
        </>
      ))}
    </div>
  );
}
