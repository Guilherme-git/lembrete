import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../../service/api';

import Header from '../../components/Header/index';

import './style.css'

export default () => {
    const [lembretes, setLembretes] = useState([]);
    const [verify, setVerify] = useState(false)
    
    useEffect(() => {
        api.get('/').then(response => {
            if(response.data == 0)
            {
                setVerify(false)
            }else {
                setVerify(true);
                setLembretes(response.data);
            }
        });
    },[lembretes]);


    
    const destroy = async (e) => {
       const response = api.delete(`delete/${e}`)

        if(response){
            api.get('/').then(response => {

                if(response.data == 0)
                {
                    setVerify(false)
                }else {
                    alert("Deletado com sucesso")
                    setLembretes(response.data);
                }
               
              });
        }
    };

    const formatarDate = (data) =>{
        const split = data.split('-');
        const data_formatada = split[2] + "/" + split[1] + "/" + split[0];
        return data_formatada;
    }

    return(
        <>
            <Header />
            <div className="container mt-3">
                {verify == false ? 
                 <div className="alert alert-dark" role="alert">
                   Nenhum lembrete cadastrado
                 </div>
                : 
                   
                    lembretes.map(res =>
                        <div className="card mb-3" key={res.id}>
                            <div className="card-body">
                                <h5 className="card-title">{res.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{formatarDate(res.date)}</h6>
                                <p className="card-text">{res.text}</p>
                                <Link to={`/edit/${res.id}`} className="card-link">Editar</Link>
                                <a onClick={() => destroy(res.id) } className="card-link">Deletar</a>
                            </div>
                        </div>
                    )
                }
                
            </div>    
        </>
    );
}