import { Link } from "react-router-dom";

export default function Index() {
  return (
    <p id="zero-state">
      This is a demo for React Router.
      <br />
      Check out{" "}
      <a href="https://reactrouter.com/">the docs at reactrouter.com</a>.
      <div style={{ padding: "50px 0 100px 0" }}>
        <Link to={`app/`}>App</Link>
        <br></br>
        <br></br>
        <Link to={`math/`}>Math</Link>
      </div>
    </p>
  );
}
