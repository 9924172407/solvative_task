import "./table.css";
import PropTypes from "prop-types";

const TableComponent = ({ data }) => {
  const headerData = [
    {
      title: "#",
    },
    {
      title: "Place Name",
    },
    {
      title: "Country",
    },
  ];

  return (
    <>
      {data.length > 0 ? (
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                {headerData?.map((item, i) => (
                  <th key={i}>{item.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row.city}</td>
                  <td>
                    <img
                      src={`https://flagcdn.com/48x36/${row.countryCode.toLowerCase()}.png`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>No data</div>
      )}
    </>
  );
};

TableComponent.propTypes = {
  data: PropTypes.array,
};

export default TableComponent;
