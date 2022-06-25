# Mernshop

Fullstack eCommerce - MERN with Redux

https://mernshop-99.herokuapp.com/

## Features/Logic

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

- **App.js**
  Route path='/admin/orderlist' component={OrderListScreen}
  <br>

  #### State Management

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

#### Screens/Pages

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
