import React from 'react'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { CiFilter } from "react-icons/ci";


function SecondpgCardII() {
  return (
      <>
          <div className='m-4'>
              <div className='sesfdgsdf'>
                  <div className='fgdsggjkhh' >
                      <ListGroup >
                          <ListGroup className='fw-bold  fs-4'>Fill by price</ListGroup>
                          <div id='dfg92'><div id='dfg91'></div></div>
                      </ListGroup>
                      <Form >
                          <input className='radfdfd' type="range" name="price-min" id="price-min" value="40" min="0" max="100" />
                          <div id='formto' >
                              <p id='afd34k' >From:</p>
                              <p id='afd34k'>To:</p>
                          </div>
                          <div className='fontclr' >Color</div>
                          {['checkbox'].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                  <Form.Check // prettier-ignore
                                      type={type}
                                      label={`Red(56)`}
                                      id='checkdfsdf'
                                  />
                                  <Form.Check // prettier-ignore
                                      type={type}
                                      label={`Green(74)`}
                                  />
                                  <Form.Check // prettier-ignore
                                      type={type}
                                      label={`Blue(35)`}
                                  />
                              </div>
                          ))}
                          <div className='fontclr' >Item Condition</div>
                          {['checkbox'].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                  <Form.Check // prettier-ignore
                                      type={type}
                                      label={`New(5126)`}
                                      id='checkdfsdf'
                                  />
                                  <Form.Check // prettier-ignore
                                      type={type}
                                      label={`Refurbished(27)`}
                                  />
                                  <Form.Check // prettier-ignore
                                      type={type}
                                      label={`Used(45)`}
                                  />
                              </div>
                          ))}
                      </Form>
                      <button id='fillfdfd'> <CiFilter /> Fillter</button>
                  </div>
              </div>
          </div>
      </>
  )
}

export default SecondpgCardII
