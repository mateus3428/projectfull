import React from 'react'
import APIService from '../APIService';
import {useCookies} from 'react-cookie';

function ProdutoL(props) {

    const [token] = useCookies(['mytoken'])

    const editBtn = (produto) => {
        props.editBtn(produto)
    }

    const deleteBtn = (produto) => {
        APIService.deleteProduto(produto.id, token['mytoken'])
        .then(() => props.deleteBtn(produto))
        .catch(error => console.log(error))
        
    }

    return (
        <div>

            {props.produtos && props.produtos.map(produto => {
            return (
              <div key={produto.id}>
                 
              <h3>{produto.Nome} - R${produto.Valor}</h3>
              <p>{produto.Desc}</p>
              
                <div className = "row">
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick = {()=> editBtn(produto)}>Atualizar</button>
                </div>

                <div className="col">
                    <button onClick={() => deleteBtn(produto)} className="btn btn-danger">Deletar</button>
                </div>


                </div>
                <hr color='white'/>
              </div> 
            )
          })}

        </div>
    )

    
}

export default ProdutoL
