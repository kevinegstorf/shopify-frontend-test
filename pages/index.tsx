import { EmptyState, Layout, Page } from "@shopify/polaris";
import HomePage from "src/components/Home";
const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

const Index = () => {
  return (
    <Page>
      <Layout>
        <EmptyState
          heading="Discount your products temporarily"
          action={{
            content: "Select products",
            onAction: () => console.log("clicked"),
          }}
          image={img}
        >
          <p>Select products to change their price temporarily.</p>
        </EmptyState>
        <HomePage />
      </Layout>
    </Page>
  );
};

export default Index;
