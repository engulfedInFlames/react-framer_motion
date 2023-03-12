import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Canvas = styled.div`
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

const dragBoxVar = {};

function DragBox() {
  const canvasRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Canvas ref={canvasRef}>
        <Box drag dragConstraints={canvasRef}></Box>
      </Canvas>
    </>
  );
}

export default DragBox;
