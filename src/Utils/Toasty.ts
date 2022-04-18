/* eslint-disable @typescript-eslint/no-useless-constructor */
import { toast, TypeOptions } from 'react-toastify';

export interface IUpateToasty{
  id: any;
  message: string;
  type: TypeOptions; 
}

export default class Toasty {
  constructor() {
    
  }
    
  public static getToasty() {
    return toast;
  }

  public static loading(message:string){
    return toast.loading(`${message}`);
  }
  
  public static update({id, message, type}:IUpateToasty) {
    toast.update(id, {
       render: `${message}`,
       type: type as TypeOptions,
       position: "top-right",
       isLoading: false,
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
    }); 
  }


  public static infor(message:string = '') {
    toast.info(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  
  public static success(message:string = '') {
    toast.success(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  
  public static warn(message:string = '') {
    toast.warn(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  
  public static error(message:string = '') {
    toast.error(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  
  public static default(message:string = '') {
    toast(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  } 
  
}
