import { Canvas } from "@react-three/fiber"
import { Model } from "./assets/Scene"
import ModelRender from "./components/bitcoincc"
import * as THREE from 'three'
import { AsciiRenderer } from "./components/ascii-renderer"
import { useEffect, useRef, useState } from "react"
import { OrbitControls } from "@react-three/drei"
import Typewriter from 'typewriter-effect';

const textArray = [
    `Bitcoin is an open-source, decentralised peer-to-peer financial network, that launched on January 3, 2009.`,
    `Every few years, one or more of our financial institutions suffer huge losses, and present a no-win scenario to the government: <br><br>Print massive quantities of money to cover these losses, or<br>Let us go bankrupt and risk recession, or even a great depression scale event.`,
    `The government reliably chooses to print money to fund bailouts, resulting in increased inflation, and increased likelihood of similar scenarios in the future.`,
    `The cycle of financial recklessness and taxpayer funded bailouts happens roughly every ten years, and there seems to be no end in sight. <br><br>On October 31st, 2008, a mysterious individual going by the name of Satoshi Nakamoto, and who appeared to possess exceptional abilities in cryptography, mathematics, and coding, published a concise 9-page whitepaper titled "Bitcoin: A Peer-to-Peer Electronic Cash System."`,
    `It proposed a fair, stable and transparent system of hard money, with a strict cap of 21 million bitcoin, easily verifiable and auditable by anyone with a computer.`,
    `In February 2009, Satoshi Nakamoto wrote:<br><br>“The root problem with conventional currency is all the trust that's required to make it work. <br><br>The central bank must be trusted not to debase the currency,<br>but the history of fiat currencies is full of breaches of that trust. <br><br>Banks must be trusted to hold our money and transfer it electronically, <br>but they lend it out in waves of credit bubbles with barely a fraction in reserve. <br><br>We have to trust them with our privacy, trust them not to let identity thieves drain our accounts.”`,
    `Satoshi Nakamoto's Bitcoin empowers its users in several important ways.<br><br>Self-custody of assets: During a bank run, depositors become frightened the bank doesn't have enough money, so they queue at a bank teller or an ATM to attempt to retrieve their deposits.<br>With bitcoin, assets are secure and instantly available 24 hours a day.`,
    `Knowledge of Total Supply: Unlike traditional currencies, Bitcoin's total supply is capped at 21 million. Bitcoin users know their percentage of the total monetary supply at any given time.<br><br>Peer-to-Peer Transactions: Bitcoin enables peer-to-peer transactions, allowing users to send and receive payments directly without requiring an intermediary.<br>This leads to faster transactions, lower fees, and the ability to transact globally.`,
    `Accessibility: Bitcoin is available to anyone with an internet connection. This is advantageous in regions where access to traditional banking systems is limited or non-existent.<br><br>Protection against Hyperinflation: Since Bitcoin has a fixed supply, it can't be devalued through inflation as traditional currencies can.<br><br>In countries experiencing hyperinflation such as Venezuela, Zimbabwe, Argentina and Turkey, citizens are using bitcoin to take shelter and preserve their purchasing power.`,
    `Whilst it's a young technology exhibiting growing pains, and still has volatility, risks, and usability issues, Bitcoin holds true promise and a credible, secure, open-source alternative to the fiat standard of money.`,
    ]
    ;

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
                        camera={{ position: [0, 0, 170], fov: 70 }}                                                 
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
