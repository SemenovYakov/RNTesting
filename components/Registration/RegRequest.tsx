import {IUser} from '../interfaces';

export async function Registrate(values: IUser) {
  const response = await fetch('http://192.168.1.138:3000/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(values),
  });
  const result = await response.json();
  console.log(result.token);
}
