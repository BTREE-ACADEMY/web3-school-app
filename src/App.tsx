import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      Home <Link to="/about">About</Link>
    </div>
  );
}

function About() {
  return <div>About</div>;
}
