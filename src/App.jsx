import heroImage from "./assets/castle.jpg"
import lakeImg from "./assets/castle-lake.jpg"
import mountainImg from "./assets/castle-mountain.jpg"
import forestImg from "./assets/forest-path.jpg"
import avatarImg from "./assets/medieval-guide.png"

import Activities from "./components/Activities"
import Card from "./components/Card"


function App() {

  //tailwind styles

  const heroSec = `h-80 text-center rounded-t-lg
                   flex flex-col items-center justify-center
                   bg-cover bg-no-repeat `
  const heroTitle = `py-1 px-2 font-bold rounded-lg shadow-lg shadow-rose-300/50 text-sky-800
                     bg-gradient-to-b from-rose-300 to-rose-200 text-lg`
  const heroDesc = `w-8/12 p-1 rounded-lg mt-3 shadow-lg shadow-rose-300/50 text-sky-800
                    bg-gradient-to-b from-rose-200 to-rose-100 spooky`
  const mainSec = `flex flex-col items-center px-4 pb-6
                   bg-gradient-to-b from-blue-200 to-blue-100`
  const activityTitle = `font-bold mt-6 mb-8 text-sky-800 text-2xl`
  const activitiesSec = `flex   gap-2`
  const footerSec = `bg-gradient-to-b from-blue-100 to-rose-100 
                     flex items-center justify-center p-4 rounded-b-lg`

  const activities = [
    {
      title : `Visit the lake at night`,
      desc : `Relax by the crystal-clear lake, enjoy a peaceful boat ride or a scenic picnic.`,
      img : lakeImg
    },
    {
      title : `hike into the mountains`,
      desc : `Embark on a breathtaking mountain hike and witness stunning views from the highest peaks.`,
      img : mountainImg
    },
    {
      title : `Explore the forests`,
      desc : `Wander through ancient forests, discover hidden wildlife, and breathe in the fresh woodland air.`,
      img : forestImg
    }
  ]
 
  return (
    <div className="p-2 ">
      <section className={heroSec} style={{ backgroundImage: `url(${heroImage})` }}>
        <h1 className={heroTitle}>Visit Caer Virelda</h1>
        <p className={heroDesc}>
            Enjoy the serenity and mystique of the castle,
            nestled deep in the heart of the ancient mountains.
        </p>
      </section>
      <section className={mainSec}>
        <h2 className={activityTitle}>Top three activities to do at Caer Virelda </h2>
        <div className={activitiesSec}>
          {activities.map(({title, desc, img}) => (
            <Activities
              key={title}
              title={title}
              desc={desc}
              imgSrc={img}
            />
          ))}
        </div>
      </section>
      <section className={footerSec}>
        <Card imgSrc={avatarImg} />
      </section>
    </div>
  )
}

export default App
