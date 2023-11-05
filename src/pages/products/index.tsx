import Page from "@/components/Page";
import { HelmetProvider } from "react-helmet-async";

export default function Products() {
  return (
    <HelmetProvider>
      <Page title="Products">
        <h1>PAgee</h1>
      </Page>
    </HelmetProvider>
  );
}
