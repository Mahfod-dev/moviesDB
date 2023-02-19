import {BrowserRouter,Routes,Route} from 'react-router-dom'


import { MovieHome,MovieDetails } from '../pages'
import { Navbar } from '../components/UI'



export default function Router(){

    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<MovieHome />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        </BrowserRouter>
    )
    }

