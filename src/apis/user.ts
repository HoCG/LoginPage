import { customAxios } from "./customAxios";

const login = (email: string, password: string) => {
  return customAxios.post('/auth/login', {
    email: email,
    password: password
  })
}

const join = (email: string, nick: string, password: string) => {
  return customAxios.post('/auth/join', {
    email: email,
    nick: nick,
    password: password
  })
}

const updateUserInfo = (user: {}) => {
  return customAxios.patch('/user', { user })
}

const deleteUserInfo = (email: string, password: string) => {
  const params = {
    email: email,
    password: password
  }
  return customAxios.delete('/user', { params })
}

export { login, join, updateUserInfo, deleteUserInfo }; 