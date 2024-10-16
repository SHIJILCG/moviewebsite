import { optionClick } from "../common/scrollintoView"

type OptionCardPropsType={
   text:string
}
export const OptionCard = ({text}:OptionCardPropsType) => {
  return (
    <span
    className="w-[90%] bg-[#00000049] mx-auto p-[10px] uppercase hover:bg-[#000000e7] active:scale-95"
    onClick={() => optionClick(text.split(" ").join(""))}
  >
    {text}
  </span>
  )
}
