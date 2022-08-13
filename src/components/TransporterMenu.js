import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Nav, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { transporterToken } from '../api/auth';

export default function TransporterMenu() {
  const history = useHistory();

  useEffect(() => {
    if (transporterToken.getToken === '') {
      history.push('/login');
    }
  }, []);

  const logout = () => {
    transporterToken.setToken('');
    history.push('/login');
  };

  return (
    <Row>
      <Col sm={8}>
        <Nav activeKey="/home" style={{ margin: '0 0 40px 0' }}>
          <Nav.Item>
            <Nav.Link href="/transporter/trucks">LMS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Shipments</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <Link to="/transporter/trucks">Trucks</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <Link to="/transporter/drivers">Drivers</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={4}>
        <Button onClick={logout}>Logout | Transporter</Button>
      </Col>
    </Row>
  );
}
