import { createContext, useState } from "react";
import { DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import { SiAxios, SiStyledcomponents, SiTypescript } from "react-icons/si";
import front from "../assets/front.jpg";
export const ListContext = createContext({});

export const ListProvider = ({ children }) => {
  const [techList, setTechList] = useState([
    {
      name: "HTMl",
      img: <DiHtml5 />,
    },
    {
      name: "CSS",
      img: <DiCss3 />,
    },
    {
      name: "JavaScript",
      img: <DiJavascript />,
    },
    {
      name: "React",
      img: <DiReact />,
    },
    {
      name: "TypeScript",
      img: <SiTypescript />,
    },
    {
      name: "Styled-Components",
      img: <SiStyledcomponents />,
    },
    {
      name: "Axios",
      img: <SiAxios />,
    },
  ]);

  const [certificatesList, setCertificatesList] = useState([
    {
      name: "Desenvolvedor Front End",

      institution: "Kenzie Academy Brasil",

      date: "16/05/2023",

      img:`${front}`
    },
    {
        name: "Front End",
  
        institution: "Kenzie Academy Brasil",
  
        date: "16/05/2023",
  
        img:`${front}`
      },
      {
        name: "Desenvolvedor",
  
        institution: "Kenzie ",
  
        date: "16/05/2023",
  
        img:`${front}` ,
      }
  ]);

  const [certificate,setCertificate]=useState(null)

  const [modal, setModal]=useState(false)
  return (
    <ListContext.Provider value={{ techList,certificatesList,certificate,setCertificate,modal,setModal }}>{children}</ListContext.Provider>
  );
};
