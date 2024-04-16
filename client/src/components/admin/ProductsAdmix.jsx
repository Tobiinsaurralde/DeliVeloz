import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import { setDishes, disabledDishes } from "../../redux/actions/actions";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";

export default function ProductsAdmin() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDishes());
  }, [dispatch]);

  const dishes = useSelector((state) => state.dishes);
  const [filterText, setFilterText] = useState("");
  const [filterDishes, setFilterDishes] = useState(dishes);

  useEffect(() => {
    setFilterDishes(filterBySearch(dishes, filterText));
  }, [dishes, filterText]);

  const onDisabled = ({ id, availability }) => {
    dispatch(disabledDishes({ id, availability }));
  };

  const handleChange = (e) => {
    setFilterText(e.target.value);
  };

  const filterBySearch = (dishes, searchText) => {
    return dishes.filter((dish) =>
      dish.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      sortable: true,
      width: "100px",
    },
    {
      name: "Nombre",
      selector: (row) => row.name,
      sortable: true,
      width: "200px",
    },
    {
      name: "Precio",
      selector: (row) => row.price,
      sortable: true,
      width: "100px",
    },
    {
      name: "Categoría",
      selector: (row) => row.category,
      sortable: true,
      width: "150px",
    },
    {
      name: "Subcategoría",
      selector: (row) => row.subCategory,
      sortable: true,
      width: "150px",
    },
    {
      name: "Descripción",
      selector: (row) => row.description,
      width: "250px",
    },
    {
      name: "Imagen",
      cell: (row) => (
        <img
          src={row.image.jpg}
          alt="Imagen"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ),
      width: "100px",
    },
    {
      name: "Disponibilidad",
      selector: (row) => (row.availability ? "Sí" : "No"),
      sortable: true,
      width: "100px",
    },
    {
      name: "Stock",
      selector: (row) => row.quantity,
      sortable: true,
      width: "100px",
    },
    {
      name: "Editar",
      cell: (row) => (
        <Link to={`/editProduct/${row.id}`}>
          <EditIcon width={22} height={22} color={"#E74C4C"} />
        </Link>
      ),
      width: "100px",
    },
    {
      name: "Desactivar",
      cell: (row) => (
        <button onClick={() => onDisabled(row)}>
          <DeleteIcon width={22} height={22} color={"#E74C4C"} />
        </button>
      ),
      width: "100px",
    },
  ];

  return (
    <section className="container-left col-span-4">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="">
          Tabla de <span className="text-sundown-500">Productos</span>
        </h1>

        <input
          type="text"
          onChange={handleChange}
          placeholder="Buscar..."
          className="w-48 bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
        />
      </div>

      <DataTable
        columns={columns}
        data={filterDishes}
        selectableRows
        onSelectedRowsChange={(data) => console.log(data)}
        pagination
      />
    </section>
  );
}
