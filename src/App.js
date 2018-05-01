import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import ReactJson from 'react-json-view';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
  Canvas,
  Palette,
  state,
  Trash,
  core,
  registerPaletteElements
} from './lib/react-page-maker';

import { elements } from './const';
import DraggableTextbox from './elements/DraggableTextbox';
import DraggableLayoutR3C3 from './elements/DraggableLayoutR3C3';
import DraggableLayoutR1C2 from './elements/DraggableLayoutR1C2';
import DraggableDropdown from './elements/DraggableDropdown';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    registerPaletteElements([{
      type: elements.TEXTBOX,
      component: DraggableTextbox
    }, {
      type: elements.DROPDOWN,
      component: DraggableDropdown
    }, {
      type: elements.GRID_LAYOUT_3_3,
      component: DraggableLayoutR3C3
    }, {
      type: elements.GRID_LAYOUT_1_2,
      component: DraggableLayoutR1C2
    }]);
  }

  state = {
    currentState: []
  }

  componentWillMount() {
    state.addEventListener('change', (newState) => {
      this.setState({
        currentState: newState
      })
    });
  }

  state = {
    data: null
  }

  initialElements = [{
    type: elements.TEXTBOX,
    name: 'Existing Field 1',
    id: 'ef1',
    component: DraggableTextbox
  }]

  paletteItemsToBeRendered = [{
    type: elements.TEXTBOX,
    name: 'Text Field',
    id: 'f1',
    payload: {
      fname: 'Manish',
      lname: 'Keer'
    },
    elementProps: {}
  }, {
    type: elements.DROPDOWN,
    name: 'Dropdown Field',
    id: 'f2'
  }, {
    type: elements.GRID_LAYOUT_3_3,
    name: '3 by 3 Grid',
    id: '3-3-grid'
  }, {
    type: elements.GRID_LAYOUT_1_2,
    name: '1 by 2 Grid',
    id: '1-2-grid'
  }]

  _onDrop = (data, cb) => {
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
  }

  _clearState = () => {
    state.clearState();
  }

  render() {
    return (
      <div className="App container">
        <Row className="page-builder row">
          <Col sm="6" className="canvas-container">
            <Canvas onDrop={this._onDrop} initialElements={this.initialElements} placeholder="Drop Here" />
          </Col>
          <Col sm="2">
            <Palette paletteElements={this.paletteItemsToBeRendered} />
            <Trash />
            <Button color="danger" onClick={this._clearState}>Flush Canvas</Button>
          </Col>
          <Col sm="4">
            <ReactJson src={this.state.currentState} collapsed theme="solarized" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
