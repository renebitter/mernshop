# Mernshop

Fullstack eCommerce - MERN with Redux

https://mernshop-kk1f.onrender.com/

## About

Build with React and Redux for it's state management. This is a fully functional e-commerce website including: product listing, pagination, product detail page, search, user authentication, user profile page, rating, review and payment (paypal integration). Admin user and admin area with CRUD functionality for users, products and orders.

## Content

- [Backend](#Backend)
- [Frontend](#Frontend)
  - [State Management](#State_Management)
    - Store
    - Constants
    - Actions
    - Reducers
  - [Components](#Components)
  - [Pages](#Pages)
- [Dependencies](#Dependencies)
  - [Backend Dependencies](#Backend_Dependencies)
    - Production
    - Development
  - [Frontend Dependencies](#Frontend_Dependencies)

### Backend

- server.js
  <br>

- config
  - db.js (connects to mongodb)
    <br>
- controllers
  order
  product
  user
  <br>
- data

  Can be seeded with seeder.js utility (current DB entries will be deleted!)

  ```js
    "data:import": "node backend/seeder",
    "data:destroy": "node backend/seeder -d",
  ```

  <br>

- middleware
  auth
  error
  <br>
- models
  order
  product
  user
  <br>
- routes
  order
  product
  user
  upload
  <br>
- utils
  generateToken
  seeder
  <br>

### Frontend

- **index.js**

  - Provider store={store}
    <br>

- **App.js**
  - Route path='/admin/orderlist' component={OrderListScreen}
    <br>

#### State_Management

- **store.js**

  - imports { createStore, combineReducers, applyMiddleware } from 'redux'.
  - import thunk from 'redux-thunk';
  - imports { composeWithDevTools } from 'redux-devtools-extension'
  - imports all reducers. Combines them into a single variable "reducer" with Redux's "combineReducers".
  - uses localStorage for cartItems, userInfo, shippingAddress.
  - sets initialState using localStorage info.
  - defines middleware variable with "thunk".
  - creates store with Redux's "createStore" using variables defined previously: reducer, initialState and composeWithDevTools(applyMiddleware(...middleware)).
    <br>

- **Constants**

  - defines variables
    Cart
    Product
    Order
    User
    <br>

- **Actions**

  - fetches API
    Cart
    Product
    Order
    User
    <br>

- **Reducers**

  - takes previous state and action, and returns next state
    Cart
    Product
    Order
    User
    <br>

#### Components

- Footer //
- CheckoutSteps.js
- FormContainer
- Header.js
  ({userLogin}, { history }, {userInfo})
  <br>
- Loader //
- Message (defaultProps ‘info’)
- Meta (Helmet)
- Pagination (Array)
- Product ({product})
- ProductCarousel
- Rating
- SearchBox
  <br>

#### Pages

- **Main:**
  Home
  Product
  Cart
  <br>
- **Auth:**
  Login
  Register
  Profile
  Shipping
  Payment
  PlaceOrder
  Order
  <br>
- **Admin:**
  OrderList
  ProductEdit
  ProductList
  UserEdit
  UserList
  <br>

### Dependencies

#### Backend_Dependencies

- Production

  - [**bcryptjs** ](https://www.npmjs.com/package/bcryptjs#hashsyncs-salt)

    - Hashes PW:
      _Enables storing of passwords as hashed passwords instead of plaintext._

      _**.hashSync** synchronously generates a hash for the given string. It returns the hashed string._

      ```js
      import bcrypt from 'bcryptjs';
      const users = [
        {
          name: 'Walter White',
          email: 'heisenberg@saymyna.me',
          password: bcrypt.hashSync('123456', 10),
        },
      ];
      ```

    - Compares PW:
      _**.compare** asynchronously compares the given data against the given hash._

      ```js
      userSchema.methods.matchPassword = async function (enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password);
      };
      ```

    - Salts:
      _**.genSalt** asynchronously generates a salt. A salt randomizes each hash by adding random data that is unique to each user to their password hash, so even the same password has a unique hash._

      _**.hash** asynchronously generates a hash for the given string._

      ```js
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      ```

  - **dotenv**

    - _loads environment variables from a .env file into **process.env**._

      _\* seems unnecessary when using a Heroku or alike. You can set the env vars directly in the config var settings from the server itself._
      <br/>

  - **express**

    - _framework for node._
      _Note: **"type": "module"** in **"package.json"** allows for **import** instead of **require**._
      <br/>

  - **express-async-handler**

    - _middleware for handling exceptions inside of async express routes and passing them to your express error handlers._
      **await/throw new Error**

      ```js
      import asyncHandler from 'express-async-handler';

      const updateProduct = asyncHandler(async (req, res) => {

        //...

        if (product) {

          //...

            const updatedProduct = await product.save();
            res.json(updatedProduct);
          } else {
            res.status(404);
            throw new Error('Product not found');
        }
      }
      ```

        <br/>

  - **jsonwebtoken**

    - _securely transmit info between parties as a JSON object._

      ```js
      import jwt from 'jsonwebtoken';

      const generateToken = (id) => {
        return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
      };

      //...

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      ```

      <br/>

  - **mongoose**

    - _MongoDB object modeling tool._

      ```js
      import mongoose from 'mongoose';

      //...

      const conn = await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      });
      ```

      ```js
        const productSchema = mongoose.Schema(
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
          },
          name: {
            type: String,
            required: true,
          },
          image: {
            type: String,
            required: true,
          },

        }


        //...

        const Product = mongoose.model('Product', productSchema);
      ```

      <br/>

  - **multer**

    - _Used for uploading files. "uploadFiles.js"_
      <br/>

- Dev

  - **concurrently**

    - _Run multiple commands concurrently_

    ```js
    "dev": "concurrently \"npm run server \" \"npm run client\"",
    ```

  - **morgan**

    - HTTP request logger middleware for node.js. To be used in conjunction e.g. with Insomnia or Postman.

    ![Image ...](frontend/public/images/dexter.jpg)

  - **nodemon**

    - _automatically restarts node application when file changes are detected._

    ```js
    "scripts": {
      "server": "nodemon backend/server",
    }
    ```

#### Frontend_Dependencies

- Production
  - axios
  - react
  - react-bootstrap
  - react-dom
  - react-helmet
  - react-paypal-button-v2
  - react-redux
  - react-router-bootstrap
  - react-router-dom
  - react-scripts
  - redux
  - redux-devtools-extension
  - redux-thunk
