type CircularRatingContainerPropsTYpe = {
  Text: string;
  voteCount: number;
};
export default function CircularRatingContainer({
  Text,
  voteCount,
}: CircularRatingContainerPropsTYpe) {
  return (
    <span className="font-bold uppercase w-[200px] h-[200px]  flex flex-col  items-center justify-center">
      <span className="w-[100px] h-[100px] rounded-full bg-gray-800 flex items-center justify-center text-white border-4 border-green-400">
        {voteCount}
      </span>
      <span>{Text}</span>
    </span>
  );
}
