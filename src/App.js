import React from 'react';
import styled from "styled-components";
import avatar from './assets/w3school/avatar2.png';


// styled component


const Menu = styled.div`
  display: none;
  @media (min-width: 998px){
    display: flex;
    flex-direction: column;
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

const Welcome = styled.div`
  font-size:15px;
  padding-top: 15px;
  
  
`
const LetternIcon = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:1;
  justify-content:center;
  padding-left:10px;
  align-items: center;
`

const Icon = styled.div`
  display:flex;
  flex-direction:row;
  flex-grow:1;
  justify-content:center;
  align-items: center;
`

const ProfilenLetter = styled.div`
  display:flex;
  flex-direction:row;
  padding-right: 15px;
  padding-left:16px;
`

const ProfileWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 10px;
  flex-grow:0;
  
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
        <ProfileWrapper>
        <img src={avatar} alt="profile" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
        </ProfileWrapper>
           
          <LetternIcon>
            <Welcome>
              Welcome, <b>Mike</b>
            </Welcome>
            <Icon>
              <i class="fa fa-envelope"></i>
              <i class="fa fa-users fa-fw"></i>
              <i class="fa fa-cog"></i>

            </Icon>
            
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

