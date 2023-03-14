import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  height: 250px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 0 auto;
  margin-top: 100px;
`;

const Box = styled(motion.div)`
  background-color: white;
  border-radius: 18px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  &:first-child {
    grid-column: 1 / 3;
  }
  &:last-child {
    grid-column: 2 / 4;
  }
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const overlayVars: Variants = {
  invisible: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  appear: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  disappear: {
    backgroundColor: "rgba(0,0,0,0)",
  },
};

function Final() {
  const [id, setId] = useState<null | string>(null);
  return (
    <>
      <Wrapper>
        {["1", "2", "3", "4"].map((i) => {
          return <Box onClick={() => setId(i)} key={i} layoutId={i}></Box>;
        })}
      </Wrapper>
      {/* AnimatePresence 태그가 필요한 이유는? */}
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            variants={overlayVars}
            initial="invisible"
            animate="appear"
            exit="disappear"
          >
            <Box
              layoutId={id}
              style={{ width: "600px", height: "420px" }}
            ></Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Final;
