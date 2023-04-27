import { Canvas } from "@react-three/fiber"
import { Model } from "./assets/Scene"
import ModelRender from "./components/bitcoincc"
import * as THREE from 'three'
import { AsciiRenderer } from "./components/ascii-renderer"
import { useEffect, useRef, useState } from "react"
import { OrbitControls } from "@react-three/drei"

const BitcoinSlide = () => {
    const [showAscii,setShowAscii] = useState(true)
    const showAsciiRef = useRef(true)
    useEffect(() => {        
        /* setInterval(() => {
            showAsciiRef.current = !showAsciiRef.current
            setShowAscii(showAsciiRef.current)
        }, 2000) 
        */
    }, [])
    return (
        <div
            style={{width: 800, height: 800}}    
        >
            <Canvas
                camera={{ position: [0, 0, 100], fov: 90 }}                                                 
            >
                <ModelRender />                
                {/* <ambientLight intensity={1} /> */}
                <pointLight intensity={10} rotation={[200,0,0]} position={[0, 150, 100]} />                                
                {showAscii && <AsciiRenderer/>}
            </Canvas>            
            <p>hello bitcoin</p>
        </div>
    )
}
export default BitcoinSlide