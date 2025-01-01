import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface StoryboardCanvasProps {
  frames: string[]
}

export const StoryboardCanvas = ({ frames }: StoryboardCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvas,
      alpha: true,
      antialias: true 
    })

    // Set size
    const updateSize = () => {
      const container = canvas?.parentElement
      if (!container) return
      renderer.setSize(container.clientWidth, container.clientHeight, false)
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
    }
    updateSize()

    // Create frames
    const frameGeometry = new THREE.PlaneGeometry(3.5, 5.25)
    const frames3D: THREE.Mesh[] = []
    const textureLoader = new THREE.TextureLoader()

    frames.forEach((frame, index) => {
      const texture = textureLoader.load(frame)
      const material = new THREE.MeshBasicMaterial({ 
        map: texture,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
      })
      const mesh = new THREE.Mesh(frameGeometry, material)
      mesh.userData.index = index
      mesh.userData.originalScale = mesh.scale.clone()
      frames3D.push(mesh)
      scene.add(mesh)
    })

    // Camera setup
    camera.position.z = 20
    camera.position.y = 1.5
    camera.lookAt(0, 0, 0)

    // Raycaster setup
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let hoveredMesh: THREE.Mesh | null = null

    // Mouse handlers
    const onMouseMove = (event: MouseEvent) => {
      event.preventDefault()
      
      const rect = canvas?.getBoundingClientRect()
      if (!rect) return

      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(frames3D)

      // Reset previous hover
      if (hoveredMesh && (!intersects.length || intersects[0].object !== hoveredMesh)) {
        hoveredMesh.scale.set(1, 1, 1)
        hoveredMesh = null
      }

      // Set new hover
      if (intersects.length > 0) {
        const newHoveredMesh = intersects[0].object as THREE.Mesh
        if (hoveredMesh !== newHoveredMesh) {
          hoveredMesh = newHoveredMesh
          hoveredMesh.scale.set(2, 2, 2)
          console.log('Hovering frame:', hoveredMesh.userData.index)
        }
      }
    }

    // Animation
    const startTime = Date.now()
    const rotationDuration = 20000  // Changed from 10000 to 20000 (20 seconds per rotation)
    
    const animate = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = (elapsed % rotationDuration) / rotationDuration
      
      frames3D.forEach((frame, index) => {
        if (frame !== hoveredMesh) {
          const baseAngle = (index / frames.length) * Math.PI * 2
          const rotationAngle = baseAngle - (progress * Math.PI * 2)
          
          frame.position.x = Math.cos(rotationAngle) * 12
          frame.position.z = Math.sin(rotationAngle) * 12
          frame.rotation.y = -rotationAngle
        } else {
          // Hovered frame stays in front
          frame.position.set(0, 0, 5)
          frame.rotation.set(0, 0, 0)
        }
      })

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    // Event listeners
    canvas.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', updateSize)
    
    animate()

    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', updateSize)
      scene.clear()
      renderer.dispose()
    }
  }, [frames])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-pointer"
      style={{ 
        background: 'transparent',
        touchAction: 'none'
      }}
    />
  )
} 