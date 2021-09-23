const Rating = ({ value, text }) => {
  return (
    <div className='rating'>
      <span>
        {[1, 2, 3, 4, 5].map((index) => (
          <i
            key={index}
            className={
              value >= index
                ? 'fas fa-star'
                : value >= index - 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }></i>
        ))}
      </span>
      <div>
        {value && value} {text && `from ${text}`}
      </div>
    </div>
  );
};

export default Rating;
