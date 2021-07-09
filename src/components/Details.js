import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>

      <ImageTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  position: relative;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  left: 0px;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0px auto;
  display: flex;
  width: 100%;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  -webkit-box-pack: start;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  margin: 24px 0px;
  display: flex;
  min-height: 56px;
  flex-flow: row nowrap;
`;

const Player = styled.button`
  margin: 0px 22px 0px 0px;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 0px 24px;
  font-size: 15px;
  border: none;
  height: 56px;
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  align-items: center;
  letter-spacing: 1.8px;
  justify-content: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);

  img {
    width: 32px;
  }

  &:hover {
    border: 1px solid rgb(249, 249, 249);
    background: rgba(230, 230, 230, 0.9);
  }

  @media (max-width: 768px) {
    height: 45px;
    font-size: 12px;
    padding: 0px 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  border: 1px solid rgb(249, 249, 249);
  background: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);

  &:hover {
    background: #000;
  }
`;

const AddList = styled.div`
  border: 2px solid white;
  margin-right: 16px;
  cursor: pointer;
  height: 44px;
  width: 44px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  border-radius: 50%;
  background: white;
  cursor: pointer;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: rgb(0, 0, 0);

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
