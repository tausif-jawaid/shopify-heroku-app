import { useState } from "react";
import { Page, Layout, EmptyState } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

export function EmptyStatePage({ setSelection }) {
  const [val, setOpen] = useState(true);
  const handleSelection = (resources) => {
    setOpen(true);
    setSelection(resources.selection.map((product) => product.id)); 
  };
  return (
    <Page>
      <TitleBar
        // primaryAction={{
        //   content: "Select products",
        //   onAction: () => setOpen(true),
        // }}
      />
      <ResourcePicker // Resource picker component
        resourceType="Product"
        showVariants={true}
        open={val}
        onSelection={(resources) => handleSelection(resources)}
        onCancel={() => setOpen(false)}
        
      />
      <Layout>
        <EmptyState
          //heading="Discount your products temporarily"
          action={{
            content: "Select products",
            onAction: () => setOpen(true),
          }}
         // image={img}
          //imageContained
        >
          {/* <p>Select products to change their price temporarily.</p> */}
        </EmptyState>
      </Layout>
    </Page>
  );
}
