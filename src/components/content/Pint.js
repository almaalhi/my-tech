import Picture from '../UI/Picture';
import pintPark from '../../pictures/pint/DSC_0277.png';
import pintPackage from '../../pictures/pint/D72_2360.JPG';
import pintAcc from '../../pictures/pint/D72_2400.JPG';
import pintAccOpen from '../../pictures/pint/D72_2407.JPG';
import pint1 from '../../pictures/pint/DSC_0364.png';
import pint2 from '../../pictures/pint/DSC_0565.png';
import pint3 from '../../pictures/pint/DSC_0576.png';
import pint4 from '../../pictures/pint/DSC_0728.png';

const Pint = () => {
  return (
    <div className='content'>
      <h1>My Pint</h1>
      <div>
        <p>
          I've been riding this little guy quite a bit lately. I pre-ordered it
          when Future Motion announced it in March of 2019. Production issues as
          well as the immense amount of orders meant I had to wait 5 months for
          the board arrived at my doorstep.
        </p>
        <Picture src={pintPackage} alt='Pint Arrival' />
        <p>
          During the wait I was determined to be as prepared as possible for the
          day my Pint arrived. I took to YouTube and watched all the onewheel XR
          videos (The XR is the their top of the line board and has been
          available since 2017) I could. I learned the basic concepts and to not
          ignore pushback (A feature that prevents you from nose diving) unless
          you want a trip to the ER. I was so happy and ready when ビー・ツー
          (That's the name of my board, pronounced "B-2") finally arrived!
        </p>
        <p>
          I'd say the first 10 miles where mixed emotions. It was fun, but at
          the same time I felt like at any moment I was going to be getting up
          close and personal with the pavement. Luckily I stuck it out, because
          after 50 or so miles, I never want to get off of the thing! After I
          scuffed up the rails a bit and was starting to get comfortable, my
          accessories came in. This included a fender to cover my tire (no more
          rocks in my shoes!), some rail guards, colored bumpers to match my
          fender, the "Pro" handle which is made of metal and has some rubber
          grippy stuff for comfort, and the best accesory of them all, the Ultra
          Charger. This reduces charge time from 110 minutes to 50 minutes!
        </p>
        <Picture src={pintAcc} alt='Pint Accessories' />
        <Picture src={pintAccOpen} alt='Pint Accessories on the Floor' />
        <p>
          I've ridden <del>nearly 900 miles now as of December 2020</del> 1,600+
          miles now as of September 2021, and although I still have an
          occasional scare, I feel right at home on it. I ride everyday for a
          few reasons. First, I want to! It's so much fun to "carve" around on
          the streets and sidewalks. Yes, that word is borrowed from
          snowboarding but that's the best way to describe the sensation.
          Second, it lets me get some fresh air since I spend the remainder of
          the day inside. It's <del>2020</del> 2021 so with WFH still in place
          and with me trying to avoid unnecessary contact with people, I am
          likely to stay inside for days on end if it weren't for my Pint.
          Finally, the app. Future Motion updated the app and now they have
          badges available. Sort of like achievements in a video game, but you
          get it with real life events. Daily streaks, riding a certain number
          of miles in one day, riding a certain number of miles without breaking
          your streak, and so on.
        </p>
        <Picture src={pintPark} alt='Pint Pic' />
        <p>
          Here are some more pictures from my daily rides. Hopefully you can
          enjoy them.
        </p>
        <Picture src={pint1} alt='pint pic1' />
        <Picture src={pint4} alt='pint pic4' />
        <Picture src={pint2} alt='pint pic2' />
        <Picture src={pint3} alt='pint pic3' />
      </div>
    </div>
  );
};

export default Pint;
