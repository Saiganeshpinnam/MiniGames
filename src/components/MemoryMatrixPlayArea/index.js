import {Component} from 'react'

import './index.css'

class MemoryMatrixPlayArea extends Component {
  state = {
    gridSizes: 3,
    highlightedBoxes: [],
    selectedBoxes: [],
    isClickable: false,
  }

  renderGridBoxes = () => {
    const {gridSizes} = this.state
    let gridBoxesIds = []

    for (let i = 0; i < gridSizes; i++) {
      for (let j = 0; j < gridSizes; j++) {
        gridBoxesIds.push(JSON.stringify(i) + JSON.stringify(j))
      }
    }
    return (
      <ul className="grids-container">
        {gridBoxesIds.map(eachBox => (
          <li key={eachBox} className="each-grid-box"></li>
        ))}
      </ul>
    )
  }

  render() {
    const {gridSizes} = this.state
    console.log(gridSizes)

    return (
      <div className="memory-play-area-bg-container">
        {this.renderGridBoxes()}
      </div>
    )
  }
}

export default MemoryMatrixPlayArea
