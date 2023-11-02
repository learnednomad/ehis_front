import {DataGrid, GridCellParams, GridColDef, GridToolbar,} from "@mui/x-data-grid";
import {ClientResponse} from "../../types";
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteClient, getClients} from "../../api/clientapi";
import Snackbar from '@mui/material/Snackbar';
import {useState} from "react";
import AddClient from './AddClient';
import EditClient from "./EditClient";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



function ClientList(){

    const [open, setOpen] = useState(false);//show message after deletion

    const queryClient = useQueryClient();
    const {data, error, isSuccess} = useQuery({
        queryKey : ["clients"],
        queryFn: getClients
    })


    const { mutate } = useMutation(deleteClient, {
        onSuccess: () => {
            setOpen(true);
            queryClient.invalidateQueries(["clients"]);
        },
        onError: (err) => {
            console.error(err);
        },
    });


    const columns: GridColDef[] = [
        {field:'first_name', headerName:'First Name', width:200},
        {field:'last_name', headerName:'Last Name', width:200},
        {field:'dateOfBirth', headerName:'Date of Birth', width:200},
        {field:'photo_url', headerName:'Photo URL', width:200},
        {field:'created_on', headerName:'Date Created', width:200},
        {   field:'edit',
            headerName:'',
            width: 90,
            filterable:false,
            sortable:false,
            disableColumnMenu: true,
            renderCell: (params: GridCellParams) =>
                <EditClient clientdata={params.row}/>
                },
        {   field: 'delete',
            headerName:'',
            width:90,
            filterable:false,
            sortable:false,
            disableColumnMenu:true,
            renderCell:(params: GridCellParams) => (
            <IconButton
                onClick={() => {
                    if (window.confirm("Are you sure you want to delete ?"))
                    mutate(params.row._links.client.href)
                }}> <DeleteIcon fontSize="small" />
            </IconButton>)
        },
    ];
    



    if (!isSuccess){
        return <span> Loading ........</span>
    }
    else if (error){
        return <span>Error while fetching cars .... </span>
    }
    else{
        return(
            // <table>
            //     <tbody>
            //     {
            //         data.map((client : ClientResponse) =>
            //         <tr key={client._links.self.href}>
            //             <td>{client.first_name}</td>
            //             <td>{client.last_name}</td>
            //             <td>{client.dateOfBirth}</td>
            //             <td>{client.created_on}</td>
            //             <td>{client.photo_url}</td>
            //         </tr>)
            //     }
            //     </tbody>
            // </table>

            <>
                <AddClient />
            <DataGrid
                columns={columns}
                rows={data}
                disableRowSelectionOnClick={true}
                getRowId={row => row._links.self.href}
                slots={{ toolbar: GridToolbar }}
            />


        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={() => setOpen(false)}
            message="Client deleted" />
            </>
        )
    }
}


export default ClientList;


