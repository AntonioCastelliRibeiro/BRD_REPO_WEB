import React from "react";
import styled from "styled-components";

import {
    Box,
    Container,
    CardActions,
    Typography,
    createTheme,
    ThemeProvider
} from "@material-ui/core";

import ColabImgCapa from "../ColabImgCapa";
import { Skeleton } from "@material-ui/lab";

const ContentBgColor = styled.div`
  height: 100%;
`;

const ContentRelative = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 80vh;
  background: rgba(0,69,0,1);
  background: linear-gradient(339deg, rgba(0,0,0,1) 2%, rgba(0,69,0,1) 92%);
  padding-bottom: 45px;
`;

const ContainerComp = styled(Container)`
  display: inherit;
`;

const ContentFlex = styled.div`
    padding-top: 70px;
    padding-bottom: 0px;
    display: flex;
    width: 100%;
    flex-direction: row;
    @media(max-width: 900px) {
        flex-direction: column;
    }
`;

const theme = createTheme({
    palette: {
        primary: {
            main: "rgba(0,69,0,1)"
        }
    },
});

const SkeletonComp = styled(Skeleton)`
    background-color: ${theme.palette.primary.main};
`;


export default function ContentLoad() {
    return (
        <ThemeProvider theme={theme}>
            <ContentBgColor>
                <ColabImgCapa ocultaDesc={true} />
                <ContentRelative>
                    <ContainerComp maxWidth="lg">
                        <ContentFlex>
                            <div style={{ width: "100%" }}>
                                <Box height="inherit">
                                    <Box display="flex" paddingLeft="0px" marginBottom="24px">
                                        <SkeletonComp variant={"text"} height={50} width={150} color="primary" />
                                    </Box>
                                    <Typography variant="h2" children={<SkeletonComp variant={"text"} height={50} width={200} color="primary" />} />
                                    <Typography variant="h2" children={<SkeletonComp variant={"text"} height={50} width={150} color="primary" />} />
                                    <Box marginBottom="8px">
                                        <Typography variant="h5" children={<SkeletonComp variant={"text"} height={50} width={150} color="primary" />} />
                                    </Box>
                                    <Box height="50px" marginBottom="20px">
                                        <CardActions style={{ padding: "6px" }}>
                                            <SkeletonComp variant={"circle"} height={50} width={50} color="primary" />
                                            <SkeletonComp variant={"circle"} height={50} width={50} color="primary" />
                                            <SkeletonComp variant={"circle"} height={50} width={50} color="primary" />
                                        </CardActions>
                                    </Box>
                                    <Box marginBottom="8px" >
                                        <Typography variant="h6" children={<SkeletonComp variant={"text"} height={50} width={"50%"} color="primary" />} />
                                    </Box>
                                    <Box marginBottom="8px" >
                                        <Typography variant="h6" children={<SkeletonComp variant={"text"} height={50} width={"50%"} color="primary" />} />
                                    </Box>
                                </Box>
                            </div>
                            <Box width="100%">
                                <SkeletonComp variant={"text"} height={400} width={"100%"} color="primary" />
                            </Box>
                        </ContentFlex>
                    </ContainerComp>
                </ContentRelative>
            </ContentBgColor >
        </ThemeProvider >
    )
}
