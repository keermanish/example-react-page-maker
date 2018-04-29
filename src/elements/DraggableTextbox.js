import React from 'react';
import { FormGroup, Label, Input, Col, Row } from 'reactstrap';

import { Draggable } from '../react-page-maker/index.js';

const DraggableTextbox = (props) => {
  const { showBasicContent, ...rest }= props;

  if (showBasicContent) {
    return (
      <Draggable { ...props } >
        {
          <span>{ rest.name || 'Textbox' }</span>
        }
      </Draggable>
    )
  }

  return (
    <Draggable { ...props } >
      <FormGroup className="m-0">
        <Label className="col-sm-12">
          <span>{rest.name}</span>
            <Input type="text" />
        </Label>
      </FormGroup>
    </Draggable>
  )
};

export default DraggableTextbox;