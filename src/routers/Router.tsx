import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Boxes from "./components/Boxes";
import BoxForDrag from "./components/DragBox";
import Presence1 from "./components/Presence1";
import Presence2 from "./components/Presence2";
import SVG from "./components/SVG";
import Layout from "./components/Layout";
import Final from "./components/Final";

const myRouter = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: <Root />,
    children: [
      { path: "boxes", element: <Boxes /> },
      {
        path: "drag-box",
        element: <BoxForDrag />,
      },
      {
        path: "svg",
        element: <SVG />,
      },
      {
        path: "presence1",
        element: <Presence1 />,
      },
      {
        path: "presence2",
        element: <Presence2 />,
      },
      {
        path: "layout",
        element: <Layout />,
      },
      {
        path: "final",
        element: <Final />,
      },
    ],
  },
]);

export default myRouter;
