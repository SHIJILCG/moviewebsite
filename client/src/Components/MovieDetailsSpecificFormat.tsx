type MovieDetailsSpecificFormatPropsTYpe = {
  innerContent: string;
  outerContent: string;
};
export default function MovieDetailsSpecificFormat({
  innerContent,
  outerContent,
}: MovieDetailsSpecificFormatPropsTYpe) {
  return (
    <span className="font-bold uppercase">
      {outerContent}:{innerContent}
    </span>
  );
}
