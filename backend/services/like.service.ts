import { Like } from '../models/Like'
import type { ILike } from '../models/Like'

const getAll = () => Like.find().populate('user', 'username email').populate('post').populate('comment')

const getById = (id: string) => 
  Like.findById(id).populate('user', 'username email').populate('post').populate('comment')

const create = async (data: Omit<ILike, 'createdAt'>): Promise<ILike> => {
  const like = await Like.create(data)
  return like.populate('user', 'username email')
}

const updateById = async (id: string, data: Partial<ILike>): Promise<ILike | null> =>
  Like.findOneAndUpdate({ _id: id }, data, { new: true })
    .populate('user', 'username email')
    .populate('post')
    .populate('comment')

const deleteById = async (id: string): Promise<ILike | null> =>
  Like.findByIdAndDelete(id)

export { getAll, getById, create, updateById, deleteById }
