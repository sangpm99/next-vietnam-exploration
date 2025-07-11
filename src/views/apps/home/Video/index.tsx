export default function Video() {
  return (
    <div className='flex justify-center px-2 pt-[60px] md:pt-[150px] pb-[30px] md:pb-[75px] bg-[url("/images/who-we-are.jpg")] bg-cover bg-center'>
      <div className='w-[300px] sm:w-[500px] md:w-[1000px] h-[200px] sm:h-[300px] md:h-[670px]'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/Y9lZ4xZkLo0?si=Z--6ur0Cq3hnHC4V'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
          className='rounded-[20px] overflow-hidden'
        ></iframe>
      </div>
    </div>
  )
}
