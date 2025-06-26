
import Container from 'react-bootstrap/esm/Container';

function Dashboard() {
  return (
      <>
          <Container className='d-flex ms-4'>
              <div >
                  <h3>Hello Rosie!</h3>
                  <p>From your account dashboard. you can easily check & view your recent orders,<br />
                      manage your shipping and billing addresses and edit your
                      password and account details.</p>
              </div>
          </Container>
          
      </>
  )
}

export default Dashboard
