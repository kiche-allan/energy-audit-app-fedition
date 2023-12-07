import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';

import { LogContext } from '../../contexts/LogContext';

import './CreateLog.css';

export const CreateLog = () => {
    const { onCreateLogSubmit,error } = useContext(LogContext);
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        emissions: '',
        imageUrl: '',
        summary: '',
    }, onCreateLogSubmit);

    return (
        <section id="create-page" className="auth">
            <form id="create" method='POST' onSubmit={onSubmit} >
                <div className="container">
                    <h1>Energy Audit Facility</h1>
                    <label htmlFor="log-title">Hostel Name:</label>
                    <input value={values.title} onChange={changeHandler}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter log title..."
                    />
                    <label htmlFor="category">Meter Identification Number:</label>
                    <input value={values.category} onChange={changeHandler}
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter log category..."
                    />
                    <label htmlFor="emissions">Meter Reading - kW:</label>
                    <input value={values.emissions} onChange={changeHandler}
                        type="number"
                        id="emissions"
                        name="emissions"
                        min={1}
                        placeholder={1}
                    />
                    <label htmlFor="log-img">Meter Reading Image:</label>
                    <input value={values.imageUrl} onChange={changeHandler}
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Summary and Notes on Energy Collections:</label>
                    <textarea value={values.summary} onChange={changeHandler} name="summary" id="summary" />
                    {error && <p className="error">{error}</p>}
                    <input className="btn submit" type="submit" defaultValue="Create Log" />
                </div>
            </form>
        </section>
    );
};