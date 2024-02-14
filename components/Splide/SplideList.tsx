"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { useTranslation } from "next-i18next"
import SplideCard from "./SplideCard"

export type Slide = {
  title: string
  description: string
  thumbnail: string
  features: string[]
  link: string
}

export default function SplideList() {
  const { t } = useTranslation()
  // Generate iterable array from the slider object (i18n translation file)
  const slides: Slide[] = t("slides", {
    returnObjects: true
  })

  return (
    <Splide
      options={{
        rewind: true,
        type: "loop",
        perPage: 3,
        lazyLoad: "nearby",
        fixedHeight: "400px",
        breakpoints: {
          1280: {
            perPage: 1,
            fixedHeight: "auto",
            autoHeight: true
          }
        },
        gap: "20px",
        perMove: 1,
        keyboard: "global"
      }}
      aria-label='slide'
    >
      {slides.map((slide) => {
        return (
          <SplideSlide key={slide.title}>
            <SplideCard
              title={slide.title}
              description={slide.description}
              thumbnail={slide.thumbnail}
              technologies={slide.features}
              link={slide.link}
            />
          </SplideSlide>
        )
      })}
    </Splide>
  )
}
