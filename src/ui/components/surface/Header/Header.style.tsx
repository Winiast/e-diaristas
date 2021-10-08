import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolBar-root {
      height: 100px;
    }
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToolBar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled("img")`
  height: 35px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolBar-root {
      height: 47px;
    }
  }
`;
