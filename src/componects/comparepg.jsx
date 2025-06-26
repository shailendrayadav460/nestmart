import Nav from 'react-bootstrap/Nav';
import { AiTwotoneHome } from 'react-icons/ai';
import { GrFormNext } from 'react-icons/gr';
import Table from 'react-bootstrap/Table';
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiSolidShoppingBag } from "react-icons/bi";
import { PiHeadsetFill } from "react-icons/pi";



function Comparepg() {
  return (
      <>
          <div className='sddffggddfdcx'>
              <div className='dsisix ' >
                  <Nav.Link className='text-success small' href="#home" ><AiTwotoneHome className='mb-2' /> Home </Nav.Link>
                  <div><GrFormNext className='ps-1 ms-2 me-2 small' /></div>
                  <Nav.Link className='text-Secondary small' href="#shop" > Shop </Nav.Link>
                  <div><GrFormNext className='ps-1 ms-2 me-2 small' /></div>
                  <Nav.Link className='text-Secondary small' href="#compare" > Compare </Nav.Link>
              </div>
          </div>
          <div className=' comppagetsf'>
              <h2>Product Compare</h2>
              <p>There are 3 products to compare</p>
              <div>
                  <Table bordered >
                      <tbody className="tagvdgfdfbt ">
                          <tr>
                              <td id='idfontcolor' >Preview</td>
                              <td><img id='imgpriwd' src='https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-2-1.jpg' /></td>
                              <td><img id='imgpriwd' src='https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg' /></td>
                              <td><img id='imgpriwd' src='https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-3-1.jpg' /></td>
                          </tr>
                          <tr>
                              <td id='idfontcolor'>Name</td>
                              <td><h6 id='grdsfyfxz' >J.Crew Mercantile Women's Short</h6></td>
                              <td><h6 id='grdsfyfxz'>Amazon Essentials Women's Tanks</h6></td>
                              <td><h6 id='grdsfyfxz'>@Amazon Brand - Daily Ritual Wom</h6></td>
                          </tr>
                          <tr>
                              <td id='idfontcolor'>Price</td>
                              <td><h4 id='grdsfyu'>$12.00</h4></td>
                              <td><h4 id='grdsfyu'>$14.00</h4></td>
                              <td><h4 id='grdsfyu'>$15.00</h4></td>
                          </tr>
                          <tr>
                              <td id='idfontcolor'>Rating</td>
                              <td>
                                  <div className='d-flex justify-content-center	 '>
                                      <div className='ratingstar'>
                                          <IoIosStar />
                                          <IoIosStar />
                                          <IoIosStar />
                                          <IoIosStar />
                                          <IoIosStarHalf />
                                      </div>
                                      <div id='delet'>(121)</div>
                                  </div>
                              </td>
                              <td>
                                  <div className='d-flex justify-content-center	'>
                                      <div className='ratingstar'>
                                          <IoIosStar />
                                          <IoIosStar />
                                          <IoIosStar />
                                          <IoIosStar />
                                          <IoIosStarHalf />
                                      </div>
                                      <div id='delet'>(121)</div>
                                  </div>
                              </td>
                              <td>
                                  <div className='d-flex justify-content-center	'>
                                      <div className='ratingstar'>
                                          <IoIosStar />
                                          <IoIosStar />
                                          <IoIosStar />
                                          <IoIosStar />
                                          <IoIosStarHalf />
                                      </div>
                                      <div id='delet'>(121)</div>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td id='idfontcolor'>Description</td>
                              <td id='idfontcolor'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</td>
                              <td id='idfontcolor'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</td>
                              <td id='idfontcolor'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</td>
                          </tr>
                          <tr>
                              <td id='idfontcolor'>Stock Status</td>
                              <td id='idfontcolor'><span id='stocklkuh'>In Stock</span></td>
                              <td id='idfontcolor'><span id='stocklkuhs'>Out of Stock</span></td>
                              <td id='idfontcolor' ><span id='stocklkuh'>In Stock</span></td>
                          </tr>
                          <tr>
                              <td id='idfontcolor' >Weight</td>
                              <td id='grdsfyfxz'>320 gram</td>
                              <td id='grdsfyfxz'>360 gram</td>
                              <td id='grdsfyfxz'>380 gram</td>
                          </tr>
                          <tr>
                              <td id='idfontcolor'>Dimensions</td>
                              <td id='grdsfyfxz'>N/A</td>
                              <td id='grdsfyfxz'>N/A</td>
                              <td id='grdsfyfxz'>N/A</td>
                          </tr>
                          <tr>
                              <td id='idfontcolor'>Buy now</td>
                              <td><button className='btnsnaksder' variant="success"><BiSolidShoppingBag className='mb-1 me-1' />Add to cart</button></td>
                              <td><button class="btnsnaksd"><PiHeadsetFill className='mb-1 me-1' />Contact us</button></td>
                              <td><button className='btnsnaksder' variant="success"><BiSolidShoppingBag className='mb-1 me-1' />Add to cart</button></td>
                          </tr>
                          <tr>
                              <td></td>
                              <td id='idfontcolor'><FaRegTrashAlt className='mb-1 me-1' />Remove</td>
                              <td id='idfontcolor'><FaRegTrashAlt className='mb-1 me-1' />Remove</td>
                              <td id='idfontcolor'><FaRegTrashAlt className='mb-1 me-1' />Remove</td>
                          </tr>
                      </tbody>
                  </Table>
              </div>
          </div>
      </>
  )
}

export default Comparepg
