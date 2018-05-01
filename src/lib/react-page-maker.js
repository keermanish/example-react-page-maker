// import all components
import CanvasImp from './react-page-maker/src/components/Canvas/Canvas';
import DropzoneImp from './react-page-maker/src/components/Dropzone/Dropzone';
import DraggableImp from './react-page-maker/src/components/Draggable/Draggable';
import PaletteImp from './react-page-maker/src/components/Palette/Palette';
import TrashImp from './react-page-maker/src/components/Trash/Trash';

// import all API's
import stateImp from './react-page-maker/src/core/state';
import coreImp from './react-page-maker/src/core/core';

// import basic style
import './react-page-maker/src/style.css';

// all components
export const Canvas = CanvasImp;
export const Dropzone = DropzoneImp;
export const Draggable = DraggableImp;
export const Palette = PaletteImp;
export const Trash = TrashImp;

// all open API's
export const state = stateImp;
export const core = coreImp;

// since this is reuired function, keeping seprate
export const registerPaletteElements = coreImp.registerPaletteElements;
