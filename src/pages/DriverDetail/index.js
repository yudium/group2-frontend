import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Form, ListGroup, Row } from 'react-bootstrap';
import TransporterMenu from '../../components/TransporterMenu';
import Layout from '../../components/Layout';
import { useParams } from 'react-router-dom';
import truck from '../../api/truck';
import driver from '../../api/driver';

export default function DriverDetail() {
  const [data, setData] = useState({
    id: 'id1',
    driver_name: 'driver_name1',
    phone_number: 'phone_number1',
    created_at: 'created_at1',
    status: 'status1',
  });
  const id = useParams().id;

  useEffect(() => {
    driver.getDetail(id).then(setData);
  }, []);

  return (
    <Layout>
      <TransporterMenu />

      <Row>
        <Col sm={6}>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Driver Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" value={data.driver_name} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Phone Number
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" value={data.phone_number} />
              </Col>
            </Form.Group>
          </Form>
        </Col>
        <Col sm={6}>
          <ListGroup>
            <ListGroup.Item>ID Card</ListGroup.Item>
            <ListGroup.Item>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1O1V1vInwvmWDZ1yO-ZOel3pn-4nixTfc/view"
                rel="noreferrer"
              >
                https://drive.google.com/file/d/1O1V1vInwvmWDZ1yO-ZOel3pn-4nixTfc/view
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <small>12 Aug 2022</small>
            </ListGroup.Item>
            <ListGroup.Item>Driver License</ListGroup.Item>
            <ListGroup.Item>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1O1V1vInwvmWDZ1yO-ZOel3pn-4nixTfc/view"
                rel="noreferrer"
              >
                https://drive.google.com/file/d/1O1V1vInwvmWDZ1yO-ZOel3pn-4nixTfc/view
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <small>12 Aug 2022</small>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Layout>
  );
}
