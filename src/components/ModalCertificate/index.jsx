import { useContext } from "react";
import { ListContext } from "../../providers/ListContext";
import { StyledModal } from "./style";

export const ModalCertic = () => {
  const { certificate, setModal } = useContext(ListContext);
  return (
    <div className="black__role">
      <StyledModal role="dialog">
        <button onClick={() => setModal(false)}>Close</button>
        <img src={certificate.img} alt={certificate.name} />
        <h3>Instituição: {certificate.institution}</h3>
        <h3>Data de emissão: {certificate.date}</h3>
      </StyledModal>
    </div>
  );
};
