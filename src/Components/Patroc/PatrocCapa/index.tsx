import React from "react";
import styled from "styled-components";
import "aos/dist/aos.css";

interface IContentPrinc {
    fontFamily: string;
    bgImage: string;
}

const ContentDescPrinc = styled.div`
  padding: 79px 0px 79px 0px;
  display: flex;
  flex-direction: column;
`;

const DescPrinc = styled.div`
  color: #fff;
  font-size: 2.25rem;
  font-weight: 700;
  padding: 2px;
  text-align: center;
`;

const DescSec = styled.div`
  font-size: 1.0625rem;
  line-height: 1.55em;
  padding: 2px;
  text-align: center;
  color: rgba(255, 255, 255, 0.76);
`;

const C_TITLE = "Nossos Colaboradores";
const C_DESC =
    "Somos gratos pelo trabalho árduo dos nossos colaboradores profissionais e experientes no ramo agrícola.";

export default function PatrocCapa() {
    return (
        <ContentDescPrinc>
            <DescPrinc data-aos="fade-up" children={C_TITLE} />
            <DescSec data-aos="fade-up" children={C_DESC} />
        </ContentDescPrinc>
    );
}
