import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  position: relative;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  flex-direction: center;
  justify-content: center;
  align-items: center;
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

const Btn = styled.button`
  position: absolute;
  bottom: 0;
  font-size: 20px;
  color: #d05a2a;
  background-color: white;
  padding: 6px 20px;
  border: none;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
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

function Presence() {
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

export default Presence;
