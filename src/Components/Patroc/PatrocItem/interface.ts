interface IPatrocItem {
    logo: string;
    desc: string;
    name: string;
    social: string;
    count: number;
    styleLogo: {
        height: number;
        width: number;
        transform: string;
        backgroundColor: string;
    };
}

export default IPatrocItem;
