import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../component/AuthProvider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyServices = () => {
    const {user} = useContext(authContext)
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetchAllServices()
    },[user])
    const fetchAllServices = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/services/${user?.email}`)
        setServices(data)
    }
    console.log(services);

    //delete services
    const handleDelete = async id =>{
        try{
            const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/service/${id}`)
            console.log(data);
            toast.success('Data deleted successfully')
            fetchAllServices()
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                       {
                        services.map(service=>
                            <tr>
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
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button onClick={()=>handleDelete(service._id)} className="btn btn-ghost btn-xs">X</button>
                                <button className="btn btn-ghost btn-xs">Update</button>
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