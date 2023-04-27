import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useLayoutEffect, useMemo } from "react"
import { AsciiEffect } from 'three-stdlib'

// URL reference: https://codesandbox.io/s/5jvdu3?file=/src/App.js:1241-2627

export function AsciiRenderer({
    renderIndex = 1,
    bgColor = 'white',
    fgColor = 'black',
    characters = ' .:-+*=%@#',
    invert = false,
    color = true,
    resolution = 0.16
  }) {
    // Reactive state
    const { size, gl, scene, camera } = useThree()
  
    // Create effect
    const effect = useMemo(() => {
      const effect = new AsciiEffect(gl, characters, { invert, color, resolution })
      effect.domElement.style.position = 'absolute'
      effect.domElement.style.top = '0px'
      effect.domElement.style.left = '0px'
      effect.domElement.style.pointerEvents = 'none'
      return effect
    }, [characters, invert, color, resolution])
  
    // Styling
    useLayoutEffect(() => {
      effect.domElement.style.color = fgColor
      effect.domElement.style.backgroundColor = bgColor
    }, [fgColor, bgColor])
  
    // Append on mount, remove on unmount
    useEffect(() => {
      gl.domElement.style.opacity = '0'
      gl.domElement.parentNode!.appendChild(effect.domElement)
      return () => {
        gl.domElement.style.opacity = '1'
        gl.domElement.parentNode!.removeChild(effect.domElement)
      }
    }, [effect])
  
    // Set size
    useEffect(() => {
      effect.setSize(size.width, size.height)
    }, [effect, size])
  
    // Take over render-loop (that is what the index is for)
    useFrame((state) => {
      effect.render(scene, camera)
    }, renderIndex)
  
    // This component returns nothing, it is a purely logical
    return null
  }