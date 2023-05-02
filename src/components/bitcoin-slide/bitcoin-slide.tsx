import { Canvas } from "@react-three/fiber"
import { Model } from "./assets/Scene"
import ModelRender from "./components/bitcoincc"
import * as THREE from 'three'
import { AsciiRenderer } from "./components/ascii-renderer"
import { useEffect, useRef, useState } from "react"
import { OrbitControls } from "@react-three/drei"
import Typewriter from 'typewriter-effect';

const textArray = [
    `Bitcoin is a decentralised, digital, peer-to-peer financial network that launched on the 3rd of January, 2009.`,
    `Bitcoin relies on a "blockchain" to record all transactions on the bitcoin network.<br><br>These transactions are then organized into "blocks" of transfers, and then these blocks are linked together to form the blockchain itself.`,
    `The first block on the blockchain is referred to as the "<i>genesis block</i>."<br><br>It includes a newspaper headline: <br><br>"<i>The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.</i>"<br><br>The ideological motivation behind bitcoin's creation is the unfairness inherent in regularly printing money to fund bailouts, resulting in inflation that ends up hurting the average person.`, 
    `Every few years, one or more of our financial institutions incurs huge losses, and presents a no-win scenario to the government: <br><br>Print massive quantities of money to cover these losses<br><br>or<br><br>We go bankrupt and there's a risk of recession, or perhaps even a great depression level event.`,
    `To avoid catastrophy, the government usually chooses to print money to fund bailouts, resulting in worsening inflation, and increased likelihood of similar scenarios in the future.<br><br>Taxpayer funded bailouts happen with regularity, and there seems to be no end in sight.`,
    `On October 31, 2008, Satoshi Nakamoto, an anonymous account with extensive knowledge of cryptography, mathematics, and programming, published a concise 9-page paper titled "Bitcoin: A Peer-to-Peer Electronic Cash System."<br><br>The paper proposed a fair, secure, and transparent monetary system with a maximum cap of 21 million bitcoins.`,
    `In February 2009, Satoshi Nakamoto wrote:<br><br>“The root problem with conventional currency is all the trust that's required to make it work. <br><br>The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust.<br><br>Banks must be trusted to hold our money and transfer it electronically, but they lend it out in waves of credit bubbles with barely a fraction in reserve.<br><br>We have to trust them with our privacy, trust them not to let identity thieves drain our accounts.”`,
    `Satoshi Nakamoto's Bitcoin empowers its users in several important ways.<br><br><u>Self-custody</u><br><br>During a bank run, depositors worry that their bank doesn't have enough money to cover all claims, so they queue at a bank teller or an ATM to attempt to retrieve their deposits.<br><br>With bitcoin, user assets are secure and instantly available 24 hours a day directly from a phone or hardware wallet.`,
    `<u>Peer-to-Peer Transactions</u><br><br>Bitcoin enables peer-to-peer transactions, allowing users to send and receive payments directly without requiring an intermediary.<br><br>This leads to faster transactions, lower fees, and the ability to transact globally.`,
    `<u>Accessibility</u><br><br> Bitcoin is available to anyone with an internet connection.<br><br>This is transformative in regions where access to traditional banking systems is limited or non-existent.`,
    `<u>Protection against Hyperinflation</u><br><br>Since Bitcoin has a fixed supply, it can't be devalued through inflation as traditional currencies can.<br><br>Countries experiencing hyperinflation such as Venezuela, Zimbabwe, Argentina and Turkey are seeing higher bitcoin trading volumes as citizens take shelter and preserve their purchasing power.`,
    `Bitcoin is still a young technology, exhibiting growing pains, usability challenges, and suffers from price volatility.<br><br>However, Bitcoin holds true promise as a credible, secure, open-source alternative to the fiat standard of money.`,
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
                            width: 750, 
                            color: "white",
                            fontFamily: "'Silkscreen', cursive"
                        }}
                    >
                        <Typewriter
                            key={textIndex.toString()}
                            options={{delay: 49}}
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
