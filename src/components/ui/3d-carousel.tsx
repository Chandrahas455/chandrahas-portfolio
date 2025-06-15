
"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { ChevronLeft } from "lucide-react"

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1] as const }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

interface CarouselProps {
  handleClick: (project: any, index: number) => void
  controls: any
  cards: any[]
  isCarouselActive: boolean
}

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: CarouselProps) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const [showSwipeHint, setShowSwipeHint] = useState(true)
    const faceCount = cards.length
    
    // Make cards smaller and more zoomed out for all categories
    const faceWidth = isScreenSizeSm ? 180 : 240
    
    // Calculate cylinder width to ensure proper spacing
    const cylinderWidth = faceWidth * Math.max(faceCount, isScreenSizeSm ? 5 : 8)
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    // Hide swipe hint after user interacts or after 5 seconds
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowSwipeHint(false)
      }, 5000)

      return () => clearTimeout(timer)
    }, [])

    const handleDragStart = () => {
      setShowSwipeHint(false)
    }

    return (
      <div
        className="flex h-full items-center justify-center relative"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Swipe Hint Arrow */}
        <AnimatePresence>
          {showSwipeHint && isCarouselActive && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none"
            >
              <motion.div
                animate={{ 
                  x: [-10, 10, -10],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex items-center gap-2 bg-black/80 text-white px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <span className="text-sm font-medium whitespace-nowrap">
                  {isScreenSizeSm ? "Swipe" : "Swipe left"}
                </span>
                <ChevronLeft className="w-4 h-4" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDragStart={handleDragStart}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((project, i) => (
            <motion.div
              key={`key-${project.id}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-white/80 backdrop-blur-sm p-4 shadow-lg"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(project, i)}
            >
              <div className="w-full space-y-3">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  layoutId={`img-${project.id}`}
                  className="pointer-events-none w-full rounded-xl object-cover aspect-[4/5]"
                  initial={{ filter: "blur(4px)" }}
                  layout="position"
                  animate={{ filter: "blur(0px)" }}
                  transition={transition}
                />
                <div className="text-center space-y-1">
                  <h3 className="text-sm font-bold text-black line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

interface ThreeDPhotoCarouselProps {
  projects: any[]
  onProjectClick: (project: any) => void
}

function ThreeDPhotoCarousel({ projects, onProjectClick }: ThreeDPhotoCarouselProps) {
  const [activeProject, setActiveProject] = useState<any | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()

  const handleClick = (project: any) => {
    setActiveProject(project)
    setIsCarouselActive(false)
    controls.stop()
    onProjectClick(project)
  }

  const handleClose = () => {
    setActiveProject(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className="relative">
      <div className="relative h-[500px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={projects}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel };
