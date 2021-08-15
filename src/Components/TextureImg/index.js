import textureImg from "../../Image/Texture/texture.png"
import styled from "styled-components";

const ContentPrinc = styled.div`
:after {
    content: '';
    position: absolute;
    left: 0;
    margin-top: -40px;
    width: 100%;
    height: 43px;
    background-image: url(${textureImg});
    background-size: cover;
    background-position: center top;
  }
`;

export default function TextureImage(props) {
  return <ContentPrinc children={props.children} />
}