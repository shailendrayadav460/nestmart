import { Row, Col, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import { FaThLarge } from 'react-icons/fa';
import { MdSort } from 'react-icons/md';

const FilterBar = () => {
  return (
    <Row className="align-items-center justify-content-between my-3 px-2 ms-3 me-3">
      {/* Left Text */}
      <Col xs="auto">
        <div style={{ fontSize: '14px', color: '#666' }}>
          We found <span style={{ color: '#28a745', fontWeight: '500' }}>29</span> items for you!
        </div>
      </Col>

      {/* Right Controls */}
      <Col xs="auto" className="d-flex gap-2">
        {/* Show Dropdown */}
        <DropdownButton
          as={ButtonGroup}
          variant="light"
          title={
            <span>
              <FaThLarge style={{ marginRight: '5px' }} />
              Show: 50
            </span>
          }
        >
          <Dropdown.Item>10</Dropdown.Item>
          <Dropdown.Item>25</Dropdown.Item>
          <Dropdown.Item>50</Dropdown.Item>
          <Dropdown.Item>100</Dropdown.Item>
        </DropdownButton>

        {/* Sort Dropdown */}
        <DropdownButton
          as={ButtonGroup}
          variant="light"
          title={
            <span>
              <MdSort style={{ marginRight: '5px', }} />
              Sort by: Featured
            </span>
          }
        >
          <Dropdown.Item>Featured</Dropdown.Item>
          <Dropdown.Item>Price: Low to High</Dropdown.Item>
          <Dropdown.Item>Price: High to Low</Dropdown.Item>
          <Dropdown.Item>Newest</Dropdown.Item>
        </DropdownButton>
      </Col>
    </Row>
  );
};

export default FilterBar;
