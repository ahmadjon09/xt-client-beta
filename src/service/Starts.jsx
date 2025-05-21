import ReactStars from 'react-rating-stars-component'

const StarRating = ({ rating }) => {
  return (
    <ReactStars
      count={5}
      value={rating}
      isHalf={true}
      edit={false}
      size={20}
      activeColor='#FFD700'
    />
  )
}
