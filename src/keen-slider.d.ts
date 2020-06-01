import React from 'react'

type THtmlElementGetter = () => NodeListOf<Element>
type TContainer = HTMLElement | string | THtmlElementGetter | number

type THookReturn = [React.RefObject<HTMLElement>, KeenSlider]

type TDetails = {
  direction: 1 | 0 | -1
  progressTrack: number
  progressSlides: number
  positions: {
    distance: number
    portion: number
  }[]
  speed: number
  relativeSlide: number
  absoluteSlide: number
  size: number
  widthOrHeight: number
}

type TOptions = {
  autoHeight?: boolean
  breakpoints?: {
    [key: string]: Omit<TOptionsEvent, 'breakpoints'>
  }
  centered?: boolean
  controls?: boolean
  dragSpeed?: number
  duration?: number
  friction?: number
  initial?: number
  loop?: boolean
  mode?: 'snap' | 'free' | 'free-snap'
  resetSlide?: boolean
  rubberband?: boolean
  slides?: THtmlElementGetter
  slidesPerView?: number
  spacing?: number
  vertical?: boolean
}

type TEvents = {
  afterChange: (instance: KeenSlider) => void
  beforeChange: (instance: KeenSlider) => void
  created: (instance: KeenSlider) => void
  dragEnd: (instance: KeenSlider) => void
  dragStart: (instance: KeenSlider) => void
  destroyed: (instance: KeenSlider) => void
  mounted: (instance: KeenSlider) => void
  move: (instance: KeenSlider) => void
  slideChanged: (instance: KeenSlider) => void
}

type TOptionsEvent = TOptions & TEvents

export default class KeenSlider {
  constructor(container: TContainer, options?: TOptionsEvents)
  controls: (active: boolean) => void
  next: () => void
  prev: () => void
  destroy: () => void
  refresh: () => void
  moveToSlide: (slide: number, duration?: number) => void
  resize: () => void
  details: () => TDetails
}

export function useKeenSlider(options?: TOptionsEvents): THookReturn