import { Canvas } from "@react-three/fiber"
import { Model } from "./assets/Scene"
import ModelRender from "./components/bitcoincc"
import * as THREE from 'three'
import { AsciiRenderer } from "./components/ascii-renderer"
import { useEffect, useRef, useState } from "react"
import { OrbitControls } from "@react-three/drei"
import Typewriter from 'typewriter-effect';

const textArray = [
    "Bitcoin was launched on January 3, 2009. Bitcoin emerged as a response to the financial crisis during 2007-2008, with its decentralised nature and reliance on a peer-to-peer network. It aimed to create a new form of digital money that was not controlled by any single entity and provide more financial stability and freedom.", 
    "Text 2", 
    "Text 3", 
    "Text 4"
];

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

    const [textIndex,setTextIndex] = useState(0)

    return (
        <div
            style={{height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}    
        >
            {/* bitcoin icon */}       
            <div
                style={{width: 1920, height: 1080, zIndex:1}}    
            >
                <Canvas
                    camera={{ position: [0, 0, 100], fov: 90 }}                                                 
                >
                    <ModelRender />                
                    <pointLight intensity={10} rotation={[200,0,0]} position={[0, 150, 100]} />                                
                    {showAscii && <AsciiRenderer/>}
                </Canvas>                
            </div>

            {/* text */}            
            <div            
                style={{zIndex:10, position: "absolute", left:0, right:0, top:0, bottom:0}}
            >
                <div
                    style={{height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}    
                >
                    <div
                        style={{background: "rgba(0,0,0,0.5)", fontSize: 30, paddingLeft: 20, paddingRight: 20, width: 500, color: "white"}}
                    >
                        <Typewriter
                            key={textIndex.toString()}
                            options={{delay: 1}}
                            onInit={(typewriter) => {                                
                                typewriter
                                    .typeString(textArray[textIndex])
                                    .pauseFor(5000)
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                        let nextIndex = textIndex+1
                                        if (nextIndex >= textArray.length) {
                                            nextIndex = 0
                                        } 
                                        setTextIndex(nextIndex)                                        
                                    })                                
                                typewriter.start();
                            }}                                       
                        />
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default BitcoinSlide
