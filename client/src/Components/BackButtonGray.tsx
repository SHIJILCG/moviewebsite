import { useNavigate } from "react-router-dom";
type BackButtonGrayPropsType = {
  css?: string;
  setisNewUser?: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function BackButtonGray({
  css,
  setisNewUser,
}: BackButtonGrayPropsType) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (setisNewUser) {
      setisNewUser(false);
    } else {
      navigate(-1);
    }
  };
  return (
    <button
      className={`bg-[#575555] px-[30px] py-[10px] rounded-2xl active:scale-95 text-white  left-6 top-10 ${css}`}
      onClick={handleButtonClick}
    >
      🡸
    </button>
  );
}
