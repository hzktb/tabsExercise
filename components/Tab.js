const Tab = (props) => {
  return (
    <div
      className={`tab ${props.select ? "selected" : null}`}
      onClick={(e) => {
        props.setOtherTab1({ name: props.name1, select: false });
        props.setOtherTab2({ name: props.name2, select: false });
        props.setTab({ name: props.name, select: true });
      }}
    >
      {props.name}
    </div>
  );
};
export default Tab;
