import React  from "react";

const ContenTimeLine=({data})=>{
    if (data) {
        //se recorre data con un map, para poder iterar sobre todos los datos que estan llegando a la lista
        let content = []
        data.map((d)=>{
            //se recorre cada objeto que se encuentra en cada posicion del array que se itero con el map y se general los elementos conten de la lista
            const c = <React.Fragment><div class="timeline-item is-primary"><div class="timeline-marker is-outlined is-primary"></div><div class="timeline-content"><p class="heading">{d.fecha}</p><p>{d.description}</p></div></div></React.Fragment>
            return content.push(c)
        })

        return content
    }else{
        return null
    }
}
export default ContenTimeLine
