const Content = (props) => {
  return (
    <form>
      <textarea
        value={
          (props.tab1 && props.content.tab1) ||
          (props.tab2 && props.content.tab2) ||
          (props.tab3 && props.content.tab3) ||
          ""
        }
        onChange={(e) => {
          (props.tab1 &&
            props.setContent({
              tab1: e.target.value,
              tab2: props.content.tab2,
              tab3: props.content.tab3,
            })) ||
            (props.tab2 &&
              props.setContent({
                tab1: props.content.tab1,
                tab2: e.target.value,
                tab3: props.content.tab3,
              })) ||
            (props.tab3 &&
              props.setContent({
                tab1: props.content.tab1,
                tab2: props.content.tab2,
                tab3: e.target.value,
              }));
        }}
      />
    </form>
  );
};

export default Content;
