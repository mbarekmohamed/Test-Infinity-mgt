import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private REST_API_SERVER = "http://127.0.0.1:8000/restapi/";



  constructor(private httpClient: HttpClient) { }
  public setTest(value: any) {

  }
  public getAllCandidats(){
    return this.httpClient.get(this.REST_API_SERVER+"candidats-table/");
  }


  public updateEtat(etat){
    let params = new HttpParams();
    params = params.append('etat',etat);
    return this.httpClient.get(this.REST_API_SERVER+"candidats-table/?",{params:params});
  }

  public getAllChartDetails(nom,prenom,email,date,tel,disp,exp,cv,msg){
    let params = new HttpParams();
    params = params.append('nom',nom);
    params = params.append('prenom',prenom);
    params = params.append('email',email);
    params = params.append('date',date);
    params = params.append('tel',tel);
    params = params.append('disp',disp);
    params = params.append('exp',exp);
    params = params.append('cv',cv);
    params = params.append('msg',msg);
    return this.httpClient.get(this.REST_API_SERVER+"save/?",{params:params});
  }


}
