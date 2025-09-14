export default function Background() {
  return (
    <div className="absolute h-screen w-screen bg-background -z-50">
      <img
        src="/hero_img-sm.jpg"
        alt=""
        className="h-[calc(100%-80px)] w-screen object-cover [mask-image:linear-gradient(black_90%,transparent)] md:hidden"
      />
      <img
        src="/hero_img.jpg"
        alt=""
        className="h-[calc(100%-80px)] w-screen object-cover [mask-image:linear-gradient(black_90%,transparent)] hidden md:block"
      />
    </div>
  )
}
