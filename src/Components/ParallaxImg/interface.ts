export default interface IProps {
    src: string;
    children: JSX.Element | JSX.Element[];
    height: string;
    width: string;
    filter?: string;
}