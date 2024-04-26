import { memo } from "react";

type Props = {
  renderLike: any;
};

function Child(props: Props) {
  console.log("Child", props);

  return (
    <div>
      <h3>Child</h3>
      <h4>{props.renderLike()}</h4>
    </div>
  );
}

export default memo(Child);
