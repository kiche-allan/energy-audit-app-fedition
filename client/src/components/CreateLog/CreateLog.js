import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';

import { LogContext } from '../../contexts/LogContext';

import './CreateLog.css';

export const CreateLog = () => {
    const { onCreateLogSubmit,error } = useContext(LogContext);
    const { values, changeHandler, onSubmit } = useForm({
        title: '',

        category: '',
        metereading: '',
        loadtype: '',
        loadrating: '',
        loadquantity: '',
        emissions: '',
        imageUrl: '',
        summary: '',
    }, onCreateLogSubmit);

    return (
        <section id="create-page" className="auth">
            <form id="create" method='POST' onSubmit={onSubmit} >
                <div className="container">
                    <h1>Meter and Load Readings</h1>
                    <label htmlFor="log-title">Hostel Name</label>
                    <input value={values.title} onChange={changeHandler}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter log title..."
                    />
                    <label htmlFor="category">Meter Reading kW:</label>
                    <input value={values.category} onChange={changeHandler}
                        type="text"
                        id="metereading"
                        name="metereading"
                        placeholder="Enter log category..."
                    />
                    <label htmlFor="log-title">Load Type:</label>
                    <input value={values.title} onChange={changeHandler}
                        type="text"
                        id="loadtype"
                        name="loadtype"
                        placeholder="Enter Load Type..."
                        
                    />
                    <label htmlFor="emissions">Load Quantity:</label>
                    <input value={values.emissions} onChange={changeHandler}
                        type="number"
                        id="emissions"
                        name="emissions"
                        min={1}
                        placeholder={1}
                    />
                    <label htmlFor="emissions">Load Rating:</label>
                    <input value={values.emissions} onChange={changeHandler}
                        type="number"
                        id="emissions"
                        name="emissions"
                        min={1}
                        placeholder={1}
                    />
                    
                    <label htmlFor="log-img">Image:</label>
                    <input value={values.imageUrl} onChange={changeHandler}
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea value={values.summary} onChange={changeHandler} name="summary" id="summary" />
                    {error && <p className="error">{error}</p>}
                    <input className="btn submit" type="submit" defaultValue="Create Log" />
                </div>
            </form>
        </section>
    );
};