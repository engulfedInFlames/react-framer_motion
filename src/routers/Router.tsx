import { createBrowserRouter } from "react-router-dom";
import Boxes from "./Boxes";
import BoxForDrag from "./DragBox";
import Presence from "./Presence";
import Root from "./Root";
import SVG from "./SVG";

const myRouter = createBrowserRouter([
  {
    path: "/",
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
        path: "presence",
        element: <Presence />,
      },
    ],
  },
]);

export default myRouter;
