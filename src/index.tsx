import {render} from "react-dom";
import {App} from "./app";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/theme_provider";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)