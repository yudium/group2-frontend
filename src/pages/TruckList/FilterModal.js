import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';

export default function FilterModal({ typeList, selectedFilters, onClose, onChange }) {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select types to filter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {typeList.map((type) => (
          <Form.Group>
            <Form.Check type={'checkbox'}>
              <Form.Check.Input
                type={'checkbox'}
                checked={selectedFilters.includes(type)}
                onClick={(e) => {
                  if (e.target.checked) {
                    onChange([...selectedFilters, type]);
                  } else {
                    onChange(selectedFilters.filter((t) => t !== type));
                  }
                }}
              />
              <Form.Check.Label>{type}</Form.Check.Label>
            </Form.Check>
          </Form.Group>
        ))}
      </Modal.Body>
    </Modal>
  );
}
