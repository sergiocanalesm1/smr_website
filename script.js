
show_start();//show logo and remove

let btn_menu = d3.select("#menu-btn");
let body = d3.select("body");



function show_start() {
    
    const t_time = 12;//ponerlo en 2000
    
    let content = d3.select("#content").style("display","none");//hide everything
    d3.select("body")
        .style("background-color","#A7CE39")
        .style("width","100%")
        .style("height","100%")
        ;
    let div_start = d3.select("#start");

    let img = div_start.append("img")
                       .attr("src", "media/logo.png")
                       .style("opacity", 0)
                       //.style("margin-right","2%")
                       ;
    let quote = div_start.append("p").text('"Talent wins games, but teamwork and intelligence wins championships"').attr("class","quote");
    let quote_name = div_start.append("p").text("Michael Jordan").attr("class","quote-name");

    //fade in
    img.transition().duration(t_time).ease(d3.easeLinear).style("opacity", 1);
    quote.transition().duration(t_time).ease(d3.easeLinear).style("opacity",1);
    quote_name.transition().duration(t_time).ease(d3.easeLinear).style("opacity",1).on("end",function(){
    //fade out
        setTimeout(function(){//hold and then remove and show everything else
            img.transition().duration(t_time).ease(d3.easeLinear).style("opacity", 0);
            quote.transition().duration(t_time).ease(d3.easeLinear).style("opacity",0);
            quote_name.transition().duration(t_time).ease(d3.easeLinear).style("opacity",0).on("end",function(){
                d3.select("body")
                    .style("background-color","white");
                div_start.remove();
                content.style("display","block");
            });
        },t_time);       
    });
}
function transitionBack(p1,p2,p4,t_time,id){
    p1.transition()
                .duration(t_time)
                .ease(d3.easeCubic)
                .attr("x",0)
                .attr("y",0)
                ;
            p2.transition()
                .duration(t_time)
                .ease(d3.easeCubic)
                .attr("x",0)
                .attr("y",0)
                ;
            /*
            p3.transition()
                .duration(t_time)
                .ease(d3.easeCubic)
                .attr("x",0)
                .attr("y",0)
                ;
            */
            p4.transition()
                .duration(t_time)
                .ease(d3.easeCubic)
                .attr("x",0)
                .attr("y",0)
                .on("end",function(){
                d3.select("#menuClick").remove();
                d3.select("#content").style("display","block");
                window.location.href=id;
                
                })
                ;
                                    
    }

btn_menu.on("click",function(){//display menu when clicked
    window.location.href="#content";
    setTimeout(function(){
        transitionFor()
    },50);
    
});
function transitionFor(){
    
    window.location.href="#content";
    let t_time = 1500;
    let content = d3.select("#content")
    if(content.style("display")!="none"){
        content.style("display","none");//hide everything
        
        let div_menu = body.append("div")
            .attr("id","menuClick")
            .classed("svg-container",true)
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 600 400")
            .classed("svg-content-responsive", true)
            ;


        div_menu.append("svg:image")
        .style("padding","10%")
        .style("opacity","1")
        .attr('width', "25px")
        .attr('height', "25px")
        .attr("xlink:href", "media/back.png")
        .on("mouseover",function(){
            d3.select(this).style("opacity",'0.4');          
        })
        .on("mouseout",function(){
            d3.select(this).style("opacity",'1');          
        })
        .on("click",function(){
            transitionBack(p1,p2,p4,t_time,"#content");
        })
        ;
        let p1 = div_menu.append("text")
            .text("¿Qué es SMR Abogados?")
            .style("fill","white")
            .on("mouseover",function(){
                d3.select(this).style("opacity",'0.7');          
            })
            .on("mouseout",function(){
                d3.select(this).style("opacity",'1');          
            })
            .on("click",function(){
                transitionBack(p1,p2,p4,t_time,"#first");
            })
            ;
            
        let p2 = div_menu.append("text")
            .text("¿Qué servicios ofrecemos?")
            .style("fill","white")
            .on("mouseover",function(){
                d3.select(this).style("opacity",'0.7');          
            })
            .on("mouseout",function(){
                d3.select(this).style("opacity",'1');          
            })
            .on("click",function(){
                transitionBack(p1,p2,p4,t_time,"#servicios");
            })
            ;
            /*
        let p3 = div_menu.append("text")
            .text("¿Quiénes son nuestros clientes?")
            .style("fill","white")
            .on("mouseover",function(){
                d3.select(this).style("opacity",'0.7');          
            })
            .on("mouseout",function(){
                d3.select(this).style("opacity",'1');          
            })
            .on("click",function(){
                transitionBack(p1,p2,p3,p4,t_time,"#servicios");
            })
            */
        
        let p4 = div_menu.append("text")
            .text("Más sobre la empresa")
            .style("fill","white")
            .on("mouseover",function(){
                d3.select(this).style("opacity",'0.7');          
            })
            .on("mouseout",function(){
                d3.select(this).style("opacity",'1');          
            })
            .on("click",function(){
                transitionBack(p1,p2,p4,t_time,"#mas");
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
        /*
        p3.transition()
            .duration(t_time)
            .ease(d3.easeCubic)
            .attr("x",200)
            .attr("y",140)
            ;
        */
        p4.transition()
            .duration(t_time)
            .ease(d3.easeCubic)
            .attr("x",200)
            .attr("y",140)
            ;
    }/*
    else{
        btn_menu.on("click",function(){
            p1.transition()
                .duration(t_time)
                .ease(d3.easeCubic)
                .attr("x",0)
                .attr("y",0)
                ;
            p2.transition()
                .duration(t_time)
                .ease(d3.easeCubic)
                .attr("x",0)
                .attr("y",0)
                ;
            /*
            p3.transition()
                .duration(t_time)
                .ease(d3.easeCubic)
                .attr("x",0)
                .attr("y",0)
                ;
                
            p4.transition()
                .duration(t_time)
                .ease(d3.easeCubic)
                .attr("x",0)
                .attr("y",0).on("end",function(){
                d3.select("#menuClick").remove();
                content.style("display","block");
                })
                ;
        });
    }
        */
    
    

}
    
    

    

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

