import React from "react";

type RowProps = {
  index: number;
  style: React.CSSProperties;
};

const Row: React.FC<RowProps> = React.memo(({ index, style }) => {
  return <div style={style}>Row #{index}</div>;
});

export default Row;
