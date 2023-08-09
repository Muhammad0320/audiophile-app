import ContainerContent from "../../ui/ContainerContent";
import ContainerLayout from "../../ui/ContainerLayout";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import BillingDetails from "./BillingDetails";
import PaymentDetails from "./PaymentDetails";
import ShippingInfo from "./ShippingInfo";

function CheckoutContent() {
  return (
    <ContainerLayout page="checkout">
      <Header />

      <ContainerContent page="checkout">
        <BillingDetails />
        <ShippingInfo />
        <PaymentDetails />
      </ContainerContent>

      <Footer />
    </ContainerLayout>
  );
}

export default CheckoutContent;
