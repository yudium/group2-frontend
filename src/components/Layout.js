import React from 'react';
import { Container } from 'react-bootstrap';

export default function Layout({ children }) {
  return <Container style={{ width: 1000, margin: '20px auto' }}>{children}</Container>;
}
