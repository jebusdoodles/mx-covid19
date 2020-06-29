import React, { Component } from 'react';
import alldata from '../database/dbestados.json'
import * as d3 from "d3"; 

class DailySumTable extends Component {
    render(){
        const makeTable = () =>{
            let datosDiarios = alldata.slice(alldata.length - 32, alldata.length);
            let datosPasados = alldata.slice(alldata.length - 64, alldata.length - 32);
            let otherData = [];
            let ultimo = 32; 
            let final =64;
    
            let dataListado = () => {
                let datosTabla = [];  /*
                for(var j=0; j < 4; j++){
                    for(var i = 0; i < datosDiarios.length; i++){
                        datosTabla.push({
                            nombre: i,
                            diferencia: datosDiarios[i].confirmados - datosPasados[i].confirmados,
                        });
                    }
                    datosDiarios = datosPasados
    
                    ultimo = ultimo + 32 
                    final = final + 32 
                    
                    datosPasados = alldata.slice(alldata.length - final, alldata.length - ultimo)
                }*/
                for(var i = 0; i < datosDiarios.length; i++){
                    datosTabla.push({
                        nombre: datosDiarios[i].nombre,
                        diferencia: datosDiarios[i].confirmados - datosPasados[i].confirmados,
                    });
                }
                return(datosTabla);
            }
    
            otherData = dataListado();
    
            console.log(otherData)
        }
        
        function renderHeatmap(){
            var margin = {top: 30, right: 30, bottom: 30, left: 30},
  width = 450 - margin.left - margin.right,
  height = 450 - margin.top - margin.bottom; 
        
            var svg = d3.select("#my_dataviz")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
            
                var myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
                var myVars = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"]
            
                var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(myGroups)
  .padding(0.01);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
                
  var y = d3.scaleBand()
  .range([ height, 0 ])
  .domain(myVars)
  .padding(0.01);
svg.append("g")
  .call(d3.axisLeft(y));
            
  var myColor = d3.scaleLinear()
  .range(["white", "#69b3a2"])
  .domain([1,100])
            
  d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv", function(data) {

    svg.selectAll()
        .data(data, function(d) {return d.group+':'+d.variable;})
        .enter()
        .append("rect")
        .attr("x", function(d) { return x(d.group) })
        .attr("y", function(d) { return y(d.variable) })
        .attr("width", x.bandwidth() )
        .attr("height", y.bandwidth() )
        .style("fill", function(d) { return myColor(d.value)} )
  
  })

            return(
                <div id="my_dataviz"></div>
            );
        }
    
        return(
            <>
                {
                    makeTable(alldata) 
                }
            </>
        );
    }
}

export default DailySumTable; 