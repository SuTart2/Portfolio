import { Link, Outlet } from "react-router-dom";

export default function ProjectsLayout() {
  return (
    <>
      <Link to="/projects/1">Project 1</Link>
      <br />
      <Link to="/projects/2">Project 2</Link>
      <br />
      <Link to="/projects/3">Project 3</Link>
      <Outlet context={{ hello: "world" }}/>
    </>
  );
}