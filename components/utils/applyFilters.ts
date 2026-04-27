
export function makeUrLQuery(params){

  const nonEmptyValues= Object.fromEntries(Object.entries(params).filter(([Key,val])=>val!=="" || val!==null))

 return new URLSearchParams(nonEmptyValues).toString();

}

