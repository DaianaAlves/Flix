alert("Seja Bem vindo(a)")
var nomesFilmes =["Toy Story1", "A culpa é das estrelas", "Bratz", "Thor", "Barbie","Vingadores ultimato"]
var listaFilmes =["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNTVkMTFiZWItOTFkOC00YTc3LWFhYzQtZTg3NzAxZjJlNTAyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMjM0MDY2MTgxNl5BMl5BanBnXkFtZTgwMDQyNzA2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMGY5MzU3MzItNDBjMC00YjQzLWEzMTUtMGMxMTEzYjhkMGNkXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_UY268_CR1,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"]

for (var i = 0; i < listaFilmes.length; i ++){
  document.write("<img src =" + listaFilmes[i] +  ">" )
  
}