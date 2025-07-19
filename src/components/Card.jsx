export default function Card({imgSrc}){
    const divStl = `flex gap-4 w-[400px] h-[250px] text-sky-800
                    py-4 px-2 shadow-all rounded-lg mt-4 `
    const imgStl = `w-full h-full flex-1 rounded-lg`
    const infoStl = `flex flex-col gap-2 items-center justify-center flex-1 text-center `
    const h2Stl = `text-2xl font-bold`
    const descstl = `italic font-light`
    const authorStl = `font-bold dancing mt-3`
    return(
        <div className={divStl}>
          <img className={imgStl} src={imgSrc} alt="avatar of the guide" />
          <div className={infoStl}>
             <h2 className={h2Stl}>Your guide</h2>
             <p className={descstl}>
                “Few know where Thamor truly comes from, but
                 he knows these lands better than anyone alive.”
            </p>
             <p className={authorStl}>Thamor Eldenbrook</p>
          </div>
        </div>
    )
}