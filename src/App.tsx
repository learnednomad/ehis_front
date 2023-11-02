import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ClientList from "./components/clients/ClientList";
import ProviderList from "./components/providers/ProviderList";
import HospList from "./components/hospitals/HospList";
import ClaimsList from "./components/claims/ClaimsList";

const queryClient = new QueryClient();

function App() {
    return (
        <Container maxWidth="xl">
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Health Insurance Front
                    </Typography>
                </Toolbar>
            </AppBar>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <div>
                        {/*<HeaderComponent/>*/}
                        <div className="container">
                            <Routes>
                                <Route path="/client"  element={<ClientList/>} />
                                <Route path="/provider" element= {<ProviderList/>} />
                                <Route path="/hospital" element= {<HospList/>} />
                                <Route path="/claims" element={<ClaimsList/>} />

                            </Routes>
                        </div>
                        {/*<FooterComponent/>*/}
                    </div>
                </Router>
            </QueryClientProvider>
        </Container>
    );
}
export default App;