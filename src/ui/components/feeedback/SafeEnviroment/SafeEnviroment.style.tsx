import { styled } from "@mui/material/styles";
import SafeEnviroment from "./SafeEnviroment";

export const SafeEnviromentContainer = styled("div")`
  text-align: right;
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(2)};
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
