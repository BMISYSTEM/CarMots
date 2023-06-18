export const formateardinero = (cantidad) =>{
    return cantidad.toLocaleString('en-US',{
        style: 'currency'
        ,currency: 'USD'
    })
}