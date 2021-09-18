import Picture from '../UI/Picture';
import pic1 from '../../pictures/brompton/brompton1.jpeg';
import pic2 from '../../pictures/brompton/brompton2.jpeg';

const Brompton = () => {
  return (
    <div className='content'>
      <h1>My Brompton</h1>
      <div>
        <p>
          Although I love riding my pint it's not really comparable to riding a
          bike. Range anxiety and the reliance on software to ensure you don't
          end up face first in the pavement lead me down the path to also
          getting a bike. The added benefit of exercise is also great.
        </p>
        <p>
          After deciding to get a bike the next logical step was deciding which
          bike to buy. Luckily my wife already had that covered. She had looked
          into Bromptons (At that time, admittedly I didn't even know what a
          Brompton was.) for one reason or another. In short, they are very well
          engineered folding bikes that are reliable and have one of the
          smallest footprints among folding bikes. It didn't take much
          convincing for me to fall in love with the concept.
        </p>
        <Picture src={pic1} alt='brompton1' />
        <p>
          Things have changed quite a bit since March of 2020, but the idea of
          riding around and just folding our bikes up when we got to a
          restaurant, store, or whatever of our liking and bringing the bike in
          with us just seemed so cool. I've have a couple bikes stolen in the
          past, so not having to worry about theft, or at least minimizing it,
          was very nice. We were able to do this quite a few times before
          everything was shutdown.
        </p>
        <p>
          I haven't been able to try it, but supposedly people have successfully
          stored their folded bike in the overhead compartment when traveling by
          airplane. Once travel is allowed again, it will be nice to be able to
          arrive at our destination with wheels! And yes a car rental is nice,
          but having a bike to ride around on is a great way to get a feel for a
          place.
        </p>
        <Picture src={pic2} alt='brompton2' />
      </div>
    </div>
  );
};

export default Brompton;
