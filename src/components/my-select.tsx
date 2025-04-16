import Select, {
  components,
  GroupBase,
  MenuListProps,
  MultiValueRemoveProps,
  NoticeProps,
} from "react-select";
import { GroupedOption, groupedOptions, Option } from "../data/data";
import { runDebugger } from "../util/debug";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Default = () => <Select options={options} styles={{}} />;

const NoOptionsMessage = (props: NoticeProps) => {
  return (
    // <Tooltip content="Custom NoOptionsMessage Component">
    <components.NoOptionsMessage {...props}>
      選択肢がありません
    </components.NoOptionsMessage>
    // </Tooltip>
  );
};

const isMultiWithNoMessage = () => {
  return (
    <Select
      options={options}
      isMulti
      components={{
        NoOptionsMessage,
      }}
      styles={{
        control: (base) => ({ ...base, width: 300 }),
      }}
    />
  );
};

const MultiValueRemove = (props: MultiValueRemoveProps<Option, true>) => {
  const { innerProps } = props;

  return (
    <div
      className="
      flex items-center cursor-pointer
      text-color-blue-900 hover:bg-amber-500 px-2 
      transition duration-300 ease-in-out 
      hover:-translate-y-1 hover:scale-110
      "
      onClick={innerProps.onClick}
      onMouseDown={innerProps.onMouseDown}
    >
      ×
    </div>
  );
};

const NoHideMultiOption = () => {
  return (
    <Select
      options={options}
      isMulti
      components={{
        MultiValueRemove,
      }}
      styles={{
        control: (base) => ({ ...base, width: 300 }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected
            ? "var(--color-blue-200)"
            : base.backgroundColor,
          color: state.isSelected ? "var(--color-blue-900)" : base.color,
        }),
      }}
      hideSelectedOptions={false}
    />
  );
};

const Divider = () => {
  return (
    <div className="h-1 border-b-2 border-solid px-2 border-outline-grey" />
  );
};

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

const NoIndicatorWithAutoMenuPlacement = () => {
  return (
    <Select<Option, false, GroupedOption>
      options={groupedOptions}
      components={{
        IndicatorSeparator: () => null,
      }}
      menuPlacement="auto"
    />
  );
};

const CustomMenuList: React.ComponentType<
  MenuListProps<Option, false, GroupBase<Option>>
> = (props) => {
  return (
    <components.MenuList {...props}>
      <div
        onClick={() => {
          // 任意のアクション。例えばモーダルを開くとか
          alert("新しい選択肢を追加します");
        }}
        style={{
          padding: "8px 12px",
          cursor: "pointer",
          borderBottom: "1px solid #eee",
          fontWeight: "bold",
          color: "#007bff",
        }}
      >
        ＋ 新しいオプションを追加
      </div>
      <Divider />
      {props.children}
    </components.MenuList>
  );
};

const WithAction = () => {
  return (
    <Select<Option, false>
      options={options}
      styles={{
        control: (base) => ({ ...base, width: 300 }),
        option: (base) => ({ ...base }),
      }}
      components={{
        MenuList: CustomMenuList,
      }}
      menuPlacement="auto"
    />
  );
};

runDebugger(false);

export const ComponentList = {
  Default,
  isMultiWithNoMessage,
  NoHideMultiOption,
  CustomGroup,
  NoIndicatorWithAutoMenuPlacement,
  WithAction,
};
