import React from 'react';
import { BlockPicker } from 'react-color';
import { Draggable, state } from 'react-page-maker';

class DraggableHeader extends React.Component {
  state = {
    showColorPicker: false,
    background: '',
  };

  handleChangeComplete = (color) => {
    const { id, dropzoneID, parentID }= this.props;
    this.setState({ background: color.hex }, () => {
      state.updateElement(id, dropzoneID, parentID, {
        payload: { background: color.hex }
      });
    });
  };

  toggleColorPicker = () => {
    this.setState({
      showColorPicker: !this.state.showColorPicker
    });
  }

  render() {
    const {
      id, showBasicContent, showPreview,
      dropzoneID, parentID, name, payload,
      ...rest
    } = this.props;

    const background =  this.state.background ||
      payload && payload.background || '#37d67a';

    if (showBasicContent) {
      return (
        <Draggable { ...this.props } >
          {
            <span>Header</span>
          }
        </Draggable>
      )
    }

    if (showPreview) {
      return (
        <header style={{ background }}>
          <h2 className="center-heading">Header</h2>
        </header>
      );
    }

    return (
      <Draggable { ...this.props } >
        <header style={{ background }}>
          <button onClick={this.toggleColorPicker} className="color-picker">
            Set Color
            {
              this.state.showColorPicker ?
                <BlockPicker
                  color={ background }
                  onChangeComplete={ this.handleChangeComplete }
                /> : null
            }
          </button>
          <h2 className="center-heading">Header</h2>
        </header>
      </Draggable>
    )
  }
};

export default DraggableHeader;
