import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

export default function TransporterMenu() {
  return (
    <Nav activeKey="/home" style={{ margin: "0 0 40px 0" }}>
      <Nav.Item>
        <Nav.Link href="/home">LMS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Shipments</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Trucks</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Drivers</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
