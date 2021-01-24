import homePic from '../../pictures/home/D72_9057.png';
import castle from '../../pictures/home/D72_5693.png';
import chichibu from '../../pictures/home/D72_2436.png';

const pictures = [
  { picture: homePic, text: 'Tokyo' },
  { picture: castle, text: 'Himeji Castle' },
  { picture: chichibu, text: 'Chichibu' },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomPic = getRandomInt(3);

function Home(props) {
  return (
    <div className='content'>
      <h1>Welcome!</h1>
      <div>
        <p>
          Hello, my name is Alex and I'm on my way to becoming a software
          developer. This website is something that I've started to put the
          concepts that I've learned to use.{' '}
        </p>
        <p>
          This page uses React and React Router to render content as needed. I'm
          using the built in Context and Reducer hooks for state management. API
          calls are being handled with Axios.
        </p>
      </div>
      <div className='image-div'>
        <img
          className='image'
          src={pictures[randomPic].picture}
          alt='Home Pic'
        ></img>
        <p className='image-desc'>{pictures[randomPic].text}</p>
      </div>
    </div>
  );
}

export default Home;
