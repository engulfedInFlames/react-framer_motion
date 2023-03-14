import { motion } from "framer-motion";
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

const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BigCircle = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 50%;
  border: 10px solid white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const SmallCircle = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: #badc58;
  border-radius: 50%;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const Btns = styled.div`
  position: absolute;
  bottom: 0;
`;

const Btn = styled.button`
  width: 100px;
  height: 100px;
  font-size: 20px;
  color: #d05a2a;
  background-color: white;
  border: none;
  border-radius: 50%;
`;

function Layout() {
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    setClicked((prev) => !prev);
  };
  return (
    <>
      <Wrapper>
        {/* framer-motion은 css 상태가 변화하는 것을 감지한다. */}
        <BoxContainer>
          <BigCircle>
            {clicked ? <SmallCircle layoutId="sm-circle"></SmallCircle> : null}
          </BigCircle>
          <BigCircle>
            {clicked ? null : <SmallCircle layoutId="sm-circle"></SmallCircle>}
          </BigCircle>
        </BoxContainer>
        <Btns>
          <Btn onClick={onClick}>Click</Btn>
        </Btns>
      </Wrapper>
    </>
  );
}

export default Layout;
