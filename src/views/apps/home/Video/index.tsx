export default function Video() {
  return (
    <div className='flex justify-center pt-[150px] pb-[75px] bg-[url("/images/who-we-are.jpg")] bg-cover bg-center'>
      <iframe
        width='1000'
        height='670'
        src='https://www.youtube.com/embed/Y9lZ4xZkLo0?si=Z--6ur0Cq3hnHC4V'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
        className='rounded-[20px] overflow-hidden'
      ></iframe>
    </div>
  )
}
