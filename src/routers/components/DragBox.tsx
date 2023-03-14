import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Canvas = styled(motion.div)`
  overflow: hidden;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 2%;
  margin: 0 auto;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: #f1f2f6;
  border-radius: 25%;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

function DragBox() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0); // React의 State로 저장되지 않는다. 즉, 리렌더링 되지 않는다.
  const { scrollYProgress } = useScroll();
  const rotateZValue = useTransform(x, [-300, 300], [-360, 360]);
  const gradientValue = useTransform(
    x,
    [-300, 0, 300],
    [
      "linear-gradient(135deg, #40E0D0, rgb(238, 178, 0))",
      "linear-gradient(135deg, rgb(238, 178, 0), #FF8C00)",
      "linear-gradient(135deg, #FF8C00, #FF0080)",
    ]
  );
  const scrollYValue = useTransform(scrollYProgress, [0, 1], [1, 2]);
  // useMotionValueEvent(x, "change", (el) => console.log(el)); // useEffect(()=>{...code}, [x])을 대체한다.
  // useMotionValueEvent(gradientValue, "change", (el) => console.log(el));
  useMotionValueEvent(scrollYProgress, "change", (el) => console.log(el));

  return (
    <>
      <Canvas ref={canvasRef} style={{ background: gradientValue }}>
        <Box
          style={{ x, rotateZ: rotateZValue, scale: scrollYValue }}
          drag
          dragSnapToOrigin
        ></Box>
      </Canvas>
    </>
  );
}

export default DragBox;
