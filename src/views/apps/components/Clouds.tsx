import Image from "next/image"

export default function Clouds() {
  return (
    <>
      <div style={{ height: "300px" }}>
        <Image
          src='/images/cloud.png'
          alt='Section Image'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: "100%", height: "100%" }}
          unoptimized
        ></Image>
      </div>
    </>
  )
}
