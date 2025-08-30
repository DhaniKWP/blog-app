import { Request, Response } from 'express'
import * as likeService from '../services/like.service'

export const getAllLikes = async (req: Request, res: Response) => {
  const data = await likeService.getAll()
  res.json(data)
}

export const getLikeById = async (req: Request, res: Response) => {
  const data = await likeService.getById(req.params.id || '')
  if (!data) return res.status(404).json({ message: 'Not found' })
  res.json(data)
}

export const createLike = async (req: Request, res: Response) => {
  const data = await likeService.create(req.body.message)
  res.status(201).json(data)
}

export const updateLike = async (req: Request, res: Response) => {
  const data = await likeService.updateById(req.params.id || '', req.body.message)
  if (!data) return res.status(404).json({ message: 'Not found' })
  res.json(data)
}

export const deleteLike = async (req: Request, res: Response) => {
  const data = await likeService.deleteById(req.params.id || '')
  if (!data) return res.status(404).json({ message: 'Not found' })
  res.json({ message: 'Deleted successfully' })
}
