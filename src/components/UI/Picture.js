const Picture = (props) => {

  return (
    <div className='image-div'>
      <img className='image' src={props.src} alt={props.alt}></img>
    </div>
  );
};

export default Picture;
