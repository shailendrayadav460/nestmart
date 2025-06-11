import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function SecondpageCard() {
  return (
    <>
      <div className='m-4 mt-2'  >
        <div className='sesfdgsdf'>
          <ListGroup >
            <ListGroup className='fw-bold p-2 fs-4'>Category</ListGroup>
            <div id='fdgddsfgggd'><div id='dfg91'></div></div>
            <ListGroup.Item

              className="hoverdsf d-flex justify-content-between align-items-start  m-2 rounded-2"
            >
              <div className="ms-2 me-auto">
                <img id='imggds' src='https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-1.svg' />
                Milks & Dairies
              </div>
              <Badge bg="info" pill>
                0
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className=" hoverdsf d-flex justify-content-between align-items-start m-2 rounded-2"
            >
              <div className="ms-2 me-auto">
                <img id='imggds' src='	https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-2.svg' />
                Clothing
              </div>
              <Badge bg="info" pill>
                0
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className=" hoverdsf d-flex justify-content-between align-items-start m-2 rounded-2"
            >
              <div className="ms-2 me-auto">
                <img id='imggds' src='https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-3.svg' />
                Pet Foods
              </div>
              <Badge bg="info" pill>
                0
              </Badge>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className=" hoverdsf d-flex justify-content-between align-items-start m-2 rounded-2"
            >
              <div className="ms-2 me-auto">
                <img id='imggds' src='https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-4.svg' />
                Baking material
              </div>
              <Badge bg="info" pill>
                0
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className=" hoverdsf d-flex justify-content-between align-items-start m-2 rounded-2"
            >
              <div className="ms-2 me-auto">
                <img id='imggds' src='	https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-5.svg' />
                Fresh Fruit
              </div>
              <Badge bg="info" pill>
                0
              </Badge>
            </ListGroup.Item>

          </ListGroup>
        </div>
      </div>
    </>
  )
}

export default SecondpageCard
