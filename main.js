
const obj = [{
     davlat: 'Germaniya',
     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png',
     title: 'Germany',
     Population: 'Population: 81.770.900',
     Region: 'Region: Europe',
     Capital: 'Capital: Berlin'
},
{
     davlat: 'United States of America',
     img: 'https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg',
     title: 'United States of America',
     Population: 'Population: 323.947.000',
     Region: 'Region: Americas',
     Capital: 'Capital: Washington, D.C.'
},
{
     davlat: 'Brazil',
     img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png',
     title: 'Brazil',
     Population: 'Population: 206.135.893',
     Region: 'Region: Americas',
     Capital: 'Capital: Brasilia'
},
{
     davlat: 'Iceland',
     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1200px-Flag_of_Iceland.svg.png',
     title: 'Iceland',
     Population: 'Population: 334.300',
     Region: 'Region: Europe',
     Capital: 'Capital: Reykjavik'
},
{
     davlat: 'Afghanistan',
     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/1200px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png',
     title: 'Afghanistan',
     Population: 'Population: 27.657.145',
     Region: 'Capital: Region:Asia',
     Capital: 'Capital: Kabul'
},
{
     davlat: 'Åland Islands',
     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/800px-Flag_of_%C3%85land.svg.png',
     title: 'Åland Islands',
     Population: 'Population: 28.875',
     Region: 'Region: Europe',
     Capital: 'Capital: Mariehamn'
},
{
     davlat: 'Albania',
     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/800px-Flag_of_Albania.svg.png',
     title: 'Albaniya',
     Population: 'Population: 2.886.026',
     Region: 'Region: Europe',
     Capital: 'Capital: Tirana'
},
{
     davlat: 'Algeria',
     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQidDZVly61era7YDy53ALvqJEWZPNMazRgKFetAl9xBQ&s',
     title: 'Algeria',
     Population: 'Population: 40.400.000',
     Region: 'Region: Africa',
     Capital: 'Capital: Algeirs'
},
];

const main = document.querySelector('.main__div_2');
const inp1 = document.querySelector('.input1');
const inp2 = document.querySelector('.input2');
const inp3 = document.querySelector('.input3');
const inp4 = document.querySelector('.input4');
const inp5 = document.querySelector('.input5');
const inp6 = document.querySelector('.input6');
const body = document.querySelector('body');
const button = document.querySelector('IMG');

const CreateCard = (data) => {
     main.innerHTML = '';
     data.forEach((v) => {
          const card = document.createElement('div');
          card.innerHTML = `<h1 class='H1'>${v.davlat}</h1> <img width='267' height='160' src='${v.img}'/> <p class='PPPPP'>${v.title}</p> <p class='pppp'>${v.Population}</p> <p class='PpPp'>${v.Region}</p> <p class='PPPPP'>${v.Capital}</p>`;
          main.appendChild(card);
     });
};


CreateCard(obj);

inp1.addEventListener("input", () => {
     const result = obj.filter((v) => v.davlat.includes(inp1.value));
     CreateCard(result);
});
inp2.addEventListener("input", () => {
     const result2 = obj.filter((v) => v.img.includes(inp2.value));
     CreateCard(result2);
});
inp3.addEventListener("input", () => {
     const result3 = obj.filter((v) => v.title.includes(inp3.value));
     CreateCard(result3);
});
inp4.addEventListener("input", () => {
     const result4 = obj.filter((v) => v.Population.includes(inp4.value));
     CreateCard(result4);
});
inp5.addEventListener("input", () => {
     const result5 = obj.filter((v) => v.Region.includes(inp5.value));
     CreateCard(result5);
});
inp6.addEventListener("input", () => {
     const result6 = obj.filter((v) => v.Capital.includes(inp6.value));
     CreateCard(result6);
});


















