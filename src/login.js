import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');

  const usenavigate=useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      //console.log('proceed login');
      fetch("http://localhost:3001/user/" + username).then((response) => {
        return response.json();
      }).then((response) => {

        //console.log(response);
        if (Object.keys(response).length === 0) {
          toast.error('Unesite validno korisničko ime!');
          return;
        } else {
          if (response.password === password) {
            toast.success('Uspješno ste se prijavili!');
            sessionStorage.setItem('username', username);
            usenavigate('/');

          }else{
            toast.error('Unesite validne podatke');
          }
        }

        }).catch((error) => {
          toast.error('Pogrešno korisničko ime ili šifra!');
        });


    }
  }
  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning('Molim vas unesite korisničko ime!');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Molim vas unesite šifru!');
    }
    return result;
  }

  return (
    <div className='row'>
      <div className='offset-lg-3 col-lg-6'>
        <form onSubmit={ProceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Korisničko ime <span className='errmsg'>*</span></label>
                <input value={username} onChange={e => usernameupdate(e.target.value)} className='form-control'></input>
              </div>
              <div className="form-group">
                <label> Šifra <span className='errmsg'>*</span></label>
                <input type='password' value={password} onChange={e => passwordupdate(e.target.value)} className='form-control'></input>
              </div>
            </div>
            <div className='card-footer'>
              <button type="submit" className='btn btn-primary'>Prijava</button> <a> </a>
              <Link className="btn btn-success" to={'/register'}>Novi Korisnik </Link>

            </div>
          </div>
        </form>
      </div>
    </div>

  );
}
export default Login;