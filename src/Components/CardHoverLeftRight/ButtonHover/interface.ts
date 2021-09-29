export default interface ICardItem {
    hoverRight: boolean;
    hoverLeft: boolean;
    mobile: boolean;
    left: boolean;
    desc: string;
    setHoverLeft?(AActive: Boolean): any;
}
