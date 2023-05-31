import {useState} from 'react';
import {Table, TableRow, TableCell, TableHead, TableBody, Button, Modal, TextField} from '@mui/material'

// Интерфейс описывающий тип данных сотрудника
interface Employee {
    name: string;
    position: string;
    salary: string;
    }

function App () {

    const [employees, setEmployees] = useState<Employee[]>([]);
    const [open, setOpen] = useState(false);
    const [newEmployee, setNewEmployee] = useState<Employee>({ name: '', position: '', salary: '' });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddEmployee = () => {
        setEmployees([...employees, newEmployee]);
        setNewEmployee({ name: '', position: '', salary: '' });
        handleClose();
    };

    const handleDeleteEmployee = (index: number) => {
        setEmployees(employees.filter((_, i) => i !== index));
    };


    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Position</TableCell>
                        <TableCell>Salary</TableCell>
                        <TableCell/>
                    </TableRow>
                </TableHead>
                <TableBody>
                {employees.map((employee, index) => (
                    <TableRow key={index}>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.position}</TableCell>
                        <TableCell>{employee.salary}</TableCell>
                        <TableCell>
                            <button className='text-red-500' onClick={() => handleDeleteEmployee(index)}>Delete</button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <Button onClick={handleOpen}>Add Employee</Button>
            <Modal open={open} onClose={handleClose} >
                <div className="w-auto p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
                    <h1 className="text-2xl text-center mb-2">Enter employee data:</h1>
                    <TextField
                        label="Name"
                        value={newEmployee.name}
                        onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                    />
                    <TextField
                        label="Position"
                        value={newEmployee.position}
                        onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
                    />
                    <TextField
                        label="Salary"
                        value={newEmployee.salary}
                        onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })}
                    />
                    <Button onClick={handleAddEmployee}>Add Employee</Button>
                </div>
            </Modal>
        </div>
    )
}

export default App;
