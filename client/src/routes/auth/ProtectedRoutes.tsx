/* import { ReactNode } from "react"
import { useAppSelector } from "../../redux/store/store";
import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
    const { auth } = useAppSelector(state => state.users.user)
    return auth ? children : <Navigate to='/'/>
}
 
export default ProtectedRoutes; */