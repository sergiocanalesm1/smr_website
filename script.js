
show_start();//show logo and remove
//add_logo_on_banner();
/*
function add_logo_on_banner(){
    //document.getElementById("#banner");
    let row = document.createElement("div");
    let col_class = "col-xl-12";
    row.className = "row";
    let col = document.createElement("div")
    col.className = col_class;
    let input = document.createElement("INPUT");
    input
        .setAttribute("id","menu-btn")
        .setAttribute("type","image")
        .setAttribute("src","media/menu.png")
        .setAttribute("alt","menu")
        ; 
    col.appendChild(input);
    row.appendChild(col);
    for(let i=0;i<10;i++){
        col = document.createElement("div");
        col.className = col_class;
        row.appendChild(col);
    }
    let col = document.createElement("div")
    col.className = col_class;
    let img = document.createElement("IMG")
    img
        .setAttribute("src","media/logo.png");
        //classname?
    col.appendChild(img);
    row.appendChild(col);
    document.getElementById("#banner").appendChild(row);
}
*/

function show_start() {
    let div_start = d3.select("#start");
    const t_time = 2000;//ponerlo en 2000

    let img = div_start.append("img").attr("src", "media/logo.png").style("opacity", 0);
    let quote = div_start.append("p").text('"Talent wins games, but teamwork and intelligence wins championships"').attr("class","quote");
    let quote_name = div_start.append("p").text("-Michael Jordan").attr("class","quote-name");

    //fade in
    img.transition().duration(t_time).ease(d3.easeLinear).style("opacity", 1);
    quote.transition().duration(t_time).ease(d3.easeLinear).style("opacity",1);
    quote_name.transition().duration(t_time).ease(d3.easeLinear).style("opacity",1).on("end",function(){
    //fade out
        setTimeout(function(){//hold and then remove
            img.transition().duration(t_time).ease(d3.easeLinear).style("opacity", 0);
            quote.transition().duration(t_time).ease(d3.easeLinear).style("opacity",0);
            quote_name.transition().duration(t_time).ease(d3.easeLinear).style("opacity",0).on("end",function(){
                div_start.remove();
            });
        },t_time);       
    });
}


let btn_menu = d3.select("#menu-btn");
    
btn_menu.on("click",function(){ //display menu
    let t_time = 1500;
    let div_menu = d3.select("#menu-click")
        .append("div")
        .classed("svg-container",true)
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 600 400")
        .classed("svg-content-responsive", true)
        ;
    div_menu.append("a")
        .attr("xlink:href", "#identity")
        .attr("x",200)
        .attr("y",100)
        ;
    let p1 = div_menu.append("text")
        .text("¿Qué es SMR Abogados?")
        .style("fill","white")
        .on("mouseover",function(d){
            d3.select(this).style("opacity",'0.7');          
        })
        .on("mouseout",function(d){
            d3.select(this).style("opacity",'1');          
        })
        ;
    let p2 = div_menu.append("text")
        .text("¿Qué servicios ofrecemos?")
        .style("fill","white")
        .on("mouseover",function(d){
            d3.select(this).style("opacity",'0.7');          
        })
        .on("mouseout",function(d){
            d3.select(this).style("opacity",'1');          
        })
        ;
    let p3 = div_menu.append("text")
        .text("¿Quiénes son nuestros clientes?")
        .style("fill","white")
        .on("mouseover",function(d){
            d3.select(this).style("opacity",'0.7');          
        })
        .on("mouseout",function(d){
            d3.select(this).style("opacity",'1');          
        })
        .on("click",function(d){
            d3.select("#identity");
        })
        ;
    let p4 = div_menu.append("text")
        .text("Más sobre la empresa")
        .style("fill","white")
        .on("mouseover",function(d){
            d3.select(this).style("opacity",'0.7');          
        })
        .on("mouseout",function(d){
            d3.select(this).style("opacity",'1');          
        })
        ;

    p1.transition()
        .duration(t_time)
        .ease(d3.easeCubic)
        .attr("x",200)
        .attr("y",100)
        ;
    p2.transition()
        .duration(t_time)
        .ease(d3.easeCubic)
        .attr("x",200)
        .attr("y",120)
        ;
    p3.transition()
        .duration(t_time)
        .ease(d3.easeCubic)
        .attr("x",200)
        .attr("y",140)
        ;
    p4.transition()
        .duration(t_time)
        .ease(d3.easeCubic)
        .attr("x",200)
        .attr("y",160)
        ;


    
})

