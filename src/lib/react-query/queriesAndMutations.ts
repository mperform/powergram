import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery
} from '@tanstack/react-query'
import { createUserAccount, signInAccount } from '../appwrite/api'
import { INewUser } from '@/types'

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)//initalized a new mutation function to use in the signup form
    })
}

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: {email: string; password: string;
        }) => signInAccount(user)//initalized a new mutation function to use in the signup form
    })
}