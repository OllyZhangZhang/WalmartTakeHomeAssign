## Walmart Frontend Take-Home Challenge 
## Author: Mei Zhang  
## Date: July 28th 2021


## Requirements
Orders page:
- A user can view basic order information
- A user can view a count of total orders
- A user can filter orders to view only orders with isDeliveved=true status
- A user can click a single order row on the page to view order details in a modal

Order Details modal:
- A user can view order ID
- A user can view order item details
- A user can view total order $ amount​

## Design/Styling Resources:

- Referred to `frontend-design.pdf` for design specifications.
- For UI Components, referred to [chakra-ui](https://chakra-ui.com) I used chakra-ui for the modal/toggle button.
- For styling, I put all styles into styles/globals.css

## Design Idea/Process

# _app.js
- _app.js has website header and Orders Component, because the header is usually a part we hope to repeatly use and Orders Component can display dynamical infomation

# Orders Component
- Orders Component contains numbers of order, delivered switch button and data table, which is to dispaly information (Order#, Customer ID, Order Date and Delivered) for each order
- In Orders Component, the isDelivered toggle can used to filter delivered order, it's achieved by toggleChecked() function, I changed the state of checked, also changed the number of total orders displaying.
- In Orders Component, Order#, Customer ID and Order Date are sortable if you click anyone of them at table header. They are sorted via onSort(event, sortKey) function.
- Orders Component also has modal. In modal, we usually can see Products Component. When we click any row of order, we transferred orderId into modal via handleRowClick() function, and Products Component received orderId as a parameter, which can fetch all the items, item infomation from products.json. When we want to close the modal, there is a 'X' at the top right. It'll call onClose() function which can set the open state as false.

# Products Component
- Products Components is used to displaying order details for each order ID, like item name, item photo, item prices, order Id, total price and quantity of each item.
- The state of Products Components has both of products' data and orders' data. Because Orders' data contain Order Id and quantity and products' data contains item details, we need both of them for displaying and calculating total prices.
- In the process of rendering Products Component, we can calculate total prices for each order based on the order Id.
- When displaying data, we need filter and map data by using order Id.
​
## Getting Started

```bash
$ npm install
​
$ npm run dev
```
To view the web app, copy/paste the following url in your browser: [http://localhost:3000](http://localhost:3000).
​
## Extra Credit​

- Pagination
- Added Sorting​ for columns of Order#, Customer ID and Order Date.

## Question & Advice

Please reach out to ollyzhang2021@gmail.com if you have questions or advice.
