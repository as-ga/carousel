import { BigCarousel } from "@/components/bigCarousel";
import { SmallCarousel } from "@/components/smallCarousel";

const bigImagesURL: string[] = [
  "/big-images/bi-1.jpg",
  "/big-images/bi-2.jpg",
  "/big-images/bi-3.jpg",
  "/big-images/bi-4.jpg",
  "/big-images/bi-5.jpg",
  "/big-images/bi-6.jpg",
  "/big-images/bi-7.jpg",
];

const smallImageURL: string[] = [
  "/small-images/si-1.jpg",
  "/small-images/si-2.jpg",
  "/small-images/si-3.jpg",
  "/small-images/si-4.jpg",
  "/small-images/si-5.jpg",
  "/small-images/si-6.jpg",
  "/small-images/si-7.jpg",
];
export default function Page() {
  return (
    <div className="w-full h-screen bg-sky-400">
      <div className="h-screen">
        <BigCarousel items={bigImagesURL} />
      </div>
      <div className="fixed bottom-28 right-28 z-1 h-96 w-72">
        <SmallCarousel items={smallImageURL} />
      </div>
    </div>
  );
}
