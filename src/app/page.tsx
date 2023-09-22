import { EmojiRating } from "@/components/EmojiRating";

const Page = () => {
  return (
  <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
    <EmojiRating rating={4.2} />
  </div>
  );
}

export default Page;