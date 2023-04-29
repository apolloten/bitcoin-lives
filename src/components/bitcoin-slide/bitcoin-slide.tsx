import { Canvas } from "@react-three/fiber"
import { Model } from "./assets/Scene"
import ModelRender from "./components/bitcoincc"
import * as THREE from 'three'
import { AsciiRenderer } from "./components/ascii-renderer"
import { useEffect, useRef, useState } from "react"
import { OrbitControls } from "@react-three/drei"
import Typewriter from 'typewriter-effect';

const textArray = [
    `Bitcoin, a decentralized network designed for peer-to-peer cash transfers, made its debut on January 3, 2009.<br><br>Conceived as an answer to the financial crisis that rocked the world between 2007 and 2008, Bitcoin is designed with a finite limit, capping the total quantity of Bitcoin that can ever exist to 21 million.`,
    `Bitcoin's initial block is referred to as the "genesis block."<br><br>It includes a headline from a British newspaper: <br><br>"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."<br><br>Citizen's tax money being repeatedly used to bail out banks that gambled and lost, is the underlying ideological motivation behind the creation of bitcoin.`, 
    `There can only ever be 21 million Bitcoin in existence.<br><br>This is in stark contrast to fiat currency which can be printed infinitely by central banks and governments.`, 
    `The identity of Bitcoin's creator, Satoshi Nakamoto, remains unknown, despite various investigations and claims.<br><br>This is probably an intentional decision knowing that governments would likely attempt to seize control of the network through the founder(s), if his/her/their identity were known.`
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
            style={{height: "100%", width: "100%", display: "flex", alignItems: "center"}}    
        >
            {/* text */}            
            <div            
                style={{ flexGrow: 1 }}
            >
                <div
                    style={{display: "flex", alignItems: "center", justifyContent: "center"}}    
                >
                    <div
                        style={{
                            background: "rgba(0,0,0,0.5)", 
                            fontSize: 30, 
                            paddingLeft: 20, 
                            paddingRight: 20, 
                            width: 500, 
                            color: "white",
                            fontFamily: "'Silkscreen', cursive"
                        }}
                    >
                        <Typewriter
                            key={textIndex.toString()}
                            options={{delay: 45}}
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
            
            {/* bitcoin icon */}       
            <div
            style={{ flexGrow: 1 }}
            >
                <div
                    style={{width: 600, height: 600 }}    
                >            
                    <Canvas
                        camera={{ position: [0, 0, 100], fov: 90 }}                                                 
                    >
                        <ModelRender />                
                        <pointLight intensity={10} rotation={[200,0,0]} position={[0, 150, 100]} />                                
                        {showAscii && <AsciiRenderer/>}
                    </Canvas>                
                </div>
            </div>
            
        </div>
    )
}

export default BitcoinSlide
