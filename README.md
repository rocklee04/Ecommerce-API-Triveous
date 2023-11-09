# Ecommerce-API-Triveous

Welcome to the E-Commerce API, which allows you to browse all products, manage your shopping cart, place orders, and retrieve order history.

## Getting Started

To use this API, you need to have Node.js and MongoDB installed. You'll also need to set up environment variables for your application. Clone this repository and run the following commands:

    ```bash
    npm install
    npm start

## API Endpoints

- POST /user/sinup: To register a user.
- POST /user/login: To login a user
- GET /product/: View all the products.
- POST /product/add: Add a new product.
- PUT /product/update: Update the details of the product.
- DELETE /product/delete: Delete the product.
- POST /cart/add-to-cart/{productId}: Add a product to the cart
- GET /cart/view-cart: View the cart.
- PUT /cart/update-quantity/{productId}: Update the quantity of a product in the cart.
- DELETE /cart/remove-from-cart/{productId}: Remove a product from the cart.
- POST /order/place-order: Place an order with products from the cart.
- GET /order/order-history: Get order history for authenticated users.
- GET /order/order-details/{orderId}: Get detailed information of a specific order by its ID.

## User Authentication

This API uses JSON Web Tokens (JWT) for user authentication. To access authenticated endpoints, include a valid JWT token in the Authorization header of your requests.

## Admin Authentication

For product management, use the query parameter adminPassword=admin for authentication.

## Swagger Documentation

You can find detailed documentation for this API using Swagger. It describes the available endpoints, request and response formats, and more.

## How to Access Swagger Documentation

1. Start the application by running npm start.
2. Open a web browser and go to http://localhost:PORT/api-docs.

## Deployed Link

The E-Commerce API is deployed and accessible at [DEPLOYED_LINK_HERE](https://ecommerce-api-n084.onrender.com).
