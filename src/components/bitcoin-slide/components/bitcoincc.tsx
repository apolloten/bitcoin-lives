import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

function ModelRender() {
    const geom = useLoader(STLLoader, "/bitcoincc.stl");

    const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    //meshRef.current!.rotation.x -= 0.01
    //meshRef.current!.rotation.y -= 0.01
    meshRef.current!.rotation.z -= 0.01
  }) 
  
    return (
      <mesh 
        geometry={geom}
        ref={meshRef}
        rotation={[350,0,120]}
        scale={[12,12,12]}
        position={[0,-95,0]}
      >
        <meshPhongMaterial color="black" />
      </mesh>
    )
  }
export default ModelRender