
import React, {useState, useEffect} from 'react'
import APIService from '../APIService';
import {useCookies} from 'react-cookie';


function Forms(props) {
    const [Nome, setNome] = useState('')
    const [Valor, setValor] = useState('')
    const [Desc, setDesc] = useState('')
    const [token] = useCookies(['mytoken'])

    useEffect(() => {
        setNome(props.produto.Nome)
        setValor(props.produto.Valor)
        setDesc(props.produto.Desc)
    }, [props.produto])

    const updateProduto = () => {
        APIService.updateProduto(props.produto.id, {Nome, Valor, Desc}, token['mytoken'])
        .then(resp => props.updatedInformation(resp))
    }

    const insertProduto = () => {
        APIService.insertProduto({Nome, Valor, Desc}, token['mytoken'])
        .then(resp => props.produtoInserido(resp))
    }

    return (
        <div >
            
            {props.produto ? (

                <div className = "mb-3">
                    <label htmlFor = "nome" className = "form-label"><h4>Nome do produto</h4></label>
                    <input type="text" className= "form-control" id="nome" placeholder="Nome do Produto" 
                        value={Nome} onChange= {e => setNome(e.target.value)}
                    />

                    <label htmlFor = "valor" className = "form-label"><h4>Preço</h4></label>                    
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">R$</span>
                        </div>
                        <input type="number" className="form-control" id="valor" min="0" step=".01"  
                        value={Valor} onChange= {e => setValor(e.target.value)}/>
                    </div>

                    <label htmlFor = "desc" className = "form-label"><h4>Descrição</h4></label>
                    <textarea className="form-control" id="desc" rows="2" 
                    value={Desc} onChange= {e => setDesc(e.target.value)}></textarea>
                    <br/>
                    
                    {
                        props.produto.id ? <button onClick={updateProduto} className="btn btn-success"><h5>Atualizar e Salvar</h5></button>
                        : <button onClick={insertProduto} className="btn btn-success"><h5>Registrar</h5></button>
                    }

                    

                </div>

            ) : null }

        </div>
    )
}

export default Forms
