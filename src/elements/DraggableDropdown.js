import React from 'react';
import { FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { FaTrash } from 'react-icons/fa';

import { Draggable, state } from 'react-page-maker';

const DraggableDropdown = (props) => {
  const {
    id,
    showBasicContent, showPreview,
    dropzoneID, parentID, name
  } = props;

  if (showBasicContent) {
    return (
      <Draggable { ...props } >
        {
          <span>{name}</span>
        }
      </Draggable>
    )
  }

  if (showPreview) {
    return (
      <Label className="col-sm-12">
        <span>{name}</span>
        <Input type="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Input>
      </Label>
    );
  }

  const onChange = (e) => {
    const value = e.target.value;
    state.updateElement(id, dropzoneID, parentID, { name: value });
  };

  return (
    <Draggable { ...props } >
      <FormGroup className="m-0">
        <Label className="col-sm-12">
          <span>{name}</span>
          <FaTrash
            className="pull-right"
            color="#dc3545"
            onClick={() => state.removeElement(id, dropzoneID, parentID)}
          />
          <Input type="select" onChange={onChange}>
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