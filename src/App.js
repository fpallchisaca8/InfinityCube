import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Edges } from '@react-three/drei';


//camera={{ position: [x, y, z], fov: 50 }}  fov = field of view
//orbitControls allows you to rotate the camera around the scene with mouse drag
function App() {
  return (
    <div className="App">
   
      <Canvas camera={{ position: [5, 5, 10], fov: 30 }}> 
        <OrbitControls enableZoom={false} enablePan={false} /> 
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 2]}/>
          <InfinityCube/>
      </Canvas>
    </div>
  )
}


function InfinityCube() {

  return (
    <group>

      <mesh position={[1.5, 0.5, 0.5]}>
        <boxGeometry label="R2" args={[1, 1, 1]} />
        <meshStandardMaterial label="cubeA1" attach="material-0" color="#ff0000"/>
        <meshStandardMaterial label="cubeA2" attach="material-1" color="#fff200" />
        <meshStandardMaterial label="cubeA3" attach="material-2" color="#00ff66" />
        <meshStandardMaterial label="cubeA4" attach="material-3" color="#ff7700" />
        <meshStandardMaterial label="cubeA5" attach="material-4" color="#7700ff" />
        <meshStandardMaterial label="cubeA6" attach="material-5" color="#ff00d0" />
        <Edges
          linewidth={2}
          scale={1}
          threshold={15}
          color="black"
         />
      </mesh>

      <mesh  position={[0.5,0.5,0.5]}>
        <boxGeometry label="cubeB" attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />

        <Edges
          linewidth={2}
          scale={1}
          threshold={15}
          color="black"
         />
         
      </mesh>

      <mesh position={[0.5, -0.5, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
        <Edges
          linewidth={2}
          scale={1}
          threshold={15}
          color="black"
         />
      </mesh>

      <mesh position={[1.5, -0.5, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
        <Edges
          linewidth={2}
          scale={1}
          threshold={15}
          color="black"
         />
      </mesh>

      <mesh position={[1.5, 0.5, -0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
        <Edges
          linewidth={2}
          scale={1}
          threshold={15}
          color="black"
         />
      </mesh>

      <mesh position={[1.5, -0.5, -0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
        <Edges
          linewidth={2}
          scale={1}
          threshold={15}
          color="black"
         />
      </mesh>

      <mesh position={[0.5, 0.5 , -0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
        <Edges
          linewidth={2}
          scale={1}
          threshold={15}
          color="black"
         />
      </mesh>

      <mesh position={[0.5, -0.5, -0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
        <Edges
          linewidth={2}
          scale={1}
          threshold={15}
          color="black"
         />
      </mesh>
    </group>
  )
}

export default App;
