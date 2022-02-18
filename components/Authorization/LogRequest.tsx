import {ILogin} from '../interfaces';

export async function Authorization(values: ILogin) {
  await fetch('http://192.168.1.138:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(values),
  });
}
