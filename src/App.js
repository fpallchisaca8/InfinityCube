import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three'
import { useRef, useEffect } from "react"
import { animate } from "motion"
import { threeEffect } from "motion/three"

// register Motion's Three.js support once, before the first animation
animate.addEffect(threeEffect)




//camera={{ position: [x, y, z], fov: 50 }}  fov = field of view
//orbitControls allows you to rotate the camera around the scene with mouse drag
// axis helpser : x-red y-green z-blue
function App() {
  
  return (
    <div className="App">
      <aside className='sidebar'>
        <header>
          <h1>Controls</h1>
        </header>

        <card className='uploadCard'> item</card>
        <nav>
          <button type="button" className="move-button">
            move
          </button>
        </nav>
      </aside>

      <main className="canvas-container">
      <Canvas camera={{ position: [5, 5, 10], fov: 30 }}>
        <OrbitControls enableZoom={true} enablePan={false} minDistance={5} maxDistance={20}/>
        <ambientLight intensity={2} />
        <axesHelper args={[5]} />
        <directionalLight position={[5, 5, 2]} />
        <InfinityCube />
      </Canvas>
      </main>  
    </div>
  )
}

const movements = {
  CUBE_A: {
    left: {
      cubes: [6, 2],
      angle: Math.PI
    },

    right: {
      cubes: [7, 3],
      angle: -Math.PI
    }
  },

  FLAT_A: {
    frontRow: {
      cubes: [6, 4, 5, 7],
      angle: Math.PI
    },

    backRow: {
      cubes: [3,0,1,2],
      angle: -Math.PI
    }
  }
}

/*
Set up on click event listener to trigger rotation
When the button is clicked, it will rotate the cubes in the specified direction and then pause animation.
Animation will resume when the button is clicked again and the cubes will rotate differently based on their position in the group.
*/



function InfinityCube() {
  var cubeRefs = useRef([]);
  var groupRef = useRef();
  
 
  /*
 useEffect(() => {
  animate(
    cubeRefs.current[7].rotation,
    { z: -Math.PI }, // 180 degrees in radians
    { duration: 3, 
      repeat: 0,
      ease: "easeinout" }
  );

 }, []);

  */

 useEffect(() => {
    if (cubeRefs.current[7] || cubeRefs.current[8]) {
      animate(
        cubeRefs.current[7].rotation,
        { z: -Math.PI }, // 180 degrees in radians
        { duration: 3, 
          repeat: 0,
          ease: "easeinout" }
      );
      animate(
      cubeRefs.current[7].position,
      { x: 1.5, y: -.5 }, 
      { duration: 3, ease: "easeinout" }
     );
     
      animate(
        cubeRefs.current[3].rotation,
        { z: -Math.PI }, // 180 degrees in radians
        { duration: 3, 
          repeat: 0,
          ease: "easeinout" }
      );
      animate(
        cubeRefs.current[3].position,
        { x: 1.5, y: -.5 }, 
        { duration: 3, ease: "easeinout" }
      );
    }
  
  }, []);

  return (

    <group ref={groupRef}>
      {[...Array(2).keys()].map((x) =>
      [...Array(2).keys()].map((y) => 
        [...Array(2).keys()].map((z) => {
          const id = x + y * 2 + z * 4

          return (
              <Cube
                key={id}
                id={id}

                cubeRef={(cube) => {
                  cubeRefs.current[id] = cube
                }}

                position={[ x - 0.5, y - 0.5, z - 0.5]}
              />
            )
          })
        )
    )}
    </group>
  )

}




function Cube ({id, position, cubeRef} ) {
  const colors = ['red', 'orange', 'white', 'purple', 'green', 'blue']

 return (
   <>
      <group>
        <mesh  ref={cubeRef} name = {`cube-${id}`} position = {position} >
        <boxGeometry args={[0.99, 0.99, 0.99]} />

        <meshStandardMaterial attach="material-0" color={colors[0] || 'black'} />
        <meshStandardMaterial attach="material-1" color={colors[1] || 'black'} /> 
        <meshStandardMaterial attach="material-2" color={colors[2] || 'black'} /> 
        <meshStandardMaterial attach="material-3" color={colors[3] || 'black'} /> 
        <meshStandardMaterial attach="material-4" color={colors[4] || 'black'} /> 
        <meshStandardMaterial attach="material-5" color={colors[5] || 'black'} /> 
      </mesh>
      </group>
    </>
 )
}

//how to rotate based of on the cube's position in the group?
function rotateCube(meshCube) {
}

export default App;
