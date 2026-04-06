const mongoose = require('mongoose')

const dbconected = ()=> {
  mongoose.connect('mongodb+srv://sakib:P7rwPV36e2NFKBBG@cluster0.dr5uolb.mongodb.net/hrdepartment?appName=Cluster0')
.then(()=> {
  console.log('database conected');
  
}).catch(()=> {
  console.log('conected hosse na');
  
})
}

module.exports = dbconected