import Head from "next/head";
import Image from "next/image";

export default function Error() {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <title>You already have another tab open!</title>
      </Head>
      <div className="w-full flex justify-center flex-col items-center align-center h-[100vh]">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center absolute top-20 left-20"
          onClick={() => {
            window.location.assign("/");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-bar-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
          <span>Back 3</span>
        </button>
        <h1 className="text-4xl font-bold">
          You already have another tab open, buddy.
        </h1>
        <h1 className="text-4xl font-bold mb-4">
          Do you think I work at Heroku?
        </h1>
        <Image
          width={300}
          src="https://tenor.com/view/error-something-wrong-fail-gif-20409157"
          alt=""
        />
      </div>
    </>
  );
}
