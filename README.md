
# Ecommerce_API

Design an API for an ecommerce platform admin to manage product inventory



## Installation


- Download my project from github
- Run npm install command in the terminal to install required dependencies
- npm run start to launch the project
## Features

- Add Product(Create)
request(Post Request) http://localhost:8000/products/create

response { "data": { "product": { "_id": "5e7218a50de915060b8be89a", "name": "iphone", "quantity": "34"} } }

- Delete Product

request(Delete Request) http://localhost:8000/products/:id

response { Product deleted! }

List All Product

request(Get request) http://localhost:8000/products ->response { { "products": [ { "_id": "5e7218a50de915060b8be89a", "name": "iphone", "quantity": "34"}] } }

- Update Product

request(Get request) http://localhost:8000/products/:id/update-quantity

response { "data": { "product": { "_id": "5e7218a50de915060b8be89a", "name": "iphone", "quantity": "34"} }, "message" : "updated successfully" }
## Demo 

https://ecommerce-api-yp1i.onrender.com



## API URL's :-

- Create a product // POST // http://localhost:8000/products/create

- Get all products // GET // http://localhost:8000/products

- Delete a product // DELETE // http://localhost:8000/products/:id

- Update a product // PATCH //http://localhost:8000/:id/update_quantity/?number=5