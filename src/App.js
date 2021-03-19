import './App.css';
import { Navbar, Image, Container, Row, Col } from 'react-bootstrap';
import logo from './assets/flame1.svg';
import Home from './components/layout/Home';
import Orders from './components/layout/Orders';
import OrdersState from './context/orders/OrdersState';

const App = () => {
  return (
    <OrdersState>
      <div className="App">
        <Navbar expand="lg" style={{ background: '#44355C'}}>
          <Navbar.Brand href="#" style={{fontSize: '3rem', color: 'white'}}>
            Hot Orders
            <Image src={logo} style={{width: '3.5rem'}} />
          </Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <Home />
            </Col>
            <Col>
              <Orders />
            </Col>
          </Row>
        </Container>
      </div>
    </OrdersState>
  );
}

export default App;
