export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center h-screen bg-[url(/ocbg.jpg)] md:bg-contain bg-cover md:bg-repeat bg-no-repeat bg-center">
      <div>
        <p className="text-center text-2xl [text-shadow:_2px_2px_0px_rgb(0,0,0)] text-white">
          Under Construction
        </p>
      </div>
      <div>
        <p className="text-center text-2xl [text-shadow:_2px_2px_0px_rgb(0,0,0)] text-white">
          More to come
        </p>
      </div>
      <div>
        <p className="text-center text-2xl [text-shadow:_2px_2px_0px_rgb(0,0,0)] text-white">
          For more information email us at{" "}
          <a href="mailto:info@otakucash.com"
             className="hover:underline cursor-pointer ">info@otakucash.com</a>
        </p>
      </div>
    </div>
  );
}
