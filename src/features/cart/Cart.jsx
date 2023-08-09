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
  align-self: flex-start;

  display: flex;

  border-radius: 1rem;
  width: 40%;
  background-color: var(--color-white);
  flex-flow: column;
  max-height: 100%;
  color: var(--color-dark);

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
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
`;

function Cart({ page }) {
  const carts = useSelector(getCart);

  const dispatch = useDispatch();

  const totalCartPrice = useSelector(getTotalCartPrice);

  const navigate = useNavigate();

  const shippingFee = 50;

  const vat = 0.2 * +totalCartPrice;

  if (!carts.length)
    return (
      <StyledCart>
        <EmptyCart />;
      </StyledCart>
    );

  return (
    <StyledCart>
      <Container>
        <CartText>{!page ? `Cart (${carts.length})` : "Summary"}</CartText>

        {!page && (
          <SmallButton onClick={() => dispatch(clearCart())}>
            {" "}
            Remove All{" "}
          </SmallButton>
        )}
      </Container>

      <CartContainer>
        {carts.map((cart) => (
          <CartItem key={cart.productID} cart={cart} page={page} />
        ))}
      </CartContainer>

      <Container>
        <Text> TOTAL </Text>

        <CartText> {formatCurrency(totalCartPrice)} </CartText>
      </Container>

      {page && (
        <>
          <Container>
            <Text> SHIPPING FEES </Text>

            <CartText> {formatCurrency(shippingFee)} </CartText>
          </Container>

          <Container>
            <Text> {"VAT (INCLUDED)"} </Text>

            <CartText> {formatCurrency(vat)} </CartText>
          </Container>

          <Container>
            <Text> GRAND TOTAL </Text>

            <CartText>
              {" "}
              {formatCurrency(totalCartPrice + vat + shippingFee)}{" "}
            </CartText>
          </Container>
        </>
      )}

      {!page && (
        <Button onClick={() => navigate(`/checkout`)}> checkout </Button>
      )}
    </StyledCart>
  );
}

export default Cart;
