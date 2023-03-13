import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const Main = styled.div`
  height: 60vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: rows;
  gap: 50px;
`;

const Box = styled(motion.div)`
  // Framer Motion을 사용하기 위한 syntax
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

const Circle = styled(motion.div)`
  width: 64px;
  height: 64px;
  justify-self: center;
  align-self: center;
  background-color: #d05a2a;
  border-radius: 99%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

// 일반 JS로 variants를 생성할 수 있다. 해당 컴포넌트의 프로퍼티에 key 값만 잘 입력할 것.
// Variants 타입을 적용하여 자동 완성되게끔 할 수 있다.
const springboxVars: Variants = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: { type: "spring", duration: 0.5 },
  },
};

const hiddenBoxVars: Variants = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.8,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const whileBoxVars: Variants = {
  hover1: { scale: 1.1 },
  hover2: { rotateZ: "360deg", transition: { duration: 1 } },
  click: { scale: 1, opacity: 0.75 },
  drag: { scale: 0.9, opacity: 0.75 },
};

const CircleVars = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function Boxes() {
  return (
    <>
      <Main>
        <Box variants={springboxVars} initial="start" animate="end">
          {/* 자식 요소는 부모 요소의 속성(initial, animate...)을 기본값으로 inherit한다. */}
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
        </Box>
        <Box variants={hiddenBoxVars} initial="start" animate="end">
          <Circle variants={CircleVars}></Circle>
          <Circle variants={CircleVars}></Circle>
          <Circle variants={CircleVars}></Circle>
          <Circle variants={CircleVars}></Circle>
        </Box>
        <Box
          variants={whileBoxVars}
          animate="end"
          whileHover="hover1"
          whileTap="click"
        ></Box>
        <Box
          variants={whileBoxVars}
          drag
          dragConstraints={{}}
          whileDrag="drag"
        ></Box>
      </Main>
    </>
  );
}

export default Boxes;
