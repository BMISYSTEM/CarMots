import React from 'react'
import { Document, Image, Page, Text, View } from '@react-pdf/renderer'
import useBpsystem from '../hooks/useBpsystem'
import clienteAxios from '../conffig/axios'
import { formateardinero } from '../hooks/moneda'
import fondo from '../../public/img/fondoinvertido.png'
import fondo2 from '../../public/img/fondo2.png'



export default function DocumentopdfCotizacion({datos,url,asesorios}) {
    const token = localStorage.getItem('TOKEN_USER')
    const urlimage = url+"/api/imagenes/?nombre="+ datos[0].foto
    // console.log(datos)
    return (
        <>
              <Document>
                <Page size="A4">
                    <View style={{width:"100vh",height:"50px"}} >
                        <Image src={fondo}/>
                    </View>
                    <View style={{padding:"10px"}} >
                        {/* titulo de pedf */}
                        <View >
                            <Text style={{textAlign:"center",fontSize:"10"}}>Nombre empresa-CRM</Text>
                        </View>
                        <View >
                            <Text style={{textAlign:"left",fontSize:"10"}}>06/06/2023</Text>
                        </View>
                        <View >
                        {/* {url+"/storage/vehiculos/"+ datos[0].foto} */}
                            <View style={{alignItems:"center",alignContent:"center",marginTop:"10px"}}>
                            <Image src={{ uri: urlimage, method: "GET", headers: { "Referer":  url }, body: "" }}  alt="imagen prueba" style={{maxWidth:"200px",maxHeight:"200px"}}/>
                            </View>
                        </View>
                        <View>
                            <Text style={{textAlign:"center"}}>Informacion del Vehiculo</Text>
                            {/* headers */}
                            <View style={{backgroundColor:"#B5B5B5",flexDirection:"row",textAlign:"center" ,width:"100%",justifyContent:"space-between",padding:"10px",fontSize:"15px",fontWeight:"black",marginTop:"3px",borderRadius:"10px",padding:"5px"}}>
                                <Text>Vehiculo</Text>
                                <Text>Modelo</Text>
                                <Text>Precio Publico</Text>
                                <Text>Descuento</Text>
                                <Text>Precio Venta</Text>
                            </View>
                            <View style={{backgroundColor:"#EFE9E9",flexDirection:"row", textAlign:"center",width:"100%",justifyContent:"space-between",padding:"10px",fontSize:"12px",fontWeight:"black",borderRadius:"10px",padding:"5px"}}>
                                <Text>{datos[0].marca ? datos[0].marca : 'No definido' }</Text>
                                <Text>{datos[0].modelo ? datos[0].modelo : 'No definido' }</Text>
                                <Text>{datos[0].valor ? formateardinero(Number(datos[0].valor)): 'No definido' }</Text>
                                <Text>0</Text>
                                <Text>{datos[0].valor ? formateardinero(Number(datos[0].valor)) : 'No definido' }</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{textAlign:"center",marginTop:"20px",marginBottom:"5px"}}>Acesorios seleccionados</Text>
                            {/* headers */}
                            <View style={{backgroundColor:"#B5B5B5",flexDirection:"row",textAlign:"center",marginBottom:"5px" ,width:"100%",justifyContent:"space-between",padding:"10px",fontSize:"15px",fontWeight:"black",marginTop:"3px",borderRadius:"10px",padding:"5px"}}>
                                <Text>Nombre</Text>
                                <Text>Marca</Text>
                                <Text>Estado</Text>
                                <Text>Valor</Text>
                            </View>
                            {asesorios.map(asesorio=>
                                    <View style={{flexDirection:"row",backgroundColor:"#EFE9E9", textAlign:"center",width:"100%",justifyContent:"space-between",padding:"10px",fontSize:"12px",fontWeight:"black",marginTop:"3px",borderRadius:"10px",padding:"5px"}}>
                                        <Text>{asesorio.nombre}</Text>
                                        <Text>{asesorio.marca}</Text>
                                        <Text>{asesorio.estado}</Text>
                                        <Text>{formateardinero(Number(asesorio.valor)) }</Text>
                                    </View>
                            )}
                            
                        </View>
                        <View>
                            <Text style={{textAlign:"center",marginTop:"20px"}}>Documentos requeridos</Text>
                            <View style={{textAlign:"center",gap:"3px",fontSize:"15px",backgroundColor:"#EFE9E9",marginTop:"20px",borderRadius:"10px",padding:"5px"}}>
                                {datos[0].ceduladoc === '1'? <Text >Cedula</Text> : "" }
                                {datos[0].extratos  === '1'? <Text >Extratos</Text> : "" }
                                {datos[0].camaraycomercio  === '1'? <Text >Camara y comercio</Text> : "" }
                                {datos[0].cartacupo  ==='1'? <Text >Carta cupo</Text> : "" }
                                {datos[0].certificadolaboral  != '1'?<Text >Certificado laboral</Text> : "" }
                                {datos[0].declaracion  === '1'? <Text >Declaracion de renta</Text> : "" }
                                {datos[0].desprendibles  === '1'? <Text >Desprendibles de Pago</Text> : "" }
                                {datos[0].facturaproveedor  === '1'? <Text >Factura de Proveedor</Text> : "" }
                            </View>
                        </View>
                        <View>
                            <Text style={{textAlign:"center",marginTop:"20px"}}>Matricula</Text>
                            <View style={{textAlign:"center",backgroundColor:"#EFE9E9",gap:"3px",fontSize:"15px",marginTop:"20px",borderRadius:"10px",padding:"5px"}}>
                                <Text style={{borderBottom:"0.5px solid #B5B5B5"}}>Traspaso: incluida</Text>
                                <Text style={{borderBottom:"0.5px solid #B5B5B5"}} >Honorarios: incluida</Text>
                                <Text  style={{borderBottom:"0.5px solid #B5B5B5"}}>Impuestos: incluida</Text>
                                <Text style={{borderBottom:"0.5px solid #B5B5B5"}}>Pignoracion: incluida</Text>
                                <Text style={{borderBottom:"0.5px solid #B5B5B5"}}>Certificado de tradiccion: incluida</Text>
                                <Text style={{borderBottom:"0.5px solid #B5B5B5"}}>Sigin: incluida</Text>
                            </View>
                        </View>
                        <View style={{width:"100vh",height:"auto",padding:"5px"}} >
                               <Text style={{textAlign:"center",fontSize:"10"}}>Desarrollado por SYPRODS</Text> 
                        </View>
                        </View>
                        </Page>
                        <Page>
                        <View>
                            <Text style={{textAlign:"center",marginTop:"20px"}}>Retoma</Text>
                            <View style={{textAlign:"center",gap:"3px",fontSize:"15px",marginTop:"20px"}}>
                                <Text >No se incluye una retoma</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{textAlign:"center",marginTop:"40px"}}></Text>
                            <View style={{textAlign:"lef",gap:"3px",fontSize:"15px",marginTop:"20px"}}>
                                <Text >Nombre del consultor</Text>
                                <Text >Telefono del consultor</Text>
                                <Text >Correo@correo.com</Text>
                                <View style={{textAlign:"center",marginTop:"10px"}}>
                                    <Text >Cotizacion Generada por CARTMOTS-SYPRODS</Text>
                                </View>
                            </View>
                            
                        </View>
                    
                </Page>
            </Document>

        </>
    )
}
