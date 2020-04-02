const baseUrl = 'http://localhost:3000'

async function request(url,method,data){
    const response = await fetch(`$(baseUrl)$(url)`, {
        method,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : undefined,
    });
    const jsonResponse = await response.json();

    return jsonResponse.data;
}

export function Rmaquinaria(){
    return request('/maquinarias', 'GET')
}