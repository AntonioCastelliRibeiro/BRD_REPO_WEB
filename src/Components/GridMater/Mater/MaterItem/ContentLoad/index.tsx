import React from "react";
import styled from "styled-components";
import {
    Paper,
    Container,
    Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const ContentOverFlowHidden = styled.div`
  overflow: hidden;
`;

const HeaderComp = styled.header`
  overflow: hidden;
`;

const PaperComp = styled(Paper)`
  padding-top: 72px;
  border: none;
  display: flex;
  justify-content: space-evenly;
  place-content: center space-evenly;
  align-items: center;
  width: 100%;
  background-color: transparent;
  flex-direction: column-reverse;
  height: 100%;
  width: 100%;
  @media (min-width: 600px) {
    width: 100%;
  }
  @media (min-width: 960px) {
  }
`;

const ContentDescPrinc = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

const ContentDescSec = styled.div`
  width: 100%;
`;

const ContentFlex = styled.div`
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 0 16px 0;
`;

const TypographyTitle = styled(Typography)`
  padding-bottom: 8px;
  width: 50%;
`;

const TypographyTittleDescComp = styled(Typography)`
  padding-bottom: 8px;
  width: 50%;
`;

const TypographyButton = styled(Typography)`
  padding-bottom: 8px;
  width: 20%;
`;

const ContentImagePrinc = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 9px;
`;

const ContentImageSec = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  width: 100%;
  border-radius: 9px;
`;

const ContentTextPrinc = styled.div`
  color: #fff;
  padding-bottom: 8px;
`;

const TypographyDescComp = styled(Typography)`
  padding-bottom: 8px;
`;

const ArticleComp = styled.article`
  overflow: hidden;
`;

const ContentHeightWidth = styled.div`
  height: inherit;
  width: 100%;
  touch-action: pan-x;
`;

const ContentColor = styled.div`
  min-height: 1000px;
  position: relative;
  background: rgba(0,69,0,1);
  background: linear-gradient(339deg, rgba(0,0,0,1) 2%, rgba(0,69,0,1) 92%);
  padding-bottom: 24px;
`;

const SkeletonCompText = styled(Skeleton)`
    background: rgba(0,69,0,1);
`;

const SkeletonCompRect = styled(Skeleton)`
    border-radius: 9px;
    background: rgba(0,69,0,1);
`;


export default function ContentLoad() {

    return (
        <ContentOverFlowHidden>
            <ContentColor>
                <Container maxWidth="lg">
                    <HeaderComp>
                        <PaperComp elevation={0} >
                            <ContentDescPrinc>
                                <ContentDescSec >
                                    <ContentFlex>
                                        <TypographyTitle variant="h3" children={<SkeletonCompText style={{ backgroundColor: "rgba(0,69,0,1)" }} variant="text" />} />
                                        <TypographyTittleDescComp variant="h5" children={<SkeletonCompText variant="text" />} />
                                        <TypographyButton variant="button" children={<SkeletonCompText variant="text" />} />
                                    </ContentFlex>
                                </ContentDescSec>
                            </ContentDescPrinc>
                            <ContentImagePrinc children={<ContentImageSec children={<SkeletonCompRect variant="rect" width={"inherit"} height={"inherit"} />} />} />
                        </PaperComp>
                    </HeaderComp>
                    <ArticleComp>
                        <ContentTextPrinc >
                            <TypographyDescComp variant="h6" children={<SkeletonCompText variant="text" />} />
                            <TypographyDescComp variant="h6" children={<SkeletonCompText variant="text" />} />
                            <TypographyDescComp variant="h6" children={<SkeletonCompText variant="text" />} />
                        </ContentTextPrinc>
                    </ArticleComp>
                    <ArticleComp>
                        <ContentHeightWidth >
                            <ContentImageSec children={<SkeletonCompRect variant="rect" width={"inherit"} height={"inherit"} />} />
                        </ContentHeightWidth>
                    </ArticleComp>
                    <ArticleComp>
                        <div style={{ width: "100%", display: "flex", paddingTop: 9 }} >
                            <SkeletonCompRect variant="rect" width={"50%"} height={150} />
                            <div style={{ padding: 9 }} />
                            <SkeletonCompRect variant="rect" width={"50%"} height={150} />
                        </div>
                    </ArticleComp>
                </Container>
            </ContentColor>
        </ContentOverFlowHidden >
    )
}
