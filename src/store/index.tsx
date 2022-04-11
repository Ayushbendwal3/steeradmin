import { makeAutoObservable } from 'mobx'
import { createContext, useContext } from 'react'

export enum Role {
  'staff',
  'provider',
  'officeAdmin',
  'superAdmin',
}

interface IUser {
  firstName: string
  lastName: string
  email: string
  title: string
  phoneNo: string
  npi: string
  role: Role
  Organization: string
  globalRole: string
}

class UsersStore {
  users: Array<IUser> = []

  constructor() {
    makeAutoObservable(this)
  }

  addUser(user: IUser) {
    this.users.push(user)
  }

  get totalUsers() {
    return this.users.length
  }

  get allUsers() {
    return this.users
  }
}

const StoreContext = createContext<UsersStore>(new UsersStore())

const StoreProvider: React.FC<{ store: UsersStore }> = ({
  store,
  children,
}) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>

const useStore = () => {
  return useContext(StoreContext)
}

export { UsersStore, StoreProvider, useStore }
