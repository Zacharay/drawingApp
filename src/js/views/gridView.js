class gridView {
    _parentElement = document.querySelector('.grid');
    _gridSize =16;
    renderGrid(gridSize)
    {
        this._gridSize = gridSize;
        this._parentElement.style = `grid-template-rows: repeat(${this._gridSize},1fr); grid-template-columns: repeat(${this._gridSize},1fr);`;
        const markup = this._createMarkup();
        this._parentElement.innerHTML = markup;
    }
    _createMarkup()
    {
        let html='';
        for(let i=0;i<this._gridSize;i++)
        {
            for(let j=0;j<this._gridSize;j++)
            {
                if(i==this._gridSize-1)
                {
                    if(j==this._gridSize-1)
                    {
                        html+=`<div class="grid-cell border-top border-left border-right border-bottom"></div>`;
                        continue;
                    }
                    else
                    {
                        html+=`<div class="grid-cell border-top border-left border-bottom"></div>`;
                        continue;
                    }
                }
                if(j==this._gridSize-1)
                {
                    html+=`<div class="grid-cell border-top border-left border-right"></div>`;
                    continue;
                }
                html+=`<div class="grid-cell border-top border-left"></div>`;

            }
        }
        return html;
    }
}
export default new gridView();