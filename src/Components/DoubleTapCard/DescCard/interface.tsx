import { TypographyTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { StyledComponent } from "styled-components";
import iCard from "../interface";

export default interface Props {
    readonly datacard: iCard;
    readonly ButtonComp: StyledComponent<
        OverridableComponent<TypographyTypeMap<{}, "span">>,
        any
    >;
}
