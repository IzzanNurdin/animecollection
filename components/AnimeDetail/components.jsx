import styled from "@emotion/styled";

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 48px 64px;
`;

export const AnimeItem = styled.div`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 8px;
  }

  h2,
  h3,
  p {
    margin: 12px 0px;
  }
`;

export const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AnimeMeta = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-style: italic;
  }
`;

export const BackButton = styled.div`
  padding: 24px 64px;
  a {
    all: unset;
    cursor: pointer;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
