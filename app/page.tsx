import Header from "@/components/globals/Header";
import CheatSheetsLayer from "@/components/organisms/CheatSheetsLayer";
import SentenceGenerator from "@/components/SentenceGenerator";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white p-20 pb-32">
      <div className="mx-auto max-w-screen-lg">
        <Header />
        <SentenceGenerator />
        <CheatSheetsLayer />
      </div>
    </div>
  );
}
