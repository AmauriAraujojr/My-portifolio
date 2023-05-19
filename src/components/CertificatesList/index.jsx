import { useContext } from "react";
import { ListContext } from "../../providers/ListContext";
import { CertificateCard } from "../CerticatesCard";
import { StyledCertificSection } from "./style";

export const CertificatesSection = () => {
  const { certificatesList } = useContext(ListContext);
  return (
    <StyledCertificSection>
      <h2 id="certificate">{`<> Certificates </>`}</h2>

      <div>
        <ul>
          {certificatesList.map((certificate) => {
            return (
              <CertificateCard
                key={certificate.name}
                certificate={certificate}
              />
            );
          })}
        </ul>
      </div>
    </StyledCertificSection>
  );
};
