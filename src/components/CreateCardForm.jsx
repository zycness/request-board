/* eslint-disable react/prop-types */
import { Container, Title } from "@mantine/core";
import useGenerateBoardData from "../hooks/useGenerateBoardData";
import InputFields from "./InputFields";
import { customNotif } from "../utils/simplifiedNotifications";

const CreateCardForm = ({ closeDrawer }) => {
  const { createNewCard, getData } = useGenerateBoardData();

  const handleCreate = async (card) => {
    try {
      let res = await createNewCard(card);
      console.log(res);
      closeDrawer();
    } catch (error) {
      customNotif(
        "error",
        "No se ha podido crear, intente nuevamente y verifique la información"
      );
    }
  };

  return (
    <Container>
      <Title
        order={2}
        color="gray"
        size={"1.5rem"}
        sx={{ textAlign: "center" }}
      >
        Crear petición
      </Title>
      <InputFields callback={handleCreate} btnText={"Enviar"} />
    </Container>
  );
};

export default CreateCardForm;
