export default interface Props {
    readonly title: string;
    readonly desc: string;
    readonly descSec: string;
    readonly buttonDesc: string;
    readonly count: number;
    readonly image: string;
    readonly search: string;
    readonly fontFamily: string;
    onSetMaterItem(patch: string): any;
}
