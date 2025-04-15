import RecordItemProps from "../types/recordItem";

const RecordItem = ({ index, name, username }: RecordItemProps) => {
  return (
    <div
      className={`hover:bg-[#EEF0F7] ${
        index === 0 ? "rounded-t-xl" : ""
      } rounded-b-md`}
      onClick={() => console.log(index)}
    >
      <div className="transition-all duration-300 flex px-6 py-5 p-1 gap-5 ">
        <img
          src="/assets/icon/user.svg"
          alt="User"
          width={60}
          height={60}
          className=""
        />
        <div className="flex flex-col text-[#525F7F]">
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-xl font-medium">{username}</p>
        </div>
      </div>
      <hr className="border-b-5 rounded-xl border-[#EEF0F7]" />
    </div>
  );
};

export default RecordItem;
