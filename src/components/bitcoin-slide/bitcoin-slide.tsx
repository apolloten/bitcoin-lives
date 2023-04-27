import { Canvas } from "@react-three/fiber"
import { Model } from "./assets/Scene"
import * as THREE from 'three'
import { AsciiRenderer } from "./components/ascii-renderer"
import { useEffect, useRef, useState } from "react"

const BitcoinSlide = () => {
    const [showAscii,setShowAscii] = useState(false)
    const showAsciiRef = useRef(false)
    useEffect(() => {
        setInterval(() => {
            showAsciiRef.current = !showAsciiRef.current
            setShowAscii(showAsciiRef.current)
        }, 2000) 
    }, [])
    return (
        <div
            style={{width: 800, height: 800}}    
        >
            <Canvas
                camera={{ position: [0, 0, -100], fov: 90 }}                                 
            >
                <Model />
                <ambientLight />
                <pointLight position={[0, 0, -100]} />                
                {showAscii && <AsciiRenderer/>}
            </Canvas>            
            <p>hello bitcoin</p>
        </div>
    )
}
export default BitcoinSlide