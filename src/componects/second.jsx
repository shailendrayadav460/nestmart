import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { AiTwotoneHome } from "react-icons/ai";
import { GrFormNext } from "react-icons/gr";

function NewPhagefirst() {
  return (
      <>
          <div>
              <div className='sdkfdgdg' >
                  <div >
                      <h1>Blog & News</h1>
                      <div className='dsisix' >
                          <Nav.Link className='text-success small' href="#home" ><AiTwotoneHome className='mb-2' /> Home </Nav.Link>
                          <div><GrFormNext className='ps-1 ms-2 small' /></div>
                          <div className='text-muted ms-2'> Blog & News</div>
                      </div>
                  </div>
                  <div className='secpagbtn'>
                      <button className="btnkkjjk"><span className='text-muted p-1'>&#10540; </span>  Cabbage</button>
                      <button className="btnkkjjk"><span className='text-muted p-1'>&#10540; </span>  Broccoli</button>
                      <button className="btnkkjjk"><span className='text-muted p-1'>&#10540; </span>  Artichoke</button>
                      <button className="btnkkjjk"><span className='text-muted p-1'>&#10540; </span>  Celery</button>
                      <button className="btnkkjjk"><span className='text-muted p-1'>&#10540; </span>  Spinach</button>
                  </div>
              </div>
          </div>
      </>
  )
}

export default NewPhagefirst
