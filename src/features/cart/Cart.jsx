import { styled } from "styled-components";
import SmallButton from "../../ui/SmallButton";

import { Text } from "../category/Category";

import { formatCurrency } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "../../ui/EmptyCart";
import { useNavigate } from "react-router-dom";

const StyledCart = styled.div`
  display: flex;

  border-radius: 1rem;
  width: 40%;
  background-color: var(--color-white);
  flex-flow: column;
  max-height: 100%;
  color: var(--color-dark);
  row-gap: 2rem;
  padding: 2.5rem;

  &:has(button) {
    justify-self: flex-end;
  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  overflow: auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartText = styled.p`
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
`;

function Cart() {
  const carts = useSelector(getCart);

  const dispatch = useDispatch();

  const totalCartPrice = useSelector(getTotalCartPrice);

  const navigate = useNavigate();

  if (!carts.length)
    return (
      <StyledCart>
        <EmptyCart />;
      </StyledCart>
    );

  return (
    <StyledCart>
      <Container>
        <CartText> Cart ({carts.length}) </CartText>
        <SmallButton onClick={() => dispatch(clearCart())}>
          {" "}
          Remove All{" "}
        </SmallButton>
      </Container>

      <CartContainer>
        {carts.map((cart) => (
          <CartItem key={cart.productID} cart={cart} />
        ))}
      </CartContainer>

      <Container>
        <Text> TOTAL </Text>

        <CartText> {formatCurrency(totalCartPrice)} </CartText>
      </Container>

      <Button onClick={() => navigate(`/checkout`)}> checkout </Button>
    </StyledCart>
  );
}

export default Cart;
