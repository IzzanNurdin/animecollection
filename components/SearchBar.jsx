import React from "react";
import styled from "@emotion/styled";
import { DebounceInput } from "react-debounce-input";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;

const Input = styled(DebounceInput)`
  padding: 12px 24px;
  border: 1px solid black;
  border-radius: 12px;
  width: 50%;
`;

export default function SearchBar({ value, onChange }) {
  return (
    <InputWrapper>
      <Input
        value={value}
        debounceTimeout={500}
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
    </InputWrapper>
  );
}
