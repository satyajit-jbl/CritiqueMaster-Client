import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../component/AuthProvider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

const MyServices = () => {
    const {user} = useContext(authContext)
    const [services, setServices]= useState([]);
    const [search, setSearch] = useState("");
    useEffect(()=>{
        fetchAllServices()
    },[user, search])
    const fetchAllServices = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/services/${user?.email}?search=${search}`)
        setServices(data)
    }
    // console.log(services);

    //delete services
    const handleDelete = async id =>{
        try{
            const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/service/${id}`)
            // console.log(data);
            toast.success('Data deleted successfully')
            fetchAllServices()
        }catch(err){
            // console.log(err);
        }
    }

    return (
        <div>
            <div className=' mx-auto bg-yellow-400 py-5 p-3 flex items-center mt-10 gap-5'>
                        <h1 className='py-5 text-4xl font-bold text-center'>My Services</h1>
                            <BiSearch></BiSearch>
                            <input
                                onKeyUp={(e) => setSearch(e.target.value)}
                                className='input w-full max-w-2xl' type="text" placeholder='Search Services by Category' />
                            {/* <div className='space-y-3'>
                                <input
                                    onKeyUp={(e) => setMinSalary(e.target.value)}
                                    className='input w-full max-w-xs' type="text" placeholder='Min Salary' />
                                <input
                                    onKeyUp={(e) => setMaxSalary(e.target.value)}
                                    className='input w-full max-w-xs' type="text" placeholder='Max Salary' />
                            </div> */}
                        </div>
            <div className="overflow-x-auto">
                {services.length}
              
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Description</th>
                            <th>Update Services</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                       {
                        services.map(service=>
                            <tr key={service._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={service.serviceImage}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{service.serviceTitle}</div>
                                        <div className="text-sm opacity-50">{service.companyName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {service.category}
                                <br />
                                <span className="badge badge-ghost badge-sm">{service.price}</span>
                            </td>
                            <td>{service.description}</td>
                            <th>
                                <button onClick={()=>handleDelete(service._id)} className="btn btn-ghost btn-xs">X</button>
                                <Link to={`/update/${service._id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
                            </th>
                        </tr>

                        )
                       }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MyServices;