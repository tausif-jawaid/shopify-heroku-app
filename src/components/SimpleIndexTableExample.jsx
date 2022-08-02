import {
    IndexTable,
    TextStyle,
    Card,
    useIndexResourceState,
    Page,
    Layout
  } from "@shopify/polaris";
  import React from "react";
  
  export function SimpleIndexTableExample() {
    const customers = [
      {
        id: "3411",
        url: "customers/341",
        name: "Mae Jemison",
        location: "Decatur, USA",
        orders: 20,
        amountSpent: "$2,400",
      },
      {
        id: "2561",
        url: "customers/256",
        name: "Ellen Ochoa",
        location: "Los Angeles, USA",
        orders: 30,
        amountSpent: "$140",
      },
      {
        id: "2562",
        url: "customers/257",
        name: "Ellen Robert",
        location: "London, UK",
        orders: 50,
        amountSpent: "$142",
      },
    ];
    const resourceName = {
      singular: "customer",
      plural: "customers",
    };
  
    const { selectedResources, allResourcesSelected, handleSelectionChange } =
      useIndexResourceState(customers);
  
    const rowMarkup = customers.map(
      ({ id, name, location, orders, amountSpent }, index) => (
        <IndexTable.Row
          id={id}
          key={id}
          selected={selectedResources.includes(id)}
          position={index}
        >
          <IndexTable.Cell>
            <TextStyle variation="strong">{name}</TextStyle>
          </IndexTable.Cell>
          <IndexTable.Cell>{location}</IndexTable.Cell>
          <IndexTable.Cell>{orders}</IndexTable.Cell>
          <IndexTable.Cell>{amountSpent}</IndexTable.Cell>
        </IndexTable.Row>
      )
    );
  
    return (
    <Page>
    <Layout>
      <Card>
        <IndexTable
          resourceName={resourceName}
          itemCount={customers.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            { title: "Name" },
            { title: "Location" },
            { title: "Order count" },
            { title: "Amount spent" },
          ]}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
      </Layout>
      </Page>
    );
  }
  
  