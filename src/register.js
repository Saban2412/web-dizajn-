import React, {useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [Drzava, Drzavachange] = useState("BiH");
    const [Adresa, Adresachange] = useState("");
    const [Spol, Spolchange] = useState("Muško");

    const Navigate = useNavigate();

    const isValidate=() => {
        let isproceed=true;
        let errormessage = 'Molim vas unesite ';
        if(id === '' || id=== null) {
            isproceed=false;
            errormessage+=' korisničko ime';
        }
        if(name === '' || name=== null) {
            isproceed=false;
            errormessage+=' ime i prezime';
        }
        if(password === '' || password === null) {
            isproceed=false;
            errormessage+=' šifru';
        }
        if(email === '' || email === null) {
            isproceed=false;
            errormessage+=' e-mail adresu';
        }
        if(!isproceed){
            toast.warning(errormessage);
        }else{
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
    
        }else{
            isproceed=false;
            toast.warning('E-mail adresa nije validna!');
        }
    }
        return isproceed;
    }

    const handlesubmit = (e) => {
        
        e.preventDefault();
        let regobj={id, name, password, email, phone, Drzava, Adresa, Spol};
        if(isValidate()){

        
        //console.log(regobj);

        fetch("http://localhost:3001/user", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'   },
            body: JSON.stringify(regobj)
        }).then((res) => {
            
                toast.success('Uspješno ste se registrovali!')
                Navigate('/login');
        }).catch((error) => {
                toast.error('Greška prilikom registracije!');
        
    });
}
}
        return( 
             <div>
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card">
                         <div className="card-header"> 
                         <h1>Registracija</h1>
                         </div>
                         <div className="card-body"> 
                            <div className="row"> 
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Korisničko ime <span className="errmsg">*</span></label>
                                        <input  value={id} onChange={e=>idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Šifra <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e=>passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Ime i prezime <span className="errmsg">*</span></label>
                                        <input  value={name} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>E-mail <span className="errmsg">*</span></label>
                                        <input  value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Broj telefona</label>
                                        <input  value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Država </label>
                                        <select  value={Drzava} onChange={e=>Drzavachange(e.target.value)} className="form-control">
                                            <option value="BiH">Bosna i Hercegovina</option>
                                            <option value="Srbija">Srbija</option>
                                            <option value="Hrvatska">Hrvatska</option>
                                            <option value="Crna Gora">Crna Gora</option>
                                            <option value="Drugo">Drugo</option>
                                        </select>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Adresa  </label>
                                        <input value={Adresa} onChange={e=>Adresachange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Spol</label>
                                        <br></br>
                                        <input  type="radio" checked={Spol==='Muško'} onChange={e=>Spolchange(e.target.value)} name="spol" value="Muško" className="app-check"></input>
                                        <label>Muško</label>
                                        <input  type="radio" checked={Spol==='Žensko'} onChange={e=>Spolchange(e.target.value)} name="spol" value="Žensko" className="app-check"></input>
                                        <label>Žensko</label>
                                    </div>
                                </div>

                                </div>
                         </div>
                         
                         <div className="card-footer"> 
                         <button type="submit" className="btn btn-primary">Registruj se</button> <a> </a>


                         <a className="btn btn-danger"> Nazad</a>

                         </div>
                        </div>
                    </form>
                </div>
                <div>
                 
                </div>
            </div>
    );
}
export default Register;
