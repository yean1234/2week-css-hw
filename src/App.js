import React from 'react';
import styled from "styled-components";

// styled component


const Menu = styled.div`
  display: none;
  @media (min-width: 998px){
    display: block;
    width: 20vw;
    height: 100vh;
    background-color: white;
  }
  
`
const GrayBoard = styled.div`
  flex-grow: 1;
  background-color: rgb(234, 231, 230);
  height: 100vh;
`
const MenunBoard = styled.div`
  display:flex;
  flex-direction: row;
  width:100vw;
  height:100vh;
`



const Bar = styled.div`
  background-color: black;
  width: 100vw;
  height: 5.9vh;
  padding:0px;
  margin: 0px;
`
const Logo = styled.div`
  display:flex;
  flex-direction:column;
  color:white;
  font-size: 22px;
  text-align: right;
  padding-right:25px;
  padding-top:15px;
`
const ProfileImage = styled.div`
  background-image: url('/avatar2.png');
  background-size: cover;
  background-position: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const Welcome = styled.div`
  font-size:18px;
`
const LetternIcon = styled.div`
  display:flex;
  flex-direction:column;
`
const ProfilenLetter = styled.div`
  display:flex;
  flex-direction:row;
`
function App() {
  return (
  <div>
    <Bar>
        <Logo>
          Logo
        </Logo>
    </Bar>
    <MenunBoard>
      <Menu>
        <ProfilenLetter>
          <ProfileImage/>
          <LetternIcon>
            <Welcome>
              Welcome, <b>Mike</b>
            </Welcome>
          </LetternIcon>
          
        </ProfilenLetter>
        

      </Menu>
      <GrayBoard>

      </GrayBoard>
    </MenunBoard>
    
  </div>
  
  );
}

export default App;

