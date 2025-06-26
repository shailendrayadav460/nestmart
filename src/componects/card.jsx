import Table from 'react-bootstrap/Table';
import { IoIosStar, IoIosStarHalf, IoIosLogOut } from "react-icons/io";
import { FaRegTrashAlt, FaAngleUp, FaAngleDown } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { PiTagThin } from "react-icons/pi";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useContext, useEffect } from 'react';
import CartContext from './practiceExample/cartcontext';

function Cardboxcb() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState([]);
 

  useEffect(() => {
    setQuantities(cartItems.map(item => item.cartadd || 1));
  }, [cartItems]);

  const increment = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const decrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) newQuantities[index]--;
    setQuantities(newQuantities);
  };

  const subtotal = cartItems.reduce((acc, item, i) => acc + item.price * quantities[i], 0);

  return (
    <div>
      <div className='d-flex justify-content-center mt-4 pt-4'>
        <div className='d-flex'>
          <div className='lkjhghioiuh'>
            <Table bordered>
              <tbody className="tagvdgfdfbt">
                <tr id='adfkdlflfdff'>
                  <td id='idfontcolor'><Form.Check id='checkboxset' /></td>
                  <td><h6>Product</h6></td>
                  <td><h6>Description and product Rating</h6></td>
                  <td><h6>Price</h6></td>
                  <td><h6>Quantity</h6></td>
                  <td><h6>Subtotal</h6></td>
                  <td><h6>Remove</h6></td>
                </tr>
                {cartItems.map((item, index) => (
                  <tr key={index} className='adfkdlflf'>
                    <td id='idfontcolor'><Form.Check id='checkboxset' /></td>
                    <td><img id='imgpriwdsmall' src={item.image} alt='product' width={50} /></td>
                    <td id='tedfdfgllo'>
                      <h6>{item.description}</h6>
                      <div className='d-flex justify-content-center'>
                        <div className='ratingstar'>
                          <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf />
                        </div>
                        <div id='delet'>(121)</div>
                      </div>
                    </td>
                    <td id='grdsfyu'>${item.price}</td>
                    <td id='idfontcolor'>
                      <div id='stocklkuhlk'>{quantities[index] || 1}
                        <div className='d-grid ms-4'>
                          <FaAngleUp onClick={() => increment(index)} />
                          <FaAngleDown onClick={() => decrement(index)} />
                        </div>
                      </div>
                    </td>
                    <td>${(item.price * (quantities[index] || 1)).toFixed(2)}</td>
                    <td><FaRegTrashAlt onClick={() => removeFromCart(item.id)} className='mb-1 me-1' /></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className='lkjhgfiuyt ms-4'>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <div className='d-flex justify-content-between'>
                    <p id='tedfdfgllo'>Subtotal</p>
                    <h6 id='grdsfyu'>${subtotal.toFixed(2)}</h6>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item><hr /></ListGroup.Item>
                <ListGroup.Item><div className='d-flex justify-content-between'><p id='tedfdfgllo'>Shipping</p><h6>15%</h6></div></ListGroup.Item>
                <ListGroup.Item><div className='d-flex justify-content-between'><p id='tedfdfgllo'>Estimate</p><h6>United Kingdom</h6></div></ListGroup.Item>
                <ListGroup.Item><hr /></ListGroup.Item>
                <ListGroup.Item><div className='d-flex justify-content-between'><p id='tedfdfgllo'>Total</p><h6 id='grdsfyu'>${(subtotal + subtotal * 0.15).toFixed(2)}</h6></div></ListGroup.Item>
              </ListGroup>
            </Card>
            <div className='d-grid mt-3'>
              <Button href='/' variant="success" size="lg"> <span className='fs-6'>Proceed To CheckOut</span> <IoIosLogOut /></Button>
            </div>
          </div>
        </div>
      </div>
      <hr className='clanaffdf' />
      <div className='afjkddfdfsfkjsf'>
        <Button className="bg-success border-0 text-white fs-6 px-4 py-2"><FaArrowLeftLong className='me-2 mb-1' />Continue Shipping</Button>
        <Button className="bg-success border-0 text-white fs-6 px-4 py-2"><RxUpdate className='me-2 mb-1' />Update Cart</Button>
      </div>
      <div className='d-flex'>
        <Card className="dfdfdfglgjgvnmb">
          <Card.Body>
            <Card.Text><h5>Calculate Shipping</h5></Card.Text>
            <h6 id='idfontcolor'>Flat rate:<span>5%</span></h6>
          </Card.Body>
          <Dropdown className='ms-3 m-2'>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className='d-flex'>
            <input id='yhnjuiksd' placeholder='State / Country' />
            <input id='yhnjuik' placeholder='PostCode / ZIP' />
          </div>
        </Card>
        <div className='poiuhnk'>
          <h5 className='m-0id'>Apply Coupon</h5>
          <p className='m-0 fs-small mt-1' id='idfontcolor'>Using A Promo Code?</p>
          <div className='d-flex w-50 mt-4'>
            <input id='yhnjuiksdfgre' placeholder='Enter your coupon' />
            <div><Button id="btaflddlruts"><PiTagThin className='me-2 mb-1' />Apply</Button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardboxcb;




