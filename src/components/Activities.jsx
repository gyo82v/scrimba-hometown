export default function Activities({title, desc, imgSrc}){
    const secStl = `flex flex-col flex-1 items-center p-1 rounded-lg  text-center shadow-all
                    hover:cursor-pointer hover-transform hover:scale-105`
    const imgStl = `rounded-full w-[100px] h-[100px] shadow-lg`
    const h2Stl =`font-bold mt-4 mb-3 text-sky-800`
    const pStl = `text-sky-800 italic font-light spooky`

    return(
        <div className={secStl}>
            <img src={imgSrc} alt={title} className={imgStl} />
            <h2 className={h2Stl}>{title}</h2>
            <p className={pStl}>{desc}</p>
        </div>
    )
}