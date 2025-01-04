import Head from "./(site)/head";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  return (
    <>
      <Head />
      <div className="container mx-auto px-4 py-8 w-96">
        <h1 className="text-3xl mb-8">Gene fabric</h1>
        <h3 className="text-lg">Target Protein Sequence</h3>

        <h3 className="text-lg">Stability</h3>
        <div className="container my-2">
          <Slider defaultValue={[33]} max={100} step={1} className="pb-2" />
        </div>
        <h3 className="text-lg">Activity</h3>
        <div className="container my-2">
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
      </div>

      {/* 4 c */}
    </>
  );
}
