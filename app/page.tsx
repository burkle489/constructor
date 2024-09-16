import SentenceGenerator from "@/components/SentenceGenerator"

export default function Home() {
  return (
    <div className="bg-yellow-light h-screen w-screen p-20 pb-32">
      <div className="max-w-screen-lg mx-auto">
        <div>
          <h1 className="text-blue-light text-7xl font-bold w-full text-center">
            construct
          </h1>
        </div>
        <SentenceGenerator />
      </div>
    </div>
  )
}
