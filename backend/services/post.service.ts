import { Post } from '../models/Post'
import type { IPost } from '../models/Post'

const getAll = () => Post.find()

const getById = (id: string) => Post.findById(id)

const create = async (data: IPost): Promise<IPost> => {
  const post = await Post.create(data)
  return post
}

const updateById = async (id: string, data: Partial<IPost>): Promise<IPost | null> =>
  Post.findOneAndUpdate({ _id: id }, data, { new: true })

const deleteById = async (id: string): Promise<IPost | null> =>
  Post.findByIdAndDelete(id)

export { getAll, getById, create, updateById, deleteById }
