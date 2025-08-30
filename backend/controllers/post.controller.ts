import { Request, Response } from 'express'
import * as postService from '../services/post.service'

export const getAllPosts = async (req: Request, res: Response) => {
  const data = await postService.getAll()
  res.json(data)
}

export const getPostById = async (req: Request, res: Response) => {
  const data = await postService.getById(req.params.id || '')
  if (!data) return res.status(404).json({ message: 'Not found' })
  res.json(data)
}

export const createPost = async (req: Request, res: Response) => {
  const data = await postService.create(req.body.message)
  res.status(201).json(data)
}

export const updatePost = async (req: Request, res: Response) => {
  const data = await postService.updateById(req.params.id || '', req.body.message)
  if (!data) return res.status(404).json({ message: 'Not found' })
  res.json(data)
}

export const deletePost = async (req: Request, res: Response) => {
  const data = await postService.deleteById(req.params.id || '')
  if (!data) return res.status(404).json({ message: 'Not found' })
  res.json({ message: 'Deleted successfully' })
}
