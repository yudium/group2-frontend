import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Form, ListGroup, Row } from 'react-bootstrap';
import TransporterMenu from '../../components/TransporterMenu';
import Layout from '../../components/Layout';
import { useParams } from 'react-router-dom';
import truck from '../../api/truck';

export default function TruckDetail() {
  const [data, setData] = useState({
    id: '',
    license_number: '',
    truck_type: '',
    plate_type: '',
    production_year: '',
    stnk: '',
    kir: '',
  });
  const id = useParams().id;

  useEffect(() => {
    truck.getDetail(id).then(setData);
  }, []);

  return (
    <Layout>
      <TransporterMenu />

      <Row>
        <Col sm={6}>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                License Number
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" value={data.license_number} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                License Type
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" value={data.plate_type} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Truck Type
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" value={data.truck_type} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Production Year
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" value={data.production_year} />
              </Col>
            </Form.Group>
          </Form>
        </Col>
        <Col sm={6}>
          <ListGroup>
            <ListGroup.Item>STNK</ListGroup.Item>
            <ListGroup.Item>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1O1V1vInwvmWDZ1yO-ZOel3pn-4nixTfc/view"
                rel="noreferrer"
              >
                https://drive.google.com/file/d/1O1V1vInwvmWDZ1yO-ZOel3pn-4nixTfc/view
              </a>
            </ListGroup.Item>
            <ListGroup.Item><small>12 Aug 2022</small></ListGroup.Item>
            <ListGroup.Item>KIR</ListGroup.Item>
            <ListGroup.Item>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1O1V1vInwvmWDZ1yO-ZOel3pn-4nixTfc/view"
                rel="noreferrer"
              >
                https://drive.google.com/file/d/1O1V1vInwvmWDZ1yO-ZOel3pn-4nixTfc/view
              </a>
            </ListGroup.Item>
            <ListGroup.Item><small>12 Aug 2022</small></ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Layout>
  );
}
