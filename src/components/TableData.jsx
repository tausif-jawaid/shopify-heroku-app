import {
    Card,
    Page,
    Layout,
    DataTable
} from "@shopify/polaris";

import React, { useState } from "react";

export function DataTableFooterExample() {
    const rows = [
      ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
      ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
      [
        'Navy Merino Wool Blazer with khaki chinos and yellow belt',
        '$445.00',
        124518,
        32,
        '$14,240.00',
      ],
    ];
  
    return (
      <Page title="Sales by product">
        <Card>
          <DataTable
            columnContentTypes={[
              'text',
              'numeric',
              'numeric',
              'numeric',
              'numeric',
            ]}
            headings={[
              'Product',
              'Price',
              'SKU Number',
              'Net quantity',
              'Net sales',
            ]}
            rows={rows}
            totals={['', '', '', 255, '$155,830.00']}
            footerContent={`Showing ${rows.length} of ${rows.length} results`}
          />
        </Card>
      </Page>
    );
}



export function Add() {

  const state = useState();

  const [counter, updateCount] = useState(1);

  console.log(state);

  const Increase = () => {
    updateCount(counter + 1);
  }

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card title="My Inner Component" sectioned>
            <>
                <p>{counter}</p>
                <button onClick={Increase}>Click Me</button>
              </>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}



