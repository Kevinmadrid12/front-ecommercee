import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ModalEditProduct from '../components/ModalEditProduct';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import DataTable from 'react-data-table-component';

const Catalog = () => {

    const [dataProducts, setDataProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [idEdit, setIdEdit] = useState(0);

    const apiUrl = 'http://localhost:8000/producto';
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const columns = [
        {
            name: 'id',
            selector: row => row.id,
        },
        {
            name: 'Producto',
            selector: row => row.nombre,
        },
        {
            name: 'Precio',
            selector: row => row.precio,
        },
        {
            name: 'Editar',
            selector: row => <div onClick={() => { openModalEdit(row.id) }} className='cursor-pointer hover:text-yellow-500'>Editar</div>,
        },
        {
            name: 'Eliminar',
            selector: row => <div onClick={() => { deleteProduct(row.id) }} className='cursor-pointer hover:text-red-500'><FontAwesomeIcon icon={faTrash} /></div>,
        },
    ];

    const getAllProducts = async () => {
        const res = await axios.get(`${apiUrl}/`, config);
        console.log(res);
        setDataProducts(res.data);
    }

    const openModalEdit = (id) => {
        setIdEdit(id);
        setShowModal(true);
    }

    const deleteProduct = (id) => {
        Swal.fire({
            title: "¿Esta seguro?",
            text: "Este producto se eliminara de manera permanente",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, borrarlo"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`${apiUrl}/productos/${id}`, config)
                    .then(response => {
                        console.log(response);
                        Swal.fire({
                            title: "Eliminado",
                            text: "El producto ha sido eliminado",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.error(err);
                    })
                    getAllProducts();
            }
        });
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <section className="text-gray-600 body-font">
            <div className="p-4">
                <Link to={'/registrar-producto'}>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded">Registrar Producto</button>
                </Link>
            </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    { dataProducts.length > 0 
                        ?   dataProducts.map((item, key) => {
                                return <div className="p-4 md:w-1/3" key={key}>
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.id}, {item.precio}</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.nombre}</h1>
                                            <p className="leading-relaxed mb-3">{item.descripcion}</p>
                                            <div className="flex items-center flex-wrap ">
                                                <button onClick={() => { openModalEdit(item.id) }} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                                    Editar porducto
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </button>
                                                <button onClick={() => { deleteProduct(item.id) }} className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    Eliminar
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        :   <div className='w-full text-center'>No hay productos registrados.</div>
                    }
                </div>
            </div>
            {showModal && <ModalEditProduct setShowModal={setShowModal} idEdit={idEdit} getAllProducts={getAllProducts} />}
            {/* Datatable */}
            <div className='w-4/5'>
                <DataTable
                    columns={columns}
                    data={dataProducts}
                    pagination
                />
            </div>
        </section>
    )
}

export default Catalog;