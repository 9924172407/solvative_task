import { useEffect, useState } from "react";
import SearchBox from "../component/searchBox";
import TableComponent from "../component/table";
import { getGeoData } from "../api";
import Pagination from "../component/pagination";
import Loader from "../component/loader/loader";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [totalRecord, setTotalRecord] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!data.length > 0) {
      fetchGeoData();
    }
  }, [data]);

  const fetchGeoData = async () => {
    setLoading(true);
    try {
      const res = await getGeoData(perPage, currentPage);
      setTotalRecord(res.metadata.totalCount);
      setData(res.data);
      setFilterData(res.data);
    } catch (error) {
      console.error("Something Went Wrong:", error);
    }
    setLoading(false);
  };

  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filteredData);
  };

  const handleLoadData = async (page, pageSize) => {
    setLoading(true);
    try {
      setCurrentPage(page);
      const res = await getGeoData(pageSize, page);
      setData(res.data);
      setFilterData(res.data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
    setLoading(false);
  };

  const handlePerPageChange = (newPerPage) => {
    setPerPage(newPerPage);
    handleLoadData(1, newPerPage);
  };

  return (
    <div className="home-container">
      <SearchBox
        placeHolder={"Search places..."}
        onSearch={handleSearch}
        setValue={setSearchValue}
        value={searchValue}
        isDisabled={loading}
      />
      {loading ? (
        <Loader isLoading={loading} />
      ) : (
        <>
          <div>
            <TableComponent data={filterData} />
          </div>
          <Pagination
            onPageChange={handleLoadData}
            pageSizeOptions={[5, 10]}
            totalRecord={totalRecord}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            perPage={perPage}
            handlePerPageChange={handlePerPageChange}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
