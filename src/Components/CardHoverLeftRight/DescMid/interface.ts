export default interface ICardItem {
    fontFamily: string;
    hover: boolean;
    left?: boolean;
    right: boolean;
    logo: string;
    setHoverRight(): any;
    setHoverLeft(): any;
}
