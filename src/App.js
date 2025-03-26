import React from 'react';
import styled from "styled-components";
import avatar from './assets/w3school/avatar2.png';
import Map from './assets/w3school/region.jpg';
//import styles from './css/App.css';



// styled component


const Menu = styled.div`
  display: none;
  @media (min-width: 998px){
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 121px;
    background-color: white;
  }
  
`
const GrayBoard = styled.div`
  flex-grow: 1;
  background-color: rgb(234, 231, 230);
  height: 100vh;
  overflow-x:hidden;
`
const MenunBoard = styled.div`
  display:flex;
  flex-direction: row;
  overflow: hidden; 
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
  flex-grow:0.5;
  
  
`
const LetternIcon = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
`

const Icon = styled.div`
  display:flex;
  flex-direction:row;
  font-size: 15px;
  padding-left:30px;
  `
const ProfileIcon = styled.div`
  padding: 12px 16px 8px 16px;
  &:hover {
    background: rgb(220, 220, 220);
    color: white;
    transition: 0.5s;
  }
`
const ProfilenLetter = styled.div`
  display:flex;
  flex-direction:row;
  padding-right: 15px;
  padding-left:16px;
`

const ProfileWrapper = styled.div`
  width: 43px;
  height: 45px;
  border-radius: 50%;
  margin-top: 20px;
  object-fit: contain;
  padding-right:10px;

  
`
const DashContainer = styled.div`
  display:flex;
  flex-direction: column;

`
const Title = styled.div`
  margin-top:15px;
  font-size: 20px;
  padding-left: 20px;
`
const OverviewContainer = styled.div`
  margin-top:10px;
  width: 100%;
  height: 36px; 
  display:flex;
  flex-direction:row;
  color: white;
  background-color: #2196F3;
  align-items: center;
  &:hover {
    background: rgb(220, 220, 220);
    color: black;
    transition: 0.2s;
    cursor: pointer;
  }

`
const BaseDashContainer = styled.div`
  width: 100%;
  height: 36px; 
  display:flex;
  flex-direction:row;
  color: black;
  align-items: center;
  &:hover {
    background: rgb(220, 220, 220);
    color: black;
    transition: 0.2s;
    cursor: pointer;
  }
`
const DashIcon = styled.div`
  font-size: 18px;
  margin-left: 10px;
  margin-right:10px;
`
/*Gray board*/
const GrayTitle = styled.div`
  font-size: 20px;
  
`

const GrayTitleContainer = styled.div`
  display:flex;
  margin-top:30px;
  flex-direction:row;
  align-items:center;
`
const GrayTitleIcon = styled.div`
  font-size: 22px;
  margin-left: 10px;
  margin-right:10px;
`
const BigsquareContainer = styled.div`
  display:flex;
  margin-top: 10px;
  width:100%;
  height:130px;;
  flex-direction:row;
  gap: 15px;
  justify-content:center;
  
`
const Square = styled.div`
  width:23%;
  height:100%;
  background-color:${(props) => props.squareColor};
 
`
const SquareIconContainer = styled.div`
  margin-top:15px;
  display:flex;
  flex-direction:row;
  color:white;
  align-items:center;
  justify-content:space-between;

`

const SquareIcon = styled.div`
  font-size: 45px;
  margin-left: 10px;
  margin-right:10px;
`
const SquareLetter = styled.div`
  padding-right:15px;
  font-size:30px;
`
const RegionContainer = styled.div`
  display:flex;
  flex-direction:row;
  padding:20px;
`
const MiddleTitle = styled.div`
  font-size:20px;
  font-weight: lighter;
  flex-grow:  ${(props) => (props.flexGrow ? props.flexGrow : "unset")};
`
const MapContainer = styled.div`
  display:flex;
  flex-direction: row;
`
const FeedsContainer = styled.div`
  display:flex;
  flex-grow:1;
  flex-direction:column;
  padding-right:20px;
  padding-left:20px;
  width:auto;
`
const FeedsElementContainer = styled.div`
  display:flex;
  flex-direction:row;
  background-color:  ${(props) => (props.backcolor? props.backcolor : "unset")};
  width:100%;
  height:35px;
  align-items:center;
`
const FeedsIcon = styled.div`
  flex-grow:${(props) => (props.iconGrow ? props.iconGrow : "1")};
  font-size:18px;
  padding-left:${(props) => (props.paddingLeft ? props.paddingLeft : "20px")};
  color: ${(props) => props.iconColor};
`
const FeedsMiddle = styled.div`
  flex-grow:${(props) => (props.middleGrow? props.middleGrow : "3")};
  font-size:17px;
  font-weight: lighter;
`
const FeedsMins = styled.div`
  flex-grow:2;
  font-size:15px;
  font-weight: lighter;
  font-style: oblique;
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
              <ProfileIcon>
                <i class="fa fa-envelope" ></i>
              </ProfileIcon>
              <ProfileIcon>
                <i class="fa fa-users fa-fw"></i>
              </ProfileIcon>
              <ProfileIcon>
                <i class="fa fa-cog"></i>
              </ProfileIcon>

            </Icon>    
            
          </LetternIcon>
          
        </ProfilenLetter>
        
        <DashContainer>
        <hr style={{ 
          width: "300px", 
          height: '0.4px',
          background: "gray", 
          border: '0', 
          marginTop: '30px' }} />
          <Title>Dashboard </Title>

          <OverviewContainer>
            <DashIcon>
              <i class="fa fa-users fa-fw"></i>
            </DashIcon>
            Overview
          </OverviewContainer>
          <BaseDashContainer>
            <DashIcon>
              <i class="fa fa-eye fa-fw"></i>
            </DashIcon>
            Views
          </BaseDashContainer>
          <BaseDashContainer>
            <DashIcon>
              <i class="fa fa-users fa-fw"></i>
            </DashIcon>
            Traffic
          </BaseDashContainer>
          <BaseDashContainer>
            <DashIcon>
              <i class="fa fa-bullseye fa-fw"></i>
            </DashIcon>
            Geo
          </BaseDashContainer>
          <BaseDashContainer>
            <DashIcon>
              <i class="fa fa-diamond fa-fw"></i>
            </DashIcon>
            Orders
          </BaseDashContainer>
          <BaseDashContainer>
            <DashIcon>
              <i class="fa fa-bell fa-fw"></i>
            </DashIcon>
            News
          </BaseDashContainer>
          <BaseDashContainer>
            <DashIcon>
              <i class="fa fa-bank fa-fw"></i>
            </DashIcon>
            General
          </BaseDashContainer>
          <BaseDashContainer>
            <DashIcon>
            <i class="fa fa-history fa-fw"></i>
            </DashIcon>
            History
          </BaseDashContainer>
          <BaseDashContainer>
            <DashIcon>
              <i class="fa fa-cog fa-fw"></i>
            </DashIcon>
            Settings
          </BaseDashContainer>

        </DashContainer>
        
       

      </Menu>


      <GrayBoard>
        <GrayTitleContainer>
          <GrayTitleIcon>
            <i class="fa fa-dashboard"></i>
          </GrayTitleIcon>
          <GrayTitle>
            My Dashboard
          </GrayTitle>
        </GrayTitleContainer>
        <BigsquareContainer>
          <Square squareColor='rgb(244, 67, 54)'>
              <SquareIconContainer>
                <SquareIcon>
                  <i class="fa fa-comment w3-xxxlarge"></i>
                </SquareIcon>
                <SquareLetter>
                  52
                </SquareLetter>
              </SquareIconContainer>
              <p style={{
              fontSize: '20px', 
              paddingLeft: '10px',
              color: 'white',
              margin: '0px'
              }}>Messages</p>
          </Square>
          <Square squareColor='rgb(33, 150, 243)' >
            <SquareIconContainer>
                <SquareIcon>
                  <i class="fa fa-eye w3-xxxlarge"></i>
                </SquareIcon>
                <SquareLetter>
                  99
                </SquareLetter>
            </SquareIconContainer>
            <p style={{
              fontSize: '20px', 
              paddingLeft: '10px',
              color: 'white',
              margin: '0px'
              }}>Views</p>
          </Square>
          <Square squareColor='rgb(0, 150, 136)'>
            <SquareIconContainer>
              <SquareIcon>
                <i class="fa fa-share-alt w3-xxxlarge"></i>
              </SquareIcon>
              <SquareLetter>
                23
              </SquareLetter>
            </SquareIconContainer>
            <p style={{
              fontSize: '20px', 
              paddingLeft: '10px',
              color: 'white',
              margin: '0px'
              }}>Shares</p>
          </Square>
          <Square squareColor='rgb(255, 152, 0)'>
            <SquareIconContainer>
              <SquareIcon>
                <i class="fa fa-users w3-xxxlarge"></i>
              </SquareIcon>
              <SquareLetter>
                50
              </SquareLetter>
            </SquareIconContainer>
            <p style={{
              fontSize: '20px', 
              paddingLeft: '10px',
              color: 'white',
              margin: '0px'
              }}>users</p>
          </Square>
        </BigsquareContainer>
        <RegionContainer>
          <MiddleTitle flexGrow='1'>
            Regions
          </MiddleTitle>
          <MiddleTitle flexGrow='2.5'>
            Feeds
          </MiddleTitle>
        </RegionContainer>
        <MapContainer>
          <img src={Map} alt="Map" style={{ paddingLeft: '20px', width: "31%", height: "auto" }} />
          <FeedsContainer>
            <FeedsElementContainer backcolor='white'>
              <FeedsIcon iconColor='rgb(33, 150, 243)'>
                <i class="fa fa-user w3-text-blue w3-large"></i>
              </FeedsIcon>
              <FeedsMiddle>New record, over 90 views.</FeedsMiddle>
              <FeedsMins>10 mins</FeedsMins>
            </FeedsElementContainer>
            <FeedsElementContainer >
              <FeedsIcon iconColor='rgb(244, 67, 54)'>
                <i class="fa fa-bell w3-text-red w3-large"></i>
              </FeedsIcon>
              <FeedsMiddle middleGrow='4.3'>Database error.</FeedsMiddle>
              <FeedsMins>15 mins</FeedsMins>
            </FeedsElementContainer>
            <FeedsElementContainer backcolor='white' >
              <FeedsIcon iconColor='rgb(210, 190, 14)' iconGrow='0.95' paddingLeft='17px'>
                <i class="fa fa-users w3-text-yellow w3-large"></i>
              </FeedsIcon>
              <FeedsMiddle >New record, over 40 users.</FeedsMiddle>
              <FeedsMins>17 mins</FeedsMins>
            </FeedsElementContainer>
            <FeedsElementContainer >
              <FeedsIcon iconColor='rgb(244, 67, 54)' iconGrow='1.01' >
                <i class="fa fa-comment w3-text-red w3-large"></i>
              </FeedsIcon>
              <FeedsMiddle middleGrow='4.2' >New comments.</FeedsMiddle>
              <FeedsMins>25 mins</FeedsMins>
            </FeedsElementContainer>
            <FeedsElementContainer backcolor='white' >
              <FeedsIcon iconColor='rgb(33, 150, 243)' paddingLeft='23px' iconGrow='1.02'>
                <i class="fa fa-bookmark w3-text-blue w3-large"></i>
              </FeedsIcon>
              <FeedsMiddle middleGrow='3.8' >Check transactions.</FeedsMiddle>
              <FeedsMins>28 mins</FeedsMins>
            </FeedsElementContainer>
            <FeedsElementContainer >
              <FeedsIcon iconColor='rgb(244, 67, 54)' paddingLeft='19px'  iconGrow='0.95'>
                <i class="fa fa-laptop w3-text-red w3-large"></i>
              </FeedsIcon>
              <FeedsMiddle middleGrow='4.3' >CPU overload.</FeedsMiddle>
              <FeedsMins>35 mins</FeedsMins>
            </FeedsElementContainer>
            <FeedsElementContainer  backcolor='white' >
              <FeedsIcon iconColor='rgb(76, 175, 80)' paddingLeft='22px'  >
                <i class="fa fa-share-alt w3-text-green w3-large"></i>
              </FeedsIcon>
              <FeedsMiddle middleGrow='4.4' >New shares.</FeedsMiddle>
              <FeedsMins>39 mins</FeedsMins>
            </FeedsElementContainer>
          </FeedsContainer>
        </MapContainer>
        
        
      </GrayBoard>
    </MenunBoard>
    
  </div>
  
  );
}

export default App;

