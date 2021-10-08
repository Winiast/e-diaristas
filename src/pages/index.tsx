import type { NextPage } from "next";
import SafeEnviroment from "ui/components/feeedback/SafeEnviroment/SafeEnviroment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnviroment></SafeEnviroment>
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      ></PageTitle>

      <UserInformation
        name={"Gustavo Henrique"}
        picture={"https://github.com/Winiast.png"}
        rating={3}
        description={"Florianópolis"}
      />
    </div>
  );
};

export default Home;
