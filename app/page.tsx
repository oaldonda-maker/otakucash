export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <div>
        <p className="text-center text-2xl">
          Under Construction
        </p>
      </div>
      <div>
        <p className="text-center text-2xl">
          More to come
        </p>
      </div>
      <div>
        <p className="text-center text-2xl">
          For more information email us at{" "}
          <a href="mailto:info@otakucash.com"
             className="hover:underline cursor-pointer ">info@otakucash.com</a>
        </p>
      </div>
    </div>
  );
}
