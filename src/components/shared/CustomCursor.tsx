import { useEffect, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface CursorState {
  isHovering: boolean
  isClicking: boolean
  cursorText: string
}

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(true)
  const [cursorState, setCursorState] = useState<CursorState>({
    isHovering: false,
    isClicking: false,
    cursorText: '',
  })

  // Motion values for smooth cursor movement
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Spring configuration for smooth following
  const springConfig = { damping: 20, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Check if device has touch capability (mobile)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const checkTouchDevice = () => {
      const isTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      setIsTouchDevice(isTouch)
    }

    checkTouchDevice()
    window.addEventListener('resize', checkTouchDevice)

    return () => window.removeEventListener('resize', checkTouchDevice)
  }, [])

  const moveCursor = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
  }, [cursorX, cursorY])

  const handleMouseEnter = useCallback(() => setIsVisible(true), [])
  const handleMouseLeave = useCallback(() => setIsVisible(false), [])
  const handleMouseDown = useCallback(() => {
    setCursorState(prev => ({ ...prev, isClicking: true }))
  }, [])
  const handleMouseUp = useCallback(() => {
    setCursorState(prev => ({ ...prev, isClicking: false }))
  }, [])

  useEffect(() => {
    if (isTouchDevice) return

    // Add hover detection for interactive elements
    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.dataset.cursorHover === 'true'

      const cursorText = target.dataset.cursorText || ''

      setCursorState(prev => ({
        ...prev,
        isHovering: !!isInteractive,
        cursorText,
      }))
    }

    const handleElementLeave = () => {
      setCursorState(prev => ({
        ...prev,
        isHovering: false,
        cursorText: '',
      }))
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleElementHover)
    document.addEventListener('mouseout', handleElementLeave)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleElementHover)
      document.removeEventListener('mouseout', handleElementLeave)
    }
  }, [isTouchDevice, moveCursor, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp])

  // Don't render on touch devices
  if (isTouchDevice) return null

  const { isHovering, isClicking } = cursorState

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="relative"
          style={{
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            width: isHovering ? 60 : isClicking ? 24 : 32,
            height: isHovering ? 60 : isClicking ? 24 : 32,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        >
          <div
            className="w-full h-full rounded-full border-2 transition-colors duration-200"
            style={{
              borderColor: isHovering ? '#faff01' : 'rgba(250, 255, 1, 0.6)',
              backgroundColor: isHovering ? 'rgba(250, 255, 1, 0.1)' : 'transparent',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="bg-accent rounded-full"
          style={{
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            width: isHovering ? 8 : isClicking ? 4 : 6,
            height: isHovering ? 8 : isClicking ? 4 : 6,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Hide default cursor globally */}
      <style>{`
        body, body * {
          cursor: none !important;
        }

        @media (hover: none) and (pointer: coarse) {
          body, body * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  )
}
