"use client"
import { useEffect, useRef, useState } from "react"
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar"

import "react-circular-progressbar/dist/styles.css"

type InfoCircleBarParams = {
  percentageValue: number
  title: string
}

const InfoCircleBar = ({ percentageValue, title }: InfoCircleBarParams) => {
  const [percentage, setPercentage] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeout = setTimeout(() => {
              if (percentage < percentageValue) {
                setPercentage(percentage + 1)
              }
            }, 10)
          }
        })
      },
      { threshold: 0 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
        clearTimeout(timeout)
      }
    }
  }, [percentage, percentageValue])
  return (
    <div
      ref={containerRef}
      className='flex flex-col items-center justify-center'
    >
      <div className='h-[70px] w-[70px] md:h-[100px] md:w-[100px]'>
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            strokeLinecap: "round",
            textSize: "20px",
            pathTransitionDuration: 0.5,
            pathColor: "var(--primary-color)",
            textColor: "var(--primary-color)",
            trailColor: "var(--dark-color)"
          })}
        >
          <p className='text-base font-black text-primary dark:text-cLight lg:text-lg'>
            {percentage}%
          </p>
        </CircularProgressbarWithChildren>
      </div>
      <p className='mt-3 text-center text-sm font-medium text-cDark dark:text-cLight'>
        {title}
      </p>
    </div>
  )
}

export default InfoCircleBar
