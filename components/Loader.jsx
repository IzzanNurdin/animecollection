import styled from "@emotion/styled";
import { FiLoader } from "react-icons/fi";

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .rotate {
    animation: rotation 2s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
const Loader = () => {
  return (
    <LoaderWrapper>
      <FiLoader className="rotate" />
    </LoaderWrapper>
  );
};

export default Loader;
