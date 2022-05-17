import styled from "@emotion/styled";

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px 64px 48px 64px;
`;

export const AnimeItem = styled.div`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 8px;
    margin-bottom: 24px;
  }

  h1 {
    color: firebrick;
  }

  h2,
  h3,
  p {
    margin: 8px 0px;
  }
`;

export const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AnimeMeta = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  height: 100%;
  flex-wrap: wrap;

  .description {
    width: 100%;
  }

  .section {
    width: 45%;
  }

  h2 {
    color: firebrick;
  }

  label {
    font-style: italic;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 64px;
`;

export const AddButton = styled.button`
  all: unset;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const BackButton = styled.div`
  a {
    all: unset;
    cursor: pointer;
  }

  svg {
    width: 32px;
    height: 32px;

    &:hover {
      fill: firebrick;
    }
  }
`;
