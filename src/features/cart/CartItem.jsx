import { styled } from "styled-components";
import { Text } from "../category/Category";
import UpdateCartItem from "../../ui/UpdateCartItem";
import { formatCurrency } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getCurrentItemQuantityById } from "./cartSlice";
import { HiXMark } from "react-icons/hi2";

const CartItemContainer = styled.li`
  display: flex;
  column-gap: 1rem;
  color: var(--color-dark);
  align-items: center;
`;

const CartText = styled.span`
  color: var(--color-dark);
  opacity: 0.7;
  font-weight: 400;
  font-size: 2rem;
  margin-left: auto;
  padding-right: 2rem;
`;

const CartItemDescription = styled.div`
  display: flex;
  flex-flow: column;
`;

const CartItemName = styled.p`
  margin-right: auto;
  margin-bottom: -2rem;
  font-size: 2rem;
  font-weight: 600;
`;

const CartItemImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 30%;
`;

const ButtonDelete = styled.button`
  font-size: 3rem;
  color: var(--color-dark);
  opacity: 0.8;
  border: none;
  background-color: transparent;
  transition: color 0.3s;

  &:hover {
    color: var(--color-primary);
  }
`;

function CartItem({ cart, page }) {
  const { cartImage, productID, unitPrice, cartName, quantity } = cart;

  const CurrentQuantity = useSelector(getCurrentItemQuantityById(productID));

  const dispatch = useDispatch();

  return (
    <CartItemContainer>
      <CartItemImageContainer>
        <img src={cartImage} alt="CartImage" />
      </CartItemImageContainer>

      <CartItemDescription>
        <CartItemName>{cartName}</CartItemName>
        <Text> {formatCurrency(unitPrice)} </Text>
      </CartItemDescription>

      {!page && (
        <>
          <UpdateCartItem
            currentQuantity={CurrentQuantity}
            id={productID}
            type="cart"
          />

          <ButtonDelete onClick={() => dispatch(deleteItem(productID))}>
            <HiXMark />
          </ButtonDelete>
        </>
      )}

      {page && <CartText> {"X" + quantity} </CartText>}
    </CartItemContainer>
  );
}

export default CartItem;
