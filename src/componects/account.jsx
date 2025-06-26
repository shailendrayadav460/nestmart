// src/componects/Account.jsx

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

// ✅ Make sure these files also have default export
import Dashboard from './dashboard';
import Orders from './Orders';
import Trackyourordes from './Trackyourordes';
import Acctdtls from './accountdetails';
import Myaddress from './Myaddress';

function Account() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;
      case "Orders":
        return <Orders />;
      case "Track":
        return <Trackyourordes />;
      case "Address":
        return <Myaddress />;
      case "Acctdtls":
        return <Acctdtls />;
      case "Loginpg":
        return <Loginpg />;
    //   default:
    //     return null;
    }
  };

  return (
    <Container className="adflfddkf  ">
      {/* Sidebar */}
      <div className="ms-4 me-4" style={{ width: "220px" }}>
        <div className="d-grid gap-2">
          <Button variant="light" onClick={() => setActivePage("Dashboard")} className="text-start text-dark">
            <IoReorderThreeOutline className='me-2' /> Dashboard
          </Button>
          <Button variant="light" onClick={() => setActivePage("Orders")} className="text-start text-dark">
            <FaShoppingBag className='me-2' /> Orders
          </Button>
          <Button variant="light" onClick={() => setActivePage("Track")} className="text-start text-dark">
            <PiShoppingCartLight className='me-2' /> Track Order
          </Button>
          <Button variant="light" onClick={() => setActivePage("Address")} className="text-start text-dark">
            <CiLocationOn className='me-2' /> My Address
          </Button>
          <Button variant="light" onClick={() => setActivePage("Acctdtls")} className="text-start text-dark">
            <MdAccountCircle className='me-2' /> Account Details
          </Button>
          <Button as={Link} to="/Logout" variant="light" className="text-start text-danger">
            <IoIosLogOut className="me-2" /> Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div  className="flex-grow-1">
        {renderContent()}
      </div>
    </Container>
  );
}

export default Account;



