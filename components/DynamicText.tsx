import { Heading } from "@chakra-ui/layout";
import React, { forwardRef, useImperativeHandle, useState } from "react";

const DynamicText = (_, ref) => {
  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  useImperativeHandle(
    ref,
    () => ({
      changeValue
    })
  )

  return (
    <Heading as='h1' size='xl'>
      {value}
    </Heading>
  );
};

export default forwardRef(DynamicText);
