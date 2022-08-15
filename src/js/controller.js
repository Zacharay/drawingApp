import gridView from './views/gridView.js';
import * as model from './model.js' 
const init = function()
{
    gridView.renderGrid(model.state.gridSize);
}
init();