export default function(date){
  return (new Date().getFullYear() - date.getFullYear()) === 0
}