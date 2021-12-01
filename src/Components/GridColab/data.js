import coratho from "../../Image/logo/coratho.png";

import energysol from "../../Image/logo/energysol.png";

import vitral from "../../Image/logo/vitral.png";

import pavimenti from "../../Image/logo/pavimenti.png";

import imperiodosgirassois from "../../Image/logo/imperiodosgirassois.png";

/*Cresol */
const imgCresolCapa =
  "https://pbs.twimg.com/profile_images/1375141501785767954/leBMaRF9_400x400.jpg";

const imgCresolItem =
  "https://cresol.com.br/wp-content/uploads/2020/05/Sede-Nacional-Cresoll.jpg";

const descCresol1 =
  "Fornecendo soluções financeiras com excelência por meio do relacionamento para gerar desenvolvimento dos cooperados, de seus empreendimentos e da comunidade.";
const descCresol2 =
  "Fazendo parte da Cresol Confederação, que abrange 17 estados e mais de 630 mil cooperados, a Cresol trabalha com foco no atendimento personalizado, fornecendo soluções financeiras para gerar desenvolvimento dos cooperados, de seus empreendimentos e de toda comunidade.";

/*Coratho */

const descoratho =
  "Empresa de beneficiamento de carnes e produtos de origem animal. Possuímos um portfólio com mais de 20 produtos suínos preparados com muito amor, dedicação e qualidade.";
const descoratho1 =
  "Com foco na busca constante por conhecimento e tecnologias aplicadas à produção animal, o nome Guabiju passou a ter destaque e tornou-se referência na região pela confiança e qualidade.";


/* Fazenda Guabiju */

const imgGuabiju =
  "https://www.fazendaguabiju.com.br/wp-content/themes/guabiju/imagens/guabiju.svg";

const imgGuabijuItem =
  "https://fazendaguabiju.com.br/wp-content/uploads/2020/11/a-fazenda-1.jpg";

const descGuabiju1 =
  "A Fazenda Guabiju foi idealizada por seus sócios investidores no ano de 2008, com o propósito de desenvolver bezerros precoces.";
const descGuabiju2 =
  "Com foco na busca constante por conhecimento e tecnologias aplicadas à produção animal, o nome Guabiju passou a ter destaque e tornou-se referência na região pela confiança e qualidade.";

const descEnergySol =
  "A Fazenda Guabiju foi idealizada por seus sócios investidores no ano de 2008, com o propósito de desenvolver bezerros precoces.";
const descEnergySol1 =
  "Com foco na busca constante por conhecimento e tecnologias aplicadas à produção animal, o nome Guabiju passou a ter destaque e tornou-se referência na região pela confiança e qualidade.";


const descVitralSul =
  "A Vitral Sul é uma empresa que atua no ramo vidreiro há 26 anos no Paraná, Santa Catarina e Rio Grande do Sul.";
const descVitralSul1 =
  "Seus produtos diferenciados atraem a atenção dos mais variados setores: Vidraçaria, Metalúrgicas, Indústrias Moveleiras, Construção Civil, Arquitetos e Decoradores.";


// A Vitral Sul é uma empresa que atua no ramo vidreiro há 26 anos no Paraná, Santa Catarina e Rio Grande do Sul.
export default [
  {
    search: "energy-sol",
    nome: "Energy",
    sobreNome: "Sol",
    cargo: "Sistemas Fotovoltaicos.",
    descricao1: descEnergySol,
    descricao2: descEnergySol1,
    img: energysol,
    imgItem: energysol,
    hexa: "#fe7e2b",
  },
  {
    search: "cresol",
    nome: "Cresol",
    sobreNome: "",
    cargo: "Cooperativa de Crédito",
    descricao1: descCresol1,
    descricao2: descCresol2,
    img: imgCresolCapa,
    imgItem: imgCresolItem,
    hexa: "#00604f",
  },
  {
    search: "vitral-sul",
    nome: "Vitral",
    sobreNome: "Sul",
    cargo: "Alumínios e Ferragens.",
    descricao1: descVitralSul,
    descricao2: descVitralSul1,
    img: vitral,
    imgItem: vitral,
    hexa: "#ffec00",
  },
  {
    search: "cresol-tradicao",
    nome: "Cresol",
    sobreNome: "Tradição",
    cargo: "Cooperativa de Crédito",
    descricao1: descCresol1,
    descricao2: descCresol2,
    img: imgCresolCapa,
    imgItem: imgCresolItem,
    hexa: "#00604f",
  },
  {
    search: "fazenda-guabiju",
    nome: "Fazenda",
    sobreNome: "Guabiju",
    cargo: "Fazenda de Bovinos",
    descricao1: descGuabiju1,
    descricao2: descGuabiju2,
    img: imgGuabiju,
    imgItem: imgGuabijuItem,
    hexa: "#45392b",
  },
  {
    search: "pavimenti",
    nome: "Pavimenti",
    sobreNome: "",
    cargo: "Blocos e Pavers",
    descricao1: descGuabiju1,
    descricao2: descGuabiju2,
    img: pavimenti,
    imgItem: pavimenti,
    hexa: "#052f60",
  },
  {
    search: "coratho",
    nome: "Coratho",
    sobreNome: "Alimentos",
    cargo: "Beneficiamento de carnes e produtos de origem animal.",
    descricao1: descoratho,
    descricao2: descoratho1,
    img: coratho,
    imgItem: coratho,
    hexa: "#be1522",
  },
  {
    search: "imperio-dos-girassois",
    nome: "Império",
    sobreNome: "dos Girassóis",
    cargo: "Extrato de Girassol, Naturite, Giderme e Chia Ômega 3.",
    descricao1: descoratho,
    descricao2: descoratho1,
    img: imperiodosgirassois,
    imgItem: imperiodosgirassois,
    hexa: "#ffc400",
  }
];
