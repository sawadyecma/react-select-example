import { ComponentList } from "./my-select";

export const MySelectList = () => {
  const list = ComponentList;

  return (
    <div className="w-md">
      {Object.entries(list).map(([key, Component]) => (
        <div
          key={key}
          className="flex flex-col items-center justify-center gap-2 p-4 m-4 bg-white rounded-lg shadow-md
          
          "
        >
          <h2>{key}</h2>
          <Component />
        </div>
      ))}
    </div>
  );
};
