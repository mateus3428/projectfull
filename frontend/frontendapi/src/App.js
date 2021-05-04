import './App.css';
import {useState, useEffect} from 'react'
import ProdutoL from './components/ProdutoL';
import Forms from './components/Forms';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';



function App() {

const [produtos, setProduto] = useState([])
const [editProdutos, setEditProduto] = useState(null)
const [token, setToken, removeToken] = useCookies(['mytoken'])
let history = useHistory()

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/produtos/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization': `Token ${token['mytoken']}`
      }

    })
    .then(resp => resp.json())
    .then(resp => setProduto(resp))
    .catch(error => console.log(error))

  }, [])

  useEffect (()=>{
    if(!token['mytoken']){
        //history.push('/') <- LEMBRAR desta forma o token continua na página, precisa dar refresh pra sair
        window.location.href='/'
    }
}, [token])


  const editBtn = (produto) => {
      setEditProduto(produto)
  }

  const updatedInformation = (produto) => {
    const novo_produto = produtos.map(mproduto => {
      if (mproduto.id === produto.id) {
        return produto;
      }
      else {
        return mproduto;
      }
    })
    setProduto(novo_produto)
  }

  const prodForm = () => {
    setEditProduto({Nome:'', Valor:'', Desc:''})
  }

  const produtoInserido = (produto)=>{
      const novos_produtos = [...produtos, produto]
      setProduto(novos_produtos)
  }

  const deleteBtn = (produto) => {
      const novos_produtos = produtos.filter(mprod =>{
        if (mprod.id === produto.id){
          return false
        }
        return true;
      })
      setProduto(novos_produtos)
  }

  const logoutBtn = ()=>{
    removeToken(['mytoken'])
  }

    return (
      <div className="App">

        <div className="row">
          <div className="col">
            <h1>Projeto Fullstack</h1>
            <br/>
        </div>
        <div className="col">
          <button onClick={prodForm} className="btn btn-primary">Cadastrar Produtos</button>
        </div>

        <div className="col">
          <button onClick={logoutBtn} className="btn btn-primary">Logout</button>
        </div>

        </div>
          <ProdutoL produtos = {produtos} editBtn = {editBtn} deleteBtn = {deleteBtn}/>

          {editProdutos ? <Forms produto = {editProdutos} updatedInformation = {updatedInformation}
          produtoInserido = {produtoInserido}/> : null}

         
          
      
      </div>
    );
}

export default App;
