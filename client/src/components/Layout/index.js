import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
const Layout = ({
  children,
  fluid,
  xs,
  sm,
  md,
  lg,
  cnCol,
  style
}) => 
  <div style={style}>
    <Container fluid={fluid}>
        <Row>
          <Col xs={xs} sm={sm} md={md} lg={lg} className={cnCol}>
            { children }
          </Col>
        </Row>
      </Container>
  </div>
const columnProp = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);
Layout.propTypes = {
  fluid: PropTypes.bool,
  xs: columnProp,
  sm: columnProp,
  md: columnProp,
  lg: columnProp,
  cnCol: PropTypes.string,
  style: PropTypes.object
}
export default Layout;