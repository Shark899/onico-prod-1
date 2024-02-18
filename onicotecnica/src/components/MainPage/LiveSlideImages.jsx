import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import { useGlobalContext } from '../../context'

const LiveSlideImages = ({ images }) => {
  const { showPop, setShowPopLive } = useGlobalContext()
  return (
    <Slide
      slidesToScroll={2}
      slidesToShow={2}
      indicators={true}
      canSwipe={false}
      autoplay={false}
      arrows={true}
      easing='linear'
      cssClass='mt-6'
      responsive={[
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 8,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ]}
    >
      {images.map((image) => {
        return (
          <img
            key={image.id}
            src={image.image}
            alt=''
            className='w-52 rounded-xl cursor-pointer px-2'
            onClick={() => setShowPopLive(true)}
          />
        )
      })}
    </Slide>
  )
}
export default LiveSlideImages
