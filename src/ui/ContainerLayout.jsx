import { styled } from "styled-components";

const StyledContainerLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(8rem, 1fr) 80dvw minmax(8rem, 1fr);
`;

function ContainerLayout({ children }) {
  return <StyledContainerLayout> {children} </StyledContainerLayout>;
}

export default ContainerLayout;
