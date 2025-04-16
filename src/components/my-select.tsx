import Select from "react-select";
import { GroupedOption, groupedOptions, Option } from "../data/data";
import { runDebugger } from "../util/debug";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Default = () => <Select options={options} styles={{}} />;

const isMulti = () => {
  return <Select options={options} styles={{}} isMulti />;
};

const Divider = () => {
  return (
    <div className="h-1 border-b-2 border-solid px-2 border-outline-grey" />
  );
};

runDebugger();

const CustomGroup = () => {
  const formatGroupLabel = (data: GroupedOption) => {
    console.log(data);
    return <Divider />;
  };

  return (
    <Select<Option, false, GroupedOption>
      options={groupedOptions}
      formatGroupLabel={formatGroupLabel}
      styles={{
        control: (base) => ({ ...base, width: 300 }),
        option: (base) => ({ ...base }),
        groupHeading: (base) => ({
          ...base,
          padding: 0,
        }),
        group: (base) => ({
          ...base,
          padding: 0,
        }),
        // input: (styles) => ({ ...styles, ...dot() }),
        // placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
        // singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
      }}
    />
  );
};

export const ComponentList = {
  Default,
  isMulti,
  CustomGroup,
};
