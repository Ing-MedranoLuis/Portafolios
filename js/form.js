const form=document.getElementById('form');

const dataComets=[];
form.addEventListener('submit',(e)=>{
   
    e.preventDefault();
    const data=new FormData(e.target)
    const dataObject=Object.fromEntries(data)
    dataComets.push(dataObject);

})
