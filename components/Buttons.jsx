import styled from "@emotion/styled";

export const AddDetailCollectionButton = styled.button`
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid white;
  border-radius: 8px;
  cursor: pointer;
  width: 250px;

  &:hover {
    background-color: white;
    color: black;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AddNewCollectionButton = styled.button`
  all: unset;
  padding: 12px;
  border: 1px solid black;
  margin-bottom: 24px;
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

export const CloseCollectionModalButton = styled.button`
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

export const ConfirmButton = styled.button`
  all: unset;
  padding: 12px;
  border: 1px solid green;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  width: 100px;

  &:hover {
    background-color: green;
    color: white;
  }
`;

export const SecondaryButton = styled.button`
  all: unset;
  padding: 12px;
  border: 1px solid grey;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  width: 100px;

  &:hover {
    background-color: grey;
    color: white;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 24px;
  justify-content: space-evenly;
`;
