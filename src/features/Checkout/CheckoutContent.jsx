import ContainerContent from "../../ui/ContainerContent";
import ContainerLayout from "../../ui/ContainerLayout";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import BillingDetails from "./BillingDetails";

function CheckoutContent() {
  return (
    <ContainerLayout>
      <Header />

      <ContainerContent page="checkout">
        <BillingDetails />
      </ContainerContent>

      <Footer />
    </ContainerLayout>
  );
}

export default CheckoutContent;
