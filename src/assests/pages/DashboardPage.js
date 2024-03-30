import Header from "../components/common/header";
import TabsComponent from "../components/dashboad/tabs";
import Search from "../components/dashboad/search";
import PaginationComponent from "../components/dashboad/pagenation";
import Loader from "../components/common/loader";
import BackToTop from "../components/common/backToTop";
import { useEffect, useState } from "react";
import axios from "axios";
function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] =useState(1);
  const [isloading, setIsloading] =useState(true);



  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex =(value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex,previousIndex + 10))

  };
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoin = coins.filter((item) => 
  item.name
  .toLowerCase()
  .includes
  (search.toLowerCase())||
  item.symbol.toLowerCase().includes(search.toLowerCase()));
  

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log("Response:", response);
        setCoins(response.data); // Assuming the response data contains the coin information
        setPaginatedCoins(response.data.slice(0,10))
        setIsloading(false);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        setIsloading(false);
      });
  }, []);

  return (
    
   <> 
      <Header />
      <BackToTop />
        {isloading ?(
   <Loader/>)
   :( <div>
      <Search search={search} onSearchChange={onSearchChange} />
      <TabsComponent coins={search ? filteredCoin : paginatedCoins} />
      {!search &&(
      <PaginationComponent page={page} handlePageChange={handlePageChange}/>)}
    </div>
   )}
    </>
  );
}

export default DashboardPage;
