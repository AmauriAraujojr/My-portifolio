import { useContext } from "react";
import { StyledCertificCard } from "./style";
import { ListContext } from "../../providers/ListContext";

export const CertificateCard = ({ certificate }) => {
  const { setCertificate, setModal } = useContext(ListContext);
  return (
    <StyledCertificCard onClick={() => setCertificate(certificate)}>
      <h3>{certificate.name}</h3>
      <img src={certificate.img} alt={certificate.name} />
      <button onClick={() => setModal(true)}>Open</button>
    </StyledCertificCard>
  );
};
