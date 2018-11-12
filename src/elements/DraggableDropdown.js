import React from 'react';
import { FormGroup, Label, Input, Col, Row } from 'reactstrap';

import { Draggable } from 'react-page-maker';

const DraggableDropdown = (props) => {
  const { showBasicContent, showPreview, ...rest }= props;

  if (showBasicContent) {
    return (
      <Draggable { ...props } >
        {
          <span>{ rest.name || 'Dropdown' }</span>
        }
      </Draggable>
    )
  }

  if (showPreview) {
    return (
      <Label className="col-sm-12">
        <span>{rest.name}</span>
        <Input type="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Input>
      </Label>
    );
  }

  return (
    <Draggable { ...props } >
      <FormGroup className="m-0">
        <Label className="col-sm-12">
          <span>{rest.name}</span>
          <Input type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Input>
        </Label>
      </FormGroup>
    </Draggable>
  )
};

export default DraggableDropdown;