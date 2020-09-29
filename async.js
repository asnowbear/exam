
// Sleep函数

function Sleep1(time) {
  return new Promise((resolve, reject) => setTimeout(resolve, time)) 
}

async function Sleep2(time) {
  await setTimeout(()=>{}, time)
}

Sleep1(1000).then(res => console.log('sdfffffffff'))


// console.log('sdfsdf')

