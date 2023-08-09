import ContainerContent from "../../ui/ContainerContent";
import ContainerLayout from "../../ui/ContainerLayout";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import BillingDetails from "./BillingDetails";
import ShippingInfo from "./ShippingInfo";

function CheckoutContent() {
  return (
    <ContainerLayout>
      <Header />

      <ContainerContent page="checkout">
        <BillingDetails />
        <ShippingInfo />
      </ContainerContent>

      <Footer />
    </ContainerLayout>
  );
}

export default CheckoutContent;
