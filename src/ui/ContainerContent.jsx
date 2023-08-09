import { css, styled } from "styled-components";

const StyledContent = styled.div`
  grid-column: 2 / 3;

  ${(props) =>
    props.page === "checkout" &&
    css`
      background-color: var(--color-white-2);
    `}
`;

function ContainerContent({ children, page }) {
  return <StyledContent {...page}> {children} </StyledContent>;
}

export default ContainerContent;
