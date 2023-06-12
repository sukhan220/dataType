const allLight= document.querySelectorAll(".light");



const typeCheck=(d)=>{
    let active =typeof d;
    switch(active){
        case"string":
            allLight[0].style.backgroundColor="green";
            break;
        case"boolean":
            allLight[1].style.backgroundColor="green";
            break;
        case"number":
            allLight[2].style.backgroundColor="green";
            break;
        case"object":
            allLight[3].style.backgroundColor="green";
            break;
        case "function":
            allLight[4].style.backgroundColor="green";
            break;

    }
}


export {typeCheck};