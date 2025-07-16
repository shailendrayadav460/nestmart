import React from 'react';
import { Dropdown } from 'react-bootstrap';
import {
  FaUser, FaHeart, FaSignOutAlt,
} from 'react-icons/fa';
import { MdOutlineTrackChanges } from 'react-icons/md';
import { RiCoupon3Line } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';

function AccountDropdown() {
  return (
    <div style={{ padding: '2rem' }}>
      <Dropdown align="end">
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Account
        </Dropdown.Toggle>

        <Dropdown.Menu style={{
          borderRadius: '10px',
          padding: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          minWidth: '200px'
        }}>
          <Dropdown.Item href="/account">
            <FaUser className="me-2" /> My Account
          </Dropdown.Item>
          <Dropdown.Item href="/order-tracking">
            <MdOutlineTrackChanges className="me-2" /> Order Tracking
          </Dropdown.Item>
          <Dropdown.Item href="/voucher">
            <RiCoupon3Line className="me-2" /> My Voucher
          </Dropdown.Item>
          <Dropdown.Item href="/wishlist">
            <FaHeart className="me-2" /> My Wishlist
          </Dropdown.Item>
          <Dropdown.Item href="/settings">
            <IoSettingsOutline className="me-2" /> Setting
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/logout">
            <FaSignOutAlt className="me-2" /> Sign out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default AccountDropdown;
