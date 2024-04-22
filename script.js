let listChildren = document.querySelectorAll('.cube');


// listChildren.forEach((button)=>{
//     cube.addEventListener('click', ()=>{
//         listChildren.forEach((item)=>{
//             cube.style.backgroudColor = '#fff';
//         })
//             cube.style.color = 'red';
//             cube.style.backgroudColor = 'yellow';
//             cube.style.transform = "sclae(2)";
//             console.log(cube)
//     })
// })

listChildren.forEach( button =>{
    button.addEventListener('click', ()=>{
        listChildren.forEach(item =>{
            item.style.backgroundColor = "rgb(240, 141, 219)";
            item.style.transform = "scale(1)";
        })
        button.style.backgroundColor = "rgb(255, 228, 225)";
        button.style.transform = "scale(2)";
    })
})