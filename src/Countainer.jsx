
import DataSheet from "./components/DataSheet";
import PrintMovies from "./components/PrintMovies";
import SearchMovies from "./components/SearchMovies";
import Trailer from "./components/Trailer";
import UserState from "./context/user/UserState";


const Countainer = () => {
  return (
    <UserState>
      <SearchMovies />
      <PrintMovies />
      <DataSheet />
      <Trailer />
    </UserState>
  )
}

export default Countainer;