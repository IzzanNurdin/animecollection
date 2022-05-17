import styled from "@emotion/styled";

export const CollectionItem = styled.a`
  all: unset;
  cursor: pointer;
  background-color: #101010;
  border: 1px solid black;
  display: flex;
  gap: 24px;
  padding: 24px;
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
    width: 350px;
    height: 130px;
    border-radius: 8px;
  }

  h3 {
    margin: 12px 0px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  gap: 24px;
  padding: 24px 64px;
`;
