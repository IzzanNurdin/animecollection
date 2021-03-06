import React from "react";
import styled from "@emotion/styled";
import { DebounceInput } from "react-debounce-input";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Input = styled(DebounceInput)`
  padding: 12px 24px;
  border: 1px solid black;
  border-radius: 12px;
  width: ${(props) => (props.width ? props.width : "100%")};
`;

export default function SearchBar({ value, onChange, placeholder, width }) {
  return (
    <InputWrapper>
      <Input
        value={value}
        debounceTimeout={500}
        placeholder={placeholder}
        type="text"
        width={width}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputWrapper>
  );
}
