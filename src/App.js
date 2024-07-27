import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/darktheme";
import Auth from "./Auth/Auth";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
<Auth/>
    </ThemeProvider>
  );
}

export default App;
