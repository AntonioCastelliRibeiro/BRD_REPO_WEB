import iCard from "../interface";

export default interface Props {
    readonly datacard: iCard;
    readonly count: number;
    readonly fontFamily: string;
    onSetMaterItem(patch: string): any;
}