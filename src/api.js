const baseUrll = 'http://192.168.1.89:3000'

async function request(url,method,data){
    const response = await fetch(`${baseUrll}${url}`, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined,
    });
    const jsonResponse = await response.json();
    return jsonResponse.result;
}

export function Rmaquinaria(){
    return request('/maquinarias', 'GET')
}
export function Umaquinaria(data){
    const jei = {  
        "MARCA": data.marca, 
        "MODELO": data.modelo, 
        "PRECIO": data.precio, 
        "TIPO": data.tipo
    }
    return request(`${"/maquinarias/"}${data.patente}${"/update"}`, 'POST',data)
}

export function Fmaquinaria(data){
    return request(`${"/maquinarias/"}${data}`, 'GET')
}