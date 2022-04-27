
import React, { useState } from 'react';
import "./App.css";
import playerImgDown from './images/red1.png'
// import playerImgUp from './images/red2.png'
// import playerImgSide from './images/red3.png'

export default function App() {
  return (
    <div>
      <section>
        <PlayerGrid />
      </section>
    </div>
  );
}

function PlayerGrid() {

  const [positionValue, setPositionValue] = useState(1)
  const grid = [];
  //this will be our multi dimensional array
  //const grid2 = []
  const [rotationValue, setRotationValue] = useState(90)
  const style = {
    transform: `rotate(${rotationValue}deg)`,
    transition: 'transform 150ms ease'
  }

  //track rotation
  //todo css rotation of > character

  //down + 7
  //right + 1
  //left -1
  //up - 7

  //

  const MovePlayer = () => {
    //TODO if hits gride edge, auto-rotate
    //should be able to do this cleaner with a 3D grid, for now first pass to get it working
    if (positionValue == 7 && rotationValue == 90 || 
        positionValue == 49 && rotationValue == 180 ||
        positionValue == 43 && rotationValue == 270 ||
        positionValue == 1 && rotationValue == 360
        ) {
      RotatePlayer()
    } else {
        if (rotationValue == 90) {
          setPositionValue(positionValue + 1)
        } else if (rotationValue == 180) {
          setPositionValue(positionValue + 7)
        } else if (rotationValue == 270) {
          setPositionValue(positionValue - 1)
        } else if (rotationValue == 360) {
          setPositionValue(positionValue - 7)
        }
      }
    }

  //populates grid
  for (let i = 1; i <= 49; i++) {
    grid.push(i);
  }
  //populates multidimensional grid
  // for (let i = 1; i <= 7; i++) {
  //   for (let j = 1; j <= 7; j++) {
  //     let coord = [i, j];
  //     grid2.push(coord);
  //   }
  // }
  //console.log(grid2)

  const RotatePlayer = () => {
    if (rotationValue == 360) {
      setRotationValue(90)
    } else {
      setRotationValue(rotationValue + 90)
    }
    console.log("style", style)
  }

  return (
    <>
      <div class="grid">
        {grid.map((grid, i) => (
          <div class="cell">
            {positionValue === grid ? <Player /> : ''}
          </div>
        ))}
      </div>
      <button type="submit" onClick={() => { MovePlayer() }}> Move</button>
      <button type="submit" onClick={() => { RotatePlayer() }}> Turn</button>
    </>
  )

  function Player() {



    return (
      <>
        <p style={style}>{'^'}</p>
      </>
    )
  }

}