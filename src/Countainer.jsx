
import DataSheet from "./components/DataSheet";
import Footer from "./components/Footer";
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
      <Footer />
    </UserState>
  )
}

export default Countainer;