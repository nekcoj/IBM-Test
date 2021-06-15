export default function OptionsHandler() {
  const url = 'http://localhost:3000/api';
  

  async function getOptions(){
    return await(await (await fetch(`${url}/options`)).json());
  }

  return { getOptions }
}