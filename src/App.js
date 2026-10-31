import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
//import { useAnimationFrame } from "motion/react"
//import { useRef } from "react"


//camera={{ position: [x, y, z], fov: 50 }}  fov = field of view
//orbitControls allows you to rotate the camera around the scene with mouse drag
// axis helpser : x-red y-green z-blue
function App() {

  return (
    <div className="App">
   
      <Canvas camera={{ position: [5, 5, 10], fov: 30 }}> 
        <OrbitControls enableZoom={false} enablePan={false} /> 
        <ambientLight intensity={2} />
        <axesHelper args={[5]}/>
        <directionalLight position={[5, 5, 2]}/>
          <InfinityCube/>
        
      </Canvas>
    </div>
  )
}


function InfinityCube() {
  
  return (
    <group >
    {[...Array(2).keys()].map((x) =>
      [...Array(2).keys()].map((y) => 
        [...Array(2).keys()].map((z) => 
        <Cube 
          key={x + y * 2 + z * 4} 
          position={[x - 0.5, y - 0.5, z - 0.5]} />
            )
        )
    )}
  </group>
  )


  //Choose the group of cubes (which state?)
  //State ( say )
  //reset?
  

  //function rotate (axis, group, degeree?)

}


function Cube ({position}) {
  const colors = ['red', 'orange', 'white', 'yellow', 'green', 'blue']
  
 return (
   <>
      <mesh position={position} >
      <boxGeometry args={[0.99, 0.99, 0.98]} />
      <meshStandardMaterial attach="material-0" color={colors[0] || 'black'} />
      <meshStandardMaterial attach="material-1" color={colors[1] || 'black'} /> 
      <meshStandardMaterial attach="material-2" color={colors[2] || 'black'} /> 
      <meshStandardMaterial attach="material-3" color={colors[3] || 'black'} /> 
      <meshStandardMaterial attach="material-4" color={colors[4] || 'black'} /> 
      <meshStandardMaterial attach="material-5" color={colors[5] || 'black'} /> 
    </mesh>
    </>
 )
}


function rotateAnimantion(){

}
export default App;
