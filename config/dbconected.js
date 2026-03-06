const mongoose = require('mongoose')

const dbconected = ()=> {
  mongoose.connect('mongodb+srv://sakib:NkZxzUmcMpgeJCF7@cluster0.dr5uolb.mongodb.net/hrdepartment?appName=Cluster0')
.then(()=> {
  console.log('database conected');
  
})
}

module.exports = dbconected