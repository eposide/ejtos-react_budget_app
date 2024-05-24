
import React, { useContext, useState } from 'react';
import { AppContext }  from '../context/AppContext';


const Budget = () => {

    const { budget, remaining, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [error, setError] = useState('');
    
    const handleBudgetChange = (event) => { 

        setNewBudget(event.target.value);
        setError('');

    }
    const validateBudget = () => { 

        let errorVal = '';
        if (newBudget > 20000) {
            errorVal = 'The amount can not exceed 20000';
            setError(errorVal); 
            alert(errorVal);
            return;
        }
        const allocated = budget - remaining; 
        
        if (newBudget < allocated) {
            errorVal = 'The amount can not be less than what is already allocated';
            setError(errorVal);  
            alert(errorVal);
            return;
        }
        setError(errorVal);
    
    };
    return (

        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onBlur={validateBudget}></input> 
        </div>
    );
};

export default Budget;
