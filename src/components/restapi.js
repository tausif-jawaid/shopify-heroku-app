import axios from "axios"

export const fetchData = async () => {

  var data = JSON.stringify({
    "product": {
      "title": "Black + Decker 19” Stackable Caddy and Organizer",
      "body_html": "<p>Black + Decker 19” Stackable Caddy and Organizer</p>",
      "vendor": "BLACK+DECKER",
      "product_type": "",
      "variants": [
        {
          "title": "Default Title",
          "price": "86.00",
          "sku": "BDST19900FF",
          "inventory_policy": "deny",
          "compare_at_price": "136.00",
          "option1": "Default Title",
          "inventory_quantity": 30
        }
      ]
    }
  });
  
  var config = {
    method: 'get',
    url: 'https://apna-star-store.myshopify.com/admin/api/2021-10/products.json',
    headers: { 
      'X-Shopify-Access-Token': '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', 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    return console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
   return console.log(error);
  });
}

