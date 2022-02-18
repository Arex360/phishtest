const {initializeApp} = require('firebase/app')
const {getDatabase,ref,set,push,onValue} = require('firebase/database')
const crypto = require('crypto')
const firebaseConfig = {
    apiKey: "AIzaSyAa63BEWJQTu1AphB4STL035L47aqpyFq8",
  authDomain: "phishtest-fe4e2.firebaseapp.com",
  projectId: "phishtest-fe4e2",
  storageBucket: "phishtest-fe4e2.appspot.com",
  messagingSenderId: "314091579492",
  appId: "1:314091579492:web:a48d21198a49f8bc7bd771",
  measurementId: "G-ELBM7MEMEL"
};
let fApp = initializeApp(firebaseConfig)
let Database = getDatabase(fApp)
//set(ref(Database, 'users/' + 'owais'), {
//        fump: "ss"
//});
let SetData = ({key,value}) =>{
    set(ref(Database, key), value);
}
let PushData = ({key,value})=>{
    push(ref(Database, key), value);
    console.log('data inserted')
}
let ChainData = (actor)=>{
    let RandomBytes = crypto.randomBytes(10).toString()
    const hash = crypto.createHash('md5').update(Date.UTC.toString+RandomBytes).digest('hex')
        const date = new Date()
        SetData({
            key: 'updates/'+hash.toString(),
            value: {
                actor: actor,
                timeStamp: date.toTimeString()
            }
        })
}
module.exports = {
    SetData: SetData,
    PushData: PushData,
    ChainData: ChainData
}