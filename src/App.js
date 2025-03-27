import React from 'react';
import styled from "styled-components";
import avatar from './assets/w3school/avatar2.png';
import Map from './assets/w3school/region.jpg';
import Jill from './assets/w3school/avatar5.png';
import Jane from './assets/w3school/avatar6.png';
import John from './assets/w3school/avatar3.png';
import Bo from './assets/w3school/avatar1.png';

//import styles from './css/App.css';



// styled component


const Menu = styled.div`
  display:none;
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
  padding-left:20px;
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
  height:130px;
  flex-direction:row;
  gap: 15px;
  justify-content:center;
  @media (max-width: 768px) {
    display:flex;
    margin-top:10px;
    width:100vw;
    height:25%;
    flex-direction:column;
}
`
const TitleMediaQuery = styled.div`
  @media (max-width: 768px) {
    display:flex;
    flex-direction:column;
  }
`
const Square = styled.div`
  width:23%;
  height:100%;
  background-color:${(props) => props.squareColor};
  @media (max-width: 768px) {
    width:100%;
    height:100%;
    background-color:${(props) => props.squareColor};
}
 
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
  flex-direction:column;
  padding:20px;
  width:40%;
`
const MiddleTitle = styled.div`
  font-size:20px;
  font-weight: lighter;
  padding-left: ${(props) => (props.paddingLeft? props.paddingLeft : "unset")};
  flex-grow:  ${(props) => (props.flexGrow ? props.flexGrow : "unset")};
  margin-top:${(props) => (props.counTop? props.counTop : "unset")};
`
const MapContainer = styled.div`
  display:flex;
  flex-direction: row;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-top: 60px;
    display:flex;
    flex-direction: column;
    margin-bottom: 50px;
}
`
const MapMediaQuery = styled.div`
  @media (max-width: 768px) {
    width:100vw;
    object-fit:fill;
}
`

const FeedsContainer = styled.div`
  margin-top:20px;
  display:flex;
  flex-direction:column;
  padding-right:20px;
  padding-left:20px;
  width:60%;
`
const FeedsElementContainer = styled.div`
  display:flex;
  flex-direction:row;
  background-color:  ${(props) => (props.backcolor? props.backcolor : "unset")};
  width:100%;
  height:37.5px;
  align-items:center;
  @media (max-width: 768px) {
    display:flex;
    flex-direction:row;
    background-color:  ${(props) => (props.backcolor? props.backcolor : "unset")};
    width:90vw;
    height:37.5px;
    align-items:center;
}
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
const Subheading = styled.div`
  margin-top:15px;
  font-size:15px;
  font-weight: lighter;
  margin-bottom:15px;
  padding-left:20px;
`
const Backgraph = styled.div`
  width:96%;
  height:38.5px;
  background-color:rgb(158, 158, 158);
  margin-left:20px;
  margin-right:20px;
`
const Colorgraph = styled.div`
  width:${(props) => props.graphWidth};;
  height:38.5px;
  background-color:${(props) => props.graphColor};

`
const GraphNumber = styled.div`
  display:flex;
  font-size:15px;
  align-items:center;
  justify-content:center;
  color:white;
  padding-top:7px;

`
const CountryContainer = styled.div`
  margin-left:20px;
  margin-top:15px;
  margin-right:20px;
`
const CountryElementContainer = styled.div`
  display:flex;
  background-color:${(props) => (props.backColor? props.backColor : "white")};
  width:97.6%;
  height:38.5px;
  border: solid 1px rgb(216, 216, 216);
  border-width: thin;
  border-bottom-style:none;
  align-items:center;
  padding-left:20px;
  &:hover {
    background: rgb(197, 196, 196);
    cursor: pointer;
  }
`
const CountryName = styled.div`
  font-size:15px;
  flex-grow:${(props) => (props.nameGrow? props.nameGrow : "1.5")};
`

const RecentContainer = styled.div`
  margin-left:20px;
  margin-top:15px;
  margin-right:20px;
`
const RecentElementContainer = styled.div`
  display:flex;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  background-color: white;
  width:97%;
  height:36px;
  padding:16px;
  border-bottom-width: thin;
  border-bottom:solid 1px rgb(216, 216, 216);
  align-items:center;
  
`
const RecentName = styled.div`
  font-size:24px;
`
const RecentProfile = styled.div`
  width:${(props) => (props.profileWidth? props.profileWidth : "35px")};
  height:${(props) => (props.profileHeight? props.profileHeight : "34.93px")};
  border-radius: 50%;
  margin-right: ${(props) => (props.marginRight? props.marginRight : "35px")};
  object-fit: contain;

`
const CountryNum = styled.div`
  font-size:15px;
  //border-left: solid 2px rgb(216, 216, 216);
  flex-grow:1;
`
const MoreCountry = styled.div`
  display:inline-block;
  background-color:rgb(97, 97, 97);
  color:white;
  align-items:center;
  font-size:15px;
  margin:20px;
  padding:10px;
  gap:10px;
  &:hover {
    background: rgb(197, 196, 196);
    cursor: pointer;
    color:black;
  }
  i {
    margin-left: 10px;  
  }
`
const CommentContainer = styled.div`
  margin-left:20px;
  margin-right:20px;
  margin-top:10px;
`
const CommentRowContainer = styled.div`
  display: flex;
  align-items: flex-start; /* 텍스트가 프로필 이미지 상단 정렬 */
  margin-bottom: 20px;
`;


const CommentBigTitle = styled.div`
  font-size:20px;
  display:inline-block;
`
const CommentSmallTitle = styled.div`
  font-size:15px;
  font-weight:lighter;
  padding-left:3px;
  color: rgb(89, 89, 89);
  padding-top:5px;
  display:inline-block;
 
`

const CommentContent = styled.div`
  flex: 1; 
  margin-left:40px;
`;

const LastBlock = styled.div`
  width:100%;
  height:208.297px;
  background-color:rgb(97, 97, 97);
  padding: 32px 16px;
`
const BlockRowContainer = styled.div`
  display:flex;
  flex-direction:row;
`
const BlockContentContainer = styled.div`
  flex-grow:1;
  padding: 0.15px 16px;
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
      <TitleMediaQuery>
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
      </TitleMediaQuery>
        <MapContainer>
        <RegionContainer>
          <MiddleTitle flexGrow='1'>
            Regions
          </MiddleTitle>
          <MapMediaQuery>
          <img src={Map} alt="Map" style={{ paddingTop: '20px', 
            width: "90%", 
            height: "auto" , 
            maxHeight: '269.5px',
            }} />
          </MapMediaQuery>
        </RegionContainer>
        <FeedsContainer>
        <h4 style={{
          fontWeight:'lighter', 
          fontSize: '20px', 
          marginBottom: '10px',
          marginTop: '10px'}}>
              Feeds
        </h4>
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
        
        <MiddleTitle paddingLeft='20px'>General Stats</MiddleTitle>
        <Subheading>New Visitors</Subheading>
        <Backgraph>
          <Colorgraph graphColor='rgb(76, 175, 80)' graphWidth='25%'>
            <GraphNumber>+25%</GraphNumber>
          </Colorgraph>
        </Backgraph>
        <Subheading>New Users</Subheading>
        <Backgraph>
          <Colorgraph graphColor='rgb(255, 152, 0)' graphWidth='50%'>
            <GraphNumber>50%</GraphNumber>
          </Colorgraph>
        </Backgraph>
        <Subheading>Bounce Rate</Subheading>
        <Backgraph>
          <Colorgraph graphColor='rgb(244, 67, 54)' graphWidth='75%'>
            <GraphNumber>75%</GraphNumber>
          </Colorgraph>
        </Backgraph>
        <MiddleTitle paddingLeft='20px' counTop='50px'>Countries</MiddleTitle>
        <CountryContainer>
          <CountryElementContainer>
            <CountryName>United States</CountryName>
            <CountryNum>65%</CountryNum>
          </CountryElementContainer>
          <CountryElementContainer backColor='rgb(242, 238, 238)'>
            <CountryName nameGrow='1.74'>UK</CountryName>
            <CountryNum>15.7%</CountryNum>
          </CountryElementContainer>
          <CountryElementContainer >
            <CountryName nameGrow='1.65'>Russia</CountryName>
            <CountryNum>5.6%</CountryNum>
          </CountryElementContainer>
          <CountryElementContainer backColor='rgb(242, 238, 238)'>
            <CountryName nameGrow='1.66'>Spain</CountryName>
            <CountryNum>2.1%</CountryNum>
          </CountryElementContainer>
          <CountryElementContainer >
            <CountryName nameGrow='1.67'>India</CountryName>
            <CountryNum>1.9%</CountryNum>
          </CountryElementContainer>
          <CountryElementContainer backColor='rgb(242, 238, 238)'>
            <CountryName nameGrow='1.65'>France</CountryName>
            <CountryNum>1.5%</CountryNum>
          </CountryElementContainer>
        </CountryContainer>
        <MoreCountry>
          More Countries
          <i class="fa fa-arrow-right"></i>
        </MoreCountry>
        <MiddleTitle paddingLeft='20px' counTop='30px'>Recent Users</MiddleTitle>
        <RecentContainer>
          <RecentElementContainer>
            <RecentProfile marginRight='30px' >
            <img src={avatar} alt="avatar" style={{width: '100%', height: '100%', borderRadius: "50%"}} />
            </RecentProfile>
            <RecentName>Mike</RecentName>
          </RecentElementContainer>
          <RecentElementContainer>
            <RecentProfile>
            <img src={Jill} alt="Jill" style={{width: '100%', height: '100%', borderRadius: "50%"}} />
            </RecentProfile>
            <RecentName>Jill</RecentName>
          </RecentElementContainer>
          <RecentElementContainer>
            <RecentProfile>
            <img src={Jane} alt="Jane" style={{width: '100%', height: '100%', borderRadius: "50%"}} />
            </RecentProfile>
            <RecentName>Jane</RecentName>
          </RecentElementContainer>
        </RecentContainer>
        <MiddleTitle paddingLeft='20px' counTop='30px'>Recent Comments</MiddleTitle>
        <CommentContainer>
          <CommentRowContainer>
            <RecentProfile profileWidth='96px' profileHeight = '96px' marginRight='20px' > 
              <img src={John} alt="John" style={{width: '100%', height: '100%', borderRadius: "50%"}} />
            </RecentProfile>
            <CommentContent>
              <CommentBigTitle>John</CommentBigTitle>
              <CommentSmallTitle>Sep 29, 2014, 9:12 PM</CommentSmallTitle>
              <p style={{marginBottom: '0px'}}>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
              <p style={{marginTop: '0px'}}>tempor incididunt ut labore et dolore magna aliqua.</p>
            </CommentContent>
 
          </CommentRowContainer>
          <CommentRowContainer>
            <RecentProfile profileWidth='96px' profileHeight = '96px' marginRight='20px' > 
              <img src={Bo} alt="Bo" style={{width: '100%', height: '100%', borderRadius: "50%"}} />
            </RecentProfile>
            <CommentContent>
              <CommentBigTitle>Bo</CommentBigTitle>
              <CommentSmallTitle> Sep 28, 2014, 10:15 PM</CommentSmallTitle>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </CommentContent>
 
          </CommentRowContainer>
        </CommentContainer>
        <LastBlock>
          <BlockRowContainer>
            <BlockContentContainer>
              <h5 style={{
                display: 'block',
                color: 'white', 
                fontSize:'17px', 
                fontWeight:'lighter',
                borderBottom: 'solid 3px rgb(76, 175, 80)'}}>Demographic</h5>
                <div style={{color: 'white', fontSize: '15px'}}>
                  <p>Language</p>
                  <p>Country</p>
                  <p>City</p>
                </div>
               
            </BlockContentContainer>
            <BlockContentContainer>
              <h5 style={{
                display: 'block',
                color: 'white', 
                fontSize:'17px', 
                fontWeight:'lighter',
                borderBottom: 'solid 3px rgb(244, 67, 54)'}}>System</h5>
                <div style={{color: 'white', fontSize: '15px'}}>
                  <p>Browser</p>
                  <p>OS</p>
                  <p>More</p>
                </div>
            </BlockContentContainer>
            <BlockContentContainer>
              <h5 style={{
                display: 'block',
                color: 'white', 
                fontSize:'17px', 
                fontWeight:'lighter',
                borderBottom: 'solid 3px rgb(255, 152, 0)'}}>Target</h5>
                <div style={{color: 'white', fontSize: '15px'}}>
                  <p>Users</p>
                  <p>Active</p>
                  <p>Geo</p>
                  <p>Interests</p>
                </div>
            </BlockContentContainer>
          </BlockRowContainer>

        </LastBlock>
        
        <h4 style={{fontWeight:'lighter', fontSize: '20px', paddingLeft:'20px'}}>FOOTER</h4>
        <p style={{fontWeight:'lighter', fontSize: '15px', paddingLeft:'20px'}}>
          Powered by <a 
          href='https://www.w3schools.com/w3css/default.asp'
          style={{color: 'black'}}
          >w3.css</a>
        </p>
      </GrayBoard>
    </MenunBoard>
    
  </div>
  
  );
}

export default App;

