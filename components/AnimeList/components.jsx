import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AnimeItem = styled.a`
  all: unset;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid black;
  display: flex;
  gap: 24px;
  padding: 24px;
  align-items: center;
  flex-direction: row;
  border-radius: 16px;
  height: fit-content;
  width: 100%;
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

export const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AnimeTitle = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-style: italic;
  }
`;
