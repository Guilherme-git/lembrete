import React,{useState} from 'react';
import api from '../../service/api';

import Header from '../../components/Header/index';

import './style.css'


export default () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [text, setText] = useState();
    const [verify, setVerify] = useState(false)

    const submit = async (e) => {
        e.preventDefault();
        const response = await api.post('/create', {
            title: title,
            date: date,
            text: text
        });

        if(response.data != null){
           setVerify(true)
           setTitle('');
           setDate('');
           setText('');
        }
    }

    return(
        <>
            <Header />
           <div className="container">
           <h1 class="display-4">Cadastrar lembrete</h1>
            {verify && 
                <div className="alert alert-success mt-3" role="alert">
                   Lembrete salvo com sucesso
                </div>
            }

           <form className="mt-3">
                <div className="form-group">
                    <label for="title">Título</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        placeholder="Digite um título para seu lembrete" 
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="form-group">
                    <label for="date">Data</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="date" 
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label for="text">Lembrete</label>
                    <textarea 
                        className="form-control" 
                        id="text" 
                        rows="5"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        >
                    </textarea>
                </div>
                <button type="submit" className="btn btnMenu" onClick={submit}>Salvar</button>
            </form>
           </div>
        </>
    );
}