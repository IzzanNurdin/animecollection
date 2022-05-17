import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AddCollectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
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
    float: right;
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
  gap: 24px;
`;

export const CollectionItem = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  gap: 12px;
  padding: 12px;
  align-items: center;
  flex-direction: row;
  border-radius: 16px;
  height: fit-content;
  transition: box-shadow 300ms ease, transform 300ms ease,
    -webkit-transform 300ms ease;

  &:hover {
    box-shadow: 0px 48px 44px 0px #566e9b10;
    transform: translate(0px, -8px);
  }

  img {
    width: 120px;
    height: 80px;
    border-radius: 8px;
  }

  h3 {
    margin: 12px 0px;
  }
`;
