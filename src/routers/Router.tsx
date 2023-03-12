import { createBrowserRouter } from "react-router-dom";
import Boxes from "./Boxes";
import BoxForDrag from "./DragBox";
import Root from "./Root";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/boxes", element: <Boxes /> },
      {
        path: "/drag-box",
        element: <BoxForDrag />,
      },
    ],
  },
]);

export default myRouter;
