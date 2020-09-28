import React from "react";
import styled from "styled-components";

const Main = () => {
  const MainStyle = styled.div`
    margin: 30px 80px;
  `;
  const SectionStyle = styled.div`
    margin: 30px 0px;
  `;
  const SectionTitleStyle = styled.div`
    font-size: 25px;
    font-weight: 800;
    color: rgb(68, 66, 66);
    margin-bottom: 20px;
  `;
  const SectionTitle2Style = styled(SectionTitleStyle)`
    margin: 0px;
  `;
  const CardBoxStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
  `;
  const CardStyle = styled.div`
    display: grid;
    grid-template-columns: auto 2fr;
    border: 1px solid rgb(212, 210, 210);
    border-radius: 6px;
    box-shadow: 0px 0px 2px rgb(172, 170, 170);
  `;
  const CardImgStyle = styled.img`
    height: 70px;
  `;
  const CardContentStyle = styled.div`
    display: grid;
    align-items: center;
    justify-content: left;
    font-weight: 600;
    margin-left: 10px;
  `;
  const AdImgStyle = styled.div`
    background-image: url("images/ad1.jpg");
    background-size: 100% 100%;
    height: 350px;
    border-radius: 20px;
  `;
  const AdImg2Style = styled(AdImgStyle)`
    background-image: url("images/ad2.png");
    border-radius: 0px;
    margin-top: 20px;
  `;
  const ChooImgBoxStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 10px;
  `;
  const ChooImgStyle = styled.img`
    width: 100%;
    height: 250px;
  `;
  const HomeImgBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;
  const HomeImgStyle = styled.img`
    width: 100%;
    height: 200px;
  `;
  const HomeTitleStyle = styled.div`
    margin: 5px 0px;
    font-size: 13px;
    color: gray;
  `;
  const HomeInfoStyle = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: rgb(60, 60, 60);
  `;
  const HomeRatingInfoStyle = styled.div`
    font-size: 12px;
  `;
  const HomeRatingStyle = styled(HomeRatingInfoStyle)`
    display: inline-block;
    color: rgb(255, 215, 0);
  `;
  return (
    <MainStyle>
      <SectionStyle>
        <SectionTitleStyle>에어비앤비 둘러보기</SectionTitleStyle>
        <CardBoxStyle>
          <CardStyle>
            <CardImgStyle src="images/card1.jpg" alt="" />
            <CardContentStyle>숙소 및 부티크 호텔</CardContentStyle>
          </CardStyle>
          <CardStyle>
            <CardImgStyle src="images/card2.jpg" alt="" />
            <CardContentStyle>트립</CardContentStyle>
          </CardStyle>
          <CardStyle>
            <CardImgStyle src="images/card3.jpg" alt="" />
            <CardContentStyle>어드벤처</CardContentStyle>
          </CardStyle>
          <CardStyle>
            <CardImgStyle src="images/card4.jpg" alt="" />
            <CardContentStyle>레스토랑</CardContentStyle>
          </CardStyle>
        </CardBoxStyle>
      </SectionStyle>
      <SectionStyle>
        <AdImgStyle />
      </SectionStyle>
      <SectionStyle>
        <SectionTitleStyle>추천 여행지</SectionTitleStyle>
        <ChooImgBoxStyle>
          <ChooImgStyle src="images/choo1.png" alt="" />
          <ChooImgStyle src="images/choo2.png" alt="" />
          <ChooImgStyle src="images/choo3.png" alt="" />
          <ChooImgStyle src="images/choo4.png" alt="" />
          <ChooImgStyle src="images/choo5.png" alt="" />
        </ChooImgBoxStyle>
      </SectionStyle>
      <SectionStyle>
        <SectionTitle2Style>에어비앤비 플러스를 만나보세요!</SectionTitle2Style>
        <div>퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션</div>
        <AdImg2Style />
      </SectionStyle>
      <SectionStyle>
        <SectionTitleStyle>전 세계 숙소</SectionTitleStyle>
        <HomeImgBoxStyle>
          <div>
            <HomeImgStyle src="images/home1.png" alt="" />
            <HomeTitleStyle>오두막 · BALIAN BEACH, BALI</HomeTitleStyle>
            <HomeInfoStyle>BALIAN TREEHOUSE w beautiful pool</HomeInfoStyle>
            <HomeRatingInfoStyle>
              <HomeRatingStyle>★★★★★</HomeRatingStyle> 185 슈퍼호스트
            </HomeRatingInfoStyle>
          </div>
          <div>
            <HomeImgStyle src="images/home2.png" alt="" />
            <HomeTitleStyle>키클라데스 주택 · 이아(OIA)</HomeTitleStyle>
            <HomeInfoStyle>Unique Architecture Cave House</HomeInfoStyle>
            <HomeRatingInfoStyle>
              <HomeRatingStyle>★★★★★</HomeRatingStyle> 188 슈퍼호스트
            </HomeRatingInfoStyle>
          </div>
          <div>
            <HomeImgStyle src="images/home3.png" alt="" />
            <HomeTitleStyle>
              성 · 트웬티나인 팜스(TWENTYNINE PALMS)
            </HomeTitleStyle>
            <HomeInfoStyle>Tile House</HomeInfoStyle>
            <HomeRatingInfoStyle>
              <HomeRatingStyle>★★★★★</HomeRatingStyle> 367 슈퍼호스트
            </HomeRatingInfoStyle>
          </div>
          <div>
            <HomeImgStyle src="images/home4.png" alt="" />
            <HomeTitleStyle>검증됨 · 케이프타운</HomeTitleStyle>
            <HomeInfoStyle>
              Modern, Chic Penthouse with Mountain, City & Sea Views
            </HomeInfoStyle>
            <HomeRatingInfoStyle>
              <HomeRatingStyle>★★★★★</HomeRatingStyle> 177 슈퍼호스트
            </HomeRatingInfoStyle>
          </div>
          <div>
            <HomeImgStyle src="images/home5.png" alt="" />
            <HomeTitleStyle>아파트 전체 · 마드리드(MADRID)</HomeTitleStyle>
            <HomeInfoStyle>솔광장에 위치한 개인 스튜디오</HomeInfoStyle>
            <HomeRatingInfoStyle>
              <HomeRatingStyle>★★★★★</HomeRatingStyle> 459 슈퍼호스트
            </HomeRatingInfoStyle>
          </div>
          <div>
            <HomeImgStyle src="images/home6.png" alt="" />
            <HomeTitleStyle>집 전체 · HUMAC</HomeTitleStyle>
            <HomeInfoStyle>
              Vacation house in etno-eco village Humac
            </HomeInfoStyle>
            <HomeRatingInfoStyle>
              <HomeRatingStyle>★★★★★</HomeRatingStyle> 119 슈퍼호스트
            </HomeRatingInfoStyle>
          </div>
          <div>
            <HomeImgStyle src="images/home7.png" alt="" />
            <HomeTitleStyle>개인실 · 마라케시</HomeTitleStyle>
            <HomeInfoStyle>The Cozy Palace</HomeInfoStyle>
            <HomeRatingInfoStyle>
              <HomeRatingStyle>★★★★★</HomeRatingStyle> 559 슈퍼호스트
            </HomeRatingInfoStyle>
          </div>
          <div>
            <HomeImgStyle src="images/home8.png" alt="" />
            <HomeTitleStyle>게스트용 별채 전체 · 로스앤젤레스</HomeTitleStyle>
            <HomeInfoStyle>
              Private Pool House with Amazing Views!
            </HomeInfoStyle>
            <HomeRatingInfoStyle>
              <HomeRatingStyle>★★★★★</HomeRatingStyle> 170 슈퍼호스트
            </HomeRatingInfoStyle>
          </div>
        </HomeImgBoxStyle>
      </SectionStyle>
    </MainStyle>
  );
};

export default Main;
