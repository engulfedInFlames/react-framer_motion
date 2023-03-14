import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Boxes from "./components/Boxes";
import BoxForDrag from "./components/DragBox";
import Presence1 from "./components/Presence1";
import Presence2 from "./components/Presence2";
import SVG from "./components/SVG";
import Layout from "./components/Layout";
import Final from "./components/Final";

const myRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { path: `${process.env.PUBLIC_URL}/boxes`, element: <Boxes /> },
        {
          path: `${process.env.PUBLIC_URL}/drag-box`,
          element: <BoxForDrag />,
        },
        {
          path: `${process.env.PUBLIC_URL}/svg`,
          element: <SVG />,
        },
        {
          path: `${process.env.PUBLIC_URL}/presence1`,
          element: <Presence1 />,
        },
        {
          path: `${process.env.PUBLIC_URL}/presence2`,
          element: <Presence2 />,
        },
        {
          path: `${process.env.PUBLIC_URL}/layout`,
          element: <Layout />,
        },
        {
          path: `${process.env.PUBLIC_URL}/final`,
          element: <Final />,
        },
      ],
    },
  ],
  { basename: `${process.env.PUBLIC_URL}/` }
);

export default myRouter;
