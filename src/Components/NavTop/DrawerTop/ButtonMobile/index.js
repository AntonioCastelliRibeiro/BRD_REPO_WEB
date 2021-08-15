import { Button } from "@material-ui/core";
import styled from "styled-components";

const ButtonComp = styled(Button)`
    border: 1px solid #fff;
    color: #fff;
`;

export default function ButtonMobile(props) {
    return (
        <ButtonComp children={props.children} />
    )
}