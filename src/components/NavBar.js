import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

function NavBar() {
  const cartProductsCount = useSelector(state=>state.cart)
  // console.log(cartProductsCount)
  return (
    <Navbar bg="light" expand='lg'>
      <Container fluid>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Collapse >
          <Nav className="me-auto">
            <Nav.Link to='/' as={Link}>Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
          <Nav >
          <Nav.Link  to='/cart' as={Link} >My Cart : <b>{cartProductsCount.length}</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;