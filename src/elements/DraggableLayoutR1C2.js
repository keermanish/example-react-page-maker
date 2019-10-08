import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import { Draggable, Dropzone } from 'react-page-maker';
import {elements} from '../const';

const DraggableLayoutR1C2 = (props) => {
  // make sure you are passing `parentID` prop to dropzone
  // it help to mainatain the state to meta data
  const {
    dropzoneID,
    parentID,
    showBasicContent,
    showPreview,
    id,
    dropzoneProps,
    initialElements,
    ...rest
  } = props;

  if (showBasicContent) {
    return (
      <Draggable {...props} >
        <span>{ rest.name }</span>
      </Draggable>
    );
  }

  const _onDrop = (data, cb) => {
    // no need to ask id and name again
    if (data.payload && data.payload.dropped) {
      return cb(data);
    }

    // This can be an async call or some modal to fetch data
    let name = data.name;
    if (data.type === elements.TEXTBOX || data.type === elements.DROPDOWN) {
      name = window.prompt('Enter name of field');
    }
    const id = window.prompt('Please enter unique ID');

    const result = cb({
      ...data,
      name,
      id,
      payload: { dropped: true }
    });
  };

  if (showPreview) {
    return (
      <div>
        <div className="mt-3">
          <Row className="row">
            <Col sm="6">
              {rest.childNode['canvas-1-1']}
            </Col>
            <Col sm="6">
              {rest.childNode['canvas-1-2']}
            </Col>
          </Row>
        </div>
      </div>
    )
  }

  const filterInitialElements = (dID) => {
    return initialElements.filter(e => e.dropzoneID === dID) || [];
  };

  return (
    <Draggable {...props} >
      <span>{ rest.name }</span>
      <div className="mt-3">
        <Row className="row">
          <Col sm="6">
            <Dropzone
              {...dropzoneProps}
              initialElements={filterInitialElements('canvas-1-1')}
              id="canvas-1-1"
              onDrop={_onDrop}
              placeholder="Drop Here"
            />
          </Col>
          <Col sm="6">
            <Dropzone
              {...dropzoneProps}
              initialElements={filterInitialElements('canvas-1-2')}
              id="canvas-1-2"
              onDrop={_onDrop}
              placeholder="Drop Here"
            />
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
