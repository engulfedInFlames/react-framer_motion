import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2%;
  margin: 0 auto;
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 40%;
  width: 200px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  color: #d05a2a;
  background-color: #f1f2f6;
  border-radius: 15px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const Btns = styled.div`
  position: absolute;
  bottom: 0;
`;

const Btn = styled.button`
  width: 60px;
  height: 60px;
  font-size: 20px;
  color: #d05a2a;
  background-color: white;
  margin: 0 4px;
  border: none;
  border-radius: 50%;
`;

const silderVars: Variants = {
  invisible: (isRight: boolean) => ({
    x: isRight ? 300 : -300,
    scale: 0,
    opacity: 0,
  }),
  appear: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  disappear: (isRight: boolean) => ({
    x: isRight ? -300 : 300,
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  }),
};

function Presence2() {
  // React는 key 값만 바뀌면 요소가 사라졌다고 인식
  const [value, setValue] = useState(1);
  const [isRight, setIsRight] = useState(true);
  const slideToLeft = () => {
    setIsRight(false);
    setValue((prev) => (prev === 1 ? 10 : prev - 1));
  };
  const slideToRight = () => {
    setIsRight(true);
    setValue((prev) => (prev === 10 ? 1 : prev + 1));
  };
  return (
    <>
      <Wrapper>
        <AnimatePresence custom={isRight}>
          {/* cutstom prop은 variants를 사용자 설정할 수 있게 한다. */}
          {/* cutstom prop은 AnimatePresence와 child 둘 모두에 부여해야 한다. */}
          {/* AnimatePresence에 mode="wait"을 속성으로 부여하면 첫 번째 애니메이션이 끝나고나서 다음 것이 실행된다.  */}
          <Box
            custom={isRight}
            variants={silderVars}
            initial="invisible"
            animate="appear"
            exit="disappear"
            key={value}
          >
            {value}
          </Box>
        </AnimatePresence>
        <Btns>
          <Btn onClick={slideToLeft}>
            <i className="fa-solid fa-chevron-left"></i>
          </Btn>
          <Btn onClick={slideToRight}>
            <i className="fa-solid fa-chevron-right"></i>
          </Btn>
        </Btns>
      </Wrapper>
    </>
  );
}

export default Presence2;
