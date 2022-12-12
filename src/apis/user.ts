import { customAxios } from "./customAxios";

const login = (acct_id: string, password: string) => {
  const params = {
    acct_id: acct_id,
    password: password
  }
  return customAxios.post('/user', { params })
}

const updateUserInfo = (user: {}) => {
  return customAxios.patch('/user', { user })
}

const deleteUserInfo = (acct_id: string, password: string) => {
  const params = {
    acct_id: acct_id,
    password: password
  }
  return customAxios.delete('/user', { params })
}

export { login, updateUserInfo, deleteUserInfo }; 