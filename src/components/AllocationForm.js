import React from "react";
import  {AppContext} from "../context/AppContext";

const AllocationForm = (props) => {
    const {dispatch, remaining} = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent

};