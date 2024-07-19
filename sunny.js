// document.getElementById('title').getAttribute('id')

// document.getElementById('title').getAttribute('class')
// // is trh sb id and class aajaegi apk pas 
// // js id ya cls ko getelement by mn dalo gay to usi elmeent ki  whether class ya id details aa jaenggi 

// document.getElementById('title').setAttribute('class', 'test')

// //  es set attribute k zrye ap koi b id ya class ko koim b id ya cls set karskty ho , yad rkho syntax js m classs ya id k bd comma then aopki selected ya named id ya cls aegi, set attribute overrwrite karay ga yani phly sy di gae id ya cls ko ye replace karlay ga so be mindful


// const title = document.getElementById('title')
// //  title wali id ko const k andr rakh dea hay at k ap easily access karsko ,just type title es sy uski id and class yania ttributes aa ajin gy


// title.style.backgroundColor = 'white'
// //  usi title ko ap inline css kar skty ho

// title.style.fontSize = '40px'

// //  another example
// // use any style
// title.style.padding = '40px'

// // to extract whats written,innertext and innerhtml also give same values as that of trextcontent
// title.textContent , apko sb kch dyga jo css sy hidden kea ho wo b
// title.innerText, srf wo dyga jo css sy visible kea hoga
// title.innerHTML, saare html dyga js m aapny inline css ke rkhi hogi
// // 
// // textcontent sy wo text b show hpga jo kisi propert ki wjh sy gaeb krdea hay ap ny,but innerhtml sy bs visible text e show hoga
// document.querySelector('h2')
// <h2>​Lorem ipsum dolor sit amet.​</h2>​

// //  queryselector apko phla tag dengy

// document.querySelector('#paras')
// {/* <p id=​"paras">​Lorem ipsum dolor sit amet, consectetur adipisicing elit.​</p>​ */}
// //  queryselector apko id ya cls ya koi b tag dhoond k dyga
// document.querySelector(`input[type="password"]`)
// //  no space btw input and type

// // innerext change karna
// document.querySelector('li').innerText  = "sanaiyla"
// // ap variable declare kar k b ye sb krskty ho

// // es trh ap sb chz ko qsa sy select kar k target karskty ho
// list[0].style.color = 'red'

// list[2].style.color = 'red'
// //  u have to select separately


// sana2.forEach((hey)=>{return hey.style.backgroundColor = 'white'})
// //  h2 ko sana2 m rkha phr foreach k zrye usko style kea
let score = 60
let score1 = Array.of(score)
console.log(score1);

Array.from(score)
console.log(score);

// html main lists ko class di var m store kea to result html collection aya and us par foreach nh lg rha tha s it wasnt an array to usy above way sy aray bnaya then foreach lgaya

list1.forEach((hell)=>{return hell.style.color = 'red'})

h2.forEach((item)=>{item.style.color = 'red';item.style.backgroundColor = 'yellow'})
//  add multiple properties at once

h2.forEach
((item)=>{item.style.color = 'red';item.style.backgroundColor = 'yellow';item.style.padding = '50px';item.style.margin = '50px';item.style.color = 'maroon';item.innerText = "sanaiyla"})
// reference values
