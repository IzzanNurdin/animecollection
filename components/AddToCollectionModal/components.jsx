import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  all: unset;
  cursor: pointer;

  svg {
    fill: red;
    width: 32px;
    height: 32px;
    &:hover {
      fill: firebrick;
    }
  }
`;

export const AddButton = styled.button`
  all: unset;
  padding: 12px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    border: 1px solid firebrick;
    background-color: firebrick;
    color: white;
  }
`;

export const AddCollectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  input {
    padding: 12px 24px;
    border-radius: 12px;
    border: 1px solid black;
  }

  button {
    padding: 12px;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    color: white;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
`;

export const CollectionListWrapper = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
`;
