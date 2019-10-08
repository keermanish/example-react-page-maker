import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { Draggable, Dropzone } from 'react-page-maker';

class DraggableLayoutR3C3 extends Component {
  _onDrop = (data, cb) => {
    if (data.id === this.props.id) {
      return false;
    }

    // no need to ask id and name again
    if (data.payload && data.payload.dropped) {
      return cb(data);
    }

    // This can be an async call or some modal to fetch data
    const name = window.prompt('Enter name of field');
    const id = window.prompt('Enter id of field');

    const result = cb({
      ...data,
      name,
      id,
      payload: { dropped: true }
    });
  }

  render() {
    const {
      showBasicContent,
      showPreview,
      initialElements,
      id,
      ...rest
    } = this.props;

    if (showBasicContent) {
      return (
        <Draggable { ...this.props } >
          <span>{ rest.name }</span>
        </Draggable>
      )
    }

    if (showPreview) {
      return (
        <div>
          <div className="mt-3">
            <Row className="mb-3">
              <Col sm="4">
                {rest.childNode['canvas-1-1']}
              </Col>
              <Col sm="4">
                {rest.childNode['canvas-1-2']}
              </Col>
              <Col sm="4">
                {rest.childNode['canvas-1-3']}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm="4">
                {rest.childNode['canvas-2-1']}
              </Col>
              <Col sm="4">
                {rest.childNode['canvas-2-2']}
              </Col>
              <Col sm="4">
                {rest.childNode['canvas-2-3']}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm="4">
                {rest.childNode['canvas-3-1']}
              </Col>
              <Col sm="4">
                {rest.childNode['canvas-3-2']}
              </Col>
              <Col sm="4">
                {rest.childNode['canvas-3-3']}
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
      <Draggable { ...this.props } >
        <span>{ rest.name || 'Grid Layout' }</span>
        <div className="mt-3">
          <Row className="mb-3">
            <Col sm="4">
              <Dropzone
                placeholder="Drop Here"
                parentID={id}
                initialElements={filterInitialElements('canvas-1-1')}
                id="canvas-1-1"
                onDrop={this._onDrop}
                capacity={2}
              />
            </Col>
            <Col sm="4">
              <Dropzone
                placeholder="Drop Here"
                parentID={id}
                initialElements={filterInitialElements('canvas-1-2')}
                id="canvas-1-2"
                onDrop={this._onDrop}
                capacity={1}
              />
            </Col>
            <Col sm="4">
              <Dropzone
                placeholder="Drop Here"
                parentID={id}
                initialElements={filterInitialElements('canvas-1-3')}
                id="canvas-1-3"
                onDrop={this._onDrop}
                capacity={1}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm="4">
              <Dropzone
                placeholder="Drop Here"
                parentID={id}
                initialElements={filterInitialElements('canvas-2-1')}
                id="canvas-2-1"
                onDrop={this._onDrop}
                capacity={1}
              />
            </Col>
            <Col sm="4">
              <Dropzone
                placeholder="Drop Here"
                parentID={id}
                initialElements={filterInitialElements('canvas-2-2')}
                id="canvas-2-2"
                onDrop={this._onDrop}
                capacity={1}
              />
            </Col>
            <Col sm="4">
              <Dropzone
                placeholder="Drop Here"
                parentID={id}
                initialElements={filterInitialElements('canvas-2-3')}
                id="canvas-2-3"
                onDrop={this._onDrop}
                capacity={1}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm="4">
              <Dropzone
                placeholder="Drop Here"
                parentID={id}
                initialElements={filterInitialElements('canvas-3-1')}
                id="canvas-3-1"
                onDrop={this._onDrop}
                capacity={1}
              />
            </Col>
            <Col sm="4">
              <Dropzone
                placeholder="Drop Here"
                parentID={id}
                initialElements={filterInitialElements('canvas-3-2')}
                id="canvas-3-2"
                onDrop={this._onDrop}
                capacity={1}
              />
            </Col>
            <Col sm="4">
              <Dropzone
                placeholder="Drop Here"
                parentID={id}
                initialElements={filterInitialElements('canvas-3-3')}
                id="canvas-3-3"
                onDrop={this._onDrop}
                capacity={1}
              />
            </Col>
          </Row>
        </div>
      </Draggable>
    )
  }
}

export default DraggableLayoutR3C3;