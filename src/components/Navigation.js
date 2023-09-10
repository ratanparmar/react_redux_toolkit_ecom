// import { Navbar } from 'react-bootstrap'
import {Outlet} from 'react-router-dom'
import NavBar from '../components/NavBar'
// import { Provider } from 'react-redux'
// import store from '../store/store'
const Navigation=()=>{

    return(
        <div>
            {/* <Provider store={store}> */}
            <NavBar/>
             
            <main>
                <Outlet/>
            </main>
            {/* </Provider> */}
        </div>
    )
}
export default Navigation