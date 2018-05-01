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
    if (data.payload && data.payload.dataAlreadySet) {
      return cb(data);
    }

    // get actual data. It can be async call or some modal to fetch data
    const name = window.prompt('Enter name of field');

    const result = cb({
      ...data,
      name: name || data.name,
      id: name || data.id,
      payload: {
        ...data.payload,
        dataAlreadySet: true// just a flag to avoid multiple prompt
      }
    });
  };

  return (
    <Draggable {...props} >
      <span>{ rest.name }</span>
      <div className="mt-3">
        <Row className="row">
          <Col sm="6">
            <Dropzone parentID={id} id="canvas-1-1" onDrop={_onDrop} placeholder="Drop Here" />
          </Col>
          <Col sm="6">
            <Dropzone parentID={id} id="canvas-1-2" onDrop={_onDrop} placeholder="Drop Here" />
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
