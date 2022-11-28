const Tmp = () => {
  localStorage.setItem("tmp", JSON.stringify(["tmp", "6"]));
};
const GetTmp = () => {
  console.log(localStorage.getItem("tmp"));
};

const StorageFunc = () => {
  return (
    <ul className="flex flex-col">
      <li className="underline">Local Storage</li>
      <li>
        <button onClick={Tmp}>SET</button>
      </li>
      <li>
        <button onClick={GetTmp}>GET</button>
      </li>
    </ul>
  );
};

export default StorageFunc;
