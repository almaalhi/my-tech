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
          My name is Alex and I'm currently building this website with React.
          It's just a fun way for me to apply concepts that I'm learning and
          share it with others. I plan to include pages that show some hobbies
          of mine at first, but will create content that is more interactive
          over time.
        </p>
      </div>
      <div className='imageDiv'>
        <img
          className='image'
          src={pictures[randomPic].picture}
          alt='Home Pic'
        ></img>
        <p className='imageDesc'>{pictures[randomPic].text}</p>
      </div>
    </div>
  );
}

export default Home;
