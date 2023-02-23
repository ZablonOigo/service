let slideIndex=0;
showindex();
function showindex(){
    let slide=document.getElementsByClassName('desc');
    let content=document.getElementsByClassName('test-content');

    for(let i=0;i<slide.length;i++){
        slide[i].style.display='none'
    }
    for(let i=0;i<content.length;i++){
        content[i].style.display='none';
    }
    slideIndex ++;
    if(slideIndex>slide.length){slideIndex=1 }
    if(slideIndex>content.length){slideIndex=1 }
    content[slideIndex-1].style.display='flex'
    slide[slideIndex-1].style.display= 'block';
    setTimeout(showindex, 3000)
}
// date
let year=new Date().getFullYear();
let demo=document.getElementById('demo');
demo.textContent+= year
