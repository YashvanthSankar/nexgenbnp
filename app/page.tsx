import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <section className="relative h-screen flex flex-col justify-center items-center text-white bg-black/70">
        <h1 className="text-5xl font-bold">Building Tomorrow, Today</h1>
        <p className="mt-4 max-w-xl text-center">
          NEXGEN Builders & Promoters — Delivering excellence in every brick.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="default">View Projects</Button>
        </div>
      </section>
    </div>
  );
}
