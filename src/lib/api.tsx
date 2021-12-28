export async function getData(): Promise<object> {
  const res = await fetch('/data.json');
  const data = await res.json()

  if(!res.ok) throw new Error(data.message || 'Something went wrong!')
 /*  const transformedData = [];

  for (const key in data) {
    const dataObj = {
      ...data[key]
    }
    transformedData.push(dataObj)
  }
  
   */
  return data;
}
