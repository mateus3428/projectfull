
export default class APIService {

    static updateProduto(produto_id, body, token) {

        return fetch(`http://127.0.0.1:8000/api/produtos/${produto_id}/`, {
            'method':'PUT',
             headers: {
                'Content-Type':'application/json',
                'Authorization': `Token ${token}`
             }, body : JSON.stringify(body)
        }).then(resp => resp.json())

    }

    static insertProduto (body, token) {
        return fetch ('http://127.0.0.1:8000/api/produtos/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Token ${token}`
             }, body : JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static deleteProduto (produto_id, token) {
        return fetch(`http://127.0.0.1:8000/api/produtos/${produto_id}/`, {
            'method':'DELETE',
             headers: {
                'Content-Type':'application/json',
                'Authorization': `Token ${token}`
             }
        })
    }

    static loginUser(body) {

        return fetch(`http://127.0.0.1:8000/auth/`, {
            'method':'POST',
             headers: {
                'Content-Type':'application/json',
                
             }, body : JSON.stringify(body)
        }).then(resp => resp.json())

    }

    static registerUser(body) {

        return fetch(`http://127.0.0.1:8000/api/user/`, {
            'method':'POST',
             headers: {
                'Content-Type':'application/json',
                
             }, body : JSON.stringify(body)
        }).then(resp => resp.json())

    }

    
}