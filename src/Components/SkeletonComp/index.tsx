import React from "react";
import styled from "styled-components";
import { Skeleton } from "@material-ui/lab";
import IProps from "./interface";

interface IContentSkeletonPrinc {
    height: string;
}
const ContentSkeletonPrinc = styled.div<IContentSkeletonPrinc>`
  height: ${props => props.height};
  width: 100%;
  padding-top: 40px;
  padding-bottom: 35px;
`;

const ContentSkeleton = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ContentSkeletonItem = styled.div`
  padding-bottom: 20px;
  padding-right: 20px;
`;

const CompSkeletonPrincipal = () => (
    <ContentSkeletonPrinc height="500px">
        <ContentSkeleton>
            <Skeleton style={{ borderRadius: 10 }} animation="wave" variant="rect" width={"100%"} height={500} />
        </ContentSkeleton>
    </ContentSkeletonPrinc>
)

const CompSkeletonSec = () => (
    <ContentSkeletonItem>
        <Skeleton style={{ borderRadius: 10 }} animation="wave" variant="rect" width={"390px"} height={350} />
    </ContentSkeletonItem>
)

function SkeletonComp(props: IProps) {
    return props.principal ? <CompSkeletonPrincipal /> : <CompSkeletonSec />
}

export default SkeletonComp;