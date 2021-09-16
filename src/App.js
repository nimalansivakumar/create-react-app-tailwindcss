import reactLogo from "./react_logo.png";
import tailwindLogo from "./tailwindcss_logo.svg";

function App() {
  return (
    <div className="w-full h-screen text-3xl font-bold text-white">
      <div className="w-full h-5/6 flex">
        <div className="w-1/2 h-full flex flex-col justify-center items-center bg-blue-500">
          <img src={reactLogo} alt="react-logo" className="w-20" />
          <h1>Create-React-App</h1>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center bg-green-400">
          <img src={tailwindLogo} alt="tailwind-logo" className="w-20" />
          <h1>Tailwind CSS</h1>
        </div>
      </div>
      <footer className="w-full h-1/6 bg-white text-black flex items-center justify-center">
        <h1>
          Clone the template from {}
          <a
            href="https://github.com/nimalansivakumar/create-react-app-tailwindcss"
            className="underline font-thin"
            target="_blank"
            rel="noreferrer"
          >
            create-react-app-tailwindcss
          </a>
        </h1>
      </footer>
    </div>
  );
}

export default App;
