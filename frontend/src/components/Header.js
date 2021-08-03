import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>MERNShop</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='ml-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll>
              {/* <NavDropdown title='Category' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>Products 1</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>Products 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Sub-Category
                </NavDropdown.Item>
              </NavDropdown>
              <Form className='d-flex'>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='mr-2'
                  aria-label='Search'
                />
                <Button variant='outline-primary btn-sm'>Search</Button>
              </Form> */}

              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
