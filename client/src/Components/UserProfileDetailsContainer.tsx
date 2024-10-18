export const UserProfileDetailsContainer = ({
  name,
  email,
}: {
  name: string;
  email: string;
}) => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center p-[50px]">
      <img
        src="https://www.svgrepo.com/show/13656/user.svg"
        alt=""
        className="w-[240px]"
      />
      <span className="text-[30px] uppercase font-bold">{name}</span>
      <span>{email}</span>
    </div>
  );
};
