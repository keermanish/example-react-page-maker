import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import { Draggable, Dropzone } from 'react-page-maker';

const DraggableLayoutR1C2 = (props) => {
  // make sure you are passing `parentID` prop to dropzone
  // it help to mainatain the state to meta data
  const { showBasicContent, id, ...rest } = props;

  if (showBasicContent) {
    return (
      <Draggable {...props} >
        <span>{ rest.name }</span>
      </Draggable>
    );
  }

  const _onDrop = (data, cb) => {
    const fId = window.prompt('Enter unique id');
    return cb({
      ...data,
      id: fId
    });
  };

  return (
    <Draggable {...props} >
      <span>{ rest.name }</span>
      <div className="mt-3">
        <Row className="row">
          <Col sm="6">
            <Dropzone parentID={id} id="canvas-1-1" onDrop={_onDrop} />
          </Col>
          <Col sm="6">
            <Dropzone parentID={id} id="canvas-1-2" onDrop={_onDrop} />
          </Col>
        </Row>
      </div>
    </Draggable>
  );
};

DraggableLayoutR1C2.propTypes = {
  id: PropTypes.string.isRequired,
  showBasicContent: PropTypes.bool.isRequired
};

export default DraggableLayoutR1C2;
