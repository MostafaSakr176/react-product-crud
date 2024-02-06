interface IProps {
  msg:string
}

const ErrorMsg = ({msg}:IProps) => {
  return  msg ? <span className="block text-red-600 text-sm font-semibold">{msg}</span> : null
  
}

export default ErrorMsg