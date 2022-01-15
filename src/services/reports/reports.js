import jsPDF from "jspdf"
import "jspdf-autotable"
import moment from 'moment'

const START_PAGE = 20;
const SPACE = 10;

const generatePersonFile = (data, time) => {
    // const doc = new jsPDF();
    // let y = START_PAGE;
    
    // const date = new Date();
    // var datestring = date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
    // const dateStr = datestring + "_" + Date().split(" ")[4].replace("_", ":");

    // doc.setFontSize(22)
    // const timeText = time ? moment(time).format("HH:mm:ss DD/MM/YYYY") : "";
    // doc.text(14, y, "Reporte de hoja de rutas de los camiones");
    // y += 1.5*SPACE;

    // doc.setFontSize(12)
    // doc.text(14, y, "Momento de generación del reporte: " + timeText);
    // y += SPACE;
    // doc.text(14, y, "Indice de saturación de la flota: " + (Math.abs(data.index) * 100).toFixed(2) + "%");
    // y += 1.5*SPACE;

    // if (data.pedidosNoCompletados && data.pedidosNoCompletados.length > 0) {
    //     doc.text(14, y, "Pedidos que no se pudieron programar:");
    //     y += SPACE;
    //     for (let i=0; i<(data.pedidosNoCompletados.length/2); i++) {
    //         doc.text(14, y, data.pedidosNoCompletados[2*i]);
    //         y += SPACE / 2;
    //         doc.text(14, y, data.pedidosNoCompletados[2*i + 1]);
    //         y += SPACE;
    //     }
    //     doc.text(14, y, "Pedidos procesados hasta: " + moment(data.dataCompletada).format("HH:mm:ss DD/MM/YYYY"));
    // }
    // y += 1.5*SPACE;

    // doc.text(14, y, "Camiones en ruta");
    // y += SPACE / 2;
    // const tableTypeColumn = ["TA", "TB", "TC", "TD"];
    // const tableTypeRows = [
    //     [
    //         data.trucks.filter(t => t.tipoCamion === "TA").length, 
    //         data.trucks.filter(t => t.tipoCamion === "TB").length, 
    //         data.trucks.filter(t => t.tipoCamion === "TC").length, 
    //         data.trucks.filter(t => t.tipoCamion === "TD").length
    //     ]
    // ];
    // doc.autoTable(tableTypeColumn, tableTypeRows, { startY: y });
    // y += 1.5*SPACE;

    // doc.addPage();
    // y = START_PAGE;
    // doc.setFontSize(22);
    // doc.text(14, y, "Resumen de la flota");
    // y += 1.5*SPACE;
    // const tableTrucksColumn = ["Código del camión", "# Pedidos", "GLP a entregar", "Petróleo consumido", "Distancia recorrida", "Hora de partida", "Hora estimada de llegada"];
    // let tableTrucksRows = [];
    // data.trucks.forEach(t => {
    //     if(t.rutas.length > 0){
    //         const name = t.tipoCamion + t.numero;
    //         const timeStart = t.rutas[0].tiempoEstimadoInicioEntrega;
    //         let indexPath = 0;
    //         if(t.rutas.length > 0) indexPath = t.rutas.length - 1;
    //         const timeEnd = t.rutas[indexPath].tiempoEstimadoInicioEntrega + t.rutas[indexPath].tiempoEstimadoEntrega;
    //         const orders = t.rutas.filter(r => r.tipoRuta === "DIRIGIDO_PEDIDO");
    //         const numOrders = orders.length;
    //         let glp = 0;
    //         let oil = 0;
    //         let distance = 0;
    //         t.rutas.forEach(r => {
    //             if (r.tipoRuta === "DIRIGIDO_PEDIDO" && !r.cancelado) {
    //                 glp += r.consumoGLP;
    //             }
    //             oil += r.consumoPetroleo;
    //             distance += r.tramos.length;
    //         })
            
    //         const truckData = [name, numOrders, glp.toFixed(2), oil.toFixed(2), distance + " km", moment(timeStart).format("HH:mm:ss DD/MM/YYYY"), moment(timeEnd).format("HH:mm:ss DD/MM/YYYY")];
    //         tableTrucksRows = [...tableTrucksRows, truckData];
    //     }
    // })
    // doc.autoTable(tableTrucksColumn, tableTrucksRows, { startY: y });


    // const tableRoutesColumn = ["Destino", "Hora de Partida", "Hora de Llegada", "GLP", "Petróleo", "Posición", "Estado"];
    // let tableRoutesRows = [];

    // data.trucks.forEach(t => {
    //     doc.addPage();
    //     y = START_PAGE;
    //     doc.setFontSize(22);
    //     doc.text(14, y, "Hoja de rutas del camion " + t.tipoCamion + t.numero);
    //     y += 1.5*SPACE;
    //     if (t.estadoCamion === "MANTENIMIENTO") {
    //         doc.setFontSize(12)
    //         doc.text(14, y, "El camion se encuentra en mantenimiento");
    //     } else {
    //         doc.setFontSize(12);
    //         doc.text(14, y, "Posicion:          " + t.posicion.x + " - " + t.posicion.y);
    //         y += SPACE;
    //         doc.text(14, y, "Cantidad GLP: " + t.cantidadGLP.toFixed(2) + " m3");
    //         doc.text(124, y, "Petróleo: " + t.cantidadPetroleo.toFixed(2) + " galones");
    //         y += 1.5*SPACE;
    //         t.rutas.forEach(r => {
    //             if (!r.cancelado) {
    //                 const time = moment(r.tiempoEstimadoInicioEntrega).format("HH:mm:ss DD/MM/YYYY");
    //                 const date = moment(r.tiempoEstimadoInicioEntrega + r.tiempoEstimadoEntrega).format("HH:mm:ss DD/MM/YYYY");
    //                 const glp = r.tipoRuta === "DIRIGIDO_PEDIDO" ? ( "-" + r.consumoGLP.toFixed(2) ) : ( "+" + r.recargaGLP.toFixed(2) );
    //                 const diesel = r.consumoPetroleo.toFixed(2);
    //                 const position = r.tipoRuta === "DIRIGIDO_PEDIDO" ? r.pedido.posicion : r.planta.posicion;
    //                 const dest = r.tipoRuta === "DIRIGIDO_PEDIDO" ? "Pedido Nro. " + r.pedido.numeroPedido : "Planta";
    //                 const positionTxt = position.x + " - " + position.y;
    //                 const state = stateRoute[r.estadoRuta];
        
    //                 const routeData = [dest, time, date, glp, diesel, positionTxt, state];
    //                 tableRoutesRows = [...tableRoutesRows, routeData];
    //             }
    //         })
    //         doc.autoTable(tableRoutesColumn, tableRoutesRows, { startY: y });
    //         tableRoutesRows = [];
    //     }
    // })    
    // doc.save(`Hoja_De_Ruta_${dateStr}.pdf`);
}

export default generatePersonFile;