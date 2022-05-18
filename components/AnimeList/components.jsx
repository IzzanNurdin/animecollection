import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AnimeItem = styled.a`
  all: unset;
  cursor: pointer;
  background-color: #101010;
  border: 1px solid black;
  display: flex;
  padding: 24px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 16px;
  height: fit-content;
  transition: box-shadow 300ms ease, transform 300ms ease,
    -webkit-transform 300ms ease;

  &:hover {
    box-shadow: 0px 48px 44px 0px #566e9b10;
    transform: translate(0px, -8px);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AnimeMeta = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: row;
  align-items: center;

  img {
    width: 350px;
    height: 130px;
    border-radius: 8px;
  }

  h3 {
    margin: 12px 0px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    img {
      width: 100%;
    }
  }
`;

export const AnimeAction = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: row;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    fill: firebrick;
  }

  button {
    all: unset;
    padding: 12px;
    display: flex;
    border: 1px solid transparent;
    align-items: center;
    border-radius: 12px;
    cursor: pointer;

    &:hover {
      background-color: white;
    }
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
