import { styled } from "styled-components";

const StyledContent = styled.div`
  grid-column: 2 / 3;
`;

function ContainerContent({ children }) {
  return <StyledContent> {children} </StyledContent>;
}

export default ContainerContent;
