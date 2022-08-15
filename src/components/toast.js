import toast from 'react-hot-toast'

export const Success = (message) => toast.success(message)
export const Failure = (message) => toast.error(message)

