import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  position: relative;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #f1f2f6;
  border-radius: 25%;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const Btn = styled.button`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 0;
  font-size: 20px;
  color: #d05a2a;
  background-color: white;
  border: none;
  border-radius: 50%;
`;

const boxPresenceVars = {
  appear: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  disapper: {
    opacity: 0,
    y: 20,
  },
};

function Presence1() {
  const [display, setDisplay] = useState(false);
  const onClick = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <AnimatePresence>
          {/* AnimatePresence 태그 안에는 조건문이 와야 한다. */}
          {/* React만으로는 요소를 사라지게 할 때의 animation을 조절할 수 없다. */}
          {display ? (
            <Box
              variants={boxPresenceVars}
              initial="appear"
              animate="visible"
              exit="disapper"
            ></Box>
          ) : null}
        </AnimatePresence>
        <Btn onClick={onClick}>Click</Btn>
      </Wrapper>
    </>
  );
}

export default Presence1;
