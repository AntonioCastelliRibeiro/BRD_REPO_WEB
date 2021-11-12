import C_IMG_ENERGY_SOL from "../../Image/logo/energysol.png";


const logoFazendaGuabiju =
    "https://www.fazendaguabiju.com.br/wp-content/themes/guabiju/imagens/guabiju.svg";

const logoCresol =
    "https://pbs.twimg.com/profile_images/1375141501785767954/leBMaRF9_400x400.jpg";

const descCresol =
    "Fornecendo soluções financeiras com excelência por meio do relacionamento. Mais de 200 mil famílias cooperadas em dez estados brasileiros.";

const C_DESC_ENERGY_SOL =
    "Focando no segmento de energia autossustentável, na Micro e Mini Geração Fotovoltaica. Por meio de parcerias estratégicas com empresas internacionais, utiliza equipamentos de ponta, fornecendo total garantia e know-how a seus clientes.";

const C_DESC_FAZENDA_GUABIJU = "Proporcionando alimentos de origem animal, superando as expectativas de tempo de produção convencional."

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
        logo: C_IMG_ENERGY_SOL,
        desc: C_DESC_ENERGY_SOL,
        name: "Energy Sol",
        social: "@ENERGYSOLFOTOVOLTAICO",
        styleLogo: {
            height: 50,
            width: 70,
            transform: "scale(1.8)",
            backgroundColor: "#fff",
            borderRadius: '100%',
            padding: 2
        }
    },
    {
        logo: logoFazendaGuabiju,
        desc: C_DESC_FAZENDA_GUABIJU,
        name: "Fazenda Guabiju",
        social: "@FAZENDAGUABIJU",
        styleLogo: {
            transform: "scale(2.5)",
            height: 40,
            width: 60,
            backgroundColor: "#fff"
        }
    }
];
