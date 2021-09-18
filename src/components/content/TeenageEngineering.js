import Picture from '../UI/Picture';
import opz1 from '../../pictures/op-z/DSC_1799.JPG';

const TeenageEngineering = () => {
  return (
    <div className='content'>
      <h1>My OP-Z</h1>
      <div>
        <p>
          I'm not very musical, but I like to make music. Maybe the same could
          be said about me in regards to programming too. Anyway, the programmer
          in me mixed with the musician in me decided on getting a programmable
          synthesizer. Hence, the OP-Z.
        </p>
        <p>
          The interace on this thing at first may seem overwhelming and watching
          somebody use it can make it appear like some sort of magical device.
          In reality, it's very well thought out and once you get the hang of
          it, it's amazing.
        </p>
        <p>
          I won't go into too much detail on how to use it (There are too many
          great guides out there that do a better job than I ever could), but I
          will try to explain a little more about it. In short, it's a 8 track
          16 step programmable synthesizer. The tracks are preset, but you can
          change them if you'd like. I've never had the need.
        </p>
        <p>
          Still not clear? Well, as an example track one is kick. You could have
          any one of the variety of sounds drop on the first beat of each 4 step
          unit (Remember, 16 steps in total but here we are breaking it down
          into more digestable steps of 4. So the beat would go
          kick-rest-rest-rest then loop again, kick-rest-rest-rest, forever).
        </p>
        <p>
          Next we could add a snare sound on track 2 on step 2 and 9.
          Kick-snare-rest-rest kick-rest-rest-rest kick-snare-rest-rest
          kick-rest-rest-rest. We can build up a song like this by slowly
          filling in each track (Other tracks include lead, chords, and hi-hats
          to name a few).
        </p>
      </div>
      <Picture src={opz1} alt='OP-Z Picture' />
    </div>
  );
};

export default TeenageEngineering;
