import { Rate } from "antd";

import React from "react";

const Rating = ({value}) => {
  return <Rate disabled defaultValue={value} />;
};

export default Rating;
