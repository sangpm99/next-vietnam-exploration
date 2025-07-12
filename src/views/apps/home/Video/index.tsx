export default function Video() {
  return (
    <div className='flex justify-center px-2 pt-[60px] md:pt-[150px] pb-[30px] md:pb-[75px] bg-[url("/images/who-we-are.webp")] bg-cover bg-center'>
      <div className='w-[300px] sm:w-[500px] md:w-[1000px] h-[200px] sm:h-[300px] md:h-[670px]'>
        <iframe
          width='100%'
          height='100%'
          className='rounded-[20px] overflow-hidden'
          src='https://www.youtube.com/embed/FRhvfy6uT0Q?si=WwdskUXbv_Fj05Qu'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
