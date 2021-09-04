import lelyLogo from "../../Image/lelylogo.svg";

const logoFazendaGuabiju =
    "https://www.fazendaguabiju.com.br/wp-content/themes/guabiju/imagens/guabiju.svg";

const logoCresol =
    "https://pbs.twimg.com/profile_images/1375141501785767954/leBMaRF9_400x400.jpg";

const descCresol =
    "Fornecendo soluções financeiras com excelência por meio do relacionamento. Mais de 200 mil famílias cooperadas em dez estados brasileiros.";

const descLely =
    "Produtores de leite de mais de 60 países em todo o mundo escolhem os nossos produtos e serviços.";

export default [
    {
        logo: logoCresol,
        desc: descCresol,
        name: "Cresol - Cooperativa de Crédito",
        social: "@CRESOLTRADIÇÃO",
        styleLogo: {
            transform: "scale(1.9)",
            height: 60,
            width: 70,
            backgroundColor: "transparent"
        }
    },
    {
        logo: lelyLogo,
        desc: descLely,
        name: "Lely",
        social: "@LELYNOBRASIL",
        styleLogo: {
            height: 60,
            width: 77,
            transform: "scale(2.3)",
            backgroundColor: "transparent"
        }
    },
    {
        logo: logoFazendaGuabiju,
        desc: descLely,
        name: "Fazenda Guabiju",
        social: "@fazendaguabiju",
        styleLogo: {
            transform: "scale(2.5)",
            height: 40,
            width: 60,
            backgroundColor: "#fff"
        }
    }
];
