import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
  DataTable
} from "@shopify/polaris";

import trophyImgUrl from "../assets/home-trophy.png";
import { ProductsCard } from "./ProductsCard";

export function HomePage() {

  const rows = [
    ['Boys T-Shirt', '$875.00', 124689, 140, '$120,500.00'],
    ['Boys Shirt', '$875.00', 124689, 140, '$112,500.00'],
    ['Boys Jeans', '$875.00', 124689, 140, '$177,500.00'],
    ['Boys T-Shirt', '$875.00', 124689, 140, '$120,500.00'],
    ['Boys Shirt', '$875.00', 124689, 140, '$112,500.00'],
    ['Boys Jeans', '$875.00', 124689, 140, '$177,500.00'],
  ];


  return (
      <Page title="Product Page Title">
          <Layout>
              <Layout.Section>
                    <Card title="Boy's Collection" sectioned>
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
                                'Product Number',
                                'Net quantity',
                                'Net sales',
                              ]}
                              rows={rows}
                              footerContent={`Showing ${rows.length} of ${rows.length} results`}
                              totals={['', '', '', 270, '$155,830.00']}
                              defaultSortDirection="ascending"
                              showTotalsInFooter
                              stickyHeader
                              hideScrollIndicator
                              sortable
                        />
                  </Card>
              </Layout.Section>
          </Layout>
      </Page>
  );
}
