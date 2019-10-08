import React from 'react';
import { FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { FaTrash } from 'react-icons/fa';

import { Draggable, state } from 'react-page-maker';

const DraggableTextbox = (props) => {
  const {
    id, showBasicContent, showPreview,
    dropzoneID, parentID, name
  } = props;

  if (showBasicContent) {
    return (
      <Draggable { ...props } >
        {
          <span>{ name }</span>
        }
      </Draggable>
    )
  }

  if (showPreview) {
    return (
      <FormGroup className="m-0">
        <Label className="col-sm-12">
          <span>{name}</span>
          <Input type="text" />
        </Label>
      </FormGroup>
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
          <Input type="text" onChange={onChange} />
        </Label>
      </FormGroup>
    </Draggable>
  )
};

export default DraggableTextbox;