import Select, {
  components,
  GroupBase,
  MenuListProps,
  MultiValueRemoveProps,
  NoticeProps,
} from "react-select";
import { GroupedOption, groupedOptions, Option } from "../data/data";
import { runDebugger } from "../util/debug";
import React from "react";

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

const CustomMenuItem = () => {
  return (
    <Select<Option, true>
      options={options}
      isMulti
      styles={{
        control: (base) => ({ ...base, width: 300 }),
        option: (base) => ({ ...base }),
      }}
      components={{
        Option: (props) => (
          <components.Option {...props}>
            <div className="flex items-center">
              <img
                className="w-6 h-6 mr-2"
                src="https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_1.png"
              />
              {props.children}
            </div>
          </components.Option>
        ),
        SingleValue: (props) => (
          <components.SingleValue {...props}>
            <div className="flex items-center">
              <img
                className="w-6 h-6 mr-2"
                src="https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_1.png"
              />
              {props.children}
            </div>
          </components.SingleValue>
        ),
        MultiValue: (props) => (
          <components.MultiValue {...props}>
            <div className="flex items-center">
              <img
                className="w-6 h-6 mr-2"
                src="https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_1.png"
              />
              {props.children}
            </div>
          </components.MultiValue>
        ),
      }}
      menuPlacement="auto"
    />
  );
};

const NoMultiValue = () => {
  const [selected, setSelected] = React.useState<readonly Option[]>([]);
  return (
    <div>
      <Select<Option, true>
        options={options}
        value={selected}
        isMulti
        styles={{
          control: (base) => ({ ...base, width: 300 }),
          option: (base) => ({ ...base }),
        }}
        components={{
          MultiValue: () => null,
          ClearIndicator: () => null,
        }}
        menuPlacement="auto"
        onChange={(newValue, actionMeta) => {
          console.log({ newValue, actionMeta });
          setSelected(newValue);
        }}
      />
      <div>
        {selected.map((item) => (
          <div
            key={item.value}
            className="flex items-center justify-between bg-gray-200 p-2 m-2 rounded"
          >
            <span>{item.label}</span>
            <button
              onClick={() => {
                setSelected((prev) =>
                  prev.filter((option) => option.value !== item.value)
                );
              }}
              className="text-red-500"
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
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
  CustomMenuItem,
  NoMultiValue,
};
