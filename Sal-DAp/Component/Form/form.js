import { createContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import AddEmpForm from "./component/Addemp";
import Script from "next/script";
import { toast } from "react-toastify";
const Formstate = createContext();


export default function  Form(){
    const [form , setForm] = useState({
    FirstName: "",
    LastName: "",
    WallletAddress:"",
    Position:"Intern",
    Country:"India",
  });

  const[loading,setLoading] = useState(false);
  const[address , setAddress] = useState("");

  const [uploaded , setuploaded] = useState(false);

  const[imageurl,setImageurl] = useState();

  const  FormHandler = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
   })
  }


  const [Image , setImage] = useState(null);
  const ImageHandler = (e)=>{
    setImage(e.target.files[0]);
  }



  const Addemp=async (e)=>{
    e.preventDefault();
    if(typeof window.ethereum =="undefined"){
      console.log("PLease install the metamask");
  }
  let web3 = await new Web3(window.ethereum);
  if(form.FirstName == ""){
    toast.warn("First Name filed is empty");
  }
  else if(form.LastName == ""){
    toast.warn("Last Name filed is empty");
  }
  else if(form.WallletAddress== ""){
    toast.warn("Wallet Address filed is empty");
  }
  else if(uploaded == false){
    toast.warn("Files upload required");
  }
  else if(uploaded == false){
    toast.warn("Files upload required");
  }
  else{
    setLoading(true);
    const contract = new web3.eth.Contract(
      [
        {
          "inputs": [],
          "name": "account",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ],
      "0x2795294BFe8fdc0C17b79530Ee70445AdFB47021"
    );
    const accounts = await web3.eth.requestAccounts();
   await contract.methods.account().send({from :"0xfbb83C2a1192dDf082d231b430052B195aCB6aED"})
  //  await as.then(function (resp){
  //   alert(resp);
  //   console.log(resp);
  //  })
  const ac = await contract.methods.owner().call({gas:35000})
    setAddress(ac);
  }
}




  return (
    <>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.2.7-rc.0/web3.min.js"></Script>
    <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
    <Formstate.Provider value = {{form,setForm,Image,setImage,ImageHandler,FormHandler,setImageurl ,Addemp,setuploaded}}>
        {loading == true ?
        address == "" ?
          <div className="Spinner">
            <TailSpin height={60}/>
            </div>:
            <div className="Address">
              <h1>welcome TO LOGO !</h1>
              <h1>{address}</h1>
              <button className="button">ADD EMPLOYEE</button>
          </div>:
      <AddEmpForm/>
        }
    </Formstate.Provider>
    </>
  )
}

export {Formstate};