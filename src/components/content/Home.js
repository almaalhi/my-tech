import Picture from '../UI/Picture';
import homePic from '../../pictures/home/D72_9057.png';
import castle from '../../pictures/home/D72_5693.png';
import chichibu from '../../pictures/home/D72_2436.png';

const pictures = [
  { picture: homePic, text: 'Tokyo' },
  { picture: castle, text: 'Himeji Castle' },
  { picture: chichibu, text: 'Chichibu' },
];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const randomPic = getRandomInt(3);

const Home = () => {
  return (
    <div className='content'>
      <h1>Welcome!</h1>
      <div>
        <p>
          Hello, my name is Alex and I'm on my way to becoming a software
          developer. This website is something that I'm building to put the
          concepts that I'm learning to use.{' '}
        </p>
        <p>
          This website was built with React. React Router is used to route
          components. State management is being handled with React's built in
          useReducer and useContext hooks. API calls are being handled with
          Axios.
        </p>
      </div>
      <Picture src={pictures[randomPic].picture} alt='Home Pic' />
      <p className='image-desc'>{pictures[randomPic].text}</p>
    </div>
  );
};

export default Home;
